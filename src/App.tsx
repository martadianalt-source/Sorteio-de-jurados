import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { JurorTable } from './components/JurorTable';
import { ResultTables } from './components/ResultTables';
import { LateralControls } from './components/LateralControls';
import { ImportModal } from './components/ImportModal';
import { AuditLogModal } from './components/AuditLogModal';
import { ConfigModal } from './components/ConfigModal';
import { PrintAtaView } from './components/PrintAtaView';
import { SavedListsModal } from './components/SavedListsModal';
import { TjalComarcaSelectorModal } from './components/TjalComarcaSelectorModal';
import { TjalAuthGate } from './components/TjalAuthGate';
import { INITIAL_JURORS, DEFAULT_COMARCA_INFO } from './data/initialJurors';
import { Juror, DrawnJuror, DrawSession, AuditLogEntry, ComarcaInfo, SavedJurorList, TjalAuthUser } from './types';
import { secureShuffle, sha256 } from './utils/crypto';
import { formatAtaText, exportToExcel } from './utils/exporter';
import { AlertCircle, CheckCircle2, Lock, Shield, Sparkles } from 'lucide-react';

const STORAGE_KEY_AUTH = 'tjal_authenticated_user_v1';
const STORAGE_KEY_LISTS = 'tribunal_saved_juror_lists_tapera';
const STORAGE_KEY_ACTIVE = 'tribunal_active_juror_list_info';
const STORAGE_KEY_COMARCA = 'tribunal_comarca_info_tapera';
const STORAGE_KEY_OFFICIAL_LIST_PREFIX = 'tjal_official_juror_list_';

export function getVaraListStorageKey(comarca: string, vara: string): string {
  const c = (comarca || 'comarca').toLowerCase().trim().replace(/[^a-z0-9]/g, '_');
  const v = (vara || 'vara').toLowerCase().trim().replace(/[^a-z0-9]/g, '_');
  return `${STORAGE_KEY_OFFICIAL_LIST_PREFIX}${c}__${v}`;
}

function loadOfficialListForVara(comarca: string, vara: string): { jurors: Juror[]; list: SavedJurorList } {
  const key = getVaraListStorageKey(comarca, vara);
  try {
    const raw = localStorage.getItem(key);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.jurors) && parsed.jurors.length > 0) {
        return { jurors: parsed.jurors, list: parsed };
      }
    }
  } catch (e) {
    console.error('Erro ao ler lista oficial da vara', e);
  }

  // Check legacy saved list if present
  try {
    const legacy = localStorage.getItem(STORAGE_KEY_LISTS);
    if (legacy) {
      const parsedLegacy = JSON.parse(legacy);
      if (Array.isArray(parsedLegacy) && parsedLegacy.length > 0) {
        const match = parsedLegacy.find((l: SavedJurorList) =>
          (l.comarca && comarca && l.comarca.toLowerCase().includes(comarca.toLowerCase())) ||
          (l.vara && vara && l.vara.toLowerCase().includes(vara.toLowerCase()))
        ) || parsedLegacy[0];

        if (match && Array.isArray(match.jurors) && match.jurors.length > 0) {
          const now = new Date().toISOString();
          const migratedList: SavedJurorList = {
            id: `official-${key}`,
            name: `Lista Oficial de Jurados - ${vara}`,
            createdAt: match.createdAt || now,
            updatedAt: match.updatedAt || now,
            jurors: match.jurors,
            comarca,
            vara,
          };
          try {
            localStorage.setItem(key, JSON.stringify(migratedList));
          } catch {}
          return { jurors: migratedList.jurors, list: migratedList };
        }
      }
    }
  } catch {}

  // Fallback: If initial Comarca is Tapera, load INITIAL_JURORS
  const now = new Date().toISOString();
  const isTapera = (comarca || '').toLowerCase().includes('tapera');
  const defaultJurors = isTapera ? INITIAL_JURORS : [];
  const defaultList: SavedJurorList = {
    id: `official-${key}`,
    name: `Lista Oficial de Jurados - ${vara}`,
    createdAt: now,
    updatedAt: now,
    jurors: defaultJurors,
    comarca,
    vara,
  };
  try {
    localStorage.setItem(key, JSON.stringify(defaultList));
  } catch {}
  return { jurors: defaultJurors, list: defaultList };
}

function getAllOfficialLists(): SavedJurorList[] {
  const lists: SavedJurorList[] = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(STORAGE_KEY_OFFICIAL_LIST_PREFIX)) {
        const raw = localStorage.getItem(k);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && Array.isArray(parsed.jurors)) {
            lists.push(parsed);
          }
        }
      }
    }
  } catch {}

  // Merge any legacy lists not yet migrated
  try {
    const legacy = localStorage.getItem(STORAGE_KEY_LISTS);
    if (legacy) {
      const parsedLegacy = JSON.parse(legacy);
      if (Array.isArray(parsedLegacy)) {
        parsedLegacy.forEach((item) => {
          if (!lists.some((l) => l.id === item.id || (l.vara === item.vara && l.comarca === item.comarca))) {
            lists.push(item);
          }
        });
      }
    }
  } catch {}

  return lists;
}

function getStoredComarcaInfo(): ComarcaInfo {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_COMARCA);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.juizPresidente?.includes('ELIELSON DOS SANTOS PEREIRA') || parsed.juizPresidente?.startsWith('Dr.')) {
        parsed.juizPresidente = 'Elielson dos Santos Pereira';
      }
      if (parsed.servidorNome?.includes('M98240')) {
        parsed.servidorNome = 'Marta Diana Lucindo Tenório';
        parsed.chefeSecretaria = 'Marta Diana Lucindo Tenório';
      }
      if (parsed.cidadeUf === 'Sao Jose da Tapera-AL') {
        parsed.cidadeUf = 'São José da Tapera-AL';
      }
      return { ...DEFAULT_COMARCA_INFO, ...parsed };
    }
  } catch (e) {
    console.error('Error reading stored comarca info', e);
  }
  return DEFAULT_COMARCA_INFO;
}

export default function App() {
  const [authUser, setAuthUser] = useState<TjalAuthUser | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_AUTH);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.email && parsed.email.endsWith('@tjal.jus.br')) {
          return parsed;
        }
      }
    } catch {}
    return null;
  });

  const [comarcaInfo, setComarcaInfo] = useState<ComarcaInfo>(getStoredComarcaInfo);

  // Load the official list for the selected Vara
  const [jurors, setJurors] = useState<Juror[]>(() => {
    const initialList = loadOfficialListForVara(comarcaInfo.comarca, comarcaInfo.vara);
    return initialList.jurors;
  });

  const [session, setSession] = useState<DrawSession | null>(null);
  const [auditLogs, setAuditLogs] = useState<AuditLogEntry[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'info' | 'error'; text: string } | null>(null);
  const [isTjalComarcaModalOpen, setIsTjalComarcaModalOpen] = useState(false);

  // List Management strictly maintaining ONE official list per Vara
  const [savedLists, setSavedLists] = useState<SavedJurorList[]>(() => {
    const all = getAllOfficialLists();
    if (all.length > 0) return all;
    const initial = loadOfficialListForVara(comarcaInfo.comarca, comarcaInfo.vara);
    return [initial.list];
  });

  const [activeListId, setActiveListId] = useState<string | null>(() => {
    const initial = loadOfficialListForVara(comarcaInfo.comarca, comarcaInfo.vara);
    return initial.list.id;
  });

  const [activeListName, setActiveListName] = useState<string>(() => {
    const initial = loadOfficialListForVara(comarcaInfo.comarca, comarcaInfo.vara);
    return initial.list.name;
  });

  const [activeListCreatedAt, setActiveListCreatedAt] = useState<string | undefined>(() => {
    const initial = loadOfficialListForVara(comarcaInfo.comarca, comarcaInfo.vara);
    return initial.list.createdAt;
  });

  const [activeListUpdatedAt, setActiveListUpdatedAt] = useState<string | undefined>(() => {
    const initial = loadOfficialListForVara(comarcaInfo.comarca, comarcaInfo.vara);
    return initial.list.updatedAt;
  });

  // Modals state
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isSavedListsOpen, setIsSavedListsOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isPrintOpen, setIsPrintOpen] = useState(false);
  const [printInitialTab, setPrintInitialTab] = useState<'edit' | 'preview' | 'model'>('edit');

  // Initialize initial audit log entry on mount
  useEffect(() => {
    async function initAudit() {
      const initialTimestamp = new Date().toISOString();
      const genesisHash = await sha256(`GENESIS-${initialTimestamp}-${jurors.length}`);
      const genesisEntry: AuditLogEntry = {
        id: 'log-genesis',
        timestamp: initialTimestamp,
        action: 'IMPORT_JURORS',
        description:
          jurors.length === 0
            ? 'Sistema inicializado na Comarca de São José da Tapera (Vara do Único Ofício). Aguardando inclusão da lista de jurados.'
            : `Sistema inicializado com lista de ${jurors.length} jurados cadastrados na Comarca de São José da Tapera.`,
        details: { initialPoolCount: jurors.length, comarca: 'São José da Tapera' },
        previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
        hash: genesisHash,
      };
      setAuditLogs([genesisEntry]);
    }
    initAudit();
  }, []);

  // Helper to append a cryptographically chained audit log
  const appendAuditLog = useCallback(
    async (
      action: AuditLogEntry['action'],
      description: string,
      details?: Record<string, any>
    ) => {
      const timestamp = new Date().toISOString();
      const lastEntry = auditLogs[0];
      const previousHash = lastEntry ? lastEntry.hash : '0000000000000000000000000000000000000000000000000000000000000000';
      const hashPayload = `${previousHash}|${timestamp}|${action}|${JSON.stringify(details || {})}`;
      const entryHash = await sha256(hashPayload);

      const newEntry: AuditLogEntry = {
        id: `log-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        timestamp,
        action,
        description,
        details,
        previousHash,
        hash: entryHash,
      };

      setAuditLogs((prev) => [newEntry, ...prev]);
    },
    [auditLogs]
  );

  const showToast = (type: 'success' | 'info' | 'error', text: string) => {
    setToastMessage({ type, text });
    setTimeout(() => {
      setToastMessage((current) => (current?.text === text ? null : current));
    }, 4000);
  };

  // 1. FAZER NOVO SORTEIO
  const handleDraw = async () => {
    if (session?.isFrozen) {
      showToast('error', 'Os resultados estão congelados. Desfaça os comandos para realizar novo sorteio.');
      return;
    }

    if (jurors.length < 35) {
      showToast('error', `São necessários no mínimo 35 jurados (25 titulares e 10 suplentes). Atualmente há ${jurors.length}.`);
      return;
    }

    setIsDrawing(true);

    // Subtle sound or animation delay for transparent live feel
    setTimeout(async () => {
      const { shuffled, seed } = secureShuffle<Juror>(jurors);
      const timestamp = new Date().toISOString();

      const titularPool: Juror[] = shuffled.slice(0, 25);
      const suplentePool: Juror[] = shuffled.slice(25, 35);

      const titulares: DrawnJuror[] = titularPool.map((j, idx) => ({
        id: j.id,
        name: j.name,
        qualification: j.qualification,
        notes: j.notes,
        drawOrder: idx + 1,
        type: 'titular',
        drawnAt: timestamp,
      }));

      const suplentes: DrawnJuror[] = suplentePool.map((j, idx) => ({
        id: j.id,
        name: j.name,
        qualification: j.qualification,
        notes: j.notes,
        drawOrder: idx + 1,
        type: 'suplente',
        drawnAt: timestamp,
      }));

      // Hash of draw outcome
      const outcomePayload = `DRAW-${timestamp}-${seed}-${titulares.map((t) => t.id).join(',')}-${suplentes.map((s) => s.id).join(',')}`;
      const drawHash = await sha256(outcomePayload);

      const newSession: DrawSession = {
        id: `draw-${Date.now()}`,
        timestamp,
        seed,
        hash: drawHash,
        totalPoolCount: jurors.length,
        titulares,
        suplentes,
        isFrozen: false,
      };

      setSession(newSession);
      setIsDrawing(false);

      // Trigger celebratory confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0f172a', '#334155', '#3b82f6', '#10b981'],
      });

      await appendAuditLog('DRAW_PERFORMED', 'Sorteio simultâneo realizado: 25 jurados titulares e 10 suplentes selecionados via CSPRNG.', {
        seed,
        drawHash,
        titularesCount: titulares.length,
        suplentesCount: suplentes.length,
        poolCount: jurors.length,
      });

      showToast('success', 'Sorteio realizado com sucesso! 25 titulares e 10 suplentes definidos.');
    }, 600);
  };

  // 2. CONGELAR RESULTADOS
  const handleFreeze = async () => {
    if (!session) {
      showToast('info', 'Realize o sorteio antes de congelar os resultados.');
      return;
    }

    if (session.isFrozen) {
      showToast('info', 'Os resultados já estão congelados.');
      return;
    }

    const frozenAt = new Date().toISOString();
    const updatedSession: DrawSession = {
      ...session,
      isFrozen: true,
      frozenAt,
    };

    setSession(updatedSession);

    await appendAuditLog('RESULTS_FROZEN', 'Resultados homologados e congelados pelo usuário. Novos sorteios bloqueados.', {
      drawHash: session.hash,
      frozenAt,
    });

    showToast('success', 'Resultados congelados! O botão de novo sorteio foi bloqueado.');
  };

  // 3. COPIAR DADOS (CTRL+C) E GERAR ATA (.DOC)
  const handleCopy = useCallback(async () => {
    if (!session || session.titulares.length === 0) {
      showToast('info', 'Nenhum resultado disponível para cópia. Realize o sorteio primeiro.');
      return;
    }

    const poolCount = jurors.length > 0 ? jurors.length : (session?.totalPoolCount || 0);

    const ataText = formatAtaText(
      comarcaInfo,
      session.titulares,
      session.suplentes,
      session.hash,
      session.timestamp,
      poolCount
    );

    try {
      await navigator.clipboard.writeText(ataText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);

      await appendAuditLog('DATA_COPIED', 'Ata oficial copiada para a área de transferência. Abrindo editor e opções do documento.', {
        drawHash: session.hash,
        charCount: ataText.length,
      });

      showToast('success', 'Ata copiada para a área de transferência! Abrindo opções do documento...');
    } catch {
      showToast('info', 'Abrindo opções e editor da Ata de Sorteio...');
    }

    // Abre a aba de edição da Ata para visualização, ajustes, cópia para o sistema processual e download (.doc / .pdf)
    setPrintInitialTab('edit');
    setIsPrintOpen(true);
  }, [session, comarcaInfo, jurors.length, appendAuditLog]);

  // 4. DESFAZER TODOS OS COMANDOS ANTERIORES
  const handleReset = async () => {
    if (!session) {
      showToast('info', 'Não há sorteios ou comandos ativos para desfazer.');
      return;
    }

    const previousHash = session.hash;
    setSession(null);

    await appendAuditLog('RESET_ALL', 'Comandos anteriores desfeitos. Sorteio cancelado e sistema liberado para nova rodada.', {
      cancelledDrawHash: previousHash,
    });

    showToast('info', 'Comandos desfeitos. O sistema está pronto para realizar um novo sorteio.');
  };

  // Global Ctrl+C handler for quick copying
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl+C or Cmd+C
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
        const activeElement = document.activeElement;
        const isInputFocused =
          activeElement instanceof HTMLInputElement ||
          activeElement instanceof HTMLTextAreaElement ||
          activeElement?.getAttribute('contenteditable') === 'true';

        // Only hijack if user isn't copying selected text inside an input
        const selectedText = window.getSelection()?.toString();
        if (!isInputFocused && !selectedText && session) {
          e.preventDefault();
          handleCopy();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCopy, session]);

  // TJAL Authentication Handlers
  const handleLoginSuccess = (user: TjalAuthUser) => {
    setAuthUser(user);
    try {
      localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(user));
    } catch {}
    showToast('success', `Bem-vindo(a), ${user.name}! Autenticado com sucesso.`);
    appendAuditLog('USER_LOGIN', `Acesso autenticado com conta institucional Google (@tjal.jus.br): ${user.email} (${user.name}).`, {
      email: user.email,
      domain: user.domain,
    });
  };

  const handleLogout = () => {
    if (authUser) {
      appendAuditLog('USER_LOGOUT', `Logout do usuário ${authUser.email}.`);
    }
    setAuthUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY_AUTH);
    } catch {}
    showToast('info', 'Sessão institucional finalizada.');
  };

  // Juror Pool Management & List Persistence (1 Official List per Vara)
  const handleAddJuror = async (name: string, qualification: string) => {
    const newJuror: Juror = {
      id: `juror-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name,
      qualification,
    };
    const now = new Date().toISOString();
    const updatedJurors = [newJuror, ...jurors];
    setJurors(updatedJurors);
    setActiveListUpdatedAt(now);

    const key = getVaraListStorageKey(comarcaInfo.comarca, comarcaInfo.vara);
    const officialList: SavedJurorList = {
      id: activeListId || `official-${key}`,
      name: activeListName || `Lista Oficial de Jurados - ${comarcaInfo.vara}`,
      createdAt: activeListCreatedAt || now,
      updatedAt: now,
      jurors: updatedJurors,
      comarca: comarcaInfo.comarca,
      vara: comarcaInfo.vara,
    };
    try {
      localStorage.setItem(key, JSON.stringify(officialList));
    } catch {}
    setSavedLists(getAllOfficialLists());

    await appendAuditLog('EDIT_JUROR', `Jurado adicionado manualmente: ${name} (${qualification}).`, {
      name,
      qualification,
    });
    showToast('success', `Jurado "${name}" adicionado à Lista Oficial da ${comarcaInfo.vara}.`);
  };

  const handleRemoveJuror = async (id: string) => {
    const target = jurors.find((j) => j.id === id);
    if (!target) return;

    if (session?.isFrozen) {
      showToast('error', 'Não é permitido remover jurados com o sorteio congelado.');
      return;
    }

    const now = new Date().toISOString();
    const updatedJurors = jurors.filter((j) => j.id !== id);
    setJurors(updatedJurors);
    setActiveListUpdatedAt(now);

    const key = getVaraListStorageKey(comarcaInfo.comarca, comarcaInfo.vara);
    const officialList: SavedJurorList = {
      id: activeListId || `official-${key}`,
      name: activeListName || `Lista Oficial de Jurados - ${comarcaInfo.vara}`,
      createdAt: activeListCreatedAt || now,
      updatedAt: now,
      jurors: updatedJurors,
      comarca: comarcaInfo.comarca,
      vara: comarcaInfo.vara,
    };
    try {
      localStorage.setItem(key, JSON.stringify(officialList));
    } catch {}
    setSavedLists(getAllOfficialLists());

    await appendAuditLog('REMOVE_JUROR', `Jurado removido da lista oficial: ${target.name}.`, {
      id,
      name: target.name,
    });
  };

  const handleImportJurors = async (
    newJurors: Juror[],
    mode: 'replace' | 'append',
    _saveListName?: string
  ) => {
    if (session?.isFrozen) {
      showToast('error', 'Desfaça o congelamento antes de alterar a lista de jurados.');
      return;
    }

    const key = getVaraListStorageKey(comarcaInfo.comarca, comarcaInfo.vara);
    const now = new Date().toISOString();
    let finalList: Juror[] = [];

    // Ensure each juror entry has a guaranteed unique ID without filtering out homonyms
    const sanitizedNewJurors = newJurors.map((j, idx) => ({
      ...j,
      id: `juror-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 6)}`,
    }));

    if (mode === 'replace') {
      finalList = sanitizedNewJurors;
      setJurors(sanitizedNewJurors);
      setSession(null);
      await appendAuditLog('REPLACE_OFFICIAL_LIST', `Lista Oficial da ${comarcaInfo.vara} substituída por nova lista com ${sanitizedNewJurors.length} jurados.`, {
        count: sanitizedNewJurors.length,
        comarca: comarcaInfo.comarca,
        vara: comarcaInfo.vara,
      });
      showToast('success', `Lista Oficial da ${comarcaInfo.vara} substituída com sucesso! ${sanitizedNewJurors.length} jurados aptos.`);
    } else {
      finalList = [...jurors, ...sanitizedNewJurors];
      setJurors(finalList);
      await appendAuditLog('IMPORT_JURORS', `${sanitizedNewJurors.length} novos jurados adicionados à Lista Oficial da ${comarcaInfo.vara}. Total agora: ${finalList.length}.`, {
        addedCount: sanitizedNewJurors.length,
        totalNow: finalList.length,
        vara: comarcaInfo.vara,
      });
      showToast('success', `${sanitizedNewJurors.length} jurados adicionados à Lista Oficial da ${comarcaInfo.vara}. Total: ${finalList.length} jurados aptos.`);
    }

    // Persist as the ONE official list for this Vara
    const officialList: SavedJurorList = {
      id: `official-${key}`,
      name: `Lista Oficial de Jurados - ${comarcaInfo.vara}`,
      createdAt: activeListCreatedAt || now,
      updatedAt: now,
      jurors: finalList,
      comarca: comarcaInfo.comarca,
      vara: comarcaInfo.vara,
    };

    try {
      localStorage.setItem(key, JSON.stringify(officialList));
    } catch (e) {
      console.error('Erro ao persistir lista oficial da Vara', e);
    }

    setActiveListId(officialList.id);
    setActiveListName(officialList.name);
    setActiveListUpdatedAt(now);
    setSavedLists(getAllOfficialLists());
  };

  const handleSaveCurrentList = (_name?: string, customComarca?: string, customVara?: string) => {
    const listComarca = customComarca || comarcaInfo.comarca;
    const listVara = customVara || comarcaInfo.vara;
    const key = getVaraListStorageKey(listComarca, listVara);
    const now = new Date().toISOString();

    const officialList: SavedJurorList = {
      id: `official-${key}`,
      name: `Lista Oficial de Jurados - ${listVara}`,
      createdAt: activeListCreatedAt || now,
      updatedAt: now,
      jurors,
      comarca: listComarca,
      vara: listVara,
    };

    try {
      localStorage.setItem(key, JSON.stringify(officialList));
    } catch (e) {
      console.error('Erro ao salvar lista oficial da Vara', e);
    }

    setActiveListId(officialList.id);
    setActiveListName(officialList.name);
    setActiveListUpdatedAt(now);
    setSavedLists(getAllOfficialLists());
    showToast('success', `Lista Oficial vinculada à ${listVara} preservada com ${jurors.length} jurados aptos para os próximos sorteios.`);
  };

  const handleUpdateExistingList = (id: string, newName?: string) => {
    const now = new Date().toISOString();
    const key = getVaraListStorageKey(comarcaInfo.comarca, comarcaInfo.vara);

    const officialList: SavedJurorList = {
      id: id || `official-${key}`,
      name: newName || activeListName || `Lista Oficial de Jurados - ${comarcaInfo.vara}`,
      createdAt: activeListCreatedAt || now,
      updatedAt: now,
      jurors,
      comarca: comarcaInfo.comarca,
      vara: comarcaInfo.vara,
    };

    try {
      localStorage.setItem(key, JSON.stringify(officialList));
    } catch {}

    setActiveListUpdatedAt(now);
    if (newName) setActiveListName(newName);
    setSavedLists(getAllOfficialLists());
    showToast('success', 'Lista Oficial e data de modificação atualizadas com sucesso.');
  };

  const handleLoadList = (list: SavedJurorList) => {
    if (session?.isFrozen) {
      showToast('error', 'Desfaça o congelamento do sorteio antes de carregar outra lista.');
      return;
    }
    setJurors(list.jurors);
    setSession(null);

    const key = getVaraListStorageKey(comarcaInfo.comarca, comarcaInfo.vara);
    const now = new Date().toISOString();
    const updatedOfficial: SavedJurorList = {
      id: `official-${key}`,
      name: `Lista Oficial de Jurados - ${comarcaInfo.vara}`,
      createdAt: list.createdAt || now,
      updatedAt: now,
      jurors: list.jurors,
      comarca: comarcaInfo.comarca,
      vara: comarcaInfo.vara,
    };

    try {
      localStorage.setItem(key, JSON.stringify(updatedOfficial));
    } catch {}

    setActiveListId(updatedOfficial.id);
    setActiveListName(updatedOfficial.name);
    setActiveListCreatedAt(updatedOfficial.createdAt);
    setActiveListUpdatedAt(now);
    setSavedLists(getAllOfficialLists());
    showToast('success', `Lista carregada como Lista Oficial da ${comarcaInfo.vara} com ${list.jurors.length} jurados aptos.`);
  };

  // Substitui ou inclui jurados preservando todos os registros sem perder homônimos (438 jurados)
  const handleAppendJurorsFromList = async (list: SavedJurorList) => {
    if (session?.isFrozen) {
      showToast('error', 'Desfaça o congelamento do sorteio antes de alterar a lista de jurados.');
      return;
    }

    // Preserve all entries with unique IDs (do not drop homonyms!)
    const newJurorsToAdd: Juror[] = list.jurors.map((j, idx) => ({
      ...j,
      id: `juror-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 6)}`,
    }));

    // If current jurors list is empty or matches initial mock, use full list
    let finalList: Juror[] = [];
    if (jurors.length === 0 || activeListId === 'initial-list-tapera') {
      finalList = newJurorsToAdd;
    } else {
      finalList = [...jurors, ...newJurorsToAdd];
    }

    setJurors(finalList);
    setSession(null);

    const key = getVaraListStorageKey(comarcaInfo.comarca, comarcaInfo.vara);
    const now = new Date().toISOString();
    const updatedOfficial: SavedJurorList = {
      id: `official-${key}`,
      name: `Lista Oficial de Jurados - ${comarcaInfo.vara}`,
      createdAt: activeListCreatedAt || now,
      updatedAt: now,
      jurors: finalList,
      comarca: comarcaInfo.comarca,
      vara: comarcaInfo.vara,
    };

    try {
      localStorage.setItem(key, JSON.stringify(updatedOfficial));
    } catch {}

    setActiveListId(updatedOfficial.id);
    setActiveListName(updatedOfficial.name);
    setActiveListUpdatedAt(now);
    setSavedLists(getAllOfficialLists());

    await appendAuditLog(
      'IMPORT_JURORS',
      `${list.jurors.length} jurados da lista "${list.name}" carregados na Lista Oficial da ${comarcaInfo.vara}. Total de aptos: ${finalList.length}.`,
      {
        sourceListName: list.name,
        count: list.jurors.length,
        totalCount: finalList.length,
      }
    );

    showToast('success', `${list.jurors.length} jurados carregados com sucesso! Total: ${finalList.length} jurados aptos.`);
  };

  const handleDeleteList = (id: string) => {
    // Under the 1-list-per-Vara rule, clearing resets to empty list for that Vara
    const key = getVaraListStorageKey(comarcaInfo.comarca, comarcaInfo.vara);
    try {
      localStorage.removeItem(key);
    } catch {}

    setJurors([]);
    setSession(null);
    setActiveListId(null);
    setActiveListName(`Lista da ${comarcaInfo.vara} (Vazia)`);
    setSavedLists(getAllOfficialLists());
    showToast('info', `Lista da ${comarcaInfo.vara} limpa. Importe uma nova lista oficial.`);
  };

  const handleExportExcel = () => {
    exportToExcel(
      jurors,
      session?.titulares || [],
      session?.suplentes || [],
      comarcaInfo,
      auditLogs,
      session?.hash
    );
    showToast('success', 'Planilha Excel gerada e transferida para download.');
  };

  const handleUpdateComarcaInfo = useCallback(
    (newInfo: ComarcaInfo) => {
      const oldVaraKey = getVaraListStorageKey(comarcaInfo.comarca, comarcaInfo.vara);
      const newVaraKey = getVaraListStorageKey(newInfo.comarca, newInfo.vara);

      setComarcaInfo(newInfo);
      try {
        localStorage.setItem(STORAGE_KEY_COMARCA, JSON.stringify(newInfo));
      } catch (e) {
        console.error('Error saving comarca info', e);
      }

      // Seamlessly switch official list to newly selected Vara without page reload
      if (oldVaraKey !== newVaraKey) {
        const { jurors: varaJurors, list: varaList } = loadOfficialListForVara(newInfo.comarca, newInfo.vara);
        setJurors(varaJurors);
        setSession(null);
        setActiveListId(varaList.id);
        setActiveListName(varaList.name);
        setActiveListCreatedAt(varaList.createdAt);
        setActiveListUpdatedAt(varaList.updatedAt);
        setSavedLists(getAllOfficialLists());

        if (varaJurors.length > 0) {
          showToast('success', `Unidade alterada para ${newInfo.vara}. Lista Oficial carregada (${varaJurors.length} jurados aptos).`);
        } else {
          showToast('info', `Unidade alterada para ${newInfo.vara}. Nenhuma lista cadastrada ainda para esta Vara. Utilize "Importar / Colar" para incluir a lista oficial.`);
        }
      }
    },
    [comarcaInfo]
  );

  // Authentication Gate: Require user to be authenticated with @tjal.jus.br Google Account
  if (!authUser) {
    return <TjalAuthGate onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* Top Application Header */}
      <Header
        comarcaInfo={comarcaInfo}
        session={session}
        jurorsCount={jurors.length}
        authUser={authUser}
        onLogout={handleLogout}
        onOpenImport={() => setIsImportOpen(true)}
        onExportExcel={handleExportExcel}
        onPrintAta={() => {
          setPrintInitialTab('preview');
          setIsPrintOpen(true);
        }}
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenConfig={() => setIsConfigOpen(true)}
        onOpenComarcaSelector={() => setIsTjalComarcaModalOpen(true)}
      />

      {/* Main Judicial Work Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-4 lg:p-6">
        {/* Status Bar / Alert Banner when Frozen */}
        {session?.isFrozen && (
          <div className="mb-4 px-4 py-2.5 bg-emerald-50 border border-emerald-300 rounded-lg flex items-center justify-between text-emerald-900 shadow-xs">
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
              <div className="text-xs">
                <span className="font-bold uppercase tracking-wider">Sorteio Homologado e Congelado:</span>{' '}
                Os 25 titulares e 10 suplentes estão salvaguardados com integridade SHA-256. Para habilitar um novo sorteio, utilize o botão 4 (Desfazer).
              </div>
            </div>
            <span className="text-[11px] font-mono font-semibold text-emerald-700 hidden sm:inline-block">
              {session.hash.slice(0, 16)}...
            </span>
          </div>
        )}

        {/* Warning if insufficient jurors */}
        {jurors.length < 35 && (
          <div className="mb-4 px-4 py-2.5 bg-amber-50 border border-amber-300 rounded-lg flex items-center justify-between gap-2.5 text-amber-900 shadow-xs">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <div className="text-xs font-medium">
                {jurors.length === 0 ? (
                  <span>
                    Atenção: Nenhum jurado cadastrado no momento. Faça o upload da planilha ou cole os nomes dos jurados para iniciar o sorteio da Comarca de São José da Tapera.
                  </span>
                ) : (
                  <span>
                    Atenção: Há {jurors.length} de 35 jurados necessários (25 titulares e 10 suplentes). Adicione mais jurados ou importe a lista completa.
                  </span>
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsImportOpen(true)}
              className="shrink-0 px-2.5 py-1 text-xs font-semibold bg-amber-200/80 hover:bg-amber-300 text-amber-950 rounded-md transition-colors cursor-pointer"
            >
              Importar / Colar
            </button>
          </div>
        )}

        {/* Main 3-Column Layout Matching the User's Screenshot:
            Column 1: General Jurors Spreadsheet (Left)
            Column 2: Titulares (25) & Suplentes (10) Tables (Center/Right)
            Column 3: Control Buttons Rail (Far Right)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Left: Lista Geral dos Jurados (col-span-5) */}
          <section className="lg:col-span-5 flex flex-col h-full min-h-[560px]">
            <JurorTable
              jurors={jurors}
              titulares={session?.titulares || []}
              suplentes={session?.suplentes || []}
              activeListId={activeListId}
              activeListName={activeListName}
              activeListCreatedAt={activeListCreatedAt}
              activeListUpdatedAt={activeListUpdatedAt}
              savedListsCount={savedLists.length}
              onAddJuror={handleAddJuror}
              onRemoveJuror={handleRemoveJuror}
              onOpenImport={() => setIsImportOpen(true)}
              onOpenSavedLists={() => setIsSavedListsOpen(true)}
              onSaveCurrentList={() => handleSaveCurrentList()}
              onDeleteActiveList={() => activeListId && handleDeleteList(activeListId)}
            />
          </section>

          {/* Center-Right: Sorteados Titulares e Suplentes (col-span-6) */}
          <section className="lg:col-span-6 flex flex-col h-full min-h-[560px]">
            <ResultTables
              titulares={session?.titulares || []}
              suplentes={session?.suplentes || []}
              isFrozen={session?.isFrozen || false}
              isDrawing={isDrawing}
            />
          </section>

          {/* Far Right: The 4 Action Buttons matching the screenshot (col-span-1) */}
          <section className="lg:col-span-1 flex lg:justify-center">
            <div className="sticky top-20 w-full flex justify-center">
              <LateralControls
                onDraw={handleDraw}
                onFreeze={handleFreeze}
                onCopy={handleCopy}
                onReset={handleReset}
                isFrozen={session?.isFrozen || false}
                hasDrawn={!!session}
                isDrawing={isDrawing}
                copied={copied}
                jurorsCount={jurors.length}
              />
            </div>
          </section>
        </div>

        {/* Audit & Hash Footnote Bar */}
        {session && (
          <div className="mt-4 p-3 bg-white border border-neutral-300 rounded-lg shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-neutral-600">
            <div className="flex items-center gap-2 truncate">
              <Shield className="w-4 h-4 text-neutral-800 shrink-0" />
              <span className="font-semibold text-neutral-800">Hash de Validação do Sorteio:</span>
              <span className="font-mono text-[11px] bg-neutral-100 px-2 py-0.5 rounded text-neutral-900 truncate">
                {session.hash}
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] shrink-0 font-medium text-neutral-500">
              <span>Semente CSPRNG: <strong className="font-mono text-neutral-700">{session.seed.slice(0, 12)}...</strong></span>
              <span>•</span>
              <span>{new Date(session.timestamp).toLocaleTimeString('pt-BR')}</span>
            </div>
          </div>
        )}
      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div
            className={`px-4 py-3 rounded-lg shadow-lg border flex items-center gap-2.5 text-xs font-semibold ${
              toastMessage.type === 'success'
                ? 'bg-neutral-900 text-white border-neutral-800'
                : toastMessage.type === 'error'
                ? 'bg-red-900 text-white border-red-800'
                : 'bg-neutral-800 text-white border-neutral-700'
            }`}
          >
            {toastMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <Sparkles className="w-4 h-4 text-neutral-400 shrink-0" />
            )}
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* Modals */}
      <ImportModal
        isOpen={isImportOpen}
        onClose={() => setIsImportOpen(false)}
        onImport={handleImportJurors}
        defaultListName={activeListName}
      />

      <SavedListsModal
        isOpen={isSavedListsOpen}
        onClose={() => setIsSavedListsOpen(false)}
        currentJurors={jurors}
        activeListId={activeListId}
        activeListName={activeListName}
        savedLists={savedLists}
        currentUnit={{ comarca: comarcaInfo.comarca, vara: comarcaInfo.vara }}
        onSaveCurrentList={handleSaveCurrentList}
        onUpdateExistingList={handleUpdateExistingList}
        onLoadList={handleLoadList}
        onAppendJurorsFromList={handleAppendJurorsFromList}
        onDeleteList={handleDeleteList}
      />

      <AuditLogModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
        logs={auditLogs}
      />

      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        comarcaInfo={comarcaInfo}
        onSave={(info) => {
          handleUpdateComarcaInfo(info);
          showToast('success', 'Dados da Comarca e do Servidor atualizados.');
        }}
      />

      <PrintAtaView
        isOpen={isPrintOpen}
        onClose={() => setIsPrintOpen(false)}
        comarcaInfo={comarcaInfo}
        titulares={session?.titulares || []}
        suplentes={session?.suplentes || []}
        hash={session?.hash}
        timestamp={session?.timestamp}
        totalJurorsCount={jurors.length > 0 ? jurors.length : (session?.totalPoolCount || 0)}
        onCopyText={handleCopy}
        copied={copied}
        initialTab={printInitialTab}
        onUpdateComarcaInfo={(info) => handleUpdateComarcaInfo(info)}
      />

      {/* Modal de Seleção de Comarca e Vara do TJAL a partir do Cabeçalho */}
      <TjalComarcaSelectorModal
        isOpen={isTjalComarcaModalOpen}
        onClose={() => setIsTjalComarcaModalOpen(false)}
        currentInfo={comarcaInfo}
        onSave={(newInfo) => {
          handleUpdateComarcaInfo(newInfo);
          showToast('success', `Comarca de ${newInfo.comarca} e Vara configuradas com sucesso!`);
          appendAuditLog(
            'CONFIG_UPDATED',
            `Comarca e Vara atualizadas para: ${newInfo.comarca} - ${newInfo.vara}.`,
            { comarca: newInfo.comarca, vara: newInfo.vara, email: newInfo.email, telefone: newInfo.telefone }
          );
        }}
      />
    </div>
  );
}

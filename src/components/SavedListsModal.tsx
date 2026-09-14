import React, { useState, useMemo } from 'react';
import {
  X,
  Bookmark,
  Save,
  Trash2,
  Check,
  Calendar,
  Clock,
  Users,
  FileSpreadsheet,
  FolderOpen,
  Plus,
  AlertTriangle,
  UserPlus,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { Juror, SavedJurorList } from '../types';

interface SavedListsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentJurors: Juror[];
  activeListId: string | null;
  activeListName: string;
  savedLists: SavedJurorList[];
  currentUnit?: { comarca?: string; vara?: string };
  onSaveCurrentList: (name: string, comarca?: string, vara?: string) => void;
  onUpdateExistingList: (id: string, name?: string) => void;
  onLoadList: (list: SavedJurorList) => void;
  onAppendJurorsFromList: (list: SavedJurorList) => void;
  onDeleteList: (id: string) => void;
}

export const SavedListsModal: React.FC<SavedListsModalProps> = ({
  isOpen,
  onClose,
  currentJurors,
  activeListId,
  activeListName,
  savedLists,
  currentUnit,
  onSaveCurrentList,
  onUpdateExistingList,
  onLoadList,
  onAppendJurorsFromList,
  onDeleteList,
}) => {
  const [newListName, setNewListName] = useState(
    activeListName || `Lista de Jurados - ${new Date().toLocaleDateString('pt-BR')}`
  );
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const [listToDeleteId, setListToDeleteId] = useState<string | null>(null);
  const [unitFilter, setUnitFilter] = useState<'current' | 'all'>('current');

  const unitLists = useMemo(() => {
    if (!currentUnit?.comarca) return savedLists;
    const currentComarcaNorm = currentUnit.comarca.trim().toLowerCase();
    return savedLists.filter((l) => {
      if (!l.comarca && !l.vara) return true;
      const c = (l.comarca || '').trim().toLowerCase();
      return c.includes(currentComarcaNorm) || currentComarcaNorm.includes(c);
    });
  }, [savedLists, currentUnit]);

  const displayedLists = unitFilter === 'current' ? unitLists : savedLists;

  if (!isOpen) return null;

  const formatDate = (isoString?: string) => {
    if (!isoString) return '—';
    try {
      const d = new Date(isoString);
      return d.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  const handleSaveNew = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newListName.trim()) return;
    onSaveCurrentList(newListName.trim(), currentUnit?.comarca, currentUnit?.vara);
    setIsCreating(false);
  };

  const handleExportListToXlsx = (list: SavedJurorList) => {
    const data = list.jurors.map((j, idx) => ({
      'Nº': idx + 1,
      'Nome Completo': j.name,
      'Qualificação / Profissão': j.qualification || 'Cidadão',
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Jurados');
    const safeName = list.name.replace(/[^a-zA-Z0-9_\-]/g, '_');
    XLSX.writeFile(wb, `${safeName}.xlsx`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-300 max-w-2xl w-full flex flex-col overflow-hidden my-auto max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <Bookmark className="w-4 h-4 text-neutral-100" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Gerenciar Listas de Jurados Salvas
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Armazene listas após o upload com registro de data de criação e modificação
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto">
          {/* Informative Banner: Single Official List per Vara & Preservation */}
          <div className="p-3 bg-blue-50/90 border border-blue-200 rounded-lg text-xs text-blue-950 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-blue-900">
                Regra de Lista Oficial por Vara (TJAL):
              </span>
              <p className="text-[11px] text-blue-800 mt-0.5 leading-relaxed">
                É mantida <strong>uma única Lista Oficial por Vara</strong> vinculada à unidade judiciária selecionada. Uma vez criada ou importada, ela permanece como a lista oficial da Comarca para todos os próximos sorteios até que você decida substituí-la.
              </p>
            </div>
          </div>

          {/* Quick Save Current Bar */}
          <div className="p-4 bg-neutral-100 rounded-lg border border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-neutral-900 block">
                  Lista Oficial da Vara Selecionada:
                </span>
                <span className="text-xs text-neutral-600">
                  {currentJurors.length} jurados aptos •{' '}
                  <span className="font-semibold text-neutral-800">
                    {activeListName || 'Lista Oficial'}
                  </span>
                </span>
                {currentUnit?.vara && (
                  <div className="text-[11px] text-neutral-500 mt-0.5">
                    Vinculada à: <span className="font-medium text-neutral-700">{currentUnit.comarca} • {currentUnit.vara}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onSaveCurrentList(newListName.trim(), currentUnit?.comarca, currentUnit?.vara)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-md bg-neutral-900 text-white hover:bg-neutral-800 flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
                  title="Salva e preserva a lista oficial desta Vara para todos os próximos sorteios"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Salvar / Preservar Lista Oficial</span>
                </button>
              </div>
            </div>
          </div>

          {/* List of saved lists */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-200 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                Listas Gravadas ({displayedLists.length})
              </span>

              <div className="flex items-center gap-1 bg-neutral-100 p-0.5 rounded-lg border border-neutral-200 text-xs">
                <button
                  type="button"
                  onClick={() => setUnitFilter('current')}
                  className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                    unitFilter === 'current'
                      ? 'bg-white text-neutral-900 font-bold shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  title="Exibir listas vinculadas à comarca e vara atualmente selecionadas"
                >
                  Desta Unidade ({unitLists.length})
                </button>
                <button
                  type="button"
                  onClick={() => setUnitFilter('all')}
                  className={`px-2 py-1 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                    unitFilter === 'all'
                      ? 'bg-white text-neutral-900 font-bold shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  title="Exibir todas as listas gravadas no sistema"
                >
                  Todas as Unidades ({savedLists.length})
                </button>
              </div>
            </div>

            {displayedLists.length === 0 ? (
              <div className="p-8 text-center bg-neutral-50 rounded-lg border border-dashed border-neutral-300 text-neutral-500 text-xs">
                <FolderOpen className="w-8 h-8 mx-auto mb-2 text-neutral-400" />
                <p className="font-semibold">Nenhuma lista encontrada para esta unidade.</p>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Clique em "Salvar como Nova Lista" para vincular a lista atual a esta comarca, ou alterne para "Todas as Unidades".
                </p>
              </div>
            ) : (
              displayedLists.map((list) => {
                const isActive = list.id === activeListId;
                const isEditing = editingId === list.id;

                return (
                  <div
                    key={list.id}
                    className={`p-3.5 rounded-lg border transition-all ${
                      isActive
                        ? 'bg-blue-50/70 border-blue-300 shadow-xs'
                        : 'bg-white border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {isEditing ? (
                            <div className="flex items-center gap-1.5 flex-1">
                              <input
                                type="text"
                                value={editingName}
                                onChange={(e) => setEditingName(e.target.value)}
                                className="px-2 py-1 text-xs border border-neutral-300 rounded bg-white w-full"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  if (editingName.trim()) {
                                    onUpdateExistingList(list.id, editingName.trim());
                                  }
                                  setEditingId(null);
                                }}
                                className="p-1 text-emerald-700 hover:bg-emerald-100 rounded"
                              >
                                <Check className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setEditingId(null)}
                                className="p-1 text-neutral-500 hover:bg-neutral-100 rounded"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <>
                              <span
                                className="font-bold text-xs text-neutral-900 truncate block cursor-pointer hover:underline"
                                onClick={() => {
                                  setEditingId(list.id);
                                  setEditingName(list.name);
                                }}
                                title="Clique para renomear"
                              >
                                {list.name}
                              </span>
                              {isActive && (
                                <span className="px-2 py-0.2 rounded-full text-[10px] font-bold bg-blue-600 text-white shrink-0">
                                  Em Uso
                                </span>
                              )}
                            </>
                          )}
                        </div>

                        {/* Metadata badges: criação, modificação, quantidade, unidade vinculada */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-1.5 text-[11px] text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-neutral-400" />
                            <strong>{list.jurors.length}</strong> jurados
                          </span>
                          {(list.comarca || list.vara) && (
                            <span className="flex items-center gap-1 text-neutral-700 bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded font-medium text-[10.5px]">
                              <Building2 className="w-3 h-3 text-neutral-500 shrink-0" />
                              <span className="truncate max-w-[280px]" title={`${list.comarca || ''}${list.vara ? ` • ${list.vara}` : ''}`}>
                                {list.comarca || 'Comarca'}{list.vara ? ` • ${list.vara}` : ''}
                              </span>
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-neutral-400" />
                            Criação: <span className="text-neutral-700 font-medium">{formatDate(list.createdAt)}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-neutral-400" />
                            Modificação: <span className="text-neutral-700 font-medium">{formatDate(list.updatedAt)}</span>
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-1.5 shrink-0 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => handleExportListToXlsx(list)}
                          className="p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
                          title="Exportar planilha Excel (.xlsx)"
                        >
                          <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                        </button>

                        {/* Opção 1: Incluir Jurados Preservando os Atuais */}
                        <button
                          type="button"
                          onClick={() => {
                            onAppendJurorsFromList(list);
                            onClose();
                          }}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                          title="Incluir os jurados desta lista na lista em uso, preservando todos os nomes já incluídos para próximos sorteios"
                        >
                          <UserPlus className="w-3.5 h-3.5" />
                          <span>+ Incluir Jurados</span>
                        </button>

                        {/* Opção 2: Carregar Substituindo */}
                        {!isActive && (
                          <button
                            type="button"
                            onClick={() => {
                              onLoadList(list);
                              onClose();
                            }}
                            className="px-2.5 py-1 text-xs font-semibold rounded-md bg-neutral-900 hover:bg-neutral-800 text-white transition-colors cursor-pointer"
                            title="Carregar esta lista substituindo a lista atual"
                          >
                            Carregar
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => setListToDeleteId(list.id)}
                          className="px-2 py-1 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-md flex items-center gap-1 transition-colors cursor-pointer"
                          title="Excluir lista"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                          <span>Excluir</span>
                        </button>
                      </div>
                    </div>

                    {/* Inline Confirmation Box for Deletion */}
                    {listToDeleteId === list.id && (
                      <div className="mt-3 p-3 bg-rose-50 border border-rose-300 rounded-md text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 animate-in fade-in duration-150">
                        <div className="flex items-center gap-2 text-rose-900 font-medium">
                          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                          <span>
                            Deseja realmente <strong>excluir</strong> a lista "{list.name}" ({list.jurors.length} jurados)?
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => {
                              onDeleteList(list.id);
                              setListToDeleteId(null);
                            }}
                            className="px-3 py-1 bg-rose-700 hover:bg-rose-800 text-white rounded text-xs font-bold transition-colors cursor-pointer shadow-2xs"
                          >
                            Sim, Excluir
                          </button>
                          <button
                            type="button"
                            onClick={() => setListToDeleteId(null)}
                            className="px-2.5 py-1 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-700 rounded text-xs font-medium transition-colors cursor-pointer"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <span className="text-[11px] text-neutral-500">
            As listas ficam salvas de forma segura no armazenamento local do seu navegador.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Scale,
  FileDown,
  FileText,
  Eye,
  FileCode,
  Edit3,
  RotateCcw,
  ClipboardCopy,
  CheckCheck,
  Info,
  UserCheck,
  Save,
  Building2,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { ComarcaInfo, DrawnJuror } from '../types';
import {
  getDrawDateDetails,
  exportToDoc,
  exportTextToDoc,
  formatAtaText,
  formatAtaHtml,
  OFFICIAL_ATA_TEMPLATE_WITH_ASTERISKS,
  getOfficialAtaTemplateWithAsterisks,
} from '../utils/exporter';
import { exportToPdf, exportCustomTextToPdf, exportOfficialViewToPdf } from '../utils/pdfExporter';
import { TjalOfficialHeader } from './TjalOfficialHeader';
import { TjalComarcaSelectorModal } from './TjalComarcaSelectorModal';
import { RichTextEditor } from './RichTextEditor';

interface PrintAtaViewProps {
  isOpen: boolean;
  onClose: () => void;
  comarcaInfo: ComarcaInfo;
  titulares: DrawnJuror[];
  suplentes: DrawnJuror[];
  hash?: string;
  timestamp?: string;
  totalJurorsCount?: number;
  onCopyText?: () => void;
  copied?: boolean;
  initialTab?: 'edit' | 'preview' | 'model';
  onUpdateComarcaInfo?: (info: ComarcaInfo) => void;
}

export const PrintAtaView: React.FC<PrintAtaViewProps> = ({
  isOpen,
  onClose,
  comarcaInfo,
  titulares,
  suplentes,
  hash,
  timestamp,
  totalJurorsCount,
  onCopyText,
  copied: externalCopied,
  initialTab = 'edit',
  onUpdateComarcaInfo,
}) => {
  const [activeTab, setActiveTab] = useState<'edit' | 'preview' | 'model'>(initialTab);
  const [editorMode, setEditorMode] = useState<'rich' | 'plain'>('rich');
  const [editedText, setEditedText] = useState<string>('');
  const [editedHtml, setEditedHtml] = useState<string>('');
  const [savedCustomAtaText, setSavedCustomAtaText] = useState<string | null>(null);
  const [savedCustomAtaHtml, setSavedCustomAtaHtml] = useState<string | null>(null);
  const [isUsingCustomVersion, setIsUsingCustomVersion] = useState<boolean>(false);
  const [editorVersionKey, setEditorVersionKey] = useState<number>(0);
  const [saveToast, setSaveToast] = useState<boolean>(false);
  const [authoritiesToast, setAuthoritiesToast] = useState<boolean>(false);

  // Limpeza de cache residual antigo para garantir contagem exata e aplicação imediata de autoridades
  useEffect(() => {
    try {
      localStorage.removeItem('tjal_saved_custom_ata_text');
      localStorage.removeItem('tjal_saved_custom_ata_html');
    } catch {
      // no-op
    }
  }, []);

  const [copiedProc, setCopiedProc] = useState<boolean>(false);
  const [copiedGeneral, setCopiedGeneral] = useState<boolean>(false);

  // Autoridades: Juiz e Servidor (Padrão: Elielson dos Santos Pereira e Marta Diana Lucindo Tenório)
  const [juizPresidente, setJuizPresidente] = useState<string>(
    comarcaInfo.juizPresidente || 'Elielson dos Santos Pereira'
  );
  const [juizCargo, setJuizCargo] = useState<string>(
    comarcaInfo.juizCargo || 'Juiz de Direito'
  );
  const [servidorNome, setServidorNome] = useState<string>(
    comarcaInfo.servidorNome || comarcaInfo.chefeSecretaria || 'Marta Diana Lucindo Tenório'
  );
  const [servidorCargo, setServidorCargo] = useState<string>(
    comarcaInfo.servidorCargo || 'Assessora Judicial'
  );
  const [showAuthoritiesConfig, setShowAuthoritiesConfig] = useState<boolean>(false);
  const [isComarcaModalOpen, setIsComarcaModalOpen] = useState<boolean>(false);
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [modelViewType, setModelViewType] = useState<'adapted' | 'generic'>('adapted');

  // Sincroniza dados de autoridades se comarcaInfo mudar
  useEffect(() => {
    if (comarcaInfo.juizPresidente) setJuizPresidente(comarcaInfo.juizPresidente);
    if (comarcaInfo.juizCargo) setJuizCargo(comarcaInfo.juizCargo);
    if (comarcaInfo.servidorNome) setServidorNome(comarcaInfo.servidorNome);
    else if (comarcaInfo.chefeSecretaria) setServidorNome(comarcaInfo.chefeSecretaria);
    if (comarcaInfo.servidorCargo) setServidorCargo(comarcaInfo.servidorCargo);
  }, [comarcaInfo]);

  // Texto padrão gerado dinamicamente com base nas autoridades e no sorteio
  const defaultText = useMemo(() => {
    const updatedInfo: ComarcaInfo = {
      ...comarcaInfo,
      juizPresidente,
      juizCargo,
      servidorNome,
      servidorCargo,
      chefeSecretaria: servidorNome,
    };
    return formatAtaText(
      updatedInfo,
      titulares,
      suplentes,
      hash,
      timestamp,
      totalJurorsCount
    );
  }, [
    comarcaInfo,
    juizPresidente,
    juizCargo,
    servidorNome,
    servidorCargo,
    titulares,
    suplentes,
    hash,
    timestamp,
    totalJurorsCount,
  ]);

  // HTML padrão gerado com ferramentas ricas e cabeçalho sem brasão
  const defaultHtml = useMemo(() => {
    const updatedInfo: ComarcaInfo = {
      ...comarcaInfo,
      juizPresidente,
      juizCargo,
      servidorNome,
      servidorCargo,
      chefeSecretaria: servidorNome,
    };
    return formatAtaHtml(
      updatedInfo,
      titulares,
      suplentes,
      hash,
      timestamp,
      totalJurorsCount
    );
  }, [
    comarcaInfo,
    juizPresidente,
    juizCargo,
    servidorNome,
    servidorCargo,
    titulares,
    suplentes,
    hash,
    timestamp,
    totalJurorsCount,
  ]);

  // Sincroniza o texto e html editados quando não houver versão personalizada
  useEffect(() => {
    if (isOpen) {
      if (!isUsingCustomVersion) {
        setEditedHtml(defaultHtml);
        setEditedText(defaultText);
      } else {
        if (savedCustomAtaHtml) setEditedHtml(savedCustomAtaHtml);
        if (savedCustomAtaText) setEditedText(savedCustomAtaText);
      }
      if (initialTab) {
        setActiveTab(initialTab);
      }
    }
  }, [isOpen, defaultHtml, defaultText, initialTab, isUsingCustomVersion, savedCustomAtaHtml, savedCustomAtaText]);

  if (!isOpen) return null;

  const handlePrint = () => {
    if (activeTab !== 'preview') {
      setActiveTab('preview');
      setTimeout(() => {
        window.print();
      }, 200);
    } else {
      window.print();
    }
  };

  const getEffectiveAtaText = () => {
    if (isUsingCustomVersion && savedCustomAtaText) {
      return savedCustomAtaText;
    }
    if (activeTab === 'edit' && editedText.trim()) {
      return editedText;
    }
    return defaultText;
  };

  const getEffectiveAtaHtml = () => {
    if (isUsingCustomVersion && savedCustomAtaHtml) {
      return savedCustomAtaHtml;
    }
    if (activeTab === 'edit' && editorMode === 'rich' && editedHtml.trim()) {
      return editedHtml;
    }
    return defaultHtml;
  };

  const handleDownloadDoc = () => {
    const currentInfo: ComarcaInfo = {
      ...comarcaInfo,
      juizPresidente,
      juizCargo,
      servidorNome,
      servidorCargo,
      chefeSecretaria: servidorNome,
    };

    const { nextMonthName, nextMonthYear } = getDrawDateDetails(timestamp);
    const cleanMonth = nextMonthName.replace(/[^a-zA-Z0-9]/g, '');
    const comarcaSlug = (currentInfo.comarca || 'TJAL').replace(/[^a-zA-Z0-9]/g, '_');
    const docFileName = `Ata_Sorteio_Jurados_${comarcaSlug}_${cleanMonth}_${nextMonthYear}.doc`;

    if (isUsingCustomVersion && savedCustomAtaHtml) {
      exportTextToDoc(savedCustomAtaHtml, docFileName, currentInfo);
    } else if (activeTab === 'edit' && editorMode === 'rich' && editedHtml.trim()) {
      exportTextToDoc(editedHtml, docFileName, currentInfo);
    } else if (isUsingCustomVersion || activeTab === 'edit') {
      exportTextToDoc(getEffectiveAtaText(), docFileName, currentInfo);
    } else {
      exportToDoc(
        currentInfo,
        titulares,
        suplentes,
        hash,
        timestamp,
        totalJurorsCount
      );
    }
  };

  const handleDownloadPdf = async () => {
    const currentInfo: ComarcaInfo = {
      ...comarcaInfo,
      juizPresidente,
      juizCargo,
      servidorNome,
      servidorCargo,
      chefeSecretaria: servidorNome,
    };

    const textToExport = getEffectiveAtaText();
    const { nextMonthName, nextMonthYear } = getDrawDateDetails(timestamp);
    const cleanMonth = nextMonthName.replace(/[^a-zA-Z0-9]/g, '');
    const comarcaSlug = (currentInfo.comarca || 'TJAL').replace(/[^a-zA-Z0-9]/g, '_');
    const pdfFileName = `Ata_Sorteio_Jurados_${comarcaSlug}_${cleanMonth}_${nextMonthYear}.pdf`;

    setIsExportingPdf(true);
    try {
      // Exportação direta vetorial estruturada para máxima fidelidade e diagramação sem distorções
      if (isUsingCustomVersion || (activeTab === 'edit' && editedText.trim())) {
        exportCustomTextToPdf(
          textToExport,
          pdfFileName,
          currentInfo
        );
      } else {
        exportToPdf(
          currentInfo,
          titulares,
          suplentes,
          hash,
          timestamp,
          totalJurorsCount
        );
      }
    } catch (err) {
      console.error('Erro ao gerar PDF estruturado:', err);
    } finally {
      setIsExportingPdf(false);
    }
  };

  // Aplica as alterações de Juiz e Servidor em todo o texto e HTML (início, meio e fim)
  const handleApplyAuthorities = () => {
    const updated: ComarcaInfo = {
      ...comarcaInfo,
      juizPresidente: juizPresidente.trim(),
      juizCargo: juizCargo.trim() || 'Juiz de Direito',
      servidorNome: servidorNome.trim(),
      servidorCargo: servidorCargo.trim() || 'Assessora Judicial',
      chefeSecretaria: servidorNome.trim(),
    };

    if (onUpdateComarcaInfo) {
      onUpdateComarcaInfo(updated);
    }

    const newText = formatAtaText(
      updated,
      titulares,
      suplentes,
      hash,
      timestamp,
      totalJurorsCount
    );

    const newHtml = formatAtaHtml(
      updated,
      titulares,
      suplentes,
      hash,
      timestamp,
      totalJurorsCount
    );

    setEditedText(newText);
    setEditedHtml(newHtml);
    if (isUsingCustomVersion) {
      setSavedCustomAtaText(newText);
      setSavedCustomAtaHtml(newHtml);
    }
    setEditorVersionKey((prev) => prev + 1);
    setShowAuthoritiesConfig(false);
    setAuthoritiesToast(true);
    setTimeout(() => setAuthoritiesToast(false), 3500);
  };

  // Salva a nova versão editada (HTML rico ou texto) e redireciona imediatamente para a "Visualização Oficial"
  const handleSaveAndPreviewVersion = () => {
    if (editorMode === 'rich') {
      const htmlToSave = editedHtml.trim() || defaultHtml;
      setSavedCustomAtaHtml(htmlToSave);

      // Converte HTML para texto simples para fallback e estatísticas
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlToSave;
      const plain = tempDiv.innerText || tempDiv.textContent || '';
      setSavedCustomAtaText(plain);
      setEditedText(plain);
    } else {
      setSavedCustomAtaText(editedText);
      setSavedCustomAtaHtml(editedHtml || defaultHtml);
    }

    setIsUsingCustomVersion(true);
    setActiveTab('preview');
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 4000);
  };

  // Restaura a versão original do sorteio
  const handleRestoreStandardVersion = () => {
    setIsUsingCustomVersion(false);
    setSavedCustomAtaText(null);
    setSavedCustomAtaHtml(null);
    try {
      localStorage.removeItem('tjal_saved_custom_ata_text');
      localStorage.removeItem('tjal_saved_custom_ata_html');
    } catch {
      // no-op
    }
    setEditedText(defaultText);
    setEditedHtml(defaultHtml);
    setEditorVersionKey((prev) => prev + 1);
  };

  // Copia formatada para o sistema processual (PJe, SAJ, Projudi, E-Proc) preservando formatação HTML rica
  const handleCopyForProceduralSystem = async () => {
    const textToCopy = getEffectiveAtaText().trim();
    const htmlToCopy = getEffectiveAtaHtml().trim();

    try {
      if (navigator.clipboard && window.ClipboardItem && htmlToCopy) {
        const textBlob = new Blob([textToCopy], { type: 'text/plain' });
        const htmlBlob = new Blob([htmlToCopy], { type: 'text/html' });
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/plain': textBlob,
            'text/html': htmlBlob,
          }),
        ]);
      } else {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopiedProc(true);
      setTimeout(() => setCopiedProc(false), 3000);
    } catch {
      try {
        await navigator.clipboard.writeText(textToCopy);
      } catch {
        // Fallback
      }
      setCopiedProc(true);
      setTimeout(() => setCopiedProc(false), 3000);
    }
  };

  // Cópia geral
  const handleCopyGeneral = async () => {
    const textToCopy = getEffectiveAtaText().trim();
    const htmlToCopy = getEffectiveAtaHtml().trim();

    try {
      if (navigator.clipboard && window.ClipboardItem && htmlToCopy) {
        const textBlob = new Blob([textToCopy], { type: 'text/plain' });
        const htmlBlob = new Blob([htmlToCopy], { type: 'text/html' });
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/plain': textBlob,
            'text/html': htmlBlob,
          }),
        ]);
      } else {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopiedGeneral(true);
      setTimeout(() => setCopiedGeneral(false), 2500);
      if (onCopyText) {
        onCopyText();
      }
    } catch {
      try {
        await navigator.clipboard.writeText(textToCopy);
      } catch {
        // Fallback
      }
      if (onCopyText) {
        onCopyText();
      }
      setCopiedGeneral(true);
      setTimeout(() => setCopiedGeneral(false), 2500);
    }
  };

  const {
    currentDay,
    currentMonthName,
    currentYear,
    nextMonthNameUpper,
    nextMonthYear,
  } = getDrawDateDetails(timestamp);

  const poolCount =
    totalJurorsCount && totalJurorsCount > 0
      ? String(totalJurorsCount)
      : titulares.length + suplentes.length > 0
      ? String(titulares.length + suplentes.length)
      : '*';

  const actualHash = hash || '21f71327eb2e961cfa2b733e59a27df11088692691a7e0123dd9efe4f5bf18a0';
  const actualTimestamp = timestamp || '2026-09-11T18:44:31.819Z';

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto print:p-0 print:bg-white print:static print:overflow-visible">
      <div className="bg-white rounded-xl shadow-2xl border border-neutral-300 max-w-5xl w-full flex flex-col my-auto overflow-hidden print:border-none print:shadow-none print:w-full print:max-w-none">
        
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="px-4 sm:px-5 py-3 border-b border-neutral-200 bg-neutral-100 flex flex-wrap items-center justify-between gap-2.5 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center shrink-0">
              <Scale className="w-4 h-4 text-neutral-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-neutral-900 block">
                  Ata de Sorteio de Jurados
                </span>
                <button
                  type="button"
                  id="btn-abrir-comarca-modal-printview"
                  onClick={() => setIsComarcaModalOpen(true)}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-neutral-200 hover:bg-neutral-300 text-neutral-800 transition-colors cursor-pointer border border-neutral-300"
                  title="Alterar comarca e vara"
                >
                  <Building2 className="w-3 h-3 text-neutral-700" />
                  <span>{comarcaInfo.comarca || 'São José da Tapera'}</span>
                </button>
              </div>
              <span className="text-[11px] text-neutral-500">
                {comarcaInfo.vara || 'Vara do Único Ofício'} • Reunião de {nextMonthNameUpper}/{nextMonthYear}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Tab Selector */}
            <div className="bg-neutral-200/90 p-0.5 rounded-lg flex text-xs">
              <button
                type="button"
                id="tab-edit-ata"
                onClick={() => setActiveTab('edit')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'edit'
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Editar Ata</span>
              </button>

              <button
                type="button"
                id="tab-preview-ata"
                onClick={() => setActiveTab('preview')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'preview'
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Visualização Oficial</span>
                {isUsingCustomVersion && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block ml-0.5" title="Versão editada ativa" />
                )}
              </button>

              <button
                type="button"
                id="tab-model-ata"
                onClick={() => setActiveTab('model')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'model'
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>Modelo com '*'</span>
              </button>
            </div>

            {/* Main Action: Copiar para Sistema Processual */}
            <button
              type="button"
              id="btn-copiar-sistema-processual"
              onClick={handleCopyForProceduralSystem}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer border border-emerald-800"
              title="Copia o texto formatado para colar diretamente no PJe, SAJ, Projudi ou SEEU"
            >
              {copiedProc ? (
                <>
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Copiado p/ o Processo!</span>
                </>
              ) : (
                <>
                  <ClipboardCopy className="w-3.5 h-3.5" />
                  <span>Copiar p/ Sistema Processual</span>
                </>
              )}
            </button>

            {/* Secondary Action: Copiar Texto */}
            <button
              type="button"
              id="btn-copiar-texto-modal"
              onClick={handleCopyGeneral}
              className="px-3 py-1.5 text-xs font-semibold rounded-md border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copiar texto para a área de transferência"
            >
              {copiedGeneral || externalCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Texto</span>
                </>
              )}
            </button>

            {/* Action: Baixar (.doc) */}
            <button
              type="button"
              id="btn-baixar-doc-modal"
              onClick={handleDownloadDoc}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-neutral-900 text-white hover:bg-neutral-800 flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              title="Baixar documento no formato .doc compatível com Microsoft Word com cabeçalho oficial"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Baixar (.doc)</span>
            </button>

            {/* Action: Baixar (.pdf) */}
            <button
              type="button"
              id="btn-baixar-pdf-modal"
              onClick={handleDownloadPdf}
              disabled={isExportingPdf}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-rose-700 hover:bg-rose-800 disabled:opacity-60 text-white flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer border border-rose-800"
              title="Baixar documento oficial no formato PDF com a mesma formatação da visualização oficial"
            >
              {isExportingPdf ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <FileText className="w-3.5 h-3.5" />
              )}
              <span>{isExportingPdf ? 'Gerando PDF...' : 'Baixar (.pdf)'}</span>
            </button>

            {/* Action: Imprimir */}
            <button
              type="button"
              id="btn-imprimir-modal"
              onClick={handlePrint}
              className="px-2.5 py-1.5 text-xs font-medium rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Imprimir ou salvar em PDF pelo navegador"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 cursor-pointer ml-1"
              title="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Banner de Feedback ao Salvar */}
        {saveToast && (
          <div className="bg-emerald-600 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between transition-all">
            <div className="flex items-center gap-2">
              <CheckCheck className="w-4 h-4" />
              <span>Nova versão salva com sucesso! Exibindo agora na Visualização Oficial com o cabeçalho oficial do TJAL.</span>
            </div>
            <button
              type="button"
              onClick={() => setSaveToast(false)}
              className="text-emerald-100 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Banner de Feedback ao Atualizar Autoridades */}
        {authoritiesToast && (
          <div className="bg-neutral-900 text-white px-4 py-2 text-xs font-semibold flex items-center justify-between transition-all border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <CheckCheck className="w-4 h-4 text-emerald-400" />
              <span>Autoridades atualizadas e aplicadas com sucesso ao texto da ata!</span>
            </div>
            <button
              type="button"
              onClick={() => setAuthoritiesToast(false)}
              className="text-neutral-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Tab 1: ABA DE EDIÇÃO DO TEXTO */}
        {activeTab === 'edit' && (
          <div className="p-4 sm:p-6 bg-neutral-50 flex flex-col max-h-[82vh] overflow-y-auto">
            {/* Top Toolbar in Edit Tab with Save and View Button */}
            <div className="mb-3 p-3 bg-white border border-neutral-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <Info className="w-4 h-4 text-neutral-600 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-neutral-900 block">
                    Editor da Ata de Sorteio de Jurados
                  </span>
                  <span className="text-[11px] text-neutral-500">
                    Você pode alterar qualquer trecho antes de salvar a nova versão ou copiar para o sistema processual (PJe, SAJ, Projudi).
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {/* BOTÃO PRINCIPAL: Salvar Nova Versão e Visualizar na Versão Oficial */}
                <button
                  type="button"
                  id="btn-salvar-nova-versao-oficial"
                  onClick={handleSaveAndPreviewVersion}
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-neutral-900 hover:bg-black rounded-md flex items-center gap-2 transition-all shadow-sm cursor-pointer border border-neutral-800"
                  title="Salva a versão editada para que seja exibida na Visualização Oficial e incluída no PDF/DOC"
                >
                  <Save className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Salvar Nova Versão e Visualizar Oficial</span>
                </button>

                <button
                  type="button"
                  id="btn-restaurar-texto-original"
                  onClick={handleRestoreStandardVersion}
                  className="px-2.5 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Restaura o texto padrão preenchido automaticamente pelo sorteio"
                >
                  <RotateCcw className="w-3 h-3 text-neutral-500" />
                  <span>Restaurar Original</span>
                </button>
              </div>
            </div>

            {/* Painel de Configuração de Autoridades: Juiz e Servidor(a) */}
            <div className="mb-3 p-3 bg-white border border-neutral-200 rounded-lg shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <UserCheck className="w-4 h-4 text-neutral-700 shrink-0" />
                  <span className="text-xs font-bold text-neutral-900">
                    Autoridades na Ata:
                  </span>
                  <span className="text-xs text-neutral-800 font-medium">
                    Juiz: <span className="font-semibold">{juizPresidente}</span>
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="text-xs text-neutral-800 font-medium">
                    Servidor(a): <span className="font-semibold">{servidorNome}</span> ({servidorCargo})
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="text-xs text-neutral-800 font-medium">
                    Lista de Referência: <span className="font-semibold">{poolCount} jurados aptos</span>
                  </span>
                </div>
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <button
                    type="button"
                    id="btn-toggle-authorities-config"
                    onClick={() => setShowAuthoritiesConfig(!showAuthoritiesConfig)}
                    className="text-xs font-semibold text-neutral-700 hover:text-neutral-900 underline cursor-pointer"
                  >
                    {showAuthoritiesConfig ? 'Ocultar campos' : 'Alterar Juiz / Servidor'}
                  </button>
                </div>
              </div>

              {showAuthoritiesConfig && (
                <div className="mt-3 pt-3 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Nome e Cargo do Juiz */}
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                      Nome do MM. Juiz de Direito:
                    </label>
                    <input
                      type="text"
                      id="input-juiz-nome-ata"
                      value={juizPresidente}
                      onChange={(e) => setJuizPresidente(e.target.value)}
                      placeholder="Ex: Dr. ELIELSON DOS SANTOS PEREIRA"
                      className="w-full px-2.5 py-1.5 text-xs border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none bg-white font-medium"
                    />
                    <span className="text-[10px] text-neutral-400 mt-0.5 block">
                      Altera no texto introdutório da audiência e no bloco de assinatura digital.
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                      Cargo / Titulação do Juiz:
                    </label>
                    <input
                      type="text"
                      id="input-juiz-cargo-ata"
                      value={juizCargo}
                      onChange={(e) => setJuizCargo(e.target.value)}
                      placeholder="Ex: Juiz de Direito"
                      className="w-full px-2.5 py-1.5 text-xs border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none bg-white"
                    />
                  </div>

                  {/* Nome e Cargo do Servidor */}
                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                      Nome do(a) Servidor(a) que Lavrou a Ata:
                    </label>
                    <input
                      type="text"
                      id="input-servidor-nome-ata"
                      value={servidorNome}
                      onChange={(e) => setServidorNome(e.target.value)}
                      placeholder="Ex: Marta Diana Lucindo Tenório, M98240"
                      className="w-full px-2.5 py-1.5 text-xs border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none bg-white"
                    />
                    <span className="text-[10px] text-neutral-400 mt-0.5 block">
                      Altera tanto no texto de abertura quanto na certidão de lavratura final.
                    </span>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                      Cargo / Função do(a) Servidor(a):
                    </label>
                    <input
                      type="text"
                      id="input-servidor-cargo-ata"
                      value={servidorCargo}
                      onChange={(e) => setServidorCargo(e.target.value)}
                      placeholder="Ex: Chefe de Secretaria"
                      className="w-full px-2.5 py-1.5 text-xs border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none bg-white"
                    />
                  </div>

                  <div className="sm:col-span-2 flex justify-end gap-2 pt-1">
                    <button
                      type="button"
                      id="btn-aplicar-autoridades-ata"
                      onClick={handleApplyAuthorities}
                      className="px-3 py-1.5 text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white rounded-md cursor-pointer transition-colors shadow-xs"
                    >
                      Aplicar à Ata e Atualizar Texto Completo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Seletor de Modo de Edição: Visual (Google Docs) vs Texto Puro */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-1 bg-neutral-200/90 p-1 rounded-lg text-xs">
                <button
                  type="button"
                  id="btn-modo-editor-rico"
                  onClick={() => setEditorMode('rich')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    editorMode === 'rich'
                      ? 'bg-white text-neutral-950 shadow-xs font-bold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Editor Rico (Google Docs)</span>
                </button>
                <button
                  type="button"
                  id="btn-modo-editor-puro"
                  onClick={() => setEditorMode('plain')}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    editorMode === 'plain'
                      ? 'bg-white text-neutral-950 shadow-xs font-bold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Texto Puro</span>
                </button>
              </div>

              <div className="text-[11px] text-neutral-500 font-medium">
                {editorMode === 'rich' ? (
                  <span>Barra com fontes, tamanhos, cores, destaques, alinhamentos e recuos</span>
                ) : (
                  <span>Modo código/texto sem formatação gráfica</span>
                )}
              </div>
            </div>

            {/* Editor de Texto Rico ou Textarea */}
            {editorMode === 'rich' ? (
              <div className="flex-1 flex flex-col min-h-[500px]">
                <RichTextEditor
                  key={`editor-v-${editorVersionKey}`}
                  initialHtml={editedHtml || defaultHtml}
                  onChange={(newHtml) => {
                    setEditedHtml(newHtml);
                  }}
                  onSave={handleSaveAndPreviewVersion}
                  className="w-full flex-1"
                />
              </div>
            ) : (
              <div className="flex-1 flex flex-col min-h-[420px]">
                <textarea
                  id="textarea-ata-editavel"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  placeholder="Carregando texto da ata..."
                  className="w-full flex-1 min-h-[440px] p-4 bg-white border border-neutral-300 rounded-lg text-xs sm:text-sm font-mono leading-relaxed text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-neutral-800 resize-y shadow-xs"
                  spellCheck={false}
                />
              </div>
            )}

            {/* Character & Line Counter Footer */}
            <div className="mt-2.5 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-neutral-500">
              <div className="flex items-center gap-3">
                <span>{editedText.length.toLocaleString('pt-BR')} caracteres</span>
                <span>•</span>
                <span>{editedText.split('\n').length} linhas</span>
                <span>•</span>
                <span>{titulares.length} titulares e {suplentes.length} suplentes</span>
                <span>•</span>
                <span>{poolCount} jurados aptos na lista</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleSaveAndPreviewVersion}
                  className="text-neutral-800 hover:text-black font-semibold underline cursor-pointer"
                >
                  Salvar nova versão e visualizar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: VISUALIZAÇÃO OFICIAL FORMATADA */}
        <div className={activeTab === 'preview' ? 'max-h-[82vh] overflow-y-auto print:max-h-none print:overflow-visible' : 'hidden print:block'}>
          {/* Banner Informativo sobre Versão Oficial (Oculto na impressão) */}
          <div className="p-3 bg-neutral-100 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-2 print:hidden">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-neutral-700 shrink-0" />
              <span className="text-xs text-neutral-800">
                {isUsingCustomVersion ? (
                  <span>
                    <strong className="text-emerald-800">Versão com Edições Personalizadas Ativa:</strong> As alterações manuais e as autoridades foram aplicadas e estão prontas para impressão e exportação.
                  </span>
                ) : (
                  <span>
                    <strong className="text-neutral-900">Versão Oficial Padrão do Sorteio:</strong> Emissão gerada com o Cabeçalho Oficial do Poder Judiciário de Alagoas.
                  </span>
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('edit')}
                className="px-2.5 py-1 text-xs font-semibold text-neutral-700 bg-white hover:bg-neutral-50 border border-neutral-300 rounded-md transition-colors cursor-pointer"
              >
                Editar Texto Novamente
              </button>
              {isUsingCustomVersion && (
                <button
                  type="button"
                  onClick={handleRestoreStandardVersion}
                  className="px-2.5 py-1 text-xs font-semibold text-neutral-600 hover:text-neutral-900 underline cursor-pointer"
                >
                  Restaurar Padrão do Sorteio
                </button>
              )}
            </div>
          </div>

          {/* Documento Oficial Formatado */}
          <div
            id="printable-court-document"
            className="p-8 sm:p-12 text-neutral-900 bg-white font-serif max-w-4xl mx-auto print:p-0 print:max-w-none"
          >
              {/* Se estiver usando a versão salva com HTML rico, renderiza diretamente preservando 100% da formatação */}
              {isUsingCustomVersion && savedCustomAtaHtml ? (
                <div
                  id="custom-rich-ata-rendered"
                  className="font-serif text-neutral-950 leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{ __html: savedCustomAtaHtml }}
                />
              ) : isUsingCustomVersion && savedCustomAtaText ? (
                /* Versão com Edições em Texto Puro */
                <>
                  <TjalOfficialHeader
                    comarcaInfo={{
                      ...comarcaInfo,
                      juizPresidente,
                      juizCargo,
                      servidorNome,
                      servidorCargo,
                    }}
                    className="mb-6 pb-4 border-b-2 border-neutral-900"
                    clickable={true}
                    onClick={() => setIsComarcaModalOpen(true)}
                    hideEmblem={true}
                  />

                  <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed text-justify font-serif text-neutral-900">
                    {savedCustomAtaText.split(/\n\n+/).map((para, pIdx) => {
                      const trimmed = para.trim();
                      if (!trimmed) return null;

                      // 1. Títulos principais centralizados
                      if (
                        trimmed.startsWith('PODER JUDICIÁRIO') ||
                        trimmed.startsWith('COMARCA DE') ||
                        trimmed.startsWith('VARA DO') ||
                        trimmed.startsWith('VARA DE') ||
                        trimmed.startsWith('ATA DA SESSÃO') ||
                        trimmed.startsWith('(Artigos 433')
                      ) {
                        return (
                          <div
                            key={`custom-p-${pIdx}`}
                            className="text-center my-3 font-bold text-xs sm:text-sm uppercase tracking-wide text-neutral-950 whitespace-pre-line leading-snug"
                          >
                            {trimmed}
                          </div>
                        );
                      }

                      // 2. Seções de Jurados Titulares e Suplentes com tabela de visualização limpa
                      if (trimmed.startsWith('JURADOS TITULARES:') || trimmed.startsWith('JURADOS SUPLENTES:')) {
                        const lines = trimmed.split('\n');
                        const header = lines[0];
                        const jurorLines = lines.slice(1);
                        const isSuplente = header.includes('SUPLENTES');

                        return (
                          <div key={`custom-p-${pIdx}`} className="my-5">
                            <div className="border-b-2 border-neutral-800 pb-1 mb-2 flex items-center justify-between">
                              <span className="font-bold text-xs sm:text-sm uppercase tracking-wide text-neutral-950 font-serif">
                                {header}
                              </span>
                              <span className="font-sans text-[11px] text-neutral-600 font-normal">
                                {isSuplente ? 'Art. 433, § 1º, do CPP' : 'Art. 433 do CPP'}
                              </span>
                            </div>

                            <div className="bg-white border border-neutral-300 rounded shadow-2xs divide-y divide-neutral-200 overflow-hidden">
                              {jurorLines.map((line, lIdx) => {
                                const trimmedLine = line.trim();
                                if (!trimmedLine) return null;

                                // Detecção segura do padrão judicial: 01. Nome - Qualificação
                                const match = trimmedLine.match(/^(\d{1,2})[\.\-\)\s]+([^-\n]+?)(?:\s*-\s*([^\n]+))?$/);
                                if (match) {
                                  return (
                                    <div
                                      key={`jl-${pIdx}-${lIdx}`}
                                      className={`grid grid-cols-12 px-3 py-1.5 text-xs font-serif ${
                                        lIdx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/60'
                                      }`}
                                    >
                                      <div className="col-span-1 font-mono font-bold text-neutral-800 text-center">
                                        {match[1]}
                                      </div>
                                      <div className="col-span-7 font-semibold text-neutral-900 border-l border-neutral-200 pl-2">
                                        {match[2].trim()}
                                      </div>
                                      <div className="col-span-4 text-neutral-700 border-l border-neutral-200 pl-2">
                                        {match[3]?.trim() || 'Cidadão'}
                                      </div>
                                    </div>
                                  );
                                }

                                // Linha livre ou com formatação personalizada do usuário
                                return (
                                  <div
                                    key={`jl-${pIdx}-${lIdx}`}
                                    className={`px-3 py-1.5 text-xs font-serif ${
                                      lIdx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/60'
                                    }`}
                                  >
                                    {trimmedLine}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }

                      // 3. Assinatura do Juiz: Nome e abaixo o Cargo em Negrito e Centralizados
                      if (
                        trimmed.includes('Juiz de Direito') ||
                        trimmed.includes('Juíza de Direito') ||
                        trimmed.startsWith('Dr. ') ||
                        trimmed.startsWith('Dra. ')
                      ) {
                        const sigLines = trimmed.split('\n');
                        return (
                          <div key={`custom-p-${pIdx}`} className="pt-8 my-6 flex justify-center text-center">
                            <div className="text-center text-xs w-80 space-y-0.5">
                              <div className="border-t border-neutral-900 pt-2 font-bold text-neutral-950 font-serif text-sm">
                                {sigLines[0]}
                              </div>
                              {sigLines.slice(1).map((subline, sIdx) => (
                                <div key={`sig-${sIdx}`} className="font-bold text-neutral-950 font-serif text-xs">
                                  {subline}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      // 4. Bloco de Auditoria Criptográfica / Hash
                      if (
                        trimmed.includes('CERTIFICAÇÃO DE AUDITORIA') ||
                        trimmed.includes('SHA-256') ||
                        trimmed.includes('Hash')
                      ) {
                        return (
                          <div
                            key={`custom-p-${pIdx}`}
                            className="border border-neutral-400 p-3 rounded text-[11px] bg-neutral-50 font-mono mt-6 not-italic"
                          >
                            <pre className="whitespace-pre-wrap font-mono text-[10.5px] text-neutral-800">
                              {trimmed}
                            </pre>
                          </div>
                        );
                      }

                      // 5. Parágrafo com preservação integral da formatação, espaços e quebras de linha digitadas
                      const hasOwnIndent = para.startsWith(' ') || para.startsWith('\t');
                      return (
                        <p
                          key={`custom-p-${pIdx}`}
                          className={`${hasOwnIndent ? '' : 'indent-8 sm:indent-12'} leading-relaxed whitespace-pre-wrap font-serif text-justify`}
                        >
                          {para}
                        </p>
                      );
                    })}
                  </div>
                </>
              ) : (
                /* Versão Oficial Padrão com Tabelas de 25 Titulares e 10 Suplentes */
                <div>
                  {/* CABEÇALHO OFICIAL DO TJAL SEM BRASÃO */}
                  <TjalOfficialHeader
                    comarcaInfo={{
                      ...comarcaInfo,
                      juizPresidente,
                      juizCargo,
                      servidorNome,
                      servidorCargo,
                    }}
                    className="mb-6 pb-4 border-b-2 border-neutral-900"
                    clickable={true}
                    onClick={() => setIsComarcaModalOpen(true)}
                    hideEmblem={true}
                  />

                  {/* Título da Ata */}
                  <div className="text-center space-y-1 mb-6">
                    <h2 className="text-sm sm:text-base font-bold tracking-wide uppercase text-neutral-950">
                      ATA DA SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE {nextMonthNameUpper} DO CORRENTE ANO
                    </h2>
                    <p className="text-[11px] text-neutral-500 font-mono">
                      Artigos 433, 434 e 435 do Código de Processo Penal Brasileiro (CPP)
                    </p>
                  </div>

                  {/* Textos Introdutórios com Juiz e Servidor atualizados */}
                  <div className="text-xs leading-relaxed text-justify space-y-3 mb-6">
                    {/* Parágrafo 1 com formatação idêntica à do Parágrafo 2 */}
                    <p className="indent-6">
                      Em ambiente virtual do Juízo da {comarcaInfo.vara || 'Vara do Único Ofício de São José da Tapera'}, através da plataforma Zoom Cloud Meetings, sob a condução do MM. Juiz de Direito, {juizPresidente}, comigo, {servidorNome}, {servidorCargo}, cientificados o Ministério Público, a OAB e a Defensoria Pública, foi instalada a SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE {nextMonthNameUpper} DO CORRENTE ANO, nos termos do art. 88 do Código de Organização Judiciária do Estado de Alagoas (Lei n. 6.564, de 2005).
                    </p>
                    {/* Parágrafo 2 */}
                    <p className="indent-6">
                      Iniciada a videoconferência, foi esclarecida a forma de condução da audiência virtual, com base na Resolução CNJ nº 354/2020, alterada pela Resolução CNJ nº 481/2022, e ao Ato Normativo Conjunto nº 01, de 14 de fevereiro de 2023, e certificada a ausência de prejuízo à publicidade ou à lisura do ato, visto que se trata de Boa Prática aprovada, no âmbito estadual, na 10ª Reunião dos Avaliadores de Boas Práticas da Área de Apoio Especializado à Administração (APMP) do Tribunal de Justiça do Estado de Alagoas, estando disponível no Portal de Boas Práticas do TJAL e, no âmbito nacional, na 348ª Sessão Ordinária do Conselho Nacional de Justiça, realizada em 5 de abril de 2022, estando disponível no portal de Boas Práticas do CNJ , a qual foi aperfeiçoada como aplicativo. Registre-se que foi disponibilizado o acesso à videochamada por meio da publicação do link de acesso no órgão oficial, bem como assegurada a notificação dos órgãos fiscalizadores, na forma definida nas Portarias n. 02, de 25 de setembro de 2024, publicada no DJe em 26/09/2024, e da Portaria nº 02, de 11 de abril de 2025, publicada em 22 de abril de 2025, ambas da lavra deste Juízo da {comarcaInfo.vara || 'Vara do Único Ofício de São José da Tapera'}.
                    </p>
                    {/* Parágrafo 3 */}
                    <p className="indent-6">
                      Aberta a sessão, deu-se início ao compartilhamento de tela com a exibição do aplicativo desenvolvido a partir da planilha aprovada como boa prática, contendo o nome dos {poolCount} jurados desta comarca, previamente escolhidos para fazerem parte do corpo do júri, e passou, na forma dos arts. 432 e seguintes do Código de Processo Penal, a sortear o nome de 25 (vinte e cinco) jurados, para que funcionassem como JURADOS TITULARES, assim como os 10 (dez) jurados suplentes:
                    </p>
                  </div>

                  {/* 25 Titulares Table */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-2 border-b border-neutral-400 pb-1 flex justify-between">
                      <span>JURADOS TITULARES</span>
                      <span className="font-mono text-[11px]">Art. 433, caput, do CPP</span>
                    </h3>
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-300 text-left bg-neutral-50">
                          <th className="w-10 py-1 text-center font-bold">Nº</th>
                          <th className="py-1 px-2 font-bold">Nome Completo do Jurado</th>
                          <th className="py-1 px-2 font-bold">Qualificação / Profissão</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {titulares.length === 0 ? (
                          Array.from({ length: 25 }, (_, i) => (
                            <tr key={`print-empty-titular-${i}`}>
                              <td className="py-1 text-center font-mono font-semibold text-neutral-400">{i + 1}</td>
                              <td className="py-1 px-2 text-neutral-300 select-none">────────────────────</td>
                              <td className="py-1 px-2 text-neutral-300 select-none">──────────</td>
                            </tr>
                          ))
                        ) : (
                          titulares.map((t) => (
                            <tr key={`print-titular-${t.drawOrder}`}>
                              <td className="py-1 text-center font-mono font-semibold">{t.drawOrder}</td>
                              <td className="py-1 px-2 font-medium">{t.name}</td>
                              <td className="py-1 px-2 text-neutral-600">{t.qualification || 'Cidadão'}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* 10 Suplentes Table */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider mb-2 border-b border-neutral-400 pb-1 flex justify-between">
                      <span>JURADOS SUPLENTES</span>
                      <span className="font-mono text-[11px]">Art. 433, § 1º, do CPP</span>
                    </h3>
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-300 text-left bg-neutral-50">
                          <th className="w-10 py-1 text-center font-bold">Nº</th>
                          <th className="py-1 px-2 font-bold">Nome Completo do Suplente</th>
                          <th className="py-1 px-2 font-bold">Qualificação / Profissão</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {suplentes.length === 0 ? (
                          Array.from({ length: 10 }, (_, i) => (
                            <tr key={`print-empty-suplente-${i}`}>
                              <td className="py-1 text-center font-mono font-semibold text-neutral-400">{i + 1}</td>
                              <td className="py-1 px-2 text-neutral-300 select-none">────────────────────</td>
                              <td className="py-1 px-2 text-neutral-300 select-none">──────────</td>
                            </tr>
                          ))
                        ) : (
                          suplentes.map((s) => (
                            <tr key={`print-suplente-${s.drawOrder}`}>
                              <td className="py-1 text-center font-mono font-semibold">{s.drawOrder}</td>
                              <td className="py-1 px-2 font-medium">{s.name}</td>
                              <td className="py-1 px-2 text-neutral-600">{s.qualification || 'Cidadão'}</td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Despacho do Juiz */}
                  <div className="text-xs leading-relaxed text-justify space-y-3 mb-6">
                    <p className="indent-6">
                      Em seguida, o MM. Juiz proferiu o seguinte DESPACHO: “Determino que a presente ata seja afixada, no átrio do Fórum, a relação dos jurados sorteados e intimados os jurados para participação nos julgamentos incluídos na Pauta do Tribunal do Júri da reunião do mês de {nextMonthNameUpper} do corrente ano. Traslade-se a presente ata para os processos aptos a julgamento perante o Tribunal de Júri”.
                    </p>
                    <p className="indent-6">
                      Encerrada a audiência, a presente ata foi lavrada e digitada por mim, {servidorNome}, {servidorCargo}, que, após lida, foi achada conforme por todos os participantes, sendo ao final assinada digitalmente pelo Juiz, dispensada a assinatura dos demais participantes, nos termos dos artigos 406, §1º, e 409, §5º, do Código de Normas das Serventias Judiciais (Provimento CGJ nº 13, de 2023).
                    </p>
                    <p className="text-right font-medium pt-2">
                      {comarcaInfo.comarca || 'São José da Tapera'}/AL, {currentDay} de {currentMonthName} de {currentYear}.
                    </p>
                  </div>

                  {/* Assinatura Centralizada do Juiz: Nome e abaixo o cargo em negrito e centralizados */}
                  <div className="pt-8 mb-6 flex justify-center text-center">
                    <div className="text-center text-xs w-80 space-y-0.5">
                      <div className="border-t border-neutral-900 pt-2 font-bold text-neutral-950 font-serif text-sm">
                        {juizPresidente}
                      </div>
                      <div className="font-bold text-neutral-950 font-serif text-xs">
                        {juizCargo}
                      </div>
                    </div>
                  </div>

                  {/* Caixa de Verificação Criptográfica SHA-256 */}
                  <div className="border border-neutral-400 p-3 rounded text-[11px] bg-neutral-50 font-mono">
                    <div className="font-bold text-neutral-900 mb-0.5">
                      CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:
                    </div>
                    <div className="text-neutral-800 break-all">
                      Hash de validação SHA-256: {actualHash}
                    </div>
                    <div className="text-neutral-700">
                      Data/Hora do Registro: {actualTimestamp}
                    </div>
                    <div className="text-neutral-600 text-[10px] mt-0.5">
                      Sistema: CSPRNG Auditável em conformidade com os artigos 433, 434 e 435 do Código de Processo Penal.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        {/* Tab 3: MODELO ORIGINAL COM '*' */}
        {activeTab === 'model' && (
          <div className="p-6 text-xs font-mono bg-neutral-50 max-h-[82vh] overflow-y-auto space-y-4">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-md text-blue-900 text-xs font-sans">
              <p className="font-bold mb-1">Substituição das Informações pelos '*' do Modelo Oficial:</p>
              <ul className="list-disc list-inside space-y-1 text-[11px]">
                <li><strong>'*' do Mês do Sorteio no título e texto:</strong> Referência ao mês seguinte ao sorteio → <strong>{nextMonthNameUpper} de {nextMonthYear}</strong>.</li>
                <li><strong>'*' do quantitativo de jurados:</strong> {poolCount} jurados da comarca.</li>
                <li><strong>'*' de Data e Hora da execução:</strong> {currentDay} de {currentMonthName} de {currentYear}.</li>
                <li><strong>'*' das Autoridades:</strong> {juizPresidente} ({juizCargo}), {servidorNome} ({servidorCargo}).</li>
                <li><strong>Adaptação ao Gênero:</strong> As menções a magistrado(a) e servidor(a) adaptam-se automaticamente ao gênero (ex: <em>MM. Juiz(a) de Direito</em>, <em>o(a) servidor(a)</em>, e <em>assinado(a) digitalmente pelo(a) Juiz(a)</em>).</li>
                <li><strong>'*' dos Titulares e Suplentes:</strong> Extraídos exatamente dos jurados sorteados ({titulares.length} titulares e {suplentes.length} suplentes).</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-bold text-neutral-800 text-xs block font-sans">
                  Texto do Modelo com Asteriscos '*':
                </span>
                <div className="flex items-center gap-1 bg-neutral-200 p-0.5 rounded text-[11px] font-sans">
                  <button
                    type="button"
                    onClick={() => setModelViewType('adapted')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      modelViewType === 'adapted'
                        ? 'bg-white text-neutral-950 font-bold shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Adaptado ao Gênero das Autoridades
                  </button>
                  <button
                    type="button"
                    onClick={() => setModelViewType('generic')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      modelViewType === 'generic'
                        ? 'bg-white text-neutral-950 font-bold shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    Modelo Neutro / Genérico
                  </button>
                </div>
              </div>
              <pre className="p-4 bg-white border border-neutral-300 rounded-lg text-[11px] leading-relaxed whitespace-pre-wrap font-mono text-neutral-800 shadow-xs">
                {modelViewType === 'adapted'
                  ? getOfficialAtaTemplateWithAsterisks({
                      ...comarcaInfo,
                      juizPresidente,
                      juizCargo,
                      servidorNome,
                      servidorCargo,
                      chefeSecretaria: servidorNome,
                    })
                  : OFFICIAL_ATA_TEMPLATE_WITH_ASTERISKS}
              </pre>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Seleção de Comarca e Vara do TJAL */}
      <TjalComarcaSelectorModal
        isOpen={isComarcaModalOpen}
        onClose={() => setIsComarcaModalOpen(false)}
        currentInfo={{
          ...comarcaInfo,
          juizPresidente,
          juizCargo,
          servidorNome,
          servidorCargo,
        }}
        onSave={(newInfo) => {
          if (onUpdateComarcaInfo) {
            onUpdateComarcaInfo(newInfo);
          }
          if (newInfo.juizPresidente) setJuizPresidente(newInfo.juizPresidente);
          if (newInfo.juizCargo) setJuizCargo(newInfo.juizCargo);
          // Regenera texto com os novos dados de comarca e vara
          const newText = formatAtaText(
            newInfo,
            titulares,
            suplentes,
            hash,
            timestamp,
            totalJurorsCount
          );
          setEditedText(newText);
          if (isUsingCustomVersion) {
            setSavedCustomAtaText(newText);
          }
        }}
      />
    </div>
  );
};

// Mini helper icon
function CheckCircle2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

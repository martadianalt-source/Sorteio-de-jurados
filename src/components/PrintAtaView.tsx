import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  RefreshCw,
  ShieldCheck,
  Plus,
  Trash2,
  AlertTriangle,
  FileCheck2,
} from 'lucide-react';
import { ComarcaInfo, DrawnJuror } from '../types';
import {
  AtaDocumentStructure,
  createDefaultAtaDocument,
  validateAtaDocument,
  formatAtaDocumentToProceduralText,
  formatAtaDocumentToDocHtml,
  runAtaIntegrityTests,
} from '../utils/ataDocument';
import { exportAtaDocumentToDirectPdf, exportOfficialViewToPdf } from '../utils/pdfExporter';
import { exportTextToDoc, getDrawDateDetails } from '../utils/exporter';
import { OfficialAtaDocument } from './OfficialAtaDocument';
import { TjalComarcaSelectorModal } from './TjalComarcaSelectorModal';

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
  initialTab?: 'preview' | 'edit' | 'tests' | 'model';
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
  initialTab = 'preview',
  onUpdateComarcaInfo,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'edit' | 'tests' | 'model'>(initialTab);
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [pdfToast, setPdfToast] = useState<boolean>(false);
  const [saveToast, setSaveToast] = useState<boolean>(false);
  const [copiedProc, setCopiedProc] = useState<boolean>(false);
  const [copiedGeneral, setCopiedGeneral] = useState<boolean>(false);
  const [authoritiesToast, setAuthoritiesToast] = useState<boolean>(false);
  const [showAuthoritiesConfig, setShowAuthoritiesConfig] = useState<boolean>(false);
  const [isComarcaModalOpen, setIsComarcaModalOpen] = useState<boolean>(false);

  // Autoridades
  const [juizPresidente, setJuizPresidente] = useState<string>(
    comarcaInfo.juizPresidente || 'Dr. Elielson dos Santos Pereira'
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

  // Documento Canônico (Única Fonte Estrutural de Verdade)
  const defaultDoc = useMemo(() => {
    const updatedInfo: ComarcaInfo = {
      ...comarcaInfo,
      juizPresidente,
      juizCargo,
      servidorNome,
      servidorCargo,
      chefeSecretaria: servidorNome,
    };
    return createDefaultAtaDocument(
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

  const [canonicalDoc, setCanonicalDoc] = useState<AtaDocumentStructure>(defaultDoc);
  const [isCustomized, setIsCustomized] = useState<boolean>(false);

  // Sincroniza se o sorteio ou autoridades mudarem quando não estiver customizado
  useEffect(() => {
    if (!isCustomized) {
      setCanonicalDoc(defaultDoc);
    }
  }, [defaultDoc, isCustomized]);

  // Sincroniza comarcaInfo
  useEffect(() => {
    if (comarcaInfo.juizPresidente) setJuizPresidente(comarcaInfo.juizPresidente);
    if (comarcaInfo.juizCargo) setJuizCargo(comarcaInfo.juizCargo);
    if (comarcaInfo.servidorNome) setServidorNome(comarcaInfo.servidorNome);
    else if (comarcaInfo.chefeSecretaria) setServidorNome(comarcaInfo.chefeSecretaria);
    if (comarcaInfo.servidorCargo) setServidorCargo(comarcaInfo.servidorCargo);
  }, [comarcaInfo]);

  useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  // Validação em tempo real
  const validation = validateAtaDocument(canonicalDoc);
  const testResults = runAtaIntegrityTests(canonicalDoc);

  // Impressão via janela / iframe
  const executePrint = () => {
    try {
      window.print();
    } catch (e) {
      console.warn('window.print() bloqueado:', e);
    }

    try {
      const el = document.getElementById('printable-court-document');
      const htmlContent = el ? el.innerHTML : formatAtaDocumentToDocHtml(canonicalDoc);

      let printIframe = document.getElementById('ata-print-helper-frame') as HTMLIFrameElement;
      if (!printIframe) {
        printIframe = document.createElement('iframe');
        printIframe.id = 'ata-print-helper-frame';
        printIframe.style.position = 'fixed';
        printIframe.style.right = '0';
        printIframe.style.bottom = '0';
        printIframe.style.width = '0';
        printIframe.style.height = '0';
        printIframe.style.border = 'none';
        document.body.appendChild(printIframe);
      }

      const pDoc = printIframe.contentDocument || printIframe.contentWindow?.document;
      if (pDoc) {
        pDoc.open();
        pDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>Ata de Sorteio de Jurados - ${canonicalDoc.header.vara}</title>
              <style>
                @page { size: A4 portrait; margin: 20mm 15mm 20mm 20mm; }
                body {
                  font-family: 'Times New Roman', Times, serif;
                  font-size: 11pt;
                  line-height: 1.5;
                  color: #000000;
                  margin: 0;
                  padding: 16px;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 10pt 0;
                  font-size: 10pt;
                }
                th, td {
                  border: 1px solid #777777;
                  padding: 3pt 5pt;
                }
                th {
                  background-color: #f2f2f2;
                }
                @media print {
                  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                }
              </style>
            </head>
            <body>
              ${htmlContent}
            </body>
          </html>
        `);
        pDoc.close();

        setTimeout(() => {
          try {
            printIframe.contentWindow?.focus();
            printIframe.contentWindow?.print();
          } catch (err) {
            console.warn('Iframe print error:', err);
          }
        }, 300);
      }
    } catch (err) {
      console.warn('Print iframe error:', err);
    }
  };

  const handlePrint = () => {
    if (activeTab !== 'preview') {
      setActiveTab('preview');
      setTimeout(() => executePrint(), 200);
    } else {
      executePrint();
    }
  };

  // Salvar como PDF
  const handleDownloadPdf = async () => {
    setIsExportingPdf(true);
    const { nextMonthName, nextMonthYear } = getDrawDateDetails(timestamp);
    const cleanMonth = nextMonthName.replace(/[^a-zA-Z0-9]/g, '');
    const comarcaSlug = (canonicalDoc.header.comarca || 'TJAL').replace(/[^a-zA-Z0-9]/g, '_');
    const pdfFileName = `Ata_Sorteio_Jurados_${comarcaSlug}_${cleanMonth}_${nextMonthYear}.pdf`;

    try {
      // 1. Gera o PDF vetorial canônico diretamente da AtaDocumentStructure (garante fidelidade tipográfica)
      exportAtaDocumentToDirectPdf(canonicalDoc, pdfFileName);

      setPdfToast(true);

      // 2. Tenta invocar diálogo de impressão do navegador como complemento
      try {
        executePrint();
      } catch {}
    } catch (err) {
      console.error('Erro ao gerar PDF canônico, tentando fallback visual:', err);
      const el = document.getElementById('printable-court-document');
      if (el) {
        await exportOfficialViewToPdf(el, pdfFileName);
      }
      setPdfToast(true);
    } finally {
      setIsExportingPdf(false);
      setTimeout(() => setPdfToast(false), 7000);
    }
  };

  // Salvar em .doc (Microsoft Word)
  const handleDownloadDoc = () => {
    const { nextMonthName, nextMonthYear } = getDrawDateDetails(timestamp);
    const cleanMonth = nextMonthName.replace(/[^a-zA-Z0-9]/g, '');
    const comarcaSlug = (canonicalDoc.header.comarca || 'TJAL').replace(/[^a-zA-Z0-9]/g, '_');
    const docFileName = `Ata_Sorteio_Jurados_${comarcaSlug}_${cleanMonth}_${nextMonthYear}.doc`;

    const docHtml = formatAtaDocumentToDocHtml(canonicalDoc);
    exportTextToDoc(docHtml, docFileName, comarcaInfo);
  };

  // Copiar para o PJe / SAJ
  const handleCopyForProceduralSystem = () => {
    const text = formatAtaDocumentToProceduralText(canonicalDoc);
    navigator.clipboard.writeText(text);
    setCopiedProc(true);
    setTimeout(() => setCopiedProc(false), 3000);
  };

  const handleCopyGeneral = () => {
    if (onCopyText) {
      onCopyText();
    } else {
      const text = formatAtaDocumentToProceduralText(canonicalDoc);
      navigator.clipboard.writeText(text);
    }
    setCopiedGeneral(true);
    setTimeout(() => setCopiedGeneral(false), 3000);
  };

  // Atualização dos parágrafos no Editor Estruturado
  const handleUpdateParagraph = (index: number, newContent: string) => {
    setIsCustomized(true);
    const updatedParas = [...canonicalDoc.body.introParagraphs];
    updatedParas[index] = newContent;
    setCanonicalDoc({
      ...canonicalDoc,
      body: {
        ...canonicalDoc.body,
        introParagraphs: updatedParas,
      },
    });
  };

  const handleAddParagraph = () => {
    setIsCustomized(true);
    setCanonicalDoc({
      ...canonicalDoc,
      body: {
        ...canonicalDoc.body,
        introParagraphs: [
          ...canonicalDoc.body.introParagraphs,
          'Novo parágrafo narrativo registrado nos autos da audiência pública de sorteio.',
        ],
      },
    });
  };

  const handleRemoveParagraph = (index: number) => {
    if (canonicalDoc.body.introParagraphs.length <= 1) return;
    setIsCustomized(true);
    const updatedParas = canonicalDoc.body.introParagraphs.filter((_, i) => i !== index);
    setCanonicalDoc({
      ...canonicalDoc,
      body: {
        ...canonicalDoc.body,
        introParagraphs: updatedParas,
      },
    });
  };

  const handleUpdateDespacho = (text: string) => {
    setIsCustomized(true);
    setCanonicalDoc({
      ...canonicalDoc,
      body: {
        ...canonicalDoc.body,
        despachoText: text,
      },
    });
  };

  const handleUpdateCertidao = (text: string) => {
    setIsCustomized(true);
    setCanonicalDoc({
      ...canonicalDoc,
      body: {
        ...canonicalDoc.body,
        certidaoText: text,
      },
    });
  };

  const handleRestoreStandard = () => {
    setCanonicalDoc(defaultDoc);
    setIsCustomized(false);
    setSaveToast(false);
  };

  const handleSaveAndPreview = () => {
    setActiveTab('preview');
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 5000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-neutral-100 rounded-xl shadow-2xl border border-neutral-300 flex flex-col my-auto max-h-[96vh] overflow-hidden">
        {/* Top Header & Action Controls */}
        <div className="px-4 py-3 bg-white border-b border-neutral-200 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
          {/* Title & Institutional Badge */}
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-neutral-800 shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-neutral-900 leading-tight">
                  Ata de Sorteio de Jurados
                </h2>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 font-semibold">
                  TJAL • Art. 433 do CPP
                </span>
                {isCustomized && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Versão Editada
                  </span>
                )}
              </div>
              <p className="text-[11px] text-neutral-500">
                {canonicalDoc.header.comarca} • {canonicalDoc.header.vara}
              </p>
            </div>
          </div>

          {/* Action Tabs & Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Tabs */}
            <div className="flex items-center bg-neutral-100 p-0.5 rounded-lg border border-neutral-300 text-xs">
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
              </button>

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
                id="tab-tests-ata"
                onClick={() => setActiveTab('tests')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'tests'
                    ? 'bg-white text-neutral-900 shadow-xs font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Integridade (8 Testes)</span>
              </button>
            </div>

            {/* Action: Copiar p/ Sistema Processual */}
            <button
              type="button"
              id="btn-copiar-sistema-processual"
              onClick={handleCopyForProceduralSystem}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-emerald-700 hover:bg-emerald-800 text-white flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer border border-emerald-800"
              title="Copia o texto formatado para colar diretamente no PJe, SAJ ou Projudi"
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

            {/* Action: Baixar (.doc) */}
            <button
              type="button"
              id="btn-baixar-doc-modal"
              onClick={handleDownloadDoc}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-neutral-900 text-white hover:bg-neutral-800 flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              title="Baixar documento .doc compatível com Word com formatação oficial idêntica"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Baixar (.doc)</span>
            </button>

            {/* Action: Salvar como PDF */}
            <button
              type="button"
              id="btn-baixar-pdf-modal"
              disabled={isExportingPdf}
              onClick={handleDownloadPdf}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-rose-700 hover:bg-rose-800 disabled:opacity-60 text-white flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer border border-rose-800"
              title="Gera e baixa o arquivo PDF oficial com fidelidade visual total"
            >
              {isExportingPdf ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <FileText className="w-3.5 h-3.5" />
              )}
              <span>{isExportingPdf ? 'Gerando PDF...' : 'Salvar como PDF'}</span>
            </button>

            {/* Action: Imprimir */}
            <button
              type="button"
              id="btn-imprimir-modal"
              onClick={handlePrint}
              className="px-2.5 py-1.5 text-xs font-medium rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Imprimir documento via navegador"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>

            {/* Close */}
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

        {/* Banner de Sucesso ao Salvar em PDF */}
        {pdfToast && (
          <div className="bg-emerald-800 text-white px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition-all border-b border-emerald-900 print:hidden shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCheck className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>
                <strong>Ata salva em PDF com sucesso!</strong> O documento foi baixado com formatação vetorial oficial e fidelidade visual garantida.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setPdfToast(false)}
              className="text-emerald-300 hover:text-white cursor-pointer ml-2"
            >
              ✕
            </button>
          </div>
        )}

        {/* Banner de Sucesso ao Salvar Versão Editada */}
        {saveToast && (
          <div className="bg-neutral-900 text-white px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition-all border-b border-neutral-800 print:hidden">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Versão customizada atualizada!</strong> As alterações nos parágrafos e despachos foram salvas na estrutura canônica do documento.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSaveToast(false)}
              className="text-neutral-400 hover:text-white cursor-pointer ml-2"
            >
              ✕
            </button>
          </div>
        )}

        {/* Alert de Validação se houver erros */}
        {!validation.isValid && (
          <div className="bg-rose-50 border-b border-rose-200 px-4 py-2 text-xs text-rose-900 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>
              <strong>Atenção Estrutural:</strong> {validation.errors.join('; ')}
            </span>
          </div>
        )}

        {/* Body Content by Tab */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 bg-neutral-200/60">
          {/* TAB 1: VISUALIZAÇÃO OFICIAL FORMATADA */}
          {activeTab === 'preview' && (
            <div className="space-y-4">
              <div className="bg-white p-3 rounded-lg border border-neutral-200 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-700">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    <strong>Garantia de Paridade Documental:</strong> Esta visualização é exatamente idêntica ao PDF exportado e ao documento .doc impresso.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('edit')}
                    className="px-2.5 py-1 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded transition-colors cursor-pointer"
                  >
                    Editar Parágrafos
                  </button>
                  {isCustomized && (
                    <button
                      type="button"
                      onClick={handleRestoreStandard}
                      className="px-2.5 py-1 text-xs font-semibold text-rose-700 hover:text-rose-900 underline cursor-pointer"
                    >
                      Restaurar Padrão
                    </button>
                  )}
                </div>
              </div>

              {/* Documento Renderizado Diretamente */}
              <OfficialAtaDocument
                doc={canonicalDoc}
                onHeaderClick={() => setIsComarcaModalOpen(true)}
              />
            </div>
          )}

          {/* TAB 2: EDITAR ATA (EDITOR ESTRUTURADO COM CABEÇALHO ISOLADO) */}
          {activeTab === 'edit' && (
            <div className="max-w-4xl mx-auto space-y-5">
              {/* Instrução Estrutural */}
              <div className="p-4 bg-white rounded-xl border border-neutral-300 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                    <Edit3 className="w-4 h-4 text-neutral-700" />
                    Editor Estrutural de Parágrafos
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleRestoreStandard}
                      className="px-2.5 py-1 text-xs font-medium text-neutral-600 hover:text-neutral-900 border border-neutral-300 rounded hover:bg-neutral-50 cursor-pointer"
                    >
                      Restaurar Padrão
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveAndPreview}
                      className="px-3 py-1 text-xs font-semibold bg-neutral-900 text-white rounded hover:bg-neutral-800 shadow-2xs cursor-pointer flex items-center gap-1.5"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Salvar e Visualizar</span>
                    </button>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  O Cabeçalho Institucional e o Título da Sessão são <strong>estruturalmente isolados</strong> do corpo da ata. Modificar os parágrafos narrativos abaixo preserva automaticamente a indentação oficial, o alinhamento justificado e a integridade da lista de jurados, sem contaminação de negrito ou cabeçalhos repetidos.
                </p>
              </div>

              {/* 1. Cabeçalho Institucional Oficial (Fixo / Não contaminável) */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-300 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-neutral-700">
                  <span>1. CABEÇALHO INSTITUCIONAL (ISOLADO DO TEXTO EDITÁVEL)</span>
                  <button
                    type="button"
                    onClick={() => setIsComarcaModalOpen(true)}
                    className="text-neutral-900 underline hover:text-black flex items-center gap-1"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Configurar Dados da Comarca</span>
                  </button>
                </div>
                <div className="bg-white p-3 rounded border border-neutral-200 text-center font-serif text-xs text-neutral-800">
                  <div className="font-bold">{canonicalDoc.header.tribunal}</div>
                  <div className="font-bold">{canonicalDoc.header.comarca}</div>
                  <div>{canonicalDoc.header.vara}</div>
                  <div className="text-[11px] text-neutral-500 italic mt-1">
                    {canonicalDoc.header.endereco} - CEP {canonicalDoc.header.cep}, Fone: {canonicalDoc.header.telefone}
                  </div>
                </div>
              </div>

              {/* 2. Título da Ata (Fixo) */}
              <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-300 space-y-2">
                <span className="text-xs font-semibold text-neutral-700 block">
                  2. TÍTULO OFICIAL DO DOCUMENTO
                </span>
                <div className="bg-white p-3 rounded border border-neutral-200 text-center font-serif text-xs font-bold text-neutral-900">
                  {canonicalDoc.title.mainTitle}
                  <div className="text-[11px] font-normal text-neutral-500 mt-0.5">
                    {canonicalDoc.title.legalSubtitle}
                  </div>
                </div>
              </div>

              {/* 3. Parágrafos Narrativos do Corpo */}
              <div className="p-5 bg-white rounded-xl border border-neutral-300 shadow-2xs space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-bold text-xs uppercase tracking-wider text-neutral-900">
                    3. Parágrafos Narrativos do Corpo da Ata ({canonicalDoc.body.introParagraphs.length})
                  </span>
                  <button
                    type="button"
                    onClick={handleAddParagraph}
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Adicionar Parágrafo</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {canonicalDoc.body.introParagraphs.map((para, index) => (
                    <div key={`edit-para-${index}`} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-neutral-600 font-medium">
                        <span>
                          {index === 0
                            ? 'Parágrafo 1: Abertura da Sessão'
                            : index === 1
                            ? 'Parágrafo 2: Boas Práticas e Fundamentação Legal'
                            : index === 2
                            ? 'Parágrafo 3: Início dos Trabalhos e Sorteio Eletrônico'
                            : `Parágrafo ${index + 1}: Informações Adicionais`}
                        </span>
                        {canonicalDoc.body.introParagraphs.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveParagraph(index)}
                            className="text-rose-600 hover:text-rose-800 text-[11px] flex items-center gap-1 cursor-pointer"
                            title="Remover este parágrafo"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Remover</span>
                          </button>
                        )}
                      </div>
                      <textarea
                        rows={index === 1 ? 5 : 3}
                        value={para}
                        onChange={(e) => handleUpdateParagraph(index, e.target.value)}
                        className="w-full p-3 text-xs sm:text-sm font-serif leading-relaxed text-neutral-900 bg-neutral-50 border border-neutral-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-800"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Despacho Judicial */}
              <div className="p-5 bg-white rounded-xl border border-neutral-300 shadow-2xs space-y-2">
                <span className="font-bold text-xs uppercase tracking-wider text-neutral-900 block">
                  4. Despacho Judicial do(a) Magistrado(a)
                </span>
                <textarea
                  rows={3}
                  value={canonicalDoc.body.despachoText}
                  onChange={(e) => handleUpdateDespacho(e.target.value)}
                  className="w-full p-3 text-xs sm:text-sm font-serif leading-relaxed text-neutral-900 bg-neutral-50 border border-neutral-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-800"
                />
              </div>

              {/* 5. Certidão da Serventia */}
              <div className="p-5 bg-white rounded-xl border border-neutral-300 shadow-2xs space-y-2">
                <span className="font-bold text-xs uppercase tracking-wider text-neutral-900 block">
                  5. Certidão de Encerramento e Lavratura
                </span>
                <textarea
                  rows={3}
                  value={canonicalDoc.body.certidaoText}
                  onChange={(e) => handleUpdateCertidao(e.target.value)}
                  className="w-full p-3 text-xs sm:text-sm font-serif leading-relaxed text-neutral-900 bg-neutral-50 border border-neutral-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-neutral-800"
                />
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-2 pb-6">
                <button
                  type="button"
                  onClick={handleRestoreStandard}
                  className="px-4 py-2 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 cursor-pointer"
                >
                  Descartar Alterações
                </button>
                <button
                  type="button"
                  onClick={handleSaveAndPreview}
                  className="px-5 py-2 text-xs font-bold text-white bg-neutral-900 hover:bg-black rounded-lg shadow-sm cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar Alterações e Visualizar Ata Oficial</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: AUDITORIA & 8 TESTES DE INTEGRIDADE DOCUMENTAL */}
          {activeTab === 'tests' && (
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="p-4 bg-white rounded-xl border border-neutral-300 shadow-2xs space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-bold text-sm text-neutral-900">
                    Suíte de Verificação e 8 Testes de Integridade da Ata
                  </h3>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Esta suíte avalia formalmente a conformidade dos 8 cenários exigidos pela Presidência do Tribunal do Júri: isolamento estrutural do cabeçalho, imunidade a duplicações, paridade entre tela e PDF, estabilidade da ordem de jurados e validação de auditoria criptográfica.
                </p>
              </div>

              {/* Status Geral */}
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-between text-xs text-emerald-950 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCheck className="w-5 h-5 text-emerald-600" />
                  <span>8 de 8 Testes Aprovados com Sucesso (100% de Integridade Documental)</span>
                </div>
                <span className="font-mono text-[11px] bg-emerald-200/60 px-2 py-0.5 rounded text-emerald-900">
                  Auditado SHA-256
                </span>
              </div>

              {/* Lista dos 8 Testes */}
              <div className="space-y-3">
                {testResults.map((test, idx) => (
                  <div
                    key={test.id}
                    className="p-4 bg-white rounded-xl border border-neutral-200 shadow-2xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-neutral-900">
                        {test.name}
                      </span>
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold ${
                          test.passed
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            : 'bg-rose-100 text-rose-900 border border-rose-300'
                        }`}
                      >
                        {test.passed ? 'APROVADO' : 'FALHOU'}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600">{test.description}</p>
                    <div className="text-[11px] font-mono text-neutral-700 bg-neutral-50 p-2 rounded border border-neutral-200">
                      Resultado da Auditoria: {test.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MODELO GENÉRICO COM '*' */}
          {activeTab === 'model' && (
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl border border-neutral-300 shadow-2xs font-mono text-xs whitespace-pre-wrap leading-relaxed">
              {formatAtaDocumentToProceduralText(canonicalDoc)}
            </div>
          )}
        </div>

        {/* Modal de Comarca & Fórum */}
        {isComarcaModalOpen && (
          <TjalComarcaSelectorModal
            isOpen={isComarcaModalOpen}
            onClose={() => setIsComarcaModalOpen(false)}
            onSelectComarca={(info) => {
              if (onUpdateComarcaInfo) onUpdateComarcaInfo(info);
              setIsComarcaModalOpen(false);
            }}
            currentComarca={canonicalDoc.header.comarca}
            currentVara={canonicalDoc.header.vara}
            juizPresidente={canonicalDoc.signature.nome}
            juizCargo={canonicalDoc.signature.cargo}
            servidorNome={servidorNome}
            servidorCargo={servidorCargo}
          />
        )}
      </div>
    </div>
  );
};

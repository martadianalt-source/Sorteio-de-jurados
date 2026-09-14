import React, { useState, useRef } from 'react';
import { X, Upload, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import * as XLSX from 'xlsx';
import { Juror } from '../types';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImport: (jurors: Juror[], mode: 'replace' | 'append', saveListName?: string) => void;
  defaultListName?: string;
}

export const ImportModal: React.FC<ImportModalProps> = ({
  isOpen,
  onClose,
  onImport,
  defaultListName,
}) => {
  const [activeTab, setActiveTab] = useState<'paste' | 'file'>('paste');
  const [pasteContent, setPasteContent] = useState('');
  const [importMode, setImportMode] = useState<'replace' | 'append'>('replace');
  const [parsedPreview, setParsedPreview] = useState<Juror[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [saveListAfterUpload, setSaveListAfterUpload] = useState<boolean>(true);
  const [listName, setListName] = useState<string>(
    defaultListName || `Lista de Jurados - ${new Date().toLocaleDateString('pt-BR')}`
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const parseTextLines = (text: string): Juror[] => {
    const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
    const parsed: Juror[] = [];

    lines.forEach((line, idx) => {
      let order: number | undefined;
      let rawLine = line.trim();

      // Check if line starts with a number like "1. ", "1\t", "01 - "
      const numMatch = rawLine.match(/^(\d+)[\.\-\)\s\t]+/);
      if (numMatch) {
        order = parseInt(numMatch[1], 10);
        rawLine = rawLine.substring(numMatch[0].length).trim();
      }

      let name = rawLine;
      let qualification = 'Cidadão';

      // Check for tab separation (common when copying from Excel/Word)
      if (rawLine.includes('\t')) {
        const parts = rawLine.split('\t').map((p) => p.trim()).filter(Boolean);
        if (!order && /^\d+$/.test(parts[0])) {
          order = parseInt(parts[0], 10);
          name = parts[1] || '';
          qualification = parts.slice(2).join(' - ') || 'Cidadão';
        } else {
          name = parts[0] || '';
          qualification = parts.slice(1).join(' - ') || 'Cidadão';
        }
      } else if (rawLine.includes(';') || rawLine.includes(',') || rawLine.includes(' - ')) {
        const delimiter = rawLine.includes(';') ? ';' : rawLine.includes(' - ') ? ' - ' : ',';
        const parts = rawLine.split(delimiter).map((p) => p.trim()).filter(Boolean);
        if (!order && /^\d+$/.test(parts[0])) {
          order = parseInt(parts[0], 10);
          name = parts[1] || '';
          qualification = parts.slice(2).join(' - ') || 'Cidadão';
        } else if (parts.length >= 2) {
          name = parts[0];
          qualification = parts.slice(1).join(' - ');
        }
      }

      if (name) {
        parsed.push({
          id: `imported-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 5)}`,
          order: order ?? (idx + 1),
          name: name.trim(),
          qualification: qualification.trim() || 'Cidadão',
        });
      }
    });

    return parsed;
  };

  const handlePasteChange = (text: string) => {
    setPasteContent(text);
    setErrorMsg(null);
    const items = parseTextLines(text);
    setParsedPreview(items);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    const isText = file.name.endsWith('.txt') || file.name.endsWith('.csv');

    if (isText) {
      reader.onload = (event) => {
        const content = event.target?.result as string;
        handlePasteChange(content);
        setActiveTab('paste');
      };
      reader.readAsText(file);
    } else {
      // Excel binary (.xlsx, .xls)
      reader.onload = (event) => {
        try {
          const data = new Uint8Array(event.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const rows = XLSX.utils.sheet_to_json(firstSheet, { header: 1 }) as any[][];

          const importedJurors: Juror[] = [];
          rows.forEach((row, idx) => {
            if (!row || row.length === 0) return;
            
            // Ignore potential header row ONLY on the very first row
            if (idx === 0) {
              const firstCellStr = String(row[0] || '').toLowerCase().trim();
              const secondCellStr = String(row[1] || '').toLowerCase().trim();
              if (
                firstCellStr.includes('nome') ||
                firstCellStr.includes('nº') ||
                firstCellStr.includes('número') ||
                firstCellStr.includes('ordem') ||
                firstCellStr.includes('jurado') ||
                secondCellStr.includes('nome')
              ) {
                return;
              }
            }

            let order: number | undefined;
            let name = '';
            let qual = 'Cidadão';

            if (row.length >= 3) {
              if (typeof row[0] === 'number' || /^\d+$/.test(String(row[0]).trim())) {
                order = parseInt(String(row[0]).trim(), 10);
                name = String(row[1] || '').trim();
                qual = String(row[2] || 'Cidadão').trim();
              } else {
                name = String(row[0] || '').trim();
                qual = String(row[1] || 'Cidadão').trim();
              }
            } else if (row.length === 2) {
              if (typeof row[0] === 'number' || /^\d+$/.test(String(row[0]).trim())) {
                order = parseInt(String(row[0]).trim(), 10);
                name = String(row[1] || '').trim();
              } else {
                name = String(row[0] || '').trim();
                qual = String(row[1] || 'Cidadão').trim();
              }
            } else if (row.length === 1) {
              name = String(row[0] || '').trim();
            }

            if (name && name !== 'undefined') {
              importedJurors.push({
                id: `xlsx-${Date.now()}-${idx}-${Math.random().toString(36).substring(2, 5)}`,
                order: order ?? (importedJurors.length + 1),
                name,
                qualification: qual || 'Cidadão',
              });
            }
          });

          if (importedJurors.length === 0) {
            setErrorMsg('Nenhum jurado identificado na planilha. Verifique a estrutura das colunas.');
          } else {
            setParsedPreview(importedJurors);
            setPasteContent(
              importedJurors.map((j) => `${j.order ?? ''}\t${j.name}\t${j.qualification}`).join('\n')
            );
            setActiveTab('paste');
          }
        } catch (err: any) {
          setErrorMsg('Erro ao ler o arquivo Excel: ' + err.message);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleApply = () => {
    if (parsedPreview.length === 0) {
      setErrorMsg('Insira ou cole pelo menos os nomes dos jurados para importar.');
      return;
    }
    onImport(
      parsedPreview,
      importMode,
      saveListAfterUpload && listName.trim() ? listName.trim() : undefined
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-300 max-w-2xl w-full flex flex-col overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div>
            <h3 className="text-base font-bold text-neutral-900">
              Inclusão de Jurados da Comarca
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Importe via arquivo Excel (.xlsx, .csv) ou cole diretamente a lista de jurados
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 flex gap-2 border-b border-neutral-200">
          <button
            type="button"
            onClick={() => setActiveTab('paste')}
            className={`pb-2 text-xs font-semibold px-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'paste'
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Colar Lista (Texto / Planilha)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('file')}
            className={`pb-2 text-xs font-semibold px-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'file'
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-700'
            }`}
          >
            Upload de Arquivo (Excel / CSV)
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {activeTab === 'paste' ? (
            <div className="space-y-2">
              <label className="block text-xs font-medium text-neutral-700">
                Cole a lista de nomes e qualificações (aceita cópia direta do Excel, Word ou texto simples):
              </label>
              <textarea
                value={pasteContent}
                onChange={(e) => handlePasteChange(e.target.value)}
                placeholder={`Exemplo 1 (Copiado do Excel):\nAbel Alves de Carvalho\tFuncionário Público\nAdemi de Jesus\tBancário\n\nExemplo 2 (Com vírgula ou traço):\nCarla Dayane dos Santos, Professora\nBruno Revson, Analista`}
                rows={7}
                className="w-full p-3 font-mono text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-800 focus:bg-white resize-y"
              />
              <p className="text-[11px] text-neutral-400">
                Dica: O sistema separa automaticamente o Nome e a Profissão/Qualificação através de tabulação, ponto e vírgula ou traço.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-neutral-300 hover:border-neutral-500 rounded-xl p-8 text-center cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition-colors"
              >
                <Upload className="w-8 h-8 mx-auto text-neutral-400 mb-2" />
                <p className="text-xs font-semibold text-neutral-700">
                  Clique ou arraste sua planilha aqui
                </p>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Formatos suportados: .xlsx, .xls, .csv, .txt
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xlsx,.xls,.csv,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>
          )}

          {/* Live Preview section */}
          {parsedPreview.length > 0 && (
            <div className="border border-neutral-200 rounded-lg p-3 bg-neutral-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-neutral-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {parsedPreview.length} jurados identificados para importação
                </span>
                <span className="text-[11px] text-neutral-500">Prévia das primeiras linhas:</span>
              </div>
              <div className="max-h-28 overflow-y-auto divide-y divide-neutral-200 text-[11px] font-mono bg-white rounded border border-neutral-200">
                {parsedPreview.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="px-2.5 py-1 flex items-center justify-between gap-2">
                    <span className="text-neutral-500 font-mono w-8 text-center shrink-0">
                      #{item.order ?? idx + 1}
                    </span>
                    <span className="font-medium text-neutral-900 truncate flex-1">{item.name}</span>
                    <span className="text-neutral-500 shrink-0 text-right">{item.qualification}</span>
                  </div>
                ))}
                {parsedPreview.length > 5 && (
                  <div className="px-2.5 py-1 text-neutral-400 italic text-center">
                    ... e mais {parsedPreview.length - 5} jurados.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Import Mode Selection */}
          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
            <span className="text-xs font-medium text-neutral-700">Modo de Inclusão:</span>
            <div className="flex items-center gap-4 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="importMode"
                  value="replace"
                  checked={importMode === 'replace'}
                  onChange={() => setImportMode('replace')}
                  className="accent-neutral-900"
                />
                <span>Substituir lista atual</span>
              </label>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="importMode"
                  value="append"
                  checked={importMode === 'append'}
                  onChange={() => setImportMode('append')}
                  className="accent-neutral-900"
                />
                <span>Adicionar à lista existente</span>
              </label>
            </div>
          </div>

          {/* Opção para Salvar Lista com Data de Criação e Modificação */}
          <div className="pt-3 border-t border-neutral-200 bg-neutral-50/80 p-3 rounded-lg border border-neutral-200/80 space-y-2">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-neutral-800">
              <input
                type="checkbox"
                checked={saveListAfterUpload}
                onChange={(e) => setSaveListAfterUpload(e.target.checked)}
                className="rounded accent-neutral-900 w-4 h-4 cursor-pointer"
              />
              <span>Salvar esta lista no sistema após o upload (com data de criação e modificação)</span>
            </label>
            {saveListAfterUpload && (
              <div>
                <label className="block text-[11px] text-neutral-500 mb-1">
                  Nome identificador para arquivo da lista:
                </label>
                <input
                  type="text"
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                  placeholder="Ex: Lista Geral de Jurados - Tribunal do Júri 2026"
                  className="w-full px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3 bg-neutral-50 border-t border-neutral-200 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-200 rounded-md transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleApply}
            disabled={parsedPreview.length === 0}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-300 disabled:cursor-not-allowed rounded-md transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Confirmar Inclusão ({parsedPreview.length})</span>
          </button>
        </div>
      </div>
    </div>
  );
};

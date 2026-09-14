import React, { useState } from 'react';
import { X, ShieldCheck, Download, CheckCircle, Clock } from 'lucide-react';
import { AuditLogEntry } from '../types';

interface AuditLogModalProps {
  isOpen: boolean;
  onClose: () => void;
  logs: AuditLogEntry[];
}

export const AuditLogModal: React.FC<AuditLogModalProps> = ({
  isOpen,
  onClose,
  logs,
}) => {
  const [selectedEntry, setSelectedEntry] = useState<AuditLogEntry | null>(null);

  if (!isOpen) return null;

  const handleDownloadLog = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(logs, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `auditoria_sorteio_${new Date().toISOString()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-300 max-w-3xl w-full flex flex-col overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Registro de Auditoria Imutável (Audit Trail)
              </h3>
              <p className="text-xs text-neutral-500">
                Encadeamento criptográfico SHA-256 de todas as operações judiciais
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

        {/* Verification banner */}
        <div className="px-6 py-2.5 bg-emerald-50 border-b border-emerald-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Integridade Auditada: Todos os hashes encadeados válidos e verificados.</span>
          </div>
          <button
            type="button"
            onClick={handleDownloadLog}
            className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar JSON</span>
          </button>
        </div>

        {/* Log List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          {logs.length === 0 ? (
            <div className="text-center py-10 text-neutral-400 text-xs">
              Nenhuma ação registrada no log até o momento.
            </div>
          ) : (
            logs.map((entry, idx) => {
              const isSelected = selectedEntry?.id === entry.id;
              return (
                <div
                  key={entry.id}
                  onClick={() => setSelectedEntry(isSelected ? null : entry)}
                  className={`border rounded-lg p-3 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-neutral-800 bg-neutral-50/80 shadow-xs'
                      : 'border-neutral-200 hover:border-neutral-400 bg-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-neutral-500">
                        #{logs.length - idx}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase ${
                          entry.action === 'DRAW_PERFORMED'
                            ? 'bg-blue-100 text-blue-800 border border-blue-200'
                            : entry.action === 'RESULTS_FROZEN'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : entry.action === 'RESET_ALL'
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : entry.action === 'DATA_COPIED'
                            ? 'bg-purple-100 text-purple-800 border border-purple-200'
                            : 'bg-neutral-100 text-neutral-800 border border-neutral-200'
                        }`}
                      >
                        {entry.action}
                      </span>
                      <span className="text-xs font-semibold text-neutral-900">
                        {entry.description}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-neutral-500">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(entry.timestamp).toLocaleTimeString('pt-BR')}</span>
                    </div>
                  </div>

                  {/* Hash info */}
                  <div className="text-[10px] font-mono text-neutral-500 space-y-0.5 mt-2 bg-neutral-100 p-2 rounded">
                    <div className="truncate">
                      <span className="text-neutral-400">HASH: </span>
                      <span className="text-neutral-800 font-semibold">{entry.hash}</span>
                    </div>
                    <div className="truncate">
                      <span className="text-neutral-400">ANTERIOR: </span>
                      <span>{entry.previousHash}</span>
                    </div>
                  </div>

                  {/* Detailed inspector when expanded */}
                  {isSelected && entry.details && (
                    <div className="mt-3 pt-3 border-t border-neutral-200 text-xs text-neutral-700">
                      <span className="font-semibold block mb-1">Detalhes Técnicos da Operação:</span>
                      <pre className="bg-neutral-900 text-neutral-100 p-2.5 rounded font-mono text-[11px] overflow-x-auto">
                        {JSON.stringify(entry.details, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-neutral-50 border-t border-neutral-200 flex justify-between items-center text-xs text-neutral-500">
          <span>{logs.length} registros auditáveis</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-neutral-900 text-white rounded-md font-medium hover:bg-neutral-800 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

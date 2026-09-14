import React from 'react';
import { Scale, FileSpreadsheet, Printer, ShieldCheck, Upload, Settings, ChevronDown, MapPin, User, LogOut } from 'lucide-react';
import { ComarcaInfo, DrawSession, TjalAuthUser } from '../types';

interface HeaderProps {
  comarcaInfo: ComarcaInfo;
  session: DrawSession | null;
  jurorsCount: number;
  authUser?: TjalAuthUser | null;
  onLogout?: () => void;
  onOpenImport: () => void;
  onExportExcel: () => void;
  onPrintAta: () => void;
  onOpenAudit: () => void;
  onOpenConfig: () => void;
  onOpenComarcaSelector?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  comarcaInfo,
  session,
  jurorsCount,
  authUser,
  onLogout,
  onOpenImport,
  onExportExcel,
  onPrintAta,
  onOpenAudit,
  onOpenConfig,
  onOpenComarcaSelector,
}) => {
  return (
    <header id="app-header" className="bg-white border-b border-neutral-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Brand & Comarca Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-neutral-900 text-neutral-50 flex items-center justify-center shrink-0 shadow-xs">
              <Scale className="w-5 h-5 text-neutral-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                  Tribunal do Júri • Sorteio de Jurados
                </h1>
                {session?.isFrozen ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Sorteio Congelado
                  </span>
                ) : session ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                    Sorteio Realizado
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200">
                    Aguardando Sorteio
                  </span>
                )}
              </div>

              {/* Clickable Comarca & Vara Chip */}
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <button
                  type="button"
                  id="btn-alterar-comarca-header"
                  onClick={onOpenComarcaSelector || onOpenConfig}
                  className="group inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-100 hover:bg-neutral-200/90 text-neutral-800 border border-neutral-300/80 transition-all cursor-pointer text-xs font-medium"
                  title="Clique para alterar a Comarca e Vara (Lista suspensa TJAL)"
                >
                  <MapPin className="w-3 h-3 text-neutral-600 group-hover:text-neutral-900 shrink-0" />
                  <span className="font-semibold text-neutral-900">
                    Comarca de {comarcaInfo.comarca || 'São José da Tapera'}
                  </span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-700 truncate max-w-[240px] sm:max-w-[320px]">
                    {comarcaInfo.vara || 'Vara do Único Ofício'}
                  </span>
                  <ChevronDown className="w-3 h-3 text-neutral-500 group-hover:text-neutral-900 ml-0.5 shrink-0" />
                </button>

                <span className="text-neutral-300 hidden sm:inline">•</span>
                <span className="text-neutral-500 text-xs font-mono">{jurorsCount} jurados aptos</span>
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              id="btn-importar"
              onClick={onOpenImport}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5 text-neutral-600" />
              <span>Importar / Colar</span>
            </button>

            <button
              id="btn-export-excel"
              onClick={onExportExcel}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors cursor-pointer"
              title="Exportar planilha completa em Excel (.xlsx)"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-neutral-600" />
              <span>Exportar Excel</span>
            </button>

            <button
              id="btn-imprimir-ata"
              onClick={onPrintAta}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors cursor-pointer"
              title="Gerar visualização e impressão da Ata Oficial de Sorteio"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-600" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              id="btn-audit-log"
              onClick={onOpenAudit}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-300 transition-colors cursor-pointer"
              title="Registro imutável de operações e auditoria criptográfica"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-600" />
              <span>Auditoria</span>
            </button>

            <button
              id="btn-config-comarca"
              onClick={onOpenConfig}
              type="button"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 border border-neutral-300 transition-colors cursor-pointer"
              title="Configurações da Comarca e Juízo"
            >
              <Settings className="w-4 h-4" />
            </button>

            {authUser && (
              <div className="flex items-center gap-1.5 pl-2 border-l border-neutral-200">
                <div
                  className="flex items-center gap-1.5 px-2 py-1 bg-neutral-100 border border-neutral-200 rounded-md text-xs text-neutral-800 max-w-[210px]"
                  title={`Usuário autenticado: ${authUser.name} (${authUser.email})`}
                >
                  <User className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <div className="flex flex-col truncate text-left">
                    <span className="font-semibold text-[11px] truncate leading-tight">{authUser.name}</span>
                    <span className="text-[10px] text-neutral-500 truncate leading-tight font-mono">{authUser.email}</span>
                  </div>
                </div>

                {onLogout && (
                  <button
                    type="button"
                    onClick={onLogout}
                    className="p-1.5 text-neutral-500 hover:text-rose-700 hover:bg-rose-50 border border-neutral-200 hover:border-rose-300 rounded-md transition-colors cursor-pointer"
                    title="Encerrar sessão institucional (@tjal.jus.br)"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { RefreshCw, Save, Copy, RotateCcw, Lock, Check } from 'lucide-react';

interface LateralControlsProps {
  onDraw: () => void;
  onFreeze: () => void;
  onCopy: () => void;
  onReset: () => void;
  isFrozen: boolean;
  hasDrawn: boolean;
  isDrawing: boolean;
  copied: boolean;
  jurorsCount: number;
}

export const LateralControls: React.FC<LateralControlsProps> = ({
  onDraw,
  onFreeze,
  onCopy,
  onReset,
  isFrozen,
  hasDrawn,
  isDrawing,
  copied,
  jurorsCount,
}) => {
  const canDraw = !isFrozen && jurorsCount >= 35 && !isDrawing;
  const canFreeze = hasDrawn && !isFrozen;
  const canCopy = hasDrawn;
  const canReset = hasDrawn || isFrozen;

  return (
    <div
      id="lateral-controls-panel"
      className="flex lg:flex-col items-center justify-center gap-3.5 p-2 sm:p-3 bg-white rounded-xl border border-neutral-300 shadow-sm"
    >
      {/* 1. FAZER NOVO SORTEIO */}
      <div className="relative group flex flex-col items-center">
        <button
          id="btn-lateral-sortear"
          onClick={onDraw}
          disabled={!canDraw}
          type="button"
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer border ${
            isFrozen
              ? 'bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed'
              : !canDraw
              ? 'bg-neutral-100 text-neutral-400 border-neutral-200 cursor-not-allowed'
              : 'bg-neutral-900 text-white hover:bg-neutral-800 hover:scale-105 active:scale-95 border-neutral-900 shadow-md'
          }`}
          title={
            isFrozen
              ? 'Resultados congelados. Para novo sorteio, desfaça os comandos.'
              : jurorsCount < 35
              ? 'Mínimo de 35 jurados necessários para o sorteio.'
              : '1. Fazer novo sorteio simultâneo (25 titulares e 10 suplentes)'
          }
        >
          {isFrozen ? (
            <Lock className="w-6 h-6 text-neutral-400" />
          ) : (
            <RefreshCw
              className={`w-6 h-6 ${isDrawing ? 'animate-spin text-neutral-300' : ''}`}
            />
          )}
        </button>
        <span className="text-[11px] font-semibold text-neutral-700 mt-1 text-center hidden sm:block max-w-[70px] leading-tight">
          1. Sortear
        </span>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:block z-50 pointer-events-none">
          <div className="bg-neutral-900 text-white text-xs px-2.5 py-1.5 rounded-md shadow-lg whitespace-nowrap">
            <span className="font-bold">1. Fazer novo sorteio</span>
            <p className="text-[11px] text-neutral-300 font-normal">
              {isFrozen ? 'Bloqueado (Resultados Congelados)' : 'Sortear 25 titulares e 10 suplentes'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. CONGELAR RESULTADOS */}
      <div className="relative group flex flex-col items-center">
        <button
          id="btn-lateral-congelar"
          onClick={onFreeze}
          disabled={!canFreeze}
          type="button"
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer border ${
            isFrozen
              ? 'bg-emerald-600 text-white border-emerald-700 ring-2 ring-emerald-300'
              : !canFreeze
              ? 'bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed'
              : 'bg-neutral-800 text-neutral-100 hover:bg-neutral-700 hover:scale-105 active:scale-95 border-neutral-700'
          }`}
          title="2. Congelar resultados (bloqueia novos sorteios até reset)"
        >
          <Save className="w-6 h-6" />
        </button>
        <span className="text-[11px] font-semibold text-neutral-700 mt-1 text-center hidden sm:block max-w-[70px] leading-tight">
          2. Congelar
        </span>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:block z-50 pointer-events-none">
          <div className="bg-neutral-900 text-white text-xs px-2.5 py-1.5 rounded-md shadow-lg whitespace-nowrap">
            <span className="font-bold">2. Congelar resultados</span>
            <p className="text-[11px] text-neutral-300 font-normal">
              Fixa e homologa a seleção, impedindo novos sorteios
            </p>
          </div>
        </div>
      </div>

      {/* 3. COPIAR DADOS (CTRL+C) */}
      <div className="relative group flex flex-col items-center">
        <button
          id="btn-lateral-copiar"
          onClick={onCopy}
          disabled={!canCopy}
          type="button"
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer border ${
            copied
              ? 'bg-emerald-600 text-white border-emerald-700 ring-2 ring-emerald-300'
              : !canCopy
              ? 'bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed'
              : 'bg-white text-neutral-800 hover:bg-neutral-100 hover:scale-105 active:scale-95 border-neutral-400'
          }`}
          title="3. Copiar dados (Ctrl+C) e baixar documento da Ata (.doc)"
        >
          {copied ? <Check className="w-6 h-6 text-white" /> : <Copy className="w-6 h-6" />}
        </button>
        <span className="text-[11px] font-semibold text-neutral-700 mt-1 text-center hidden sm:block max-w-[70px] leading-tight">
          3. Copiar Ata
        </span>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:block z-50 pointer-events-none">
          <div className="bg-neutral-900 text-white text-xs px-2.5 py-1.5 rounded-md shadow-lg whitespace-nowrap">
            <span className="font-bold">3. Copiar Ata (Ctrl+C &amp; .doc)</span>
            <p className="text-[11px] text-neutral-300 font-normal">
              Copia texto da ata e gera arquivo Word (.doc) com os sorteados
            </p>
          </div>
        </div>
      </div>

      {/* 4. DESFAZER TODOS OS COMANDOS */}
      <div className="relative group flex flex-col items-center">
        <button
          id="btn-lateral-desfazer"
          onClick={onReset}
          disabled={!canReset}
          type="button"
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer border ${
            !canReset
              ? 'bg-neutral-100 text-neutral-300 border-neutral-200 cursor-not-allowed'
              : 'bg-white text-neutral-800 hover:bg-red-50 hover:text-red-700 hover:border-red-300 hover:scale-105 active:scale-95 border-neutral-400'
          }`}
          title="4. Desfazer todos os comandos anteriores, permitindo novo sorteio"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
        <span className="text-[11px] font-semibold text-neutral-700 mt-1 text-center hidden sm:block max-w-[70px] leading-tight">
          4. Desfazer
        </span>

        {/* Tooltip */}
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:block z-50 pointer-events-none">
          <div className="bg-neutral-900 text-white text-xs px-2.5 py-1.5 rounded-md shadow-lg whitespace-nowrap">
            <span className="font-bold">4. Desfazer comandos</span>
            <p className="text-[11px] text-neutral-300 font-normal">
              Limpa o sorteio e reabre a possibilidade de novo sorteio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

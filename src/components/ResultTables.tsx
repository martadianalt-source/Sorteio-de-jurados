import React from 'react';
import { DrawnJuror } from '../types';
import { Users, UserCheck } from 'lucide-react';

interface ResultTablesProps {
  titulares: DrawnJuror[];
  suplentes: DrawnJuror[];
  isFrozen: boolean;
  isDrawing: boolean;
}

export const ResultTables: React.FC<ResultTablesProps> = ({
  titulares,
  suplentes,
  isFrozen,
  isDrawing,
}) => {
  // Always render 25 rows for Titulares and 10 rows for Suplentes to match official court sheets
  const titularRows = Array.from({ length: 25 }, (_, i) => {
    const juror = titulares[i];
    return {
      slot: i + 1,
      juror,
    };
  });

  const suplenteRows = Array.from({ length: 10 }, (_, i) => {
    const juror = suplentes[i];
    return {
      slot: i + 1,
      juror,
    };
  });

  return (
    <div id="result-tables-container" className="flex flex-col gap-4 h-full">
      {/* 25 TITULARES TABLE */}
      <div className="bg-white rounded-lg border border-neutral-300 shadow-xs overflow-hidden flex flex-col">
        <div className="px-3.5 py-2 bg-neutral-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-neutral-300" />
            <h2 className="text-xs font-bold tracking-wider uppercase">
              Jurados Titulares Sorteados
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold bg-neutral-700 px-2 py-0.5 rounded text-neutral-200">
              {titulares.length} / 25
            </span>
            {isFrozen && (
              <span className="text-[10px] uppercase font-bold tracking-wide px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Fixado
              </span>
            )}
          </div>
        </div>

        <div className="overflow-y-auto max-h-[340px] border-b border-neutral-200">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="sticky top-0 z-10 bg-neutral-100 text-neutral-800 border-b border-neutral-300 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="w-12 px-2.5 py-1.5 text-center border-r border-neutral-300">Nº</th>
                <th className="px-3 py-1.5 border-r border-neutral-300">NOMES DOS TITULARES</th>
                <th className="px-3 py-1.5">QUALIFICAÇÃO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 font-medium">
              {titularRows.map(({ slot, juror }) => (
                <tr
                  key={`titular-${slot}`}
                  className={`transition-colors ${
                    isDrawing
                      ? 'animate-pulse bg-neutral-50'
                      : juror
                      ? 'bg-blue-50/40 hover:bg-blue-50/80'
                      : slot % 2 === 0
                      ? 'bg-neutral-50/50'
                      : 'bg-white'
                  }`}
                >
                  <td className="px-2.5 py-1 text-center font-mono text-neutral-600 border-r border-neutral-200 font-semibold">
                    {slot}
                  </td>
                  <td className="px-3 py-1 font-medium text-neutral-900 border-r border-neutral-200 min-h-[26px]">
                    {juror ? (
                      <span className="font-semibold text-neutral-900">{juror.name}</span>
                    ) : (
                      <span className="text-neutral-300 font-light select-none">&nbsp;</span>
                    )}
                  </td>
                  <td className="px-3 py-1 text-neutral-600 min-h-[26px]">
                    {juror ? (
                      juror.qualification
                    ) : (
                      <span className="text-neutral-300 font-light select-none">&nbsp;</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 10 SUPLENTES TABLE */}
      <div className="bg-white rounded-lg border border-neutral-300 shadow-xs overflow-hidden flex flex-col">
        <div className="px-3.5 py-2 bg-neutral-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-neutral-300" />
            <h2 className="text-xs font-bold tracking-wider uppercase">
              Jurados Suplentes Sorteados
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold bg-neutral-600 px-2 py-0.5 rounded text-neutral-200">
              {suplentes.length} / 10
            </span>
            {isFrozen && (
              <span className="text-[10px] uppercase font-bold tracking-wide px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Fixado
              </span>
            )}
          </div>
        </div>

        <div className="overflow-y-auto max-h-[220px]">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="sticky top-0 z-10 bg-neutral-100 text-neutral-800 border-b border-neutral-300 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="w-12 px-2.5 py-1.5 text-center border-r border-neutral-300">Nº</th>
                <th className="px-3 py-1.5 border-r border-neutral-300">NOMES DOS SUPLENTES</th>
                <th className="px-3 py-1.5">QUALIFICAÇÃO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 font-medium">
              {suplenteRows.map(({ slot, juror }) => (
                <tr
                  key={`suplente-${slot}`}
                  className={`transition-colors ${
                    isDrawing
                      ? 'animate-pulse bg-neutral-50'
                      : juror
                      ? 'bg-amber-50/40 hover:bg-amber-50/80'
                      : slot % 2 === 0
                      ? 'bg-neutral-50/50'
                      : 'bg-white'
                  }`}
                >
                  <td className="px-2.5 py-1 text-center font-mono text-neutral-600 border-r border-neutral-200 font-semibold">
                    {slot}
                  </td>
                  <td className="px-3 py-1 font-medium text-neutral-900 border-r border-neutral-200 min-h-[26px]">
                    {juror ? (
                      <span className="font-semibold text-neutral-900">{juror.name}</span>
                    ) : (
                      <span className="text-neutral-300 font-light select-none">&nbsp;</span>
                    )}
                  </td>
                  <td className="px-3 py-1 text-neutral-600 min-h-[26px]">
                    {juror ? (
                      juror.qualification
                    ) : (
                      <span className="text-neutral-300 font-light select-none">&nbsp;</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

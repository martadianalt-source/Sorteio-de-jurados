import React from 'react';
import { AtaDocumentStructure } from '../utils/ataDocument';
import { TjalOfficialHeader } from './TjalOfficialHeader';

interface OfficialAtaDocumentProps {
  doc: AtaDocumentStructure;
  onHeaderClick?: () => void;
  className?: string;
  id?: string;
}

/**
 * Componente oficial de renderização da Ata de Sorteio de Jurados.
 * 
 * ATENDE ÀS REGRAS OBRIGATÓRIAS:
 * 1. Cabeçalho Institucional Oficial existe UMA ÚNICA VEZ.
 * 2. Título é estruturalmente separado do corpo.
 * 3. O Parágrafo 1 tem exatamente a mesma tipografia, alinhamento (justificado) e recuo dos demais parágrafos.
 * 4. Nenhum estilo de título (negrito, centralização, uppercase) contamina o corpo.
 * 5. Garante paridade absoluta entre tela, impressão e PDF.
 */
export const OfficialAtaDocument: React.FC<OfficialAtaDocumentProps> = ({
  doc,
  onHeaderClick,
  className = '',
  id = 'printable-court-document',
}) => {
  return (
    <div
      id={id}
      className={`p-8 sm:p-12 text-neutral-900 bg-white font-serif max-w-4xl mx-auto print:p-0 print:max-w-none shadow-xs border border-neutral-200/70 rounded-lg ${className}`}
    >
      {/* 1. CABEÇALHO INSTITUCIONAL OFICIAL (ÚNICO E ISOLADO) */}
      <TjalOfficialHeader
        comarcaInfo={{
          comarca: doc.header.comarca.replace(/^COMARCA DE\s+/i, ''),
          vara: doc.header.vara,
          juizPresidente: doc.signature.nome,
          juizCargo: doc.signature.cargo,
          endereco: doc.header.endereco,
          cep: doc.header.cep,
          telefone: doc.header.telefone,
          cidadeUf: doc.header.cidadeUf,
          email: doc.header.email,
        }}
        className="mb-6 pb-4 border-b-2 border-neutral-900"
        clickable={Boolean(onHeaderClick)}
        onClick={onHeaderClick}
        hideEmblem={true}
      />

      {/* 2. TÍTULO DA ATA (ISOLADO E CENTRALIZADO) */}
      <div className="text-center space-y-1 mb-6">
        <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase text-neutral-950 font-serif leading-snug">
          {doc.title.mainTitle}
        </h2>
        {doc.title.legalSubtitle && (
          <p className="text-[11px] sm:text-xs text-neutral-500 font-serif italic">
            {doc.title.legalSubtitle}
          </p>
        )}
      </div>

      {/* 3. CORPO DA ATA: PARÁGRAFOS NARRATIVOS (TODOS COM A MESMA REGRA DE ESTILO) */}
      <div className="space-y-3.5 mb-6 text-xs sm:text-[13px] leading-relaxed text-justify font-serif text-neutral-900">
        {doc.body.introParagraphs.map((paragraph, index) => (
          <p
            key={`intro-para-${index}`}
            className="indent-8 sm:indent-12 leading-relaxed text-justify font-normal normal-case"
          >
            {paragraph.trim()}
          </p>
        ))}
      </div>

      {/* 4. JURADOS TITULARES (25) */}
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 border-b border-neutral-400 pb-1 flex justify-between font-serif">
          <span>JURADOS TITULARES</span>
          <span className="font-mono text-[11px] font-normal text-neutral-600">
            Art. 433, caput, do CPP
          </span>
        </div>
        <table className="w-full text-xs border-collapse font-serif">
          <thead>
            <tr className="border-b border-neutral-300 text-left bg-neutral-50">
              <th className="w-12 py-1 text-center font-bold">Nº</th>
              <th className="py-1 px-2 font-bold">Nome Completo do Jurado</th>
              <th className="py-1 px-2 font-bold">Qualificação / Profissão</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {doc.body.titulares.length === 0 ? (
              Array.from({ length: 25 }, (_, i) => (
                <tr key={`empty-titular-${i}`}>
                  <td className="py-1 text-center font-mono font-semibold text-neutral-400">{i + 1}</td>
                  <td className="py-1 px-2 text-neutral-300 select-none">────────────────────</td>
                  <td className="py-1 px-2 text-neutral-300 select-none">──────────</td>
                </tr>
              ))
            ) : (
              doc.body.titulares.map((t) => (
                <tr key={`titular-${t.drawOrder}`} className="hover:bg-neutral-50/50">
                  <td className="py-1 text-center font-mono font-bold text-neutral-800">
                    {String(t.drawOrder).padStart(2, '0')}
                  </td>
                  <td className="py-1 px-2 font-semibold text-neutral-950">{t.name}</td>
                  <td className="py-1 px-2 text-neutral-700">{t.qualification || 'Cidadão'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 5. JURADOS SUPLENTES (10) */}
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 border-b border-neutral-400 pb-1 flex justify-between font-serif">
          <span>JURADOS SUPLENTES</span>
          <span className="font-mono text-[11px] font-normal text-neutral-600">
            Art. 433, § 1º, do CPP
          </span>
        </div>
        <table className="w-full text-xs border-collapse font-serif">
          <thead>
            <tr className="border-b border-neutral-300 text-left bg-neutral-50">
              <th className="w-12 py-1 text-center font-bold">Nº</th>
              <th className="py-1 px-2 font-bold">Nome Completo do Suplente</th>
              <th className="py-1 px-2 font-bold">Qualificação / Profissão</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {doc.body.suplentes.length === 0 ? (
              Array.from({ length: 10 }, (_, i) => (
                <tr key={`empty-suplente-${i}`}>
                  <td className="py-1 text-center font-mono font-semibold text-neutral-400">{i + 1}</td>
                  <td className="py-1 px-2 text-neutral-300 select-none">────────────────────</td>
                  <td className="py-1 px-2 text-neutral-300 select-none">──────────</td>
                </tr>
              ))
            ) : (
              doc.body.suplentes.map((s) => (
                <tr key={`suplente-${s.drawOrder}`} className="hover:bg-neutral-50/50">
                  <td className="py-1 text-center font-mono font-bold text-neutral-800">
                    {String(s.drawOrder).padStart(2, '0')}
                  </td>
                  <td className="py-1 px-2 font-semibold text-neutral-950">{s.name}</td>
                  <td className="py-1 px-2 text-neutral-700">{s.qualification || 'Cidadão'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 6. DESPACHO JUDICIAL */}
      <div className="mb-4 text-xs sm:text-[13px] leading-relaxed text-justify font-serif text-neutral-900">
        <p className="indent-8 sm:indent-12 font-normal normal-case">
          {doc.body.despachoText}
        </p>
      </div>

      {/* 7. CERTIDÃO DA SERVENTIA */}
      <div className="mb-8 text-xs sm:text-[13px] leading-relaxed text-justify font-serif text-neutral-900">
        <p className="indent-8 sm:indent-12 font-normal normal-case">
          {doc.body.certidaoText}
        </p>
      </div>

      {/* 8. DATA E LOCAL */}
      <div className="text-right text-xs sm:text-[13px] font-serif text-neutral-900 mb-12">
        {doc.dateLocation.cidadeUf}, {doc.dateLocation.formattedDate}.
      </div>

      {/* 9. ASSINATURA DA AUTORIDADE */}
      <div className="flex flex-col items-center justify-center text-center my-8">
        <div className="w-80 border-t border-neutral-900 pt-2">
          <div className="font-bold text-neutral-950 font-serif text-xs sm:text-sm">
            {doc.signature.nome}
          </div>
          <div className="text-neutral-700 font-serif text-xs font-medium">
            {doc.signature.cargo}
          </div>
        </div>
      </div>

      {/* 10. CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA */}
      <div className="mt-8 pt-4 border-t border-neutral-200 text-[10px] text-neutral-600 font-mono bg-neutral-50/80 p-3 rounded border">
        <div className="font-bold text-neutral-800 mb-1 flex items-center justify-between">
          <span>CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:</span>
          <span className="text-[9px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
            Auditado SHA-256
          </span>
        </div>
        <div className="break-all">Hash: {doc.audit.hash}</div>
        <div className="mt-0.5 text-neutral-500">
          Data/Hora do Registro: {doc.audit.timestamp}
        </div>
        <div className="mt-0.5 text-neutral-500 italic break-words">
          Sistema: {doc.audit.sistema}
        </div>
      </div>
    </div>
  );
};

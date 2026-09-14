import React from 'react';
import { ComarcaInfo } from '../types';

interface TjalOfficialHeaderProps {
  comarcaInfo: ComarcaInfo;
  className?: string;
  onClick?: () => void;
  clickable?: boolean;
  hideEmblem?: boolean;
}

export const TjalOfficialEmblem: React.FC<{ size?: number }> = ({ size = 68 }) => {
  const [imageError, setImageError] = React.useState(false);
  const height = Math.round(size * 1.36);

  return (
    <div
      className="flex flex-col items-center justify-center shrink-0 select-none"
      style={{ width: size + 8 }}
    >
      {!imageError ? (
        <img
          src="/brasao_tjal.png"
          alt="Poder Judiciário de Alagoas - TJAL"
          width={size}
          height={height}
          className="object-contain max-h-[96px] drop-shadow-xs transition-opacity"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Vector SVG oficial do Poder Judiciário de Alagoas com balança e agulhas da justiça */
        <svg
          width={size}
          height={height}
          viewBox="0 0 300 410"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-h-[96px] object-contain"
        >
          <g transform="translate(150, 118)">
            <circle cx="0" cy="0" r="96" fill="#06313d" />
            <path d="M -18 -90 C -54 -80 -80 -52 -86 -14 C -64 -24 -40 -26 -18 -26 Z" fill="#ffffff" />
            <path d="M 18 -90 C 54 -80 80 -52 86 -14 C 64 -24 40 -26 18 -26 Z" fill="#ffffff" />
            <path d="M -84 18 C -56 50 56 50 84 18 C 62 38 -62 38 -84 18 Z" fill="#ffffff" />
            <line x1="-26" y1="-16" x2="-74" y2="14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <line x1="-26" y1="-16" x2="-38" y2="14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <line x1="-76" y1="14" x2="-36" y2="14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <path d="M -74 14 Q -56 22 -38 14 Z" fill="#06313d" stroke="#ffffff" strokeWidth="2" />
            <line x1="26" y1="-16" x2="74" y2="14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <line x1="26" y1="-16" x2="38" y2="14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <line x1="76" y1="14" x2="36" y2="14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <path d="M 74 14 Q 56 22 38 14 Z" fill="#06313d" stroke="#ffffff" strokeWidth="2" />
            <line x1="0" y1="-88" x2="0" y2="20" stroke="#ffffff" strokeWidth="3.6" strokeLinecap="round" />
            <line x1="-9" y1="-76" x2="-9" y2="20" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="9" y1="-76" x2="9" y2="20" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 0 20 C -10 46 -24 68 -44 84 C -20 76 20 76 44 84 C 24 68 10 46 0 20 Z" fill="#ffffff" />
            <path d="M 0 24 C -6 50 -16 68 -32 80 C -10 72 10 72 32 80 C 16 68 6 50 0 24 Z" fill="#06313d" />
          </g>
          <text x="150" y="270" fill="#06313d" fontSize="36" fontWeight="bold" letterSpacing="8" textAnchor="middle" fontFamily="Times New Roman, serif">PODER</text>
          <text x="150" y="310" fill="#06313d" fontSize="29" fontWeight="bold" letterSpacing="4" textAnchor="middle" fontFamily="Times New Roman, serif">JUDICIÁRIO</text>
          <text x="150" y="348" fill="#06313d" fontSize="23" fontWeight="600" letterSpacing="6" textAnchor="middle" fontFamily="Times New Roman, serif">DE ALAGOAS</text>
        </svg>
      )}
    </div>
  );
};

export const TjalOfficialHeader: React.FC<TjalOfficialHeaderProps> = ({
  comarcaInfo,
  className = '',
  onClick,
  clickable = false,
  hideEmblem = false,
}) => {
  const comarca = comarcaInfo.comarca || 'São José da Tapera';
  const vara = comarcaInfo.vara || 'Vara do Único Ofício de São José da Tapera';
  const endereco = comarcaInfo.endereco || 'Rua 13 de maio, sn, Centro';
  const cep = comarcaInfo.cep || '57445-000';
  const telefone = comarcaInfo.telefone || '3622-1193';
  const cidadeUf = comarcaInfo.cidadeUf || `${comarca}-AL`;
  const email = comarcaInfo.email || 'saojosedatapera@tjal.jus.br';

  if (hideEmblem) {
    return (
      <div
        onClick={clickable ? onClick : undefined}
        className={`text-center py-2 px-1 font-serif text-neutral-900 border-b border-neutral-800 pb-3 mb-3 ${clickable ? 'cursor-pointer hover:bg-neutral-50/80 rounded p-2 transition-all group' : ''} ${className}`}
        title={clickable ? 'Clique para alterar Comarca e Vara do TJAL' : undefined}
      >
        <div className="text-[13px] sm:text-[14.5px] font-bold text-neutral-950 uppercase tracking-wide leading-tight">
          PODER JUDICIÁRIO DO ESTADO DE ALAGOAS
        </div>
        <div className="text-[12px] sm:text-[13px] font-bold text-neutral-900 uppercase tracking-normal leading-tight mt-1">
          COMARCA DE {comarca.toUpperCase()}
        </div>
        <div className="text-[11.5px] sm:text-[12.5px] text-neutral-800 leading-tight mt-0.5 font-serif">
          {vara}
        </div>
        <div className="text-[9.5px] sm:text-[10.5px] text-neutral-600 italic leading-snug mt-1.5 break-words">
          {endereco} - CEP {cep}, Fone: {telefone}, {cidadeUf} - E-mail:{' '}
          <span className="text-neutral-800 underline decoration-neutral-400 underline-offset-2">
            {email}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={clickable ? onClick : undefined}
      className={`flex items-center gap-4.5 sm:gap-6 py-2 px-1 ${clickable ? 'cursor-pointer hover:bg-neutral-50/80 rounded-lg p-2 transition-all group' : ''} ${className}`}
      title={clickable ? 'Clique para alterar Comarca e Vara do TJAL' : undefined}
    >
      {/* Left Crest */}
      <TjalOfficialEmblem size={68} />

      {/* Right Text Block */}
      <div className="flex-1 text-left font-serif text-neutral-900 border-l border-neutral-300 pl-4 sm:pl-5">
        <div className="text-[13.5px] sm:text-[15px] font-bold text-neutral-900 leading-tight">
          Tribunal de Justiça do Estado de Alagoas
        </div>
        <div className="text-[13px] sm:text-[14px] font-bold text-neutral-800 leading-tight mt-0.5">
          Comarca de {comarca}
        </div>
        <div className="text-[12px] sm:text-[13px] text-neutral-700 leading-tight mt-0.5">
          {vara}
        </div>
        <div className="text-[10px] sm:text-[11px] text-neutral-600 leading-normal mt-1 break-words">
          {endereco} - CEP {cep}, Fone: {telefone}, {cidadeUf} - E-mail:{' '}
          <span className="text-neutral-800 underline decoration-neutral-400 underline-offset-2">
            {email}
          </span>
        </div>
      </div>
    </div>
  );
};

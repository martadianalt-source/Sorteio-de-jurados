import React, { useState, useMemo } from 'react';
import { X, Search, Check, Building2, MapPin, Phone, Mail, User, AlertTriangle, ShieldCheck, ExternalLink, Award, UserCheck } from 'lucide-react';
import { ComarcaInfo } from '../types';
import { TJAL_ALL_COMARCAS, TJAL_COMARCAS_DATABASE, TjalVaraEntry, TjalMagistradoEntry, TjalLocalVara } from '../data/tjalDatabase';
import { getChefeSecretariaForVara } from '../data/tjalBalcaoVirtual';

interface TjalComarcaSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentInfo: ComarcaInfo;
  onSave: (newInfo: ComarcaInfo) => void;
}

export const TjalComarcaSelectorModal: React.FC<TjalComarcaSelectorModalProps> = ({
  isOpen,
  onClose,
  currentInfo,
  onSave,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComarcaName, setSelectedComarcaName] = useState<string>(
    currentInfo.comarca || 'São José da Tapera'
  );
  const [selectedEntryId, setSelectedEntryId] = useState<string>('');

  // Form editable states
  const [comarca, setComarca] = useState(currentInfo.comarca || 'São José da Tapera');
  const [vara, setVara] = useState(currentInfo.vara || 'Vara do Único Ofício de São José da Tapera');
  const [endereco, setEndereco] = useState(currentInfo.endereco || 'Rua 13 de maio, sn, Centro');
  const [cep, setCep] = useState(currentInfo.cep || '57445-000');
  const [telefone, setTelefone] = useState(currentInfo.telefone || '3622-1193');
  const [cidadeUf, setCidadeUf] = useState(currentInfo.cidadeUf || 'São José da Tapera-AL');
  const [email, setEmail] = useState(currentInfo.email || 'saojosedatapera@tjal.jus.br');
  const [juizPresidente, setJuizPresidente] = useState(currentInfo.juizPresidente || 'Elielson dos Santos Pereira');
  const [juizCargo, setJuizCargo] = useState(currentInfo.juizCargo || 'Juiz de Direito');
  const [servidorNome, setServidorNome] = useState(
    currentInfo.servidorNome || currentInfo.chefeSecretaria || 'Marta Diana Lucindo Tenório'
  );
  const [servidorCargo, setServidorCargo] = useState(
    currentInfo.servidorCargo || 'Assessora Judicial'
  );

  // Comarca selecionada na estrutura agrupada
  const activeComarcaData = useMemo(() => {
    return (
      TJAL_ALL_COMARCAS.find(
        (c) => c.comarca.toLowerCase() === selectedComarcaName.toLowerCase()
      ) ||
      TJAL_ALL_COMARCAS.find(
        (c) => c.comarca.toLowerCase() === comarca.toLowerCase()
      ) ||
      TJAL_ALL_COMARCAS[0]
    );
  }, [selectedComarcaName, comarca]);

  // Filter TJAL flat database when search is active
  const filteredEntries = useMemo(() => {
    if (!searchTerm.trim()) return TJAL_COMARCAS_DATABASE;
    const term = searchTerm.toLowerCase();
    return TJAL_COMARCAS_DATABASE.filter(
      (e) =>
        e.comarca.toLowerCase().includes(term) ||
        e.vara.toLowerCase().includes(term) ||
        e.cidadeUf.toLowerCase().includes(term) ||
        e.email.toLowerCase().includes(term) ||
        (e.juizPresidentePadrao && e.juizPresidentePadrao.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  // Check if current comarca/vara matches official database
  const isFoundInDatabase = useMemo(() => {
    const cClean = comarca.toLowerCase().trim();
    const vClean = vara.toLowerCase().trim();
    return TJAL_COMARCAS_DATABASE.some(
      (e) =>
        (e.comarca.toLowerCase().trim() === cClean || cClean.includes(e.comarca.toLowerCase().trim())) &&
        (e.vara.toLowerCase().trim() === vClean || vClean.includes(e.vara.toLowerCase().trim()))
    );
  }, [comarca, vara]);

  if (!isOpen) return null;

  const handleSelectComarcaDropdown = (cName: string) => {
    setSelectedComarcaName(cName);
    const found = TJAL_ALL_COMARCAS.find((c) => c.comarca === cName);
    if (found) {
      setComarca(found.comarca);
      setCidadeUf(found.cidadeUf);
      let targetVara = vara;
      if (found.locais && found.locais.length > 0) {
        const first = found.locais[0];
        targetVara = first.vara || `${first.local}`;
        setVara(targetVara);
        setEndereco(first.endereco);
        setCep(first.cep);
        setTelefone(first.telefone);
      }
      if (found.magistrados && found.magistrados.length > 0) {
        const mag = found.magistrados[0];
        setJuizPresidente(mag.nome);
        setJuizCargo(mag.condicao === 'Titular' ? 'Juiz(a) de Direito Titular' : `Juiz(a) de Direito (${mag.condicao})`);
        if (mag.email) {
          setEmail(mag.email);
        }
      }

      // Se for São José da Tapera, mantém o padrão fixado expressamente
      if (found.comarca.toLowerCase().includes('tapera')) {
        setJuizPresidente('Elielson dos Santos Pereira');
        setJuizCargo('Juiz de Direito');
        setServidorNome('Marta Diana Lucindo Tenório');
        setServidorCargo('Assessora Judicial');
      } else {
        const balcao = getChefeSecretariaForVara(found.comarca, targetVara);
        if (balcao.nome) setServidorNome(balcao.nome);
        setServidorCargo(balcao.cargo || 'Diretor(a) de Secretaria');
      }
    }
  };

  const handleSelectVaraFromComarca = (local: TjalLocalVara) => {
    const newVara = local.vara || local.local;
    setVara(newVara);
    setEndereco(local.endereco);
    setCep(local.cep);
    setTelefone(local.telefone);

    if (comarca.toLowerCase().includes('tapera') || newVara.toLowerCase().includes('tapera')) {
      setServidorNome('Marta Diana Lucindo Tenório');
      setServidorCargo('Assessora Judicial');
    } else {
      const balcao = getChefeSecretariaForVara(comarca, newVara);
      if (balcao.nome) setServidorNome(balcao.nome);
      setServidorCargo(balcao.cargo || 'Diretor(a) de Secretaria');
    }
  };

  const handleSelectMagistrado = (mag: TjalMagistradoEntry) => {
    setJuizPresidente(mag.nome);
    setJuizCargo(
      mag.condicao.toLowerCase().includes('titular')
        ? 'Juiz(a) de Direito Titular'
        : `Juiz(a) de Direito (${mag.condicao})`
    );
    if (mag.email) {
      setEmail(mag.email);
    }
  };

  const handleSelectPredefined = (entry: TjalVaraEntry) => {
    setSelectedEntryId(entry.id);
    setSelectedComarcaName(entry.comarca);
    setComarca(entry.comarca);
    setVara(entry.vara);
    setEndereco(entry.endereco);
    setCep(entry.cep);
    setTelefone(entry.telefone);
    setCidadeUf(entry.cidadeUf);
    setEmail(entry.email);

    if (entry.comarca.toLowerCase().includes('tapera')) {
      setJuizPresidente('Elielson dos Santos Pereira');
      setJuizCargo('Juiz de Direito');
      setServidorNome('Marta Diana Lucindo Tenório');
      setServidorCargo('Assessora Judicial');
    } else {
      if (entry.juizPresidentePadrao) {
        setJuizPresidente(entry.juizPresidentePadrao.replace(/^Dr\(a\)\.\s*/, '').replace(/^Dr\.\s*/, ''));
      }
      if (entry.juizCargoPadrao) {
        setJuizCargo(entry.juizCargoPadrao);
      }
      const balcao = getChefeSecretariaForVara(entry.comarca, entry.vara);
      if (balcao.nome) setServidorNome(balcao.nome);
      setServidorCargo(balcao.cargo || 'Diretor(a) de Secretaria');
    }
  };

  const handleApply = () => {
    const updated: ComarcaInfo = {
      ...currentInfo,
      tribunal: 'Tribunal de Justiça do Estado de Alagoas',
      comarca: comarca.trim(),
      vara: vara.trim(),
      endereco: endereco.trim(),
      cep: cep.trim(),
      telefone: telefone.trim(),
      cidadeUf: cidadeUf.trim(),
      email: email.trim(),
      juizPresidente: juizPresidente.trim(),
      juizCargo: juizCargo.trim() || 'Juiz de Direito',
      servidorNome: servidorNome.trim(),
      servidorCargo: servidorCargo.trim() || 'Diretor(a) de Secretaria',
      chefeSecretaria: servidorNome.trim(),
    };
    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl border border-neutral-300 max-w-3xl w-full flex flex-col overflow-hidden my-auto max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-neutral-800" />
            <div>
              <h3 className="text-base font-bold text-neutral-900">
                Seleção de Comarca, Vara e Juízes Vinculados (TJAL)
              </h3>
              <p className="text-xs text-neutral-500">
                Endereços, telefones e magistrados extraídos diretamente dos portais oficiais do TJAL
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          {/* Informações Oficiais Extraídas com Links Oficiais */}
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-lg space-y-1.5 text-xs text-neutral-700">
            <div className="flex items-center gap-1.5 font-semibold text-neutral-900">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Bases Oficiais do Tribunal de Justiça de Alagoas (TJAL) Integradas:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
              <div className="flex items-center gap-1.5 bg-white p-2 rounded border border-neutral-200">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-neutral-900">Comarcas, Varas, Endereços e Telefones</div>
                  <a
                    href="https://www.tjal.jus.br/enderecos"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1 mt-0.5 truncate"
                  >
                    <span>tjal.jus.br/enderecos</span>
                    <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-2 rounded border border-neutral-200">
                <User className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-neutral-900">Juízes Vinculados por Comarca</div>
                  <a
                    href="https://www.tjal.jus.br/magistratura/por-comarca"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-700 hover:underline flex items-center gap-1 mt-0.5 truncate"
                  >
                    <span>tjal.jus.br/magistratura/por-comarca</span>
                    <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Seletor Rápido por Comarca */}
          <div className="space-y-3 bg-neutral-50/70 p-4 rounded-xl border border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                1. Selecione a Comarca de Alagoas ({TJAL_ALL_COMARCAS.length} Comarcas Catalogadas):
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <select
                  value={selectedComarcaName}
                  onChange={(e) => handleSelectComarcaDropdown(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-semibold bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
                >
                  {TJAL_ALL_COMARCAS.map((c) => (
                    <option key={c.id} value={c.comarca}>
                      Comarca de {c.comarca} ({c.locais.length} {c.locais.length === 1 ? 'vara' : 'varas'})
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Ou pesquise qualquer vara, juiz ou município..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
                />
              </div>
            </div>

            {/* Varas e Telefones extraídos de https://www.tjal.jus.br/enderecos */}
            {activeComarcaData && (
              <div className="space-y-2 mt-2 pt-2 border-t border-neutral-200">
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-700">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-600" />
                    Varas da Comarca de {activeComarcaData.comarca} (Endereços e Telefones Oficiais)
                  </span>
                  <span className="text-neutral-500 font-normal">
                    {activeComarcaData.locais.length} unidade(s)
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {activeComarcaData.locais.map((loc, idx) => {
                    const isSelected = vara === (loc.vara || loc.local);
                    return (
                      <div
                        key={`local-${idx}`}
                        onClick={() => handleSelectVaraFromComarca(loc)}
                        className={`p-2 rounded-lg border text-xs cursor-pointer transition-all flex items-start justify-between gap-2 ${
                          isSelected
                            ? 'bg-blue-50/80 border-blue-400 text-blue-950 font-medium'
                            : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-[11.5px] truncate">
                            {loc.vara || loc.local}
                          </div>
                          <div className="text-[10.5px] text-neutral-600 truncate mt-0.5">
                            📍 {loc.endereco} - CEP {loc.cep}
                          </div>
                          <div className="text-[10px] text-neutral-500 truncate mt-0.5">
                            📞 Fone: {loc.telefone || 'Consulte o Fórum'}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectVaraFromComarca(loc);
                          }}
                          className={`px-2 py-1 text-[10.5px] rounded shrink-0 font-semibold cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                          }`}
                        >
                          {isSelected ? 'Selecionada' : 'Selecionar'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Juízes Vinculados extraídos de https://www.tjal.jus.br/magistratura/por-comarca */}
            {activeComarcaData && activeComarcaData.magistrados && (
              <div className="space-y-2 mt-2 pt-2 border-t border-neutral-200">
                <div className="flex items-center justify-between text-[11px] font-bold text-neutral-700">
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-emerald-600" />
                    Juízes Vinculados à Comarca de {activeComarcaData.comarca} (Fonte: tjal.jus.br/magistratura/por-comarca)
                  </span>
                  <span className="text-neutral-500 font-normal">
                    {activeComarcaData.magistrados.length} magistrado(s)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-32 overflow-y-auto pr-1">
                  {activeComarcaData.magistrados.length === 0 ? (
                    <div className="text-neutral-500 text-[11px] p-2 bg-white rounded border border-neutral-200 col-span-2">
                      Sem magistrado listado diretamente nesta comarca no portal. Você pode informar o nome do Juiz Presidente manualmente abaixo.
                    </div>
                  ) : (
                    activeComarcaData.magistrados.map((mag, mIdx) => {
                      const isMagSelected = juizPresidente.toLowerCase().includes(mag.nome.toLowerCase());
                      return (
                        <div
                          key={`mag-${mIdx}`}
                          onClick={() => handleSelectMagistrado(mag)}
                          className={`p-2 rounded-lg border text-xs cursor-pointer transition-all flex items-start justify-between gap-2 ${
                            isMagSelected
                              ? 'bg-emerald-50/90 border-emerald-400 text-emerald-950 font-medium'
                              : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="font-bold text-[11px] truncate">
                              {mag.nome}
                            </div>
                            <div className="text-[10px] text-neutral-600 truncate mt-0.5">
                              Condição: <span className="font-semibold text-neutral-800">{mag.condicao}</span>
                            </div>
                            {mag.lotacao && (
                              <div className="text-[9.5px] text-neutral-500 truncate mt-0.5">
                                Lotação: {mag.lotacao}
                              </div>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectMagistrado(mag);
                            }}
                            className={`px-2 py-0.5 text-[10px] rounded shrink-0 font-semibold cursor-pointer ${
                              isMagSelected
                                ? 'bg-emerald-700 text-white'
                                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                            }`}
                          >
                            {isMagSelected ? 'Presidente' : 'Definir'}
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Form Fields for Fine-Tuning */}
          <div className="border-t border-neutral-200 pt-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center justify-between">
              <span>Dados Confirmados para o Documento e Cabeçalho</span>
              <span className="text-[11px] text-neutral-500 font-normal">
                Você pode revisar ou editar qualquer campo livremente
              </span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Comarca */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Nome da Comarca *
                </label>
                <input
                  type="text"
                  value={comarca}
                  onChange={(e) => setComarca(e.target.value)}
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs font-medium"
                  required
                />
              </div>

              {/* Vara */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Nome da Vara Judiciária *
                </label>
                <input
                  type="text"
                  value={vara}
                  onChange={(e) => setVara(e.target.value)}
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs font-medium"
                  required
                />
              </div>

              {/* Endereço */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-neutral-400" />
                  Endereço do Fórum / Secretaria
                </label>
                <input
                  type="text"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  placeholder="Ex: Rua 13 de maio, sn, Centro"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs"
                />
              </div>

              {/* CEP */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  CEP
                </label>
                <input
                  type="text"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="Ex: 57445-000"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs"
                />
              </div>

              {/* Cidade - UF */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Cidade e UF (para datação e cabeçalho)
                </label>
                <input
                  type="text"
                  value={cidadeUf}
                  onChange={(e) => setCidadeUf(e.target.value)}
                  placeholder="Ex: São José da Tapera-AL"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1 flex items-center gap-1">
                  <Phone className="w-3 h-3 text-neutral-400" />
                  Telefone / Contato
                </label>
                <input
                  type="text"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Ex: 3622-1193"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1 flex items-center gap-1">
                  <Mail className="w-3 h-3 text-neutral-400" />
                  E-mail Institucional (@tjal.jus.br)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: saojosedatapera@tjal.jus.br"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs"
                />
              </div>

              {/* Juiz(a) de Direito */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1 flex items-center gap-1">
                  <User className="w-3 h-3 text-neutral-400" />
                  Nome do(a) Juiz(a) de Direito Presidente *
                </label>
                <input
                  type="text"
                  value={juizPresidente}
                  onChange={(e) => setJuizPresidente(e.target.value)}
                  placeholder="Ex: Dr. ELIELSON DOS SANTOS PEREIRA"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs font-semibold"
                  required
                />
              </div>

              {/* Cargo do Juiz */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Cargo / Titulação do Magistrado
                </label>
                <input
                  type="text"
                  value={juizCargo}
                  onChange={(e) => setJuizCargo(e.target.value)}
                  placeholder="Ex: Juiz de Direito"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs"
                />
              </div>

              {/* Servidor(a) que assina a ata */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-neutral-400" />
                    Servidor(a) que Lavrou a Ata *
                  </span>
                  <span className="text-[10px] text-emerald-700 font-medium">
                    {comarca.toLowerCase().includes('tapera') ? 'Padrão Tapera' : 'Balcão Virtual TJAL'}
                  </span>
                </label>
                <input
                  type="text"
                  value={servidorNome}
                  onChange={(e) => setServidorNome(e.target.value)}
                  placeholder="Ex: Marta Diana Lucindo Tenório"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs font-semibold"
                  required
                />
              </div>

              {/* Cargo do Servidor */}
              <div>
                <label className="block text-[11px] font-semibold text-neutral-700 mb-1">
                  Cargo / Função do Servidor(a)
                </label>
                <input
                  type="text"
                  value={servidorCargo}
                  onChange={(e) => setServidorCargo(e.target.value)}
                  placeholder="Ex: Diretor(a) de Secretaria"
                  className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-800 focus:bg-white text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between gap-2.5">
          <div className="text-[11px] text-neutral-500">
            Cabeçalho formatado sem brasão conforme diretriz oficial
          </div>
          <div className="flex items-center gap-2">
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
              className="px-4 py-1.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Salvar e Atualizar Documento</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

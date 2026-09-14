import React, { useState, useMemo } from 'react';
import { Search, UserPlus, Trash2, X, Bookmark, Calendar, Clock, Save, FolderOpen, Upload } from 'lucide-react';
import { Juror, DrawnJuror } from '../types';

interface JurorTableProps {
  jurors: Juror[];
  titulares: DrawnJuror[];
  suplentes: DrawnJuror[];
  activeListId?: string | null;
  activeListName?: string;
  activeListCreatedAt?: string;
  activeListUpdatedAt?: string;
  savedListsCount?: number;
  onAddJuror: (name: string, qualification: string) => void;
  onRemoveJuror: (id: string) => void;
  onOpenImport?: () => void;
  onOpenSavedLists?: () => void;
  onSaveCurrentList?: () => void;
  onDeleteActiveList?: () => void;
}

export const JurorTable: React.FC<JurorTableProps> = ({
  jurors,
  titulares,
  suplentes,
  activeListId,
  activeListName,
  activeListCreatedAt,
  activeListUpdatedAt,
  savedListsCount = 0,
  onAddJuror,
  onRemoveJuror,
  onOpenImport,
  onOpenSavedLists,
  onSaveCurrentList,
  onDeleteActiveList,
}) => {
  const [search, setSearch] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newQualification, setNewQualification] = useState('');

  const formatDate = (isoString?: string) => {
    if (!isoString) return '—';
    try {
      const d = new Date(isoString);
      return d.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  // Map of selected jurors for quick status indicator
  const titularIds = useMemo(() => new Set(titulares.map((t) => t.id)), [titulares]);
  const suplenteIds = useMemo(() => new Set(suplentes.map((s) => s.id)), [suplentes]);

  const filteredJurors = useMemo(() => {
    if (!search.trim()) return jurors;
    const query = search.toLowerCase();
    return jurors.filter(
      (j) =>
        j.name.toLowerCase().includes(query) ||
        j.qualification.toLowerCase().includes(query)
    );
  }, [jurors, search]);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    onAddJuror(newName.trim(), newQualification.trim() || 'Cidadão');
    setNewName('');
    setNewQualification('');
    setShowAddForm(false);
  };

  return (
    <div id="juror-table-container" className="flex flex-col h-full bg-white rounded-lg border border-neutral-300 shadow-xs overflow-hidden">
      {/* Table Header Bar */}
      <div className="px-3.5 py-2.5 bg-neutral-50 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
            Lista Oficial de Jurados da Vara
          </span>
          <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-neutral-200 text-neutral-800 font-mono">
            {jurors.length} aptos
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar jurado..."
              className="pl-8 pr-2.5 py-1 text-xs bg-white border border-neutral-300 rounded-md text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-neutral-600 w-36 sm:w-48 transition-all"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
            title="Adicionar jurado avulso"
          >
            <UserPlus className="w-3 h-3" />
            <span className="hidden sm:inline">Adicionar</span>
          </button>
        </div>
      </div>

      {/* List Metadata Bar: Name, Creation Date, Modification Date, and Save actions */}
      <div className="px-3.5 py-1.5 bg-neutral-100/90 border-b border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-semibold text-neutral-800 flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
            <span className="truncate max-w-[200px] sm:max-w-[260px]">{activeListName || 'Lista Atual em Uso'}</span>
          </span>
          {activeListCreatedAt && (
            <span className="text-neutral-500 text-[11px] flex items-center gap-1">
              <Calendar className="w-3 h-3 text-neutral-400 shrink-0" />
              <span>Criação: <strong className="font-medium text-neutral-700">{formatDate(activeListCreatedAt)}</strong></span>
            </span>
          )}
          {activeListUpdatedAt && (
            <span className="text-neutral-500 text-[11px] flex items-center gap-1">
              <Clock className="w-3 h-3 text-neutral-400 shrink-0" />
              <span>Modificação: <strong className="font-medium text-neutral-700">{formatDate(activeListUpdatedAt)}</strong></span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {onOpenImport && (
            <button
              type="button"
              id="btn-substituir-lista-oficial"
              onClick={onOpenImport}
              className="px-2 py-0.5 text-[11px] font-semibold bg-blue-50 border border-blue-300 rounded hover:bg-blue-100 text-blue-900 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
              title="Substituir a lista oficial desta Vara por uma nova planilha ou lista de jurados"
            >
              <Upload className="w-3 h-3 text-blue-700" />
              <span>Substituir Lista</span>
            </button>
          )}
          {onSaveCurrentList && (
            <button
              type="button"
              id="btn-salvar-lista-atual"
              onClick={onSaveCurrentList}
              className="px-2 py-0.5 text-[11px] font-semibold bg-white border border-neutral-300 rounded hover:bg-neutral-50 text-neutral-800 flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
              title="Salvar alterações na lista e preservar jurados para próximos sorteios"
            >
              <Save className="w-3 h-3 text-neutral-600" />
              <span>Salvar Alterações</span>
            </button>
          )}
          {onOpenSavedLists && (
            <button
              type="button"
              id="btn-gerenciar-listas"
              onClick={onOpenSavedLists}
              className="px-2 py-0.5 text-[11px] font-semibold bg-neutral-800 hover:bg-neutral-900 text-white rounded flex items-center gap-1 cursor-pointer transition-colors shadow-2xs"
              title="Ver detalhes da lista oficial vinculada a esta unidade judiciária"
            >
              <FolderOpen className="w-3 h-3" />
              <span>Lista da Vara</span>
            </button>
          )}
        </div>
      </div>

      {/* Inline Confirmation for Deleting Active List */}
      {showDeleteConfirm && (
        <div className="px-3.5 py-2 bg-rose-50 border-b border-rose-200 flex flex-wrap items-center justify-between gap-2 text-xs text-rose-900 animate-in fade-in duration-150">
          <div className="flex items-center gap-1.5 font-medium">
            <Trash2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span>Excluir permanentemente a lista salva "{activeListName}"?</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (onDeleteActiveList) onDeleteActiveList();
                setShowDeleteConfirm(false);
              }}
              className="px-2.5 py-0.5 bg-rose-700 hover:bg-rose-800 text-white rounded text-[11px] font-bold cursor-pointer"
            >
              Sim, Excluir
            </button>
            <button
              type="button"
              onClick={() => setShowDeleteConfirm(false)}
              className="px-2 py-0.5 bg-white hover:bg-neutral-100 border border-neutral-300 text-neutral-700 rounded text-[11px] font-medium cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Add Juror inline form */}
      {showAddForm && (
        <form onSubmit={handleAddSubmit} className="p-3 bg-neutral-100 border-b border-neutral-200 flex flex-wrap gap-2 items-center">
          <input
            type="text"
            placeholder="Nome completo do jurado *"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="flex-1 min-w-[180px] px-2.5 py-1 text-xs bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-600"
            required
            autoFocus
          />
          <input
            type="text"
            placeholder="Qualificação / Profissão"
            value={newQualification}
            onChange={(e) => setNewQualification(e.target.value)}
            className="flex-1 min-w-[140px] px-2.5 py-1 text-xs bg-white border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-600"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-neutral-800 text-white rounded-md text-xs font-medium hover:bg-neutral-900 cursor-pointer"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={() => setShowAddForm(false)}
            className="px-2 py-1 text-neutral-500 hover:text-neutral-800 text-xs cursor-pointer"
          >
            Cancelar
          </button>
        </form>
      )}

      {/* Main Juror Spreadsheet Grid */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-210px)] min-h-[480px]">
        <table className="w-full text-left text-xs border-collapse">
          <thead className="sticky top-0 z-10 bg-neutral-200/90 backdrop-blur-xs text-neutral-800 border-b border-neutral-300 font-bold uppercase tracking-wider text-[11px]">
            <tr>
              <th className="w-12 px-2.5 py-2 text-center border-r border-neutral-300">Nº</th>
              <th className="px-3 py-2 border-r border-neutral-300">NOMES DOS JURADOS</th>
              <th className="px-3 py-2 border-r border-neutral-300">QUALIFICAÇÃO</th>
              <th className="w-16 px-2 py-2 text-center">AÇÕES</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 font-medium">
            {jurors.length === 0 ? (
              <>
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center bg-neutral-50/70 border-b border-neutral-200">
                    <div className="max-w-md mx-auto text-neutral-600 space-y-2">
                      <p className="font-semibold text-neutral-800 text-xs">
                        Planilha de Jurados em Branco (São José da Tapera)
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        Nenhum nome fictício pré-carregado. Clique no botão abaixo para fazer o upload da planilha (.xlsx, .csv) ou colar os nomes reais dos jurados da Comarca.
                      </p>
                      <button
                        type="button"
                        onClick={onOpenImport}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer mt-1"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Fazer Upload ou Colar Nomes</span>
                      </button>
                    </div>
                  </td>
                </tr>
                {Array.from({ length: 15 }, (_, i) => (
                  <tr key={`blank-row-${i}`} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}>
                    <td className="px-2.5 py-2 text-center font-mono text-neutral-400 border-r border-neutral-200 text-[11px]">
                      {i + 1}
                    </td>
                    <td className="px-3 py-2 border-r border-neutral-200 text-neutral-300 font-light select-none">
                      &nbsp;
                    </td>
                    <td className="px-3 py-2 border-r border-neutral-200 text-neutral-300 font-light select-none">
                      &nbsp;
                    </td>
                    <td className="px-2 py-2 text-center text-neutral-300 font-light select-none">
                      &nbsp;
                    </td>
                  </tr>
                ))}
              </>
            ) : filteredJurors.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-neutral-400 italic">
                  Nenhum jurado encontrado para o termo pesquisado.
                </td>
              </tr>
            ) : (
              filteredJurors.map((juror, index) => {
                const isTitular = titularIds.has(juror.id);
                const isSuplente = suplenteIds.has(juror.id);

                return (
                  <tr
                    key={juror.id}
                    className={`transition-colors group ${
                      isTitular
                        ? 'bg-blue-50/70 hover:bg-blue-100/70'
                        : isSuplente
                        ? 'bg-amber-50/70 hover:bg-amber-100/70'
                        : index % 2 === 0
                        ? 'bg-white hover:bg-neutral-50'
                        : 'bg-neutral-50/50 hover:bg-neutral-100/50'
                    }`}
                  >
                    <td className="px-2.5 py-1.5 text-center font-mono text-neutral-600 border-r border-neutral-200">
                      {index + 1}
                    </td>
                    <td className="px-3 py-1.5 font-medium text-neutral-900 border-r border-neutral-200 flex items-center justify-between gap-1">
                      <span className="truncate">{juror.name}</span>
                      {isTitular && (
                        <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white tracking-wide">
                          TITULAR
                        </span>
                      )}
                      {isSuplente && (
                        <span className="shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white tracking-wide">
                          SUPLENTE
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-1.5 text-neutral-600 border-r border-neutral-200">
                      <span className="truncate block max-w-[180px] sm:max-w-none">{juror.qualification}</span>
                    </td>
                    <td className="px-2 py-1.5 text-center">
                      <button
                        type="button"
                        onClick={() => onRemoveJuror(juror.id)}
                        className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-600 p-1 rounded transition-opacity cursor-pointer"
                        title="Remover jurado da lista"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Status */}
      <div className="px-3 py-2 bg-neutral-100 border-t border-neutral-200 text-[11px] text-neutral-500 flex justify-between items-center">
        <span>Total: {filteredJurors.length} de {jurors.length} jurados</span>
        <span className="italic">Pelo menos 35 jurados necessários (25 titulares + 10 suplentes)</span>
      </div>
    </div>
  );
};

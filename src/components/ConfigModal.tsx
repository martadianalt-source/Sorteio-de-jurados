import React, { useState } from 'react';
import { X, Save, Scale } from 'lucide-react';
import { ComarcaInfo } from '../types';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  comarcaInfo: ComarcaInfo;
  onSave: (info: ComarcaInfo) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  comarcaInfo,
  onSave,
}) => {
  const [formData, setFormData] = useState<ComarcaInfo>({ ...comarcaInfo });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl border border-neutral-300 max-w-lg w-full flex flex-col overflow-hidden my-auto">
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-neutral-800" />
            <h3 className="text-base font-bold text-neutral-900">
              Dados do Juízo e Comarca
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-3.5 text-xs">
          <div>
            <label className="block font-semibold text-neutral-700 mb-1">
              Comarca:
            </label>
            <input
              type="text"
              value={formData.comarca}
              onChange={(e) => setFormData({ ...formData, comarca: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-700 mb-1">
              Vara / Órgão Julgador:
            </label>
            <input
              type="text"
              value={formData.vara}
              onChange={(e) => setFormData({ ...formData, vara: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-700 mb-1">
              Juiz(a) de Direito Presidente:
            </label>
            <input
              type="text"
              value={formData.juizPresidente}
              onChange={(e) => setFormData({ ...formData, juizPresidente: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-700 mb-1">
              Promotor(a) de Justiça:
            </label>
            <input
              type="text"
              value={formData.promotorJustica}
              onChange={(e) => setFormData({ ...formData, promotorJustica: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-700 mb-1">
              Defensor(a) Público(a) / Representante da OAB:
            </label>
            <input
              type="text"
              value={formData.defensorAdvogado}
              onChange={(e) => setFormData({ ...formData, defensorAdvogado: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-neutral-700 mb-1">
              Identificação da Sessão / Reunião Periódica:
            </label>
            <input
              type="text"
              value={formData.sessaoJudiciaria}
              onChange={(e) => setFormData({ ...formData, sessaoJudiciaria: e.target.value })}
              className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none"
            />
          </div>

          <div className="pt-2 border-t border-neutral-200">
            <span className="block font-bold text-neutral-800 mb-2">
              Identificação do Servidor Responsável pela Ata:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-neutral-600 mb-1">
                  Nome do(a) Servidor(a):
                </label>
                <input
                  type="text"
                  value={formData.servidorNome || formData.chefeSecretaria || ''}
                  onChange={(e) => setFormData({ ...formData, servidorNome: e.target.value, chefeSecretaria: e.target.value })}
                  placeholder="Ex: Marta Diana Lucindo Tenório, M98240"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-medium text-neutral-600 mb-1">
                  Cargo / Função:
                </label>
                <input
                  type="text"
                  value={formData.servidorCargo || 'Assessora Judicial'}
                  onChange={(e) => setFormData({ ...formData, servidorCargo: e.target.value })}
                  placeholder="Ex: Assessora Judicial / Analista Judiciário"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:border-neutral-800 focus:outline-none"
                />
              </div>
            </div>
            <p className="text-[11px] text-neutral-500 mt-1">
              Esses dados constarão na certidão de lavratura ao final da ata e no expediente.
            </p>
          </div>

          <div className="pt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-md text-neutral-600 hover:bg-neutral-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-neutral-900 text-white font-medium rounded-md hover:bg-neutral-800 flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Salvar Dados</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

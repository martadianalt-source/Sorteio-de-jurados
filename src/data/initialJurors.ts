import { Juror, ComarcaInfo } from '../types';

export const DEFAULT_COMARCA_INFO: ComarcaInfo = {
  tribunal: 'Tribunal de Justiça do Estado de Alagoas',
  comarca: 'São José da Tapera',
  vara: 'Vara do Único Ofício de São José da Tapera',
  endereco: 'Rua 13 de maio, sn, Centro',
  cep: '57445-000',
  telefone: '3622-1193',
  cidadeUf: 'São José da Tapera-AL',
  email: 'saojosedatapera@tjal.jus.br',
  juizPresidente: 'Elielson dos Santos Pereira',
  juizCargo: 'Juiz de Direito',
  servidorNome: 'Marta Diana Lucindo Tenório',
  servidorCargo: 'Assessora Judicial',
  chefeSecretaria: 'Marta Diana Lucindo Tenório',
  promotorJustica: '',
  defensorAdvogado: '',
  sessaoJudiciaria: '',
};

// Sem nomes fictícios: espaços iniciam em branco até o usuário fazer upload ou colar a lista real
export const INITIAL_JURORS: Juror[] = [];

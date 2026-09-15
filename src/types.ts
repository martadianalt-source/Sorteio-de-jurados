export interface Juror {
  id: string;
  order?: number; // Número oficial de inscrição do jurado na lista
  name: string;
  qualification: string;
  notes?: string;
}

export interface DrawnJuror extends Juror {
  drawOrder: number; // 1 to 25 for titulares, 1 to 10 for suplentes
  type: 'titular' | 'suplente';
  drawnAt: string;
}

export interface DrawSession {
  id: string;
  timestamp: string;
  seed: string;
  hash: string;
  totalPoolCount: number;
  titulares: DrawnJuror[];
  suplentes: DrawnJuror[];
  isFrozen: boolean;
  frozenAt?: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  action: 'IMPORT_JURORS' | 'DRAW_PERFORMED' | 'RESULTS_FROZEN' | 'DATA_COPIED' | 'RESET_ALL' | 'EDIT_JUROR' | 'REMOVE_JUROR' | 'USER_LOGIN' | 'USER_LOGOUT' | 'REPLACE_OFFICIAL_LIST' | 'CONFIG_UPDATED';
  description: string;
  details?: Record<string, any>;
  previousHash: string;
  hash: string; // SHA-256 chaining ensuring immutability
}

export interface ComarcaInfo {
  tribunal?: string;
  comarca: string;
  vara: string;
  endereco?: string;
  cep?: string;
  telefone?: string;
  cidadeUf?: string;
  email?: string;
  juizPresidente: string;
  juizCargo?: string;
  promotorJustica?: string;
  defensorAdvogado?: string;
  sessaoJudiciaria?: string;
  chefeSecretaria?: string;
  servidorNome?: string;
  servidorCargo?: string;
}

export interface SavedJurorList {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  jurors: Juror[];
  notes?: string;
  comarca?: string;
  vara?: string;
}

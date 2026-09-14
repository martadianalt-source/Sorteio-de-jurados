import { ComarcaInfo } from '../types';

export interface TjalMagistradoEntry {
  nome: string;
  condicao: string;
  lotacao: string;
  email?: string;
  contato?: string;
  observacao?: string;
}

export interface TjalLocalVara {
  local: string;
  vara: string;
  endereco: string;
  cep: string;
  telefone: string;
  entrancia?: string;
}

export interface TjalComarcaEntry {
  id: number;
  comarca: string;
  cidadeUf: string;
  locais: TjalLocalVara[];
  magistrados: TjalMagistradoEntry[];
}

export interface TjalVaraEntry {
  id: string;
  comarca: string;
  vara: string;
  local?: string;
  endereco: string;
  cep: string;
  telefone: string;
  cidadeUf: string;
  email: string;
  juizPresidentePadrao?: string;
  juizCargoPadrao?: string;
  competenciaJuri?: boolean;
}

/**
 * Dados oficiais extraídos diretamente dos portais do TJAL:
 * - Endereços, Fóruns, Telefones e Varas: https://www.tjal.jus.br/enderecos (API Dados Abertos)
 * - Magistrados e Juízes por Comarca: https://www.tjal.jus.br/magistratura/por-comarca (Portal de Magistratura)
 */
export const TJAL_ALL_COMARCAS: TjalComarcaEntry[] = [
  {
    "id": 2,
    "comarca": "Anadia",
    "cidadeUf": "Anadia-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Anadia",
        "vara": "Vara do Único Ofício",
        "endereco": "AV. PRES. JOSÉ SARNEI SN, Centro",
        "cep": "57660-000",
        "telefone": "(82) 3482-9561 / 3482-9562",
        "entrancia": "1ª entrancia"
      },
      {
        "local": "Fórum Ernande Carvalho",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua da Olaria, S/N, Centro",
        "cep": "57260-000",
        "telefone": "(82) 3482-9586 / 3482-9587",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "ANNA CELINA DE OLIVEIRA NUNES ASSIS",
        "condicao": "Titular",
        "lotacao": "Anadia - Fórum da Comarca de Anadia - Vara do Único Ofício",
        "email": "anadia@tjal.jus.br",
        "contato": "(82) 3482-9561 / 3482-9562",
        "observacao": "Substituto Legal : Campo Alegre, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 20 A 29 DE JULHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000008687-7) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***MAGIST"
      }
    ]
  },
  {
    "id": 4,
    "comarca": "Arapiraca",
    "cidadeUf": "Arapiraca-AL",
    "locais": [
      {
        "local": "Turma Recursal",
        "vara": "2ª Região",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9575",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "10ª Vara da Comarca de Arapiracal - Família e Sucessões",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9511",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "1ª Vara da Comarca de Arapiraca - Infância, Juventude e Crimes Praticados contra Criança e Adolescente",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-5281",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "1º Juizado",
        "vara": "1º JUIZADO ESPECIAL CÍVEL DE ARAPIRACA",
        "endereco": "Av. Deputada Ceci Cunha, 127, Alto do Cruzeiro",
        "cep": "57312-485",
        "telefone": "(82) 3482-9580",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "2ª Vara da Comarca de Arapiraca - Cível Residual",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9521",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "2º Juizado",
        "vara": "2º Juizado Especial Cível de Arapiraca",
        "endereco": "Rua Samaritana, 190, Complexo Integrado de Justiça Especializada , Santa Edwirges",
        "cep": "57300-495",
        "telefone": "(82) 3482-9581",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "3ª Vara da Comarca de Arapiraca - Cível Residual",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9519",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "4ª Vara da Comarca de Arapiraca - 1 Fazenda Pública - Estadual e Municipal",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9524",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "5ª Vara da Comarca de Arapiraca - Criminal",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9517",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "6ª Vara da Comarca de Arapiraca - Cível Residual",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9547",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "7ª Vara da Comarca de Arapiraca - Família e Sucessões",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9514",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "8ª Vara da Comarca de Arapiraca - Cível Residual",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9516",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "9ª Vara da Comarca de Arapiraca - Criminal e Execuções Penais",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9526",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Cartório do Registro Civil de Pessoas Naturais de Canaã",
        "endereco": "Praça Antônio Juvino da Silva, 101, Centro, Centro",
        "cep": "57610-200",
        "telefone": "(82) 3521-2304",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Cartório do Registro Civil de Pessoas Naturais de Folha Miúda",
        "endereco": "Rua do Comércio, 10 , Povoado Folha Miúda",
        "cep": "57320-000",
        "telefone": "(82) 3721-1139",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Cartório do Único Ofício de Craíbas",
        "endereco": "Rua Pedro Gama, 10, Centro",
        "cep": "57320-000",
        "telefone": "(82) 3521-1160",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "CEJUSC",
        "vara": "CEJUSC - Centro Judiciário de Solução de Conflitos e Cidadania",
        "endereco": "Rua Gov. Silvestre Péricles, Jardim Tropical",
        "cep": "57316-065",
        "telefone": "(82)  3482-9598 / 3482-9599",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "Central de Mandados",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9500",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "CPD - Arapiraca",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9508",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "Direção do Forum",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9502",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "Distribuição",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9503",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Juizado da Mulher",
        "vara": "Juizado Especial Criminal e da Violência Doméstica de Arapiraca/AL",
        "endereco": "Rua Samaritana, 160,  Ed. Juiz Pedro Medeiros Pereira, Complexo Integrado de Justiça Especializada Des. Paulo da Rocha Mendes, Santa Edwirges",
        "cep": "57310-245",
        "telefone": "(82) 3482-9574",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas)",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9509",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "Núcleo Técnico Regional de Arapiraca",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "Postagem",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9553",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. João Oliveira e Silva",
        "vara": "Superintendência",
        "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
        "cep": "57311-180",
        "telefone": "(82) 3482-9501",
        "entrancia": "3ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Anderson Santos dos Passos",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 1ª Vara da Comarca de Arapiraca - Infância, Juventude e Crimes Praticados contra Criança e Adolescente",
        "email": "vara1arapiraca@tjal.jus.br",
        "contato": "(82) 3482-5281",
        "observacao": "Substituto Legal: Juizado da Violência Doméstica de Arapiraca, conforme resolução nº 25, de 02/07/2024. \r\n\r\n***O MAGISTRADO ANDERSON SANTOS DOS PASSOS FOI DESIGNADO PARA EXERCER AS ATRIBUIÇÕES DE DIRETOR DO FÓRUM (PRÉDIO ANEXO) DA COMARCA DE ARAPIRAC"
      },
      {
        "nome": "Luciana Josué Raposo Lima Dias",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 2ª Vara da Comarca de Arapiraca - Cível Residual",
        "email": "vara2arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9521",
        "observacao": "Substituto Legal :  4ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024.\r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO  (1º PERÍODO) E 1º A 20 DE DEZEMBRO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103649) - (PERÍODOS ALTERADOS, CONFORME PROCE"
      },
      {
        "nome": "Laila Kerckhoff dos Santos",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 4ª Vara da Comarca de Arapiraca - 1 Fazenda Pública - Estadual e Municipal",
        "email": "vara4arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9524",
        "observacao": "Substituto Legal : 2ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***FÉRIAS 2026 DA TITULAR:05 A 24 DE JANEIRO (1º PERÍODO) E 31 DE NOVEMBRO A 20 DE DEZEMBRO (2º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000001807-3 ) - (PERÍODO"
      },
      {
        "nome": "Alberto de Almeida",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 5ª Vara da Comarca de Arapiraca - Criminal",
        "email": "vara5arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9517",
        "observacao": "Substituto Legal: 9ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***MAGISTRADO DIRETOR DO FÓRUM (PRÉDIO PRINCIPAL) DA COMARCA DE ARAPIRACA (PORTARIA Nº 575/2025, DJE 20/02/2025).\r\n\r\n***FÉRIAS 2026: 15 DE JANEIRO A 03 DE FEVEREIRO"
      },
      {
        "nome": "José Miranda Santos Júnior",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 6ª Vara da Comarca de Arapiraca - Cível Residual",
        "email": "vara6arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9547",
        "observacao": "Substituto Legal : 8ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***FÉRIAS 2026: 04  A 23 DE MAIO (1º PERÍODO) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Helestron Silva da Costa",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 8ª Vara da Comarca de Arapiraca - Cível Residual",
        "email": "vara8arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9516",
        "observacao": "Substituto Legal : 3ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***FÉRIAS 2026:02 A 11 DE JULHO (1º PERÍODO) E 3 A 22 DE NOVEMBRO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000014450-8) - (PERÍODOS ALTERADOS, CONFORME PROCE"
      },
      {
        "nome": "Rômulo Vasconcelos de Albuquerque",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 9ª Vara da Comarca de Arapiraca - Criminal e Execuções Penais",
        "email": "vara9arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9526",
        "observacao": "Substituto Legal : 5ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024.\r\n\r\n***FÉRIAS 2026: 11 A 30 DE MARÇO (1º PERÍODO) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO DE PLANTÃO"
      },
      {
        "nome": "André Gêda Peixoto Melo",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 10ª Vara da Comarca de Arapiracal - Família e Sucessões",
        "email": "vara10arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9511",
        "observacao": "Substituto Legal : 7ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***FÉRIAS 2025: 1º A 20 DE ABRIL DE 2027 (1º PERÍODO DE 2025 ALTERADO, CONFORME PROCESSO Nº 26.0.000013318-2).\r\n\r\n***FÉRIAS 2026:  11 A 30 DE JULHO (1º PERÍODO) E 2"
      },
      {
        "nome": "Carolina Sampaio Valões da Rocha Coêlho",
        "condicao": "Titular",
        "lotacao": "Arapiraca - 1º Juizado - 1º JUIZADO ESPECIAL CÍVEL DE ARAPIRACA",
        "email": "jecc1arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9580",
        "observacao": "Substituto Legal : 2º Juizado Especial de Arapiraca, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DA TITULAR: 15 DE JANEIRO A 03 DE FEVEREIRO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 2025-126371) E 31 DE MAIO A 19 DE JUNHO ("
      },
      {
        "nome": "Durval Mendonça Júnior",
        "condicao": "Titular",
        "lotacao": "Arapiraca - 2º Juizado - 2º Juizado Especial Cível de Arapiraca",
        "email": "jecc2arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9581",
        "observacao": "Substituto Legal : 1º JEC de Arapiraca, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 11 A 30 DE ABRIL (1º PERÍODO) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Eliana Augusta Acioly Machado de Oliveira",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Juizado da Mulher - Juizado Especial Criminal e da Violência Doméstica de Arapiraca/AL",
        "email": "-",
        "contato": "(82) 3482-9574",
        "observacao": "Substituto legal: 1ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO  (1º PERÍODO) E 23 DE NOVEMBRO A 12 DE DEZEMBRO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103689) - (PERÍODOS ALTERADOS CONF"
      },
      {
        "nome": "KAIO CESAR QUEIROZ SILVA SANTOS",
        "condicao": "Substituto",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 4ª Vara da Comarca de Arapiraca - 1 Fazenda Pública - Estadual e Municipal",
        "email": "vara4arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9524",
        "observacao": "Substituto Legal : 2ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***FÉRIAS 2026 DA TITULAR:05 A 24 DE JANEIRO (1º PERÍODO) E 31 DE NOVEMBRO A 20 DE DEZEMBRO (2º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000001807-3 ) - (PERÍODO"
      },
      {
        "nome": "Wilker André Vieira Lacerda",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 7ª Vara da Comarca de Arapiraca - Família e Sucessões",
        "email": "vara7arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9514",
        "observacao": "Substituto Legal : 10ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024.\r\n\r\n***FÉRIAS 2026: 11 A 20 DE ABRIL (1º PERÍODO ALTERADO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "ROGERIO SANTOS ALENCAR",
        "condicao": "Designado",
        "lotacao": "Arapiraca - 1º Juizado - 1º JUIZADO ESPECIAL CÍVEL DE ARAPIRACA",
        "email": "jecc1arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9580",
        "observacao": "Substituto Legal : 2º Juizado Especial de Arapiraca, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DA TITULAR: 15 DE JANEIRO A 03 DE FEVEREIRO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 2025-126371) E 31 DE MAIO A 19 DE JUNHO ("
      },
      {
        "nome": "Lucas Tavares Takada",
        "condicao": "Auxiliar",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 4ª Vara da Comarca de Arapiraca - 1 Fazenda Pública - Estadual e Municipal",
        "email": "vara4arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9524",
        "observacao": "Substituto Legal : 2ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***FÉRIAS 2026 DA TITULAR:05 A 24 DE JANEIRO (1º PERÍODO) E 31 DE NOVEMBRO A 20 DE DEZEMBRO (2º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000001807-3 ) - (PERÍODO"
      },
      {
        "nome": "Mariane Torreao Dantas",
        "condicao": "Auxiliar",
        "lotacao": "Arapiraca - 1º Juizado - 1º JUIZADO ESPECIAL CÍVEL DE ARAPIRACA",
        "email": "jecc1arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9580",
        "observacao": "Substituto Legal : 2º Juizado Especial de Arapiraca, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DA TITULAR: 15 DE JANEIRO A 03 DE FEVEREIRO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 2025-126371) E 31 DE MAIO A 19 DE JUNHO ("
      },
      {
        "nome": "Alberto de Almeida",
        "condicao": "Designado",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 9ª Vara da Comarca de Arapiraca - Criminal e Execuções Penais",
        "email": "vara9arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9526",
        "observacao": "Substituto Legal : 5ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024.\r\n\r\n***FÉRIAS 2026: 11 A 30 DE MARÇO (1º PERÍODO) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO DE PLANTÃO"
      },
      {
        "nome": "Filipe Ferreira Munguba",
        "condicao": "Titular",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 3ª Vara da Comarca de Arapiraca - Cível Residual",
        "email": "vara3arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9519",
        "observacao": "Substituto Legal : 6ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024.\r\n\r\n***FÉRIAS 2026: 19 DE FEVEREIRO A 10 DE MARÇO (1º PERÍODO) E 1º A 20 DE NOVEMBRO (2º PERÍODO RETIFICADO, CONFORME PROCESSO Nº 2026/102951) - (PERÍODOS ALTERADOS, CON"
      },
      {
        "nome": "Brenno Livio Barbosa Bezerra",
        "condicao": "Designado",
        "lotacao": "Arapiraca - Fórum Des. João Oliveira e Silva - 10ª Vara da Comarca de Arapiracal - Família e Sucessões",
        "email": "vara10arapiraca@tjal.jus.br",
        "contato": "(82) 3482-9511",
        "observacao": "Substituto Legal : 7ª Vara de Arapiraca, conforme Resolução nº 25, de 02/07/2024. \r\n\r\n***FÉRIAS 2025: 1º A 20 DE ABRIL DE 2027 (1º PERÍODO DE 2025 ALTERADO, CONFORME PROCESSO Nº 26.0.000013318-2).\r\n\r\n***FÉRIAS 2026:  11 A 30 DE JULHO (1º PERÍODO) E 2"
      }
    ]
  },
  {
    "id": 15,
    "comarca": "Atalaia",
    "cidadeUf": "Atalaia-AL",
    "locais": [
      {
        "local": "Fórum José Jerônimo de Albuquerque",
        "vara": "Vara do Único Ofício",
        "endereco": "Lot. Santa Inês, 610 - AL-210, José Paulino",
        "cep": "57690-000",
        "telefone": "(82) 4009-3895",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "João Paulo Alexandre dos Santos",
        "condicao": "Titular",
        "lotacao": "Atalaia - Fórum José Jerônimo de Albuquerque - Vara do Único Ofício",
        "email": "atalaia@tjal.jus.br",
        "contato": "(82) 4009-3895",
        "observacao": "Substituto Legal : Capela, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026:02 A 21 DE JANEIRO (1º PERÍODO) E 2 A 21 DE JULHO (2º PERÍODO)- (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025-126806)."
      }
    ]
  },
  {
    "id": 16,
    "comarca": "Batalha",
    "cidadeUf": "Batalha-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Batalha",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Antero Costa, 2-24, Centro",
        "cep": "57420-000",
        "telefone": "(82) 3429-9298 / 3429-9299",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "DIEGO CADORE PEDROSO",
        "condicao": "Titular",
        "lotacao": "Batalha - Fórum da Comarca de Batalha - Vara do Único Ofício",
        "email": "batalha@tjal.jus.br",
        "contato": "(82) 3429-9298 / 3429-9299",
        "observacao": "Substituto Legal : Pão de Açúcar, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 21 DE JANEIRO (1º PERÍODO)- (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 17,
    "comarca": "Boca da Mata",
    "cidadeUf": "Boca da Mata-AL",
    "locais": [
      {
        "local": "Fórum Des. Moura Castro",
        "vara": "Vara do Único Ofício",
        "endereco": "AL 215, S/N, Centro",
        "cep": "57680-000",
        "telefone": "(82) 3551-9390 / 3551-9391",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "PATRICIA SIQUEIRA DE FREITAS CURVELO",
        "condicao": "Titular",
        "lotacao": "Boca da Mata - Fórum Des. Moura Castro - Vara do Único Ofício",
        "email": "bocadamata@tjal.jus.br",
        "contato": "(82) 3551-9390 / 3551-9391",
        "observacao": "Substituto Legal : Maribondo, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 2 A 21 DE MARÇO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/102819) E 11 A 30 DE AGOSTO (2º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000011561-3"
      }
    ]
  },
  {
    "id": 8,
    "comarca": "Cacimbinhas",
    "cidadeUf": "Cacimbinhas-AL",
    "locais": [
      {
        "local": "Fórum ADVOGADO ALFREDO DE MAYA",
        "vara": "Vara do Único Ofício",
        "endereco": "AVENIDA NOSSA SENHORA DA PENHA Nº 437, Centro - 575570-000",
        "cep": "57000-000",
        "telefone": "(82) 3429-9296 / 3429-9297",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "ROBERIO MONTEIRO DE SOUZA",
        "condicao": "Titular",
        "lotacao": "Cacimbinhas - Fórum ADVOGADO ALFREDO DE MAYA - Vara do Único Ofício",
        "email": "cacimbinhas@tjal.jus.br",
        "contato": "(82) 3429-9296 / 3429-9297",
        "observacao": "Substituto Legal : Major Izidoro, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 11 A 30 DE JUNHO (1º PERÍODO) E 16 DE NOVEMBRO A 05 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***MAGIST"
      }
    ]
  },
  {
    "id": 7,
    "comarca": "Cajueiro",
    "cidadeUf": "Cajueiro-AL",
    "locais": [
      {
        "local": "Fórum Des. Horacio Gomes de Melo",
        "vara": "Vara do Único Ofício",
        "endereco": "AV. Antônio Jorge de Melo, S/N, Centro",
        "cep": "57770-000",
        "telefone": "(82) 3254 - 2427",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "MAYARA LIMA ROCHA MACEDO",
        "condicao": "Titular",
        "lotacao": "Cajueiro - Fórum Des. Horacio Gomes de Melo - Vara do Único Ofício",
        "email": "cajueiro@tjal.jus.br",
        "contato": "(82) 3254 - 2427",
        "observacao": "Substituto Legal : Viçosa, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 05 A 24 DE ABRIL (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***MAGISTRADA TITULAR NO EXERCÍCIO DAS ATIVIDADES JURISDICIONA"
      },
      {
        "nome": "Juliana Batistela Guimarães de Alencar",
        "condicao": "Designado",
        "lotacao": "Cajueiro - Fórum Des. Horacio Gomes de Melo - Vara do Único Ofício",
        "email": "cajueiro@tjal.jus.br",
        "contato": "(82) 3254 - 2427",
        "observacao": "Substituto Legal : Viçosa, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 05 A 24 DE ABRIL (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***MAGISTRADA TITULAR NO EXERCÍCIO DAS ATIVIDADES JURISDICIONA"
      }
    ]
  },
  {
    "id": 9,
    "comarca": "Campo Alegre",
    "cidadeUf": "Campo Alegre-AL",
    "locais": [
      {
        "local": "Fórum Dr. Olival Tenório Costa",
        "vara": "Vara do Único Ofício",
        "endereco": "Av. Governador Divaldo Suruagy, 284, Centro",
        "cep": "57250-000",
        "telefone": "(82) 3482-9563 / 3482-9564",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "EMANUEL DE ANDRADE BARBOSA",
        "condicao": "Titular",
        "lotacao": "Campo Alegre - Fórum Dr. Olival Tenório Costa - Vara do Único Ofício",
        "email": "campoalegre@tjal.jus.br",
        "contato": "(82) 3482-9563 / 3482-9564",
        "observacao": "Substituto Legal : Anadia, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026:  30 DE JUNHO A 08 DE JULHO (2º PERÍODO - DIA 9/7/2026 FOI SUSPENSO, CONFORME PROCESSO Nº 26.0.000010709-2) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025"
      }
    ]
  },
  {
    "id": 18,
    "comarca": "Capela",
    "cidadeUf": "Capela-AL",
    "locais": [
      {
        "local": "Fórum Des. José Xisto Gomes de Melo",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Inácio Moraes, sn, Centro",
        "cep": "57780-000",
        "telefone": "(82) 3254-2425 /  3254-2426",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "André Luis Parizio Maia Paiva",
        "condicao": "Titular",
        "lotacao": "Capela - Fórum Des. José Xisto Gomes de Melo - Vara do Único Ofício",
        "email": "vara1capela@tjal.jus.br",
        "contato": "(82) 3254-2425 /  3254-2426",
        "observacao": "Substituto Legal : Atalaia,  conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026:19 DE FEVEREIRO A 10 DE MARÇO (1º PERÍODO) E 9 A 18 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 11,
    "comarca": "Colônia Leopodina",
    "cidadeUf": "Colônia Leopodina-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Colônia Leopodina",
        "vara": "Vara do Único Ofício de Colônia Leopodina",
        "endereco": "Fórum da Comarca de Colônia Leopodina, Centro",
        "cep": "57000-000",
        "telefone": "(82) 3000-0000",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "CAIO NUNES DE BARROS",
        "condicao": "Titular",
        "lotacao": "Colônia Leopoldina - Fórum Jurista Guedes de Miranda - Vara do Único Ofício",
        "email": "colonialeopoldina@tjal.jus.br",
        "contato": "(82) 3254-2417 / 3254-2418",
        "observacao": "Substituto Legal : Matriz de Camaragibe, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026 DO TITULAR:  21 A 30 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***MAGISTRADO TITULAR FOI DESIGNADO P"
      },
      {
        "nome": "Rafael Henrique de Barros Lins Silva",
        "condicao": "Designado",
        "lotacao": "Colônia Leopoldina - Fórum Jurista Guedes de Miranda - Vara do Único Ofício",
        "email": "colonialeopoldina@tjal.jus.br",
        "contato": "(82) 3254-2417 / 3254-2418",
        "observacao": "Substituto Legal : Matriz de Camaragibe, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026 DO TITULAR:  21 A 30 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***MAGISTRADO TITULAR FOI DESIGNADO P"
      }
    ]
  },
  {
    "id": 12,
    "comarca": "Coruripe",
    "cidadeUf": "Coruripe-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Coruripe",
        "vara": "1º Vara",
        "endereco": "Av. Luis Lima Beltrão,  Cj. Comendador Tércio Wanderley, Rodovia AL 101 Sul, Nao informado",
        "cep": "57230-000",
        "telefone": "(82) 3551-9392 / 3551-9393",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Coruripe",
        "vara": "2º Vara",
        "endereco": "Av. Luis Lima Beltrão,  Cj. Comendador Tércio Wanderley, Rodovia AL 101 Sul, Nao informado",
        "cep": "57230-000",
        "telefone": "(82) 3551-9392 / 3551-9393",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Coruripe",
        "vara": "Assuntos Concernentes ao Processo de Falência da Laginha Agroindustrial S/A",
        "endereco": "TRAVESSA JOSE LEAO 76, Centro",
        "cep": "57820-000",
        "telefone": "(82) 3551-9392 / 3551-9393",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Coruripe",
        "vara": "Distribuição",
        "endereco": "Av. Luis Lima Beltrão,  Cj. Comendador Tércio Wanderley, Rodovia AL 101 Sul, Nao informado",
        "cep": "57230-000",
        "telefone": "(82) 3551-9392 / 3551-9393",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Registro Civil de Pessoas Naturais de Poxim",
        "endereco": "Rua São José, 101, Centro, Poxim",
        "cep": "57230-000",
        "telefone": "(82) 3722-1103 / 3722-1102",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Mauro Baldini",
        "condicao": "Titular",
        "lotacao": "Coruripe - Fórum da Comarca de Coruripe - 1º Vara",
        "email": "vara1coruripe@tjal.jus.br",
        "contato": "(82) 3551-9392 / 3551-9393",
        "observacao": "Substituto Legal : 2ª Vara de Coruripe, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***MAGISTRADO SUPERINTENDENTE DO FÓRUM DA COMARCA DE CORURIPE (PORTARIA Nº 1316/19, DJE 11/06/2019).\r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO) E 11"
      },
      {
        "nome": "BRUNA MENDES D ALMEIDA",
        "condicao": "Titular",
        "lotacao": "Coruripe - Fórum da Comarca de Coruripe - 2º Vara",
        "email": "-",
        "contato": "(82) 3551-9392 / 3551-9393",
        "observacao": "Substituto legal: 1ª Vara de Coruripe, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 11 A 30 DE MAIO (1º PERÍODO) E 16 DE NOVEMBRO A 10 DE DEZEMBRO (2º PERÍODO ALTERADO CONFORME O PROCESSO Nº 26.0.000011448-0 ) - (PERÍODOS ALTE"
      }
    ]
  },
  {
    "id": 13,
    "comarca": "Delmiro Gouveia",
    "cidadeUf": "Delmiro Gouveia-AL",
    "locais": [
      {
        "local": "Fórum Dr. Walter Cavalcanti Veloso",
        "vara": "1ª Vara",
        "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
        "cep": "57480-000",
        "telefone": "(82) 3429-9286",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Walter Cavalcanti Veloso",
        "vara": "2ª Vara",
        "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
        "cep": "57480-000",
        "telefone": "(82) 3429-9287",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Cartório do Registro Civil de Pessoas Naturais de Barragem Leste",
        "endereco": "Conj. Rui Palmeira, n61 Qd. B, Cohab Velha",
        "cep": "57480-000",
        "telefone": "(82) 3261-1586",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Cartório do Registro Civil de Pessoas Naturais de Lagoinha",
        "endereco": "Rua Pedro II, n200, Lagoinha",
        "cep": "57480-000",
        "telefone": "(82) 3641-1179",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Walter Cavalcanti Veloso",
        "vara": "Direção do Fórum",
        "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
        "cep": "57480-000",
        "telefone": "(82) 3000-0000",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Walter Cavalcanti Veloso",
        "vara": "Distribuição",
        "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
        "cep": "57480-000",
        "telefone": "(82) 3641-1028",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Juizado",
        "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Delmiro Gouveia",
        "endereco": "Av.  José Oliveira Rocha, S/N, Bairro Novo",
        "cep": "57480-000",
        "telefone": "(82) 3429-9288",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Walter Cavalcanti Veloso",
        "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas)",
        "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
        "cep": "57480-000",
        "telefone": "(82) 3000-0000",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Raquel David Torres de Oliveira",
        "condicao": "Titular",
        "lotacao": "Delmiro Gouveia - Juizado - Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Delmiro Gouveia",
        "email": "jeccdelmiro@tjal.jus.br",
        "contato": "(82) 3429-9288",
        "observacao": "Substituto Legal: 2ª Vara de Delmiro Gouveia, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 1º A 20 DE JULHO (1º PERÍODO) E 13 DE NOVEMBRO A 02 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Jéssica Lourenço de Sá Santos",
        "condicao": "Titular",
        "lotacao": "Delmiro Gouveia - Fórum Dr. Walter Cavalcanti Veloso -  1ª Vara",
        "email": "vara1delmiro@tjal.jus.br",
        "contato": "(82) 3429-9286",
        "observacao": "Substituto Legal : JECC de Delmiro Gouveia, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***CONFORME A PORTARIA TJAL Nº 391, DE 20 DE MARÇO DE 2026, A MAGISTRADA TITULAR FOI DESIGNADA PARA EXERCER AS ATRIBUIÇÕES DE DIRETORA DO FÓRUM DA COMAR"
      },
      {
        "nome": "Jéssica Lourenço de Sá Santos",
        "condicao": "Designado",
        "lotacao": "Delmiro Gouveia - Fórum Dr. Walter Cavalcanti Veloso -  2ª Vara",
        "email": "vara2delmiro@tjal.jus.br",
        "contato": "(82) 3429-9287",
        "observacao": "Substituto Legal :  1ª Vara de Delmiro Gouveia, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***MAGISTRADA DESIGNADA: JÉSSICA LOURENÇO DE SÁ SANTOS, PARA RESPONDER PELA 2ª VARA DE DELMIRO GOUVEIA, EM RAZÃO DA VACÂNCIA, CONSOANTE O OFÍCIO Nº 3"
      }
    ]
  },
  {
    "id": 60,
    "comarca": "Feira Grande",
    "cidadeUf": "Feira Grande-AL",
    "locais": [
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Registro Civil de Pessoas Naturais de Massapê",
        "endereco": "R. Virgiliana Ribeiro Gonçalves, 437, São Luiz",
        "cep": "57340-000",
        "telefone": "(82) 3521-1537",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Registro de Imóveis e Notas de Lagoa da Canoa",
        "endereco": "Praça Vereador Benício Alves, 62, Centro",
        "cep": "57330-000",
        "telefone": "(82) 3528-1171 / 3528 -2260",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Ivan Vasconcelos Brito",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Virgilia Ribeiro Gonçalves, 437, Centro",
        "cep": "57340-000",
        "telefone": "(82) 3482-9592/ 3482-9593",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "DARLAN SOARES SOUZA",
        "condicao": "Titular",
        "lotacao": "Feira Grande - Fórum Dr. Ivan Vasconcelos Brito - Vara do Único Ofício",
        "email": "feiragrande@tjal.jus.br",
        "contato": "(82) 3482-9592/ 3482-9593",
        "observacao": "Substituto Legal :  Traipu, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 14,
    "comarca": "Girau do Ponciano",
    "cidadeUf": "Girau do Ponciano-AL",
    "locais": [
      {
        "local": "Fórum Des. José Marçal Cavalvanti",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Serventuário Gilberto Matias Da Silva, 47, Progresso",
        "cep": "57360-000",
        "telefone": "(82) 3482-9597",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "NATALIA CERQUEIRA DE CASTRO",
        "condicao": "Titular",
        "lotacao": "Girau do Ponciano - Fórum Des. José Marçal Cavalvanti - Vara do Único Ofício",
        "email": "giraudoponciano@tjal.jus.br",
        "contato": "(82) 3482-9597",
        "observacao": "Substituto Legal:  Feira Grande,  conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 16 DE NOVEMBRO A 5 DE DEZEMBRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103281) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONF"
      }
    ]
  },
  {
    "id": 6,
    "comarca": "Igaci",
    "cidadeUf": "Igaci-AL",
    "locais": [
      {
        "local": "Fórum Des. Eraldo de Castro Vasconcelos",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Prefeito Lourenço Ferreira,  740, Centro",
        "cep": "57620-000",
        "telefone": "(82) 3482-9590 / 3482-9591",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "EVALDO DA CUNHA MACHADO",
        "condicao": "Titular",
        "lotacao": "Igaci - Fórum Des. Eraldo de Castro Vasconcelos - Vara do Único Ofício",
        "email": "igaci@tjal.jus.br",
        "contato": "(82) 3482-9590 / 3482-9591",
        "observacao": "Substituto Legal : Quebrangulo, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 1º A 20 DE MARÇO (1º PERÍODO) E 29 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 49,
    "comarca": "Igreja Nova",
    "cidadeUf": "Igreja Nova-AL",
    "locais": [
      {
        "local": "Fórum da Cormarca de Igreja Nova",
        "vara": "Vara do Único Ofício",
        "endereco": "Av. 16 de maio, sn, Nao informado",
        "cep": "57280-970",
        "telefone": "(82) 3551-9396/ 3551-9397",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "LUIS FILLIPE DE GODOI TRINO",
        "condicao": "Titular",
        "lotacao": "Igreja Nova - Fórum da Cormarca de Igreja Nova - Vara do Único Ofício",
        "email": "igrejanova@tjal.jus.br",
        "contato": "(82) 3551-9396/ 3551-9397",
        "observacao": "Substituto Legal : Piaçabuçu,  conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS DE 2026: 1º A 20 DE JUNHO (1º PERÍODO) E 30 DE NOVEMBRO A 19 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***MAGIST"
      }
    ]
  },
  {
    "id": 51,
    "comarca": "Joaquim Gomes",
    "cidadeUf": "Joaquim Gomes-AL",
    "locais": [
      {
        "local": "Fórum Dr. Frederico George Brotherhood de Medeiros",
        "vara": "Vara do Único Ofício",
        "endereco": "ROD PREFEITO OSMÁRIO GOMES, SN, Centro",
        "cep": "57980-000",
        "telefone": "(82) 3254-2415 / 3254-2416",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "ANTÔNIO IRIS DA COSTA JÚNIOR",
        "condicao": "Titular",
        "lotacao": "Joaquim Gomes - Fórum Dr. Frederico George Brotherhood de Medeiros - Vara do Único Ofício",
        "email": "joaquimgomes@tjal.jus.br",
        "contato": "(82) 3254-2415 / 3254-2416",
        "observacao": "Substituto Legal : Colônia Leopoldina, conforme Resolução nº 23, de 06 de junho de 2023. \r\n\r\n***FÉRIAS 2026: 13 A 22 DE ABRIL  (1º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n*** AFASTAMENTO TEMPORÁRIO DO MAGISTRADO TITULAR,"
      }
    ]
  },
  {
    "id": 50,
    "comarca": "Junqueiro",
    "cidadeUf": "Junqueiro-AL",
    "locais": [
      {
        "local": "Fórum João Malta Tavares",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Frei Pascasio, s/n, Centro",
        "cep": "57270-000",
        "telefone": "(82) 3482-9588 / 3482-9589",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "EDUARDO LIGIERO ROCHA",
        "condicao": "Titular",
        "lotacao": "Junqueiro - Fórum João Malta Tavares - Vara do Único Ofício",
        "email": "junqueiro@tjal.jus.br",
        "contato": "(82) 3482-9588 / 3482-9589",
        "observacao": "Substituto Legal :  Teotônio Vilela, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 04 DE MAIO A 02 DE JUNHO (1º PERÍODO) E 03 A 22 DE NOVEMBRO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/100734) - (2º PERÍODO ALTERADO, CONF"
      },
      {
        "nome": "BRUNA DE LEAO FIGUEIREDO CARDOSO",
        "condicao": "Designado",
        "lotacao": "Junqueiro - Fórum João Malta Tavares - Vara do Único Ofício",
        "email": "junqueiro@tjal.jus.br",
        "contato": "(82) 3482-9588 / 3482-9589",
        "observacao": "Substituto Legal :  Teotônio Vilela, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 04 DE MAIO A 02 DE JUNHO (1º PERÍODO) E 03 A 22 DE NOVEMBRO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/100734) - (2º PERÍODO ALTERADO, CONF"
      }
    ]
  },
  {
    "id": 52,
    "comarca": "Limoeiro de Anadia",
    "cidadeUf": "Limoeiro de Anadia-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Anadia",
        "vara": "Vara do Único Ofício",
        "endereco": "AV. PRES. JOSÉ SARNEI SN, Centro",
        "cep": "57660-000",
        "telefone": "(82) 3482-9561 / 3482-9562",
        "entrancia": "1ª entrancia"
      },
      {
        "local": "Fórum Ernande Carvalho",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua da Olaria, S/N, Centro",
        "cep": "57260-000",
        "telefone": "(82) 3482-9586 / 3482-9587",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "JOSE IVAN MELO DOS SANTOS",
        "condicao": "Titular",
        "lotacao": "Limoeiro de Anadia - Fórum Ernande Carvalho - Vara do Único Ofício",
        "email": "limoeirodeanadia@tjal.jus.br",
        "contato": "(82) 3482-9586 / 3482-9587",
        "observacao": "Substituto Legal : Taquarana, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n**FÉRIAS DE 2026: 14 DE MAIO A 02 DE JUNHO (1º PERÍODO) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***JUIZ SUBSTITUTO"
      },
      {
        "nome": "Gustavo Adolfo Câmara de Araújo",
        "condicao": "Auxiliar",
        "lotacao": "Limoeiro de Anadia - Fórum Ernande Carvalho - Vara do Único Ofício",
        "email": "limoeirodeanadia@tjal.jus.br",
        "contato": "(82) 3482-9586 / 3482-9587",
        "observacao": "Substituto Legal : Taquarana, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n**FÉRIAS DE 2026: 14 DE MAIO A 02 DE JUNHO (1º PERÍODO) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***JUIZ SUBSTITUTO"
      }
    ]
  },
  {
    "id": 1,
    "comarca": "Maceió",
    "cidadeUf": "Maceió-AL",
    "locais": [
      {
        "local": "Tribunal de Justiça",
        "vara": "1ª Câmara Cível",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Turma Recursal",
        "vara": "1ª Região",
        "endereco": "Rodovia João Paulo II, s/n, Feitosa",
        "cep": "57041-970",
        "telefone": "(82) 2126-9832 (ATENDIMENTO), (82) 2126-9833 (SECRETARIA), (82) 2126-9836 (COPA), (82) 2126-9839 (GABINETE 1), (82) 2126-9840 (GABINETE 2), (82) 2126-9841 (GABINETE 3)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "1ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3507 (CARTÓRIO), (82) 4009-3607 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "2ª Câmara Cível",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "2ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3567 (CARTÓRIO), (82) 4009-3608 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "3ª Câmara Cível",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3268",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "3ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3509 (CARTÓRIO), (82) 4009-3609 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "3ª Vara Criminal da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3529 (ATENDIMENTO), (82) 4009-3633 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "4ª Câmara Cível",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3015, (82) 4009-3016",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "4ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3510 (CARTÓRIO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "4ª Vara Criminal da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3530 (CARTÓRIO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "5ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3511 (CARTÓRIO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "6ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3512 (CARTÓRIO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "6ª Vara Criminal da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3677 (CARTÓRIO), (82) 4009-3632 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "7ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3513 (CARTÓRIO), (82) 4009-3613(GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "7ª Vara Criminal da Capital Tribunal do Júri",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3712 (CARTÓRIO), (82) 4009-3631 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "8ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3514 (CARTÓRIO), (82) 4009-3614 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "8ª Vara Criminal da Capital Tribunal do Júri",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3534 (ATENDIMENTO), (82) 4009-3634 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "9ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3515 (CARTÓRIO), (82) 4009-3615 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "9ª Vara Criminal da Capital Tribunal do Júri",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3595 (CARTÓRIO), (82) 4009-3695 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "10ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3579 (ASESSORIA), (82) 4009-3516 (CARTÓRIO), (82) 4009-3687 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "10ª Vara Criminal da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3537(CARTÓRIO), (82) 4009-3637 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional do Benedito Bentes",
        "vara": "10º Juizado Especial Cível da Capital",
        "endereco": "R. Jussara, Benedito Bentes",
        "cep": "57084-800",
        "telefone": "(82) 4009-3578",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "11ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3531 (ASSESSORIA), (82) 4009-3517 (CARTÓRIO), (82) 4009-3617 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "11ª Vara Criminal - Entorpecentes",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3593 (CARTÓRIO), (82) 4009-3643 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "11º Juizado",
        "vara": "11º Juizado Especial Cível da Capital",
        "endereco": "Terminal Rodoviário João Paulo II – 1º  Piso, Feitosa",
        "cep": "57043-000",
        "telefone": "(82) 2126-9813, (82) 2126-9815,(82) 99107-4845",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "12ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3502 (CARTÓRIO - ATENDIMENTO), (82) 4009-3583 (CARTÓRIO), (82) 4009-3602 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "12ª Vara Criminal da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3722 (ATENDIMENTO), (82) 4009-3527 (CARTÓRIO), (82) 4009-3627 (GABINETE DO MAGISTRADO), (82) 4009-3726 (AUDIÊNCIA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "13ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3501 (CARTÓRIO), (82) 4009-3601 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "13ª Vara Criminal da Capital Auditoria Militar",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3538 (CARTÓRIO), (82) 4009-3704 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "14ª Vara Cível da Capital Fazenda Municipal",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3523 (CARTÓRIO), (82) 4009-3556 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "14ª Vara Criminal da Capital - Crime Contra Menor/Idoso/Deficiente e Vulnerável",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3577 (CARTÓRIO), (82) 4009-3574 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "15ª Vara Cível da Capital Fazenda Municipal",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3663 (ATENDIMENTO), (82) 4009-3713 (ASSESSORIA), (82) 4009-3524 (CARTÓRIO), (82) 4009-3572 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "15ª Vara Criminal da Capital Juizado de Entorpecentes",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3661 (CARTÓRIO), (82) 4009-3668 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "16ª Vara Cível da Capital Fazenda Estadual",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3506 (ATENDIMENTO), (82) 4009-3673 (CHEFE DE SECRETARIA), (82) 4009-3606 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional da Universidade Federal de Alagoas",
        "vara": "16ª Vara Criminal da Capital Execuções Penais",
        "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
        "cep": "57072-970",
        "telefone": "(82) 4009-3859, (82) 4009-3860",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "17ª Vara Cível da Capital Fazenda Estadual",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3521 (CARTÓRIO), (82) 4009-3621 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "17ª Vara Criminal da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3562 (ATENDIMENTO),(82) 4009-3546 (CARTÓRIO), (82) 4009-3536 /3714 /3674 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "18ª Vara Cível da Capital Fazenda Estadual",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3666 (ASSESSORIA), (82) 4009-3522 (CARTÓRIO), (82) 4009-3570 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "19ª Vara Cível da Capital Fazenda Estadual",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3582 (CARTÓRIO), (82) 4009-3662 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Ponta verde",
        "vara": "1ª Vara Criminal da Capital Infância e Juventude",
        "endereco": "Rua Hélio Pradines, 600, Ponta Verde",
        "cep": "57035-220",
        "telefone": "(82) 2126-4721 Cartório 1ª Vara, (82) 2126-4705 Cartório 28ª Vara",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "4º Juizado",
        "vara": "1º Juizado de Violência Doméstica e Familiar Contra a Mulher da Capital",
        "endereco": "R. do Imperador, 119 - Centro, Maceió - AL, Centro",
        "cep": "57020-670",
        "telefone": "(82) 2126-9671, (82) 2126-9672, (82) 2126-9673",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "1º Juizado",
        "vara": "1º Juizado Especial Cível da Capital",
        "endereco": "Rua Durval Guimarães, 402, Ponta Verde",
        "cep": "57035-060",
        "telefone": "(82) 4009-3741 (Recepção),  (82) 4009-3742/3743 (Secretaria), (82) 4009-3744 (Asssesoria), (82) 4009-3849 (Conciliação),  (82) 4009-3735 (CJUSC),  (82) 4009-3740 (Policial),  (82) 4009-3739 (Audiência)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Juizado da Fazenda",
        "vara": "1º Juizado Especial da Fazenda Pública Estadual da Capital",
        "endereco": "Av Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3760/3763 (CARTÓRIO), (82) 4009-3767 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "20ª Vara Cível da Capital Sucessões",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3519 (ATENDIMENTO), (82) 4009-3688 (CARTÓRIO), (82) 4009-3626 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "21ª Vara Cível da Capital Sucessões",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3520 (CARTÓRIO), (82) 4009-3564 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "22ª Vara Cível da Capital Família",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3685",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "23ª Vara Cível da Capital Família",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3505 (ATENDIMENTO), (82) 4009-3605 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "24ª Vara Cível da Capital Família",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3504 (ATENDIMENTO), (82) 4009-3604 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional do Benedito Bentes",
        "vara": "25ª Vara Cível da Capital Família",
        "endereco": "R. Jussara, Benedito Bentes",
        "cep": "57084-800",
        "telefone": "(82) 4009-3880",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional da Universidade Federal de Alagoas",
        "vara": "26ª Vara Cível da Capital Família",
        "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
        "cep": "57072-970",
        "telefone": "(82) 4009-3864",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "27ª Vara Cível da Capital Família",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3503 (ATENDIMENTO), (82) 4009-3736 (CHEFE DE SECRETARIA), (82) 4009-3636 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Ponta verde",
        "vara": "28ª Vara Cível da Capital Infância e Juventude",
        "endereco": "Rua Hélio Pradines, 600, Ponta Verde",
        "cep": "57035-220",
        "telefone": "(82) 2126-4700/4747",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Agrário de Alagoas",
        "vara": "29ª Vara Cível da Capital - Conflitos Agrários",
        "endereco": "Terminal Rodoviário João Paulo II - Térreo, Av. Gov. Lamenha Filho, Feitosa",
        "cep": "57043-001",
        "telefone": "(82) 3235-9850 (RECEPÇÃO), (82) 3235-9851 (SECRETARIA), (82) 3235-9852 (GABINETE), (82) 3235-9853 (ASSESSORIA), (82) 3235-9854 (AUDIÊNCIA), (82) 3235-9855 (COPA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "4º Juizado",
        "vara": "2º Juizado de Violência Doméstica e Familiar Contra a Mulher da Capital",
        "endereco": "R. do Imperador, 119 - Centro, Maceió - AL, Centro",
        "cep": "57020-670",
        "telefone": "(82) 4009-3528 (CARTÓRIO), (82) 4009-3711 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "2º Juizado Especial Fazenda Pública Estadual da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82)4009-3588/3589 (CARTÓRIO), 3592 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "30ª Vara Cível da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3545 (CARTÓRIO), (82) 4009-3807 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "32ª Vara Cível da Capital - Fazenda Municipal",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3552 (CARTÓRIO), (82) 4009-3553 (GABINETE DO MAGISTRADO)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "3º Juizado",
        "vara": "3º Juizado Especial Cível da Capital",
        "endereco": "Avenida Comendador Gustavo Paiva, 2990 (MACEIÓ SHOPPING), 3º PISO, Mangabeiras",
        "cep": "57032-901",
        "telefone": "99361-1882 - Balcão Virtual, (82) 4009-3655 (Atendimento), (82) 4009-3652 (Chefe de Secretaria), (82) 4009-3653 (Copa), (82) 4009-3654 (Gabinete), (82) 4009-3656 (Assessoria), (82) 4009-3657 (Conciliação)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "5º Juizado",
        "vara": "5º Juizado Especial Cível da Capital",
        "endereco": "Terminal Rodoviário Jõao Paulo II, Av. Gov. Lamenha Filho, Feitosa",
        "cep": "57043-001",
        "telefone": "(82) 3235-9868 (CONCILIAÇÃO), (82) 3235-9869 (GABINETE), (82) 3235-9870 (RECEPÇÃO), (82) 3235-9871 (SECRETARIA), (82) 3235-9872 (AUDIÊNCIA), (82) 3235-9873/9874 (ASSESSORIA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "6º Juizado",
        "vara": "6º Juizado Especial Cível da Capital",
        "endereco": "Terminal Rodoviário João Paulo II - Av. Gov. Afrânio Lages, 2º Piso, Feitosa",
        "cep": "57043-332",
        "telefone": "(82) 2126-9800 (RECEPÇÃO), (82) 2126-9804 (CHEFE SECRETARIA), (82) 2126-9810 (ASSESSORIA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "7º Juizado",
        "vara": "7º Juizado Especial Cível da Capital",
        "endereco": "Unnamed Road, Cruz das Almas -",
        "cep": "57000-000",
        "telefone": "(82) 4009-3875",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "8º Juizado",
        "vara": "8º Juizado Especial Cível da Capital",
        "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
        "cep": "57072-970",
        "telefone": "(82) 4009-3861 (RECEPÇÃO )",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "9º Juizado",
        "vara": "9º Juizado Especial Cível da Capital",
        "endereco": "Rua Íris Alagoense, 103, Farol",
        "cep": "57051-370",
        "telefone": "(82) 3235-9902",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Administração do Depósito Judicial",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3549",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Agente de Proteção",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "AGUARDANDO DEFINIÇÃO DE LOTAÇÃO",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Almoxarifado",
        "endereco": "Avenida Juca Sampaio, 1049, Barro Duro",
        "cep": "57040-600",
        "telefone": "(82) 4009-3671,4009-3678,4009-3672;4009-3558;4009-3659",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Apoio da Presidência",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Arquivo",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Arquivo Judiciário",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3460",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Arquivo Judiciário",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3547 (RECEPÇÃO), (82) 4009-3779 (DIREÇÃO), (82) 4009-3772 (SECRETARIA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Assessoria de comunicação",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3826",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Assessoria de Planejamento e Modernização do Poder Judiciário (APMP)",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3197",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Assessoria Especial das Serventias Extrajudiciais - AESE",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3805",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Assessoria Especial Judicial - AEJ",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3828",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Assessoria Militar",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Assessoria Militar",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Autuação",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Balancete",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Biblioteca",
        "endereco": "Rua Cônego Machado, 1061, Farol",
        "cep": "57051-160",
        "telefone": "(82) 2126-5350",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "CADASTRO DE CONTRATOS - DGC",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Câmara Criminal",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3126 / (82) 99104-4509",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Casa da Mulher",
        "vara": "Casa da Mulher Alagoana",
        "endereco": "R. do Imperador, 119 - Centro, Maceió - AL, Centro",
        "cep": "57020-670",
        "telefone": "(82)2126-9650",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Casa de Direito",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "CEJAI - Comissão Estadual Judiciária de Adoção Internacional",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3139",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "CEJUS - PROCESSUAL",
        "endereco": "Av. Juca Sampaio, 206, Prédio Anexo Francisco Guilherme Tobias Granja, Barro Duro",
        "cep": "57040-060",
        "telefone": "(82) 4009-3709/3719(MANHÃ)  (82) 4009-3599/3702/3706/3707(TARDE)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional da Universidade Federal de Alagoas",
        "vara": "CEJUSC",
        "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
        "cep": "57072-970",
        "telefone": "(82) 4009-3862",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "CEJUSC - Central de Mandados da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "824009-3696",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "CEJUSC",
        "vara": "CEJUSC - Centro Judiciário de Solução de Conflitos e Cidadania Violência Doméstica da Capital",
        "endereco": "R. do Imperador, 119 - Centro, Maceió - AL, Centro",
        "cep": "57020-670",
        "telefone": "(82) 2126-9671",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "CEJUSC",
        "vara": "CEJUSC - Centro Judiciário de Soluções de Conflitos e Cidadania da Base Comunitária da PM no Vergel do Lago",
        "endereco": "R. Humberto Santa Cruz, 355 - Vergel do Lago, Maceió - AL, Vergel do Lago",
        "cep": "57015-090",
        "telefone": "98227-5437",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "CEJUSC",
        "vara": "CEJUSC - Centro Judiciário de Soluções de Conflitos e Cidadania da Comunidade Espírita Nosso Lar",
        "endereco": "Av. Sen. Rui Palmeira, 47 - Vergel do Lago, Maceió - AL, Vergel do Lago",
        "cep": "57017-465",
        "telefone": "99421-8088 (whatsapp)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Central de Audiências de Custódia da Capital - Núcleo de Apoio às Audiências de Custódia – NAAC",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82)4009-3715 (CARTÓRIO), (82)4009-3594 (APEC)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Central de Conciliação",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3776 (CONCIILIAÇÃO), (82) 4009-3709 (SALA VIRTUAL)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "CENTRAL DE FOTOCÓPIA",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Central de Mandados",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3799",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Central de Penas Alternativas",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "CENTRO DE CULTURA E MEMÓRIA DO PODER JUDICIÁRIO DE ALAGOAS - CCMTJAL",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Centro de Custódia de Armas e Munições",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3701",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Centro de Custódia Temporárias de Objetos e Bens Apreendidos da Comarca da Capital - CTBAC",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3549",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "CEJUSC",
        "vara": "Centro Judiciário de Solução de Conflitos e Cidadania - CEJUSC Maceió Shopping",
        "endereco": "Av. Comendador Gustavo Paiva, 2990, Mangabeiras, Maceió-AL, Mangabeiras",
        "cep": "57031-530",
        "telefone": "(82) 4009- 3735",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Cerimonial",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Chefia de Gabinete",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3815",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "CIBJEC - Central de informações das ações penais com aplicação dos benefícios da lei 9.099/95",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3805",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "CJUS - ATENDIMENTO E ORIENTAÇÃO À CIDADANIA",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3691",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "CJUS - PRÉ -PROCESSUAL",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3693 /3681",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "CJUS 2º Grau",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82)4009-3983,(82)4009-3984",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comissão Avaliadora do Banco de Boas Práticas",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3197",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comissão de Gestão Ambiental do Poder Judiciário de Alagoas",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comissão de Informática (CI/TJ-AL)",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "-82",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comissão de Metas 2010",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comissão de Unificação das Tabelas do CNJ",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comissão de Virtualização",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "COMISSÃO DO MUSEU HISTÓRICO DO PODER JUDICIÁRIO DE ALAGOAS",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comissão Para Elaboração de Proposta e Reestruturação Administrativo-Organizacional do TJ/AL",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comissão Permanente de Controle de bens do patrimônio do Judiciário – COMPEC",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "COMISSÃO REGIONAL DE SOLUÇÕES FUNDIÁRIAS",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "COMITÊ DE GOVERNANÇA",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3175",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "COMITÊ GESTOR ESTADUAL PELA PRIMEIRA INFÂNCIA",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Comitê gestor regional de atenção prioritária ao Primeiro Grau.",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Conselho Disciplinar",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Conselho Estadual da Magistratura",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional da Universidade Federal de Alagoas",
        "vara": "Conselho Penitenciário",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 3218-3568",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Contadoria",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3541",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Contadoria - Diretor",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3541",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenação da Itinerante",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenação de Audiência de Custódia",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Coordenação de D.N.A",
        "endereco": "Rua Cônego Machado, 1061, Farol",
        "cep": "57051-160",
        "telefone": "2126-5350",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Coordenação de Ensino a Distância",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Coordenação de Estágio",
        "endereco": "Rua Cônego Machado, 1061, Farol",
        "cep": "57051-160",
        "telefone": "(82) 2126-5360 /5370",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenação de Otimização do Judiciário - COJ",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Coordenação de Projetos Especiais",
        "endereco": "Rua Cônego Machado, 1061, Farol",
        "cep": "57051-160",
        "telefone": "(82) 2126-5364",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Coordenação de Servidores",
        "endereco": "Rua Cônego Machado, 1061, Farol",
        "cep": "57051-160",
        "telefone": "(82) 2126-5353",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Coordenação Geral de Cursos",
        "endereco": "Rua Cônego Machado, 1061, Farol",
        "cep": "57051-160",
        "telefone": "(82) 2126-5362 /5377",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenação Juizados Especiais",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3263/3264, (82) 4009-3328",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenadoria das Equipes Multidisciplinares",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenadoria de Direitos Humanos",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 98840-0008",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenadoria de Gestão Documental e Memória do Poder Judiciário de Alagoas",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenadoria Estadual da Infância e da Juventude - CEIJ",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenadoria Estadual da Mulher em Situação de Violência Doméstica e Familiar",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3048",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Coordenadoria Estadual do Programa Fazendo Justiça do Conselho Nacional de Justiça-AL",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(61) 98261-0801 (ana.pereira",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "CPD",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3565",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "CPUDAL",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3543",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "De_s. Eduardo José de Andrade",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "DECA - Departamento Central de Administração",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3809",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Defensoria Pública",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3551",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Departamento Central de Aquisições - DCA (Compras)",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3773",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Departamento Central de Assuntos Judiciários  DCAJ",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3816/3817/ 3818",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Departamento Central de Material e Patrimônio",
        "endereco": "Avenida Juca Sampaio, 1049, Barro Duro",
        "cep": "57040-600",
        "telefone": "(82) 4009-3525 (PATRIMÔNIO), (82)4009-3671/3672 (ASSESORIA), 4009-3737(DIRETOR)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Departamento de Cadastro - DECAD",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Departamento de Cadastro da Diretoria Adjunta de Gestão de Pessoas – DAGP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "DEPARTAMENTO DE DESENVOLVIMENTO - DAGP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "DEPARTAMENTO DE DESENVOLVIMENTO DA DIRETORIA ADJUNTA DE GESTÃO DE PESSOAS – DAGP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Departamento de Gestão de Contratos - DGC",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "DEPARTAMENTO DE SAÚDE E QUALIDADE DE VIDA - DESQV - Odontológico",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Departamento de Sindicância",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Departamento Financeiro de Pessoal - DEFIP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Alcides Gusmão da Silva",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3323",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Carlos Cavalcanti de Albuquerque Filho",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3169",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Celyrio Adamastor Tenório Accioly",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3227",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Domingos de Araújo Lima Neto",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3332",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Fábio Costa de Almeida Ferrario",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3481",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Fábio José Bittencourt Araújo",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3251",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Fernando Tourinho de Omena Souza",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3175 / WhatsApp: (82) 99122-1467",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Ivan Vasconcelos Brito Junior",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3485",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. João Luiz Azevedo Lessa",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3159",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Klever Rêgo Loureiro",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3331",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Márcio Roberto Tenório de Albuquerque",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "4009-3270",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Otávio Leão Praxedes",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3325",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Paulo Barros da Silva Lima",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3172",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Paulo Zacarias da Silva",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3226",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Des. Tutmés Airan de Albuquerque Melo",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3271",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Desa. Ana Florinda Mendonça da Silva Dantas",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "4009-3490",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Desa. Silvana Lessa Omena",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "4009-3973",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "DIATI - Gestão de contratos e projetos",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3017",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional da Universidade Federal de Alagoas",
        "vara": "Direção do Fórum",
        "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
        "cep": "57072-970",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Rodoviária da Capital",
        "vara": "Direção do Fórum da Rodoviária da Capital",
        "endereco": "Terminal Rodoviário Jõao Paulo II, Av. Gov. Lamenha Filho, Feitosa",
        "cep": "57043-001",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional da Universidade Federal de Alagoas",
        "vara": "Direção do Fórum Regional da Universidade Federal de Alagoas",
        "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
        "cep": "57072-970",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Direção Geral",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3550 (APOIO) (82) 4009-3600 (DIRETORA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Direção Geral",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta da Administração - DARAD - Assessoria",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3191",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta da Administração - DARAD - Diretor",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3039",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Administração - Apoio",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Assuntos Judiciários - Ante Sala - DAAJUC",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Assuntos Judiciários - DAAJUC",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Contabilidade e Finanças - DICONF",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Controle Interno - DIACI",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Gestão de Pessoas - DAGP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82)98172-9586",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Infraestrutura de Obras e Serviços - DINFRA",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "4009-3020",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Saúde e Qualidade de Vida - DASQV",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Tecnologia da Informação - DIATI",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3166/3406",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Tecnologia da Informação - DIATI - SAJ/PG5",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3055 /3056 /3057 /3058 /3059 /3060",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria Adjunta de Tecnologia da Informação - DIATI - Selo Digital",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3840/3841/3842",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria de Comunicação - DICOM",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria de Jurisprudência e Divulgação e Arquivo do TJAL",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Diretoria de Precatórios e RPV's",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3452",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Distribuição",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3676",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Divisão de Cessão de Servidores da Diretoria Adjunta de Gestão de Pessoas – DAGP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Divisão de Estatística",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3197",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Divisão de Gerenciamento de Projetos",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3197",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Divisão de Inspeção e Correição – DIC",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3827",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Divisão de Juízes",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3820 / 3821 / 3822 / 3823",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Divisão de Magistrados da Diretoria Adjunta de Gestão de Pessoas – DAGP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Divisão de Processos Disciplinares – DPD",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3824",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Divisão de Servidores Efetivos e Comissionados da Diretoria Adjunta de Gestão de Pessoas – DAGP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Empenho",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Equipe de Digitalização",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3469",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "EQUIPE INTERAGIR",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3825",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Equipe Multidisciplinar do Fórum da Capital",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3598",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Financeiro",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Funjuris",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82)  4009 3347",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Funjuris - Departamento de Arrecadação",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3347 | (82) 99131-2760",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Funjuris - Departamento de Arrecadação Extrajudicial",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Funjuris - Departamento Financeiro",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "FUNOREG - Coordenação Administrativa",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82)  4009 3347",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "FUNOREG - Presidência",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete da Juíza Convocada Adriana Carla Feitosa Martins",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete da Juíza Convocada Ana Florinda Mendonça da Silva Dantas",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete da Juíza Convocada Dra. Silvana Lessa Omena",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete da Juíza Convocada Maria Verônica Correia de Carvalho Souza Araújo",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "4009-3337",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete da Presidência - Chefe de Gabinete",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3278",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete da Presidência - Recepção",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Gabinete do Corregedor",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3781",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete do Juiz Convocado - Dr. José Cícero Alves da Silva",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete do Juiz Convocado Alberto Jorge Correia de Barros Lima",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete do Juiz Convocado Dr. Marcelo Tadeu",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete do Juiz Convocado Dr. Ney Costa Alcântara de Oliveira",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gabinete do Juiz Convocado Mauricio Breda Filho",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Gestão de Contratos - ATIVA",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "GMF - Grupo de Monitoramento e Fiscalização do Sistema Carcerário",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82)4009-3215",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Grupo e Trabalho JE",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Grupo Interinstitucional de Trabalho Interdisciplinar de Atenção à Saúde Mental - GITIS",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "12º Juizado",
        "vara": "Juizado Especial Cível e Criminal de Acidente de  Trânsito da Capital",
        "endereco": "Av. Durval de Góes Monteiro, 829, Tabuleiro dos Martins",
        "cep": "57061-090",
        "telefone": "(82) 3235 9900 e 3235 9901",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Juizado do Torcedor",
        "vara": "Juizado Especial Criminal e do Torcedor",
        "endereco": "Avenida Governador Lamenha Filho, s/n, Terminal Rodoviário João Paulo II, 1º Piso, Feitosa",
        "cep": "57043-001",
        "telefone": "9818 (RECEPÇÃO) / 9819 (SECRETARIA)  / 9820 (AUDIÊNCIA) / 9821 (GABINETE) / 9822 ( ASSESORIA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Juízes Auxiliares",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3829/3830",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Juízes Auxiliares da Presidência",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "2º Juizado",
        "vara": "JUÍZO DE DIREITO DO 2º JUIZADO ESPECIAL CÍVEL DA CAPITAL",
        "endereco": "Terminal Rodoviário Jõao Paulo II, Av. Gov. Lamenha Filho, Feitosa",
        "cep": "57043-001",
        "telefone": "(82) 9.9121-4096 (Balcão virtual), (82) 3235-9860",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Justiça Efetiva - Juízes Leigos",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3244",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Laboratório de Inovação do Tribunal de Justiça de Alagoas",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "LACOR - Laboratório de Conservação e Restauro",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Manutenção",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3703",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Menor Aprendiz",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3236",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "NAI - Núcleo de Acessibilidade e Inclusão",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo 4.0 – Justiça Efetiva",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo de Apoio às Audiências de Custódia – NAAC",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3045",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo de Cooperação Judiciária do Estado de Alagoas",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo de Gerenciamento de Precedentes - NUGEP",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3064",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo de Processos de Improbidade Administrativa",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3596",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Núcleo de Promoção da Filiação",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3571",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos - NJUS-AL - Assessoria",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos - NJUS-AL - Coordenação Adjunta",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos - NJUS-AL - Coordenação Geral",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos - NJUS-AL - Secretaria Executiva",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Constelação e Direito Sistêmico",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Coordenadoria Geral",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Fazenda Pública",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Grandes Litigantes",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Justiça Restaurativa",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Mediação Escolar",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Setor Pré-Processual",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Setor Processual",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Vice-Coordenadoria Geral",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3036 / 3958",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Núcleo Socioambiental",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Oficiais de Justiça",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3801",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Ouvidoria Judiciária",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82)  4009-3148 / 3213 / 3214 / 3149",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Pagamento",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3134 / 3136 / 3133",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Postagem",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3200",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Presidência - Gabinete",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Procuradoria Geral",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Procuradorias",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Projeto Cidadania e Justiça na Escola",
        "endereco": "Rua Cônego Machado, 1061, Farol",
        "cep": "57051-160",
        "telefone": "(82) 2126-5367",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Projeto Justiça Efetiva",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3244",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Protocolo",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3787",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Protocolo Administrativo",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Protocolo das Câmaras",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "REMIP / Setor de Mapas",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "SAJ/PG",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "4009-3837",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Sala de Reunião do Conselho da Magistratura",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Seção Especializada Cível",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3454",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Esmal",
        "vara": "Secretaria",
        "endereco": "Rua Cônego Machado, 1061, Farol",
        "cep": "57051-160",
        "telefone": "(82) 2126-5399 /5161",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Secretaria da Procuradoria do Poder Judiciário",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Secretaria de Processamento Unificado - SPU",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Secretaria Especial da Presidência",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Secretaria Geral",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Corregedoria-Geral da Justiça",
        "vara": "Secretaria-Geral",
        "endereco": "Rua do Livamento, nº 384, Centro",
        "cep": "57020-030",
        "telefone": "(82) 4009-3782 / 3783 / 3784 / 3785",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Serviço Social / Psicol.",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82)4009-3599",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Setor de Aquisições(Licitação)",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Setor de Manutenção (DCEA)",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3022",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Setor de Serviços Gerais",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3321",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Setor de Transporte",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3448 (DIRETOR), (82) 4009-3165 / 3954 /3143 (ASSESSORIA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Setor Médico",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3699 (RECEPÇÃO), (82) 4009-3730 (CONSULTÓRIO OONTOLÓGICO 01), (82) 4009-3544 (CONSULTÓRIO OONTOLÓGICO 02), (82) 4009-3728 (RECEPÇÃO PSIQUIÁTRICA), (82) 4009-3727 (CONSULTÓRIO PSIQUIÁTRICA), (82) 4009-3731 /3732 /3733 (ASSESORIA)",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Setor Psiquiátrico",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3449",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Subdireção-Geral",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Regional do Benedito Bentes",
        "vara": "Superintendência",
        "endereco": "R. Jussara, Benedito Bentes",
        "cep": "57084-800",
        "telefone": "(82) 4009-5783",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Capital",
        "vara": "Superintendência",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 4009-3550",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Transição - CGJ",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Turma de Uniformização dos Juizados Especiais",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Turma Recursal",
        "vara": "Turma Recursal",
        "endereco": "Terminal Rodoviário João Paulo II – 1º  Piso, Feitosa",
        "cep": "57043-000",
        "telefone": "(82) 2126-9832 e (82) 99101-8880",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Turma Recursal",
        "vara": "Turma Recursal - Gab. Juiz",
        "endereco": "Av. Juca Sampaio, 206, Barro Duro",
        "cep": "57045-365",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum da Rodoviária da Capital",
        "vara": "Turma Recursal dos Juizados Especiais Cíveis, Criminais e da Fazenda Pública do Estado de Alagoas",
        "endereco": "Rodovia João Paulo II, s/n, Feitosa",
        "cep": "57041-970",
        "telefone": "(82) 2126-9832",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Unidade de Auditoria Interna",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Tribunal de Justiça",
        "vara": "Vice-Presidência",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3065",
        "entrancia": "3ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Antonio Rafael Wanderley Casado da Silva",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 2º Juizado Especial Fazenda Pública Estadual da Capital",
        "email": "jefpc2@tjal.jus.br",
        "contato": "(82)4009-3588/3589 (CARTÓRIO), 3592 (GABINETE DO MAGISTRADO)",
        "observacao": "-Substituto legal: 1º Juizado Especial da Fazenda Pública da Capital. (Resolução nº 35, de 13 de agosto de 2024)\r\n\r\n***FÉRIAS 2026 DO TITULAR: 12 DE FEVEREIRO A 3 DE MARÇO (1º PERÍODO - SUSPENSO NO BOJO DO PROCESSO Nº 2026/101747) E 02 A 21 DE JULHO"
      },
      {
        "nome": "Marcli Guimarães de Aguiar",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  1ª Vara Cível da Capital",
        "email": "vcivel1@tjal.jus.br",
        "contato": "(82) 4009-3507 (CARTÓRIO), (82) 4009-3607 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal: 2ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026:  02 A 21 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Pedro Ivens Simões de França",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  2ª Vara Cível da Capital",
        "email": "vcivelfnp2@tjal.jus.br",
        "contato": "(82) 4009-3567 (CARTÓRIO), (82) 4009-3608 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 1ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n*** FÉRIAS 2026: 28 DE MAIO A 16 DE JUNHO (1º PERÍODO) E 12 A 21 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).´"
      },
      {
        "nome": "Henrique Gomes de Barros Teixeira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  3ª Vara Cível da Capital",
        "email": "vcivel3@tjal.jus.br",
        "contato": "(82) 4009-3509 (CARTÓRIO), (82) 4009-3609 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 4ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 21 DE FEVEREIRO (1º PERÍODO) E 02 A 21 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "José Cícero Alves da Silva",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  4ª Vara Cível da Capital",
        "email": "vcivel4@tjal.jus.br",
        "contato": "(82) 4009-3510 (CARTÓRIO)",
        "observacao": "Substituto Legal : 3ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 6 A  25 DE ABRIL (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/101471)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Maurício César Breda Filho",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  5ª Vara Cível da Capital",
        "email": "vcivel5@tjal.jus.br",
        "contato": "(82) 4009-3511 (CARTÓRIO)",
        "observacao": "Substituto Legal : 6ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2025: 4 A 23 DE FEVEREIRO DE 2026 (2º PERÍODO REAGENDADO, CONFORME PROCESSO Nº 2025/118951).\r\n\r\n***FÉRIAS 2026: 11 A 30 DE ABRIL (1º PERÍODO"
      },
      {
        "nome": "Ney Costa Alcântara de Oliveira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  6ª Vara Cível da Capital",
        "email": "vcivel6@tjal.jus.br",
        "contato": "(82) 4009-3512 (CARTÓRIO)",
        "observacao": "Substituto Legal : 5ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***ATRAVÉS DA PORTARIA Nº 2.598, DE 19 DE DEZEMBRO DE 2022, o Juiz Titular foi liberado pelo Pleno do TJ/AL da prestação jurisdicional nos dias de TERÇ"
      },
      {
        "nome": "Jamil Amil Albuquerque de Hollanda Ferreira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  7ª Vara Cível da Capital",
        "email": "vcivel7@tjal.jus.br",
        "contato": "(82) 4009-3513 (CARTÓRIO), (82) 4009-3613(GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 8ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 21 DE JANEIRO (1º PERÍODO) E  02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Eliana Normande Acioli",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  8ª Vara Cível da Capital",
        "email": "vcivel8@tjal.jus.br",
        "contato": "(82) 4009-3514 (CARTÓRIO), (82) 4009-3614 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 7ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 18 DE MAIO A 16 DE JUNHO (1º PERÍODO) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Gilvan de Santana Oliveira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  9ª Vara Cível da Capital",
        "email": "vcivel9@tjal.jus.br",
        "contato": "(82) 4009-3515 (CARTÓRIO), (82) 4009-3615 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal: 10ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 14  A 23 DE MAIO (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Erick Costa de Oliveira Filho",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 10ª Vara Cível da Capital",
        "email": "vcivel10@tjal.jus.br",
        "contato": "(82) 4009-3579 (ASESSORIA), (82) 4009-3516 (CARTÓRIO), (82) 4009-3687 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 9ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 21 DE JANEIRO (1º PERÍODO) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Sérgio Wanderley Persiano",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 11ª Vara Cível da Capital",
        "email": "vcivel11@tjal.jus.br",
        "contato": "(82) 4009-3531 (ASSESSORIA), (82) 4009-3517 (CARTÓRIO), (82) 4009-3617 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal: 12ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 21 DE MAIO (1º PERÍODO) E 1º A 20 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Gustavo Souza Lima",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 12ª Vara Cível da Capital",
        "email": "vcivel12@tjal.jus.br",
        "contato": "(82) 4009-3502 (CARTÓRIO - ATENDIMENTO), (82) 4009-3583 (CARTÓRIO), (82) 4009-3602 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 11ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 05  A 24 DE JANEIRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025-128705) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CON"
      },
      {
        "nome": "José Braga Neto",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 13ª Vara Cível da Capital",
        "email": "vcivel13@tjal.jus.br",
        "contato": "(82) 4009-3501 (CARTÓRIO), (82) 4009-3601 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 29ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n \r\n***FÉRIAS 2026: 02 A 21 DE MAIO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/102790) E 3 A 22 DE NOVEMBRO (2º PERÍODO ALTERADO, CONFORME PROCESSO"
      },
      {
        "nome": "Antônio Emanuel Dória Ferreira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 14ª Vara Cível da Capital Fazenda Municipal",
        "email": "vcivel14@tjal.jus.br",
        "contato": "(82) 4009-3523 (CARTÓRIO), (82) 4009-3556 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal: 32ª Vara Cível da Capital, conforme Resolução nº 09, de 02 de abril de 2024.\r\n\r\n***FÉRIAS 2026: 11 A 30 DE ABRIL (1º PERÍODO) E  11 A 30 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Sandro Augusto dos Santos",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 15ª Vara Cível da Capital Fazenda Municipal",
        "email": "vcivel15@tjal.jus.br",
        "contato": "(82) 4009-3663 (ATENDIMENTO), (82) 4009-3713 (ASSESSORIA), (82) 4009-3524 (CARTÓRIO), (82) 4009-3572 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal: 19ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DO TITULAR: 05 A 24 DE JANEIRO (1º PERÍODO) E 1º A 20 DE JUNHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "José Cavalcanti Manso Neto",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 16ª Vara Cível da Capital Fazenda Estadual",
        "email": "vcivel16@tjal.jus.br",
        "contato": "(82) 4009-3506 (ATENDIMENTO), (82) 4009-3673 (CHEFE DE SECRETARIA), (82) 4009-3606 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 17º Vara Cível da Capital, conforme resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117). \r\n\r\n***MAGISTR"
      },
      {
        "nome": "Alberto Jorge Correia de Barros Lima",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 17ª Vara Cível da Capital Fazenda Estadual",
        "email": "vcivel17@tjal.jus.br",
        "contato": "(82) 4009-3521 (CARTÓRIO), (82) 4009-3621 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 18ª Vara Cível da Capital- Fazenda Estadual, conforme resolução nº 12, de 02 de abril de 2020. \r\n\r\n***FÉRIAS 2025: 11 A 30 DE MAIO DE 2026 (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026-103820).\r\n\r\n***FÉRIAS 2026: 31 DE MAIO A 19"
      },
      {
        "nome": "Manoel Cavalcante de Lima Neto",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 18ª Vara Cível da Capital Fazenda Estadual",
        "email": "vcivel18@tjal.jus.br",
        "contato": "(82) 4009-3666 (ASSESSORIA), (82) 4009-3522 (CARTÓRIO), (82) 4009-3570 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 16ª Vara Cível da Capital - Fazenda Estadual, conforme Resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE JANEIRO (1º PERÍODO) E 10 A 29 DE MAIO (2º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000002344-1. JÁ H"
      },
      {
        "nome": "Alexandre Lenine de Jesus Pereira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 19ª Vara Cível da Capital Fazenda Estadual",
        "email": "vcivel19@tjal.jus.br",
        "contato": "(82) 4009-3582 (CARTÓRIO), (82) 4009-3662 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 15ª Vara Cível da Capital - Fazenda Municipal,  conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 2026/101408) E 22 A 31 DE JULHO (2º PERÍODO SUSPENSO,"
      },
      {
        "nome": "João Dirceu Soares Moraes",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 20ª Vara Cível da Capital Sucessões",
        "email": "vcivel20@tjal.jus.br",
        "contato": "(82) 4009-3519 (ATENDIMENTO), (82) 4009-3688 (CARTÓRIO), (82) 4009-3626 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 21ª Vara Cível da Capital - Sucessão, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME O PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "André Avancini D´avila",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 22ª Vara Cível da Capital Família",
        "email": "vcivel22@tjal.jus.br",
        "contato": "(82) 4009-3685",
        "observacao": "Substituto Legal : 23ª Vara Cível da Capital - Família, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2025: 6 A 25 DE ABRIL DE 2026 (2º PERÍODO TRANSFERIDO, CONFORME PROCESSO Nº 2025-124362).\r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO (1"
      },
      {
        "nome": "Maysa Cesário Bezerra",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 24ª Vara Cível da Capital Família",
        "email": "vcivel24@tjal.jus.br",
        "contato": "(82) 4009-3504 (ATENDIMENTO), (82) 4009-3604 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 27ª Vara Cível da Capital - Família, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 21 DE JANEIRO (1º PERÍODO) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Carlos Aley Santos de Melo",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Regional do Benedito Bentes - 25ª Vara Cível da Capital Família",
        "email": "vcivel25@tjal.jus.br",
        "contato": "(82) 4009-3880",
        "observacao": "Substituto Legal : 26ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DO TITULAR: 25 DE JANEIRO A 13 DE FEVEREIRO (1º PERÍODO) E 11 A 30 DE AGOSTO (2º PERÍODO)  - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2"
      },
      {
        "nome": "Wlademir Paes de Lira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Regional da Universidade Federal de Alagoas - 26ª Vara Cível da Capital Família",
        "email": "vcivel26@tjal.jus.br",
        "contato": "(82) 4009-3864",
        "observacao": "Substituto Legal : 25ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***O MAGISTRADO WLADEMIR PAES DE LIRA FOI DESIGNADO PARA EXERCER AS ATRIBUIÇÕES DE DIRETOR DO FÓRUM REGIONAL DA UFAL (PORTARIA Nº 523, DE 12 DE FEVERE"
      },
      {
        "nome": "Nirvana Coêlho Bernardes de Mello",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 27ª Vara Cível da Capital Família",
        "email": "27vcf@tjal.jus.br",
        "contato": "(82) 4009-3503 (ATENDIMENTO), (82) 4009-3736 (CHEFE DE SECRETARIA), (82) 4009-3636 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 24ª Vara Cível da Capital - Sucessão e Família, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 3 A 22 DE NOVEMBRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000007607-3) E 29 DE NOVEMBRO A 18 DE DEZEMBRO"
      },
      {
        "nome": "Maria Lucia de Fátima Barbosa Pirauá",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Ponta verde - 28ª Vara Cível da Capital Infância e Juventude",
        "email": "vcivel28@tjal.jus.br",
        "contato": "(82) 2126-4700/4747",
        "observacao": "Substituto Legal :  1ª Vara Criminal da Capital - Infância e Juventude, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO) E 11 A 30 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº"
      },
      {
        "nome": "Sóstenes Alex Costa de Andrade",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Ponta verde - 1ª Vara Criminal da Capital Infância e Juventude",
        "email": "vijc1@tjal.jus.br",
        "contato": "(82) 2126-4721 Cartório 1ª Vara, (82) 2126-4705 Cartório 28ª Vara",
        "observacao": "Substituto Legal : 28ª Vara Cível - Infância e Juventude, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***CONFORME PORTARIA Nº 1.505, DE 1°DE AGOSTO DE 2024, O MAGISTRADO SOSTENES ALEX COSTA DE ANDRADE FOI DESIGNADO PARA EXERCER AS ATRIBUIÇÕ"
      },
      {
        "nome": "Carlos Henrique Pita Duarte",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  3ª Vara Criminal da Capital",
        "email": "vcriminal3@tjal.jus.br",
        "contato": "(82) 4009-3529 (ATENDIMENTO), (82) 4009-3633 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  4ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 12 A 31 DE JANEIRO (1º PERÍODO) E 30 DE JULHO A 18 DE AGOSTO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000008776-8) - (PERÍ"
      },
      {
        "nome": "Josemir Pereira de Souza",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  4ª Vara Criminal da Capital",
        "email": "vcriminal4@tjal.jus.br",
        "contato": "(82) 4009-3530 (CARTÓRIO)",
        "observacao": "Substituto Legal :  3ª Vara Criminal  da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 24 DE NOVEMBRO A 04 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Isabelle Coutinho Dantas",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 30ª Vara Cível da Capital",
        "email": "vcivel30@tjal.jus.br",
        "contato": "(82) 4009-3545 (CARTÓRIO), (82) 4009-3807 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal:  13ª Vara Cível da Capital, conforme resolução nº 09, de 02 de abril de 2024. \r\n\r\n***FÉRIAS 2026: 06 a 25 DE ABRIL  (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Rodolfo Osório Gatto Hermann",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  6ª Vara Criminal da Capital",
        "email": "6vcc@tjal.jus.br",
        "contato": "(82) 4009-3677 (CARTÓRIO), (82) 4009-3632 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  10ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 4 a 23 DE MAIO (1º PERÍODO ALTERADO, EM VIRTUDE DE LICENÇA MÉDICA, CONFORME PROCESSO Nº 26.0.000003987-9) E 03 A 22   DE NOVEMBR"
      },
      {
        "nome": "Yulli Roter Maia",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  7ª Vara Criminal da Capital Tribunal do Júri",
        "email": "vcriminal7@tjal.jus.br",
        "contato": "(82) 4009-3712 (CARTÓRIO), (82) 4009-3631 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  9ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 5 A 24 DE JANEIRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025-127931) E 1º A 20 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS,"
      },
      {
        "nome": "Geraldo Cavalcante Amorim",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  9ª Vara Criminal da Capital Tribunal do Júri",
        "email": "vcriminal9@tjal.jus.br",
        "contato": "(82) 4009-3595 (CARTÓRIO), (82) 4009-3695 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 8ª Vara Criminal da Capital-Tribunal do Júri, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 11 A 30 DE MAIO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/101692) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍO"
      },
      {
        "nome": "Antônio Barros da Silva Lima",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 10ª Vara Criminal da Capital",
        "email": "vcriminal10@tjal.jus.br",
        "contato": "(82) 4009-3537(CARTÓRIO), (82) 4009-3637 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 6ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 17 A 26 DE AGOSTO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000007987-0) -  (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/12"
      },
      {
        "nome": "Antônio José Bittencourt Araújo",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 11ª Vara Criminal - Entorpecentes",
        "email": "vcriminal11@tjal.jus.br",
        "contato": "(82) 4009-3593 (CARTÓRIO), (82) 4009-3643 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  12ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2025: 30 E 31 DE MARÇO DE 2026 E 6 E 7 DE ABRIL DE 2026 (4 DIAS DO 1º PERÍODO REAGENDADOS, CONFORME PROCESSO Nº 2025/111854).\r\n\r\n***FÉ"
      },
      {
        "nome": "João Paulo Martins da Costa",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 12ª Vara Criminal da Capital",
        "email": "vcriminal12@tjal.jus.br",
        "contato": "(82) 4009-3722 (ATENDIMENTO), (82) 4009-3527 (CARTÓRIO), (82) 4009-3627 (GABINETE DO MAGISTRADO), (82) 4009-3726 (AUDIÊNCIA)",
        "observacao": "Substituto Legal :  11ª  Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 06 A 25 DE ABRIL  (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/128318) E 9 A 18 DE ZEMBRO (2º PERÍODO ALTERADO, CONFORME PRO"
      },
      {
        "nome": "Fausto Magno David Alves",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 13ª Vara Criminal da Capital Auditoria Militar",
        "email": "vcriminal13@tjal.jus.br",
        "contato": "(82) 4009-3538 (CARTÓRIO), (82) 4009-3704 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  14ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2026 DO TITULAR: 19 DE FEVEREIRO A 10 DE MARÇO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 2026/102024) E 29 DE NOVEMBRO A 18 DE DEZEMBR"
      },
      {
        "nome": "Kleber Borba Rocha",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 14ª Vara Criminal da Capital - Crime Contra Menor/Idoso/Deficiente e Vulnerável",
        "email": "vcriminal14@tjal.jus.br",
        "contato": "(82) 4009-3577 (CARTÓRIO), (82) 4009-3574 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  15ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2025 DO TITULAR:  11 A 30 DE OUTUBRO DE 2026 (2º PERÍODO REAGENDADO, CONFORME PROCESSO Nº 2025-118489).\r\n\r\n***FÉRIAS 2026 DO TITULAR:"
      },
      {
        "nome": "Hélio Pinheiro Pinto",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 15ª Vara Criminal da Capital Juizado de Entorpecentes",
        "email": "vcriminal15@tjal.jus.br",
        "contato": "(82) 4009-3661 (CARTÓRIO), (82) 4009-3668 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  13ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2026: 06 A 25 DE ABRIL ( 1º PERÍODO) E 30 DE NOVEMBRO A 19 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/12"
      },
      {
        "nome": "Nelson Fernando de Medeiros Martins",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Regional da Universidade Federal de Alagoas - 16ª Vara Criminal da Capital Execuções Penais",
        "email": "vcriminal16@tjal.jus.br",
        "contato": "(82) 4009-3859, (82) 4009-3860",
        "observacao": "***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E  12 A 31 DE AGOSTO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103909) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Maria Verônica Correia Carvalho Souza Araújo",
        "condicao": "Titular",
        "lotacao": "Maceió - 1º Juizado - 1º Juizado Especial Cível da Capital",
        "email": "1jecc@tjal.jus.br",
        "contato": "(82) 4009-3741 (Recepção),  (82) 4009-3742/3743 (Secretaria), (82) 4009-3744 (Asssesoria), (82) 4009-3849 (Conciliação),  (82) 4009-3735 (CJUSC),  (82) 4009-3740 (Policial),  (82) 4009-3739 (Audiência)",
        "observacao": "Substituto Legal: 7º JEC, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2025: 5 A 24 DE JANEIRO DE 2026 (1º PERÍODO REAGENDADO, CONFORME PROCESSO Nº 2025/112295).\r\n\r\n***FÉRIAS 2026: 21 A 30 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTE"
      },
      {
        "nome": "Luciano Andrade de Souza",
        "condicao": "Titular",
        "lotacao": "Maceió - 2º Juizado - JUÍZO DE DIREITO DO 2º JUIZADO ESPECIAL CÍVEL DA CAPITAL",
        "email": "jecc2@tjal.jus.br",
        "contato": "(82) 9.9121-4096 (Balcão virtual), (82) 3235-9860",
        "observacao": "Substituto Legal : 11º JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 29 DE MARÇO A 17 DE ABRIL (1º PERÍODO) E 1ª A 20 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Sérgio Roberto da Silva Carvalho",
        "condicao": "Titular",
        "lotacao": "Maceió - 3º Juizado - 3º Juizado Especial Cível da Capital",
        "email": "jecc3@tjal.jus.br",
        "contato": "99361-1882 - Balcão Virtual, (82) 4009-3655 (Atendimento), (82) 4009-3652 (Chefe de Secretaria), (82) 4009-3653 (Copa), (82) 4009-3654 (Gabinete), (82) 4009-3656 (Assessoria), (82) 4009-3657 (Conciliação)",
        "observacao": "Substituto Legal : 9º JEC, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MAIO (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Soraya Maranhão Silva",
        "condicao": "Titular",
        "lotacao": "Maceió - 4º Juizado - 1º Juizado de Violência Doméstica e Familiar Contra a Mulher da Capital",
        "email": "1jviolencia@tjal.jus.br",
        "contato": "(82) 2126-9671, (82) 2126-9672, (82) 2126-9673",
        "observacao": "Substituto Legal: 2º Juizado de Violência Doméstica, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***POR MEIO DA PORTARIA Nº 2.567, DE 13 DE DEZEMBRO DE 2024, A MAGISTRADA SORAYA MARANHÃO SILVA FOI DESIGNADA COMO DIRETORA DO FÓRUM DO JUIZA"
      },
      {
        "nome": "Nelson Tenório de Oliveira Neto",
        "condicao": "Titular",
        "lotacao": "Maceió - 5º Juizado - 5º Juizado Especial Cível da Capital",
        "email": "jecc5@tjal.jus.br",
        "contato": "(82) 3235-9868 (CONCILIAÇÃO), (82) 3235-9869 (GABINETE), (82) 3235-9870 (RECEPÇÃO), (82) 3235-9871 (SECRETARIA), (82) 3235-9872 (AUDIÊNCIA), (82) 3235-9873/9874 (ASSESSORIA)",
        "observacao": "Substituto Legal : 6º JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO) E 12 DE NOVEMBRO A 1º DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***LICENÇA MÉ"
      },
      {
        "nome": "Ricardo Jorge Cavalcante Lima",
        "condicao": "Titular",
        "lotacao": "Maceió - 8º Juizado - 8º Juizado Especial Cível da Capital",
        "email": "jecc8@tjal.jus.br",
        "contato": "(82) 4009-3861 (RECEPÇÃO )",
        "observacao": "Substituto Legal: 10º JEC, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2026: 03 A 22 DE MAIO (1º PERÍODO) E 26 DE NOVEMBRO A 15 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Adriana Carla Feitosa Martins",
        "condicao": "Titular",
        "lotacao": "Maceió - 9º Juizado - 9º Juizado Especial Cível da Capital",
        "email": "jecc9@tjal.jus.br",
        "contato": "(82) 3235-9902",
        "observacao": "Substituto Legal: 3º JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026 DA TITULAR: 23 DE NOVEMBRO A 2 DE DEZEMBRO (1º PERÍODO REAGENDADO APÓS SUSPENSÃO, CONFORME PROCESSO Nº 26.0.000008724-5) E 03 A 22 DE NOVEMBRO (2º PERÍOD"
      },
      {
        "nome": "Aída Cristina Lins Antunes",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Regional do Benedito Bentes - 10º Juizado Especial Cível da Capital",
        "email": "jecc10@tjal.jus.br",
        "contato": "(82) 4009-3578",
        "observacao": "Substituto Legal : 8º JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***CONFORME A PORTARIA TJAL Nº 1.666, DE 13 DE OUTUBRO DE 2025, A MAGISTRADA TITULAR FOI DESIGNADA PARA EXERCER AS ATRIBUIÇÕES DE DIRETORA DO FÓRUM REGIONAL DO BENEDIT"
      },
      {
        "nome": "Sandra Janine Wanderley Cavalcante Maia",
        "condicao": "Titular",
        "lotacao": "Maceió - 11º Juizado - 11º Juizado Especial Cível da Capital",
        "email": "jecc11@tjal.jus.br",
        "contato": "(82) 2126-9813, (82) 2126-9815,(82) 99107-4845",
        "observacao": "Substituto Legal : 2º JEC, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2025: 19 E 20 DE FEVEREIRO DE 2026 (SALDO DO 2º PERÍODO DE 2025, CONFORME PROCESSO Nº 2026/102244) E 8 DE JUNHO DE 2026 (SALDO REMANESCENTE DO 2º PERÍODO DE 2"
      },
      {
        "nome": "Luciana Cavalcanti de Mello Sampaio",
        "condicao": "Titular",
        "lotacao": "Maceió - 12º Juizado - Juizado Especial Cível e Criminal de Acidente de  Trânsito da Capital",
        "email": "jecc12@tjal.jus.br",
        "contato": "(82) 3235 9900 e 3235 9901",
        "observacao": "Substituto Legal: Juizado Especial Criminal e do Torcedor,  conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2025: 6 A 25 DE ABRIL DE 2026 (1º PERÍODO ALTERADO, CONFORME PROCESSO N° 2025/124482).\r\n\r\n***FÉRIAS 2026: 04 A 23 DE MAIO (1"
      },
      {
        "nome": "Joyce Araújo Florentino",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 17ª Vara Criminal da Capital",
        "email": "vcriminal17@tjal.jus.br",
        "contato": "(82) 4009-3562 (ATENDIMENTO),(82) 4009-3546 (CARTÓRIO), (82) 4009-3536 /3714 /3674 (GABINETE DO MAGISTRADO)",
        "observacao": "***FÉRIAS 2026: 23 DE FEVEREIRO A 14 DE MARÇO (1º PERÍODO) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "José Afrânio dos Santos Oliveira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Agrário de Alagoas - 29ª Vara Cível da Capital - Conflitos Agrários",
        "email": "forumagrario@tjal.jus.br",
        "contato": "(82) 3235-9850 (RECEPÇÃO), (82) 3235-9851 (SECRETARIA), (82) 3235-9852 (GABINETE), (82) 3235-9853 (ASSESSORIA), (82) 3235-9854 (AUDIÊNCIA), (82) 3235-9855 (COPA)",
        "observacao": "Substituo Legal: 30ª Vara Cível da Capital, conforme resolução nº 09, de 02 de abril de 2024. \r\n\r\n***FÉRIAS 2026: 21 DE JANEIRO A 19 DE FEVEREIRO (1º PERÍODO) E 22 DE MAIO A 20 DE JUNHO (2º PERÍODO)."
      },
      {
        "nome": "Clarissa Oliveira Mascarenhas",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 17ª Vara Criminal da Capital",
        "email": "vcriminal17@tjal.jus.br",
        "contato": "(82) 4009-3562 (ATENDIMENTO),(82) 4009-3546 (CARTÓRIO), (82) 4009-3536 /3714 /3674 (GABINETE DO MAGISTRADO)",
        "observacao": "***FÉRIAS 2026: 23 DE FEVEREIRO A 14 DE MARÇO (1º PERÍODO) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Cláudio José Gomes Lopes",
        "condicao": "Titular",
        "lotacao": "Maceió - Juizado do Torcedor - Juizado Especial Criminal e do Torcedor",
        "email": "jecrimtorcedor@tjal.jus.br",
        "contato": "9818 (RECEPÇÃO) / 9819 (SECRETARIA)  / 9820 (AUDIÊNCIA) / 9821 (GABINETE) / 9822 ( ASSESORIA)",
        "observacao": "Substituto legal: Juizado Especial Cível e Criminal de Acidente de Trânsito, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2026: 02 DE FEVEREIRO A 03 DE MARÇO (1º PERÍODO) E 7 A 26 DE JULHO (2º PERÍODO ALTERADO, CONFORME PROCESSO N"
      },
      {
        "nome": "Geraldo Tenório Silveira Júnior",
        "condicao": "Titular",
        "lotacao": "Maceió - Juizado da Fazenda - 1º Juizado Especial da Fazenda Pública Estadual da Capital",
        "email": "jefpc1@tjal.jus.br",
        "contato": "(82) 4009-3760/3763 (CARTÓRIO), (82) 4009-3767 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal: 2º Juizado Especial da Fazenda Pública da Capital, conforme Resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***FÉRIAS 2026: 23 DE FEVEREIRO A 14 DE MARÇO (1º PERÍODO) E 19 DE NOVEMBRO A 08 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS"
      },
      {
        "nome": "Geneir Marques de Carvalho Filho",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 17ª Vara Criminal da Capital",
        "email": "vcriminal17@tjal.jus.br",
        "contato": "(82) 4009-3562 (ATENDIMENTO),(82) 4009-3546 (CARTÓRIO), (82) 4009-3536 /3714 /3674 (GABINETE DO MAGISTRADO)",
        "observacao": "***FÉRIAS 2026: 23 DE FEVEREIRO A 14 DE MARÇO (1º PERÍODO) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Léo Dennisson Bezerra de Almeida",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 32ª Vara Cível da Capital - Fazenda Municipal",
        "email": "32vcivel@tjal.jus.br",
        "contato": "(82) 4009-3552 (CARTÓRIO), (82) 4009-3553 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal: 14ª Vara Cível da Capital, conforme Resolução nº 09, de 02 de abril de 2024.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E 02 A 21 DE JULHO (2º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000009903-0) - (PERÍODOS ALTERADOS, CON"
      },
      {
        "nome": "George Leão de Omena",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Rodoviária da Capital - Turma Recursal dos Juizados Especiais Cíveis, Criminais e da Fazenda Pública do Estado de Alagoas",
        "email": "turmarecursaldemaceio@tjal.jus.br",
        "contato": "(82) 2126-9832",
        "observacao": "***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/127030) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Ygor Vieira de Figueirêdo",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Rodoviária da Capital - Turma Recursal dos Juizados Especiais Cíveis, Criminais e da Fazenda Pública do Estado de Alagoas",
        "email": "turmarecursaldemaceio@tjal.jus.br",
        "contato": "(82) 2126-9832",
        "observacao": "***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/127030) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Carlos Eduardo Canuto Mendonça",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 23ª Vara Cível da Capital Família",
        "email": "vcivel23@tjal.jus.br",
        "contato": "(82) 4009-3505 (ATENDIMENTO), (82) 4009-3605 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 22ª Vara Cível da Capital - Família, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 8 A 27 DE NOVEMBRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000010639-8) E 29 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍOD"
      },
      {
        "nome": "José Eduardo Nobre Carlos",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital -  8ª Vara Criminal da Capital Tribunal do Júri",
        "email": "vcriminal8@tjal.jus.br",
        "contato": "(82) 4009-3534 (ATENDIMENTO), (82) 4009-3634 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  7ª Vara Criminal da Capital- Tribunal do Júri, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025-127931) - (PERÍODOS ALTERADOS, CONFORME PROCES"
      },
      {
        "nome": "Alexandre Machado de Oliveira",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Regional da Universidade Federal de Alagoas - 16ª Vara Criminal da Capital Execuções Penais",
        "email": "vcriminal16@tjal.jus.br",
        "contato": "(82) 4009-3859, (82) 4009-3860",
        "observacao": "***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E  12 A 31 DE AGOSTO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103909) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "CAIO NUNES DE BARROS",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital - 14ª Vara Criminal da Capital - Crime Contra Menor/Idoso/Deficiente e Vulnerável",
        "email": "vcriminal14@tjal.jus.br",
        "contato": "(82) 4009-3577 (CARTÓRIO), (82) 4009-3574 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  15ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2025 DO TITULAR:  11 A 30 DE OUTUBRO DE 2026 (2º PERÍODO REAGENDADO, CONFORME PROCESSO Nº 2025-118489).\r\n\r\n***FÉRIAS 2026 DO TITULAR:"
      },
      {
        "nome": "NATHALYA ATAIDE FERNANDES",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital - 2º Juizado Especial Fazenda Pública Estadual da Capital",
        "email": "jefpc2@tjal.jus.br",
        "contato": "(82)4009-3588/3589 (CARTÓRIO), 3592 (GABINETE DO MAGISTRADO)",
        "observacao": "-Substituto legal: 1º Juizado Especial da Fazenda Pública da Capital. (Resolução nº 35, de 13 de agosto de 2024)\r\n\r\n***FÉRIAS 2026 DO TITULAR: 12 DE FEVEREIRO A 3 DE MARÇO (1º PERÍODO - SUSPENSO NO BOJO DO PROCESSO Nº 2026/101747) E 02 A 21 DE JULHO"
      },
      {
        "nome": "Sandro Augusto dos Santos",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital - 17ª Vara Criminal da Capital",
        "email": "vcriminal17@tjal.jus.br",
        "contato": "(82) 4009-3562 (ATENDIMENTO),(82) 4009-3546 (CARTÓRIO), (82) 4009-3536 /3714 /3674 (GABINETE DO MAGISTRADO)",
        "observacao": "***FÉRIAS 2026: 23 DE FEVEREIRO A 14 DE MARÇO (1º PERÍODO) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Filipe Ferreira Munguba",
        "condicao": "Auxiliar",
        "lotacao": "Maceió - Fórum da Capital -  6ª Vara Cível da Capital",
        "email": "vcivel6@tjal.jus.br",
        "contato": "(82) 4009-3512 (CARTÓRIO)",
        "observacao": "Substituto Legal : 5ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***ATRAVÉS DA PORTARIA Nº 2.598, DE 19 DE DEZEMBRO DE 2022, o Juiz Titular foi liberado pelo Pleno do TJ/AL da prestação jurisdicional nos dias de TERÇ"
      },
      {
        "nome": "MARCELO PIMENTA CAVALCANTI",
        "condicao": "Substituto",
        "lotacao": "Maceió - Fórum da Capital - 13ª Vara Criminal da Capital Auditoria Militar",
        "email": "vcriminal13@tjal.jus.br",
        "contato": "(82) 4009-3538 (CARTÓRIO), (82) 4009-3704 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  14ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2026 DO TITULAR: 19 DE FEVEREIRO A 10 DE MARÇO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 2026/102024) E 29 DE NOVEMBRO A 18 DE DEZEMBR"
      },
      {
        "nome": "Phillippe Melo Alcântara Falcão",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum Regional da Universidade Federal de Alagoas - 16ª Vara Criminal da Capital Execuções Penais",
        "email": "vcriminal16@tjal.jus.br",
        "contato": "(82) 4009-3859, (82) 4009-3860",
        "observacao": "***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E  12 A 31 DE AGOSTO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103909) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Diego Araújo Dantas",
        "condicao": "Titular",
        "lotacao": "Maceió - 4º Juizado - 2º Juizado de Violência Doméstica e Familiar Contra a Mulher da Capital",
        "email": "2jviolencia@tjal.jus.br",
        "contato": "(82) 4009-3528 (CARTÓRIO), (82) 4009-3711 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 1º Juizado de Violência Doméstica, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2025: 4 A 23 DE JANEIRO DE 2026 (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025-109989).\r\n\r\n***FÉRIAS 2026:26 DE MARÇO A 14 DE ABRI"
      },
      {
        "nome": "Claudemiro Avelino de Souza",
        "condicao": "Titular",
        "lotacao": "Maceió - 6º Juizado - 6º Juizado Especial Cível da Capital",
        "email": "jecc6@tjal.jus.br",
        "contato": "(82) 2126-9800 (RECEPÇÃO), (82) 2126-9804 (CHEFE SECRETARIA), (82) 2126-9810 (ASSESSORIA)",
        "observacao": "Substituto Legal : 5º  JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 1º A 20 DE MARÇO (1º PERÍODO) E 11 A 30 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "José Cícero Alves da Silva",
        "condicao": "Auxiliar",
        "lotacao": "Maceió - Fórum da Capital - 16ª Vara Cível da Capital Fazenda Estadual",
        "email": "vcivel16@tjal.jus.br",
        "contato": "(82) 4009-3506 (ATENDIMENTO), (82) 4009-3673 (CHEFE DE SECRETARIA), (82) 4009-3606 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 17º Vara Cível da Capital, conforme resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117). \r\n\r\n***MAGISTR"
      },
      {
        "nome": "BRUNA SABACK DE ALMEIDA ROSA",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum Regional do Benedito Bentes - 25ª Vara Cível da Capital Família",
        "email": "vcivel25@tjal.jus.br",
        "contato": "(82) 4009-3880",
        "observacao": "Substituto Legal : 26ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DO TITULAR: 25 DE JANEIRO A 13 DE FEVEREIRO (1º PERÍODO) E 11 A 30 DE AGOSTO (2º PERÍODO)  - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2"
      },
      {
        "nome": "Caio Cezar Marinho de Souza",
        "condicao": "Auxiliar",
        "lotacao": "Maceió - Fórum da Capital - 14ª Vara Criminal da Capital - Crime Contra Menor/Idoso/Deficiente e Vulnerável",
        "email": "vcriminal14@tjal.jus.br",
        "contato": "(82) 4009-3577 (CARTÓRIO), (82) 4009-3574 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  15ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2025 DO TITULAR:  11 A 30 DE OUTUBRO DE 2026 (2º PERÍODO REAGENDADO, CONFORME PROCESSO Nº 2025-118489).\r\n\r\n***FÉRIAS 2026 DO TITULAR:"
      },
      {
        "nome": "Carlos Bruno de Oliveira Ramos",
        "condicao": "Titular",
        "lotacao": "Maceió - Fórum da Capital - 21ª Vara Cível da Capital Sucessões",
        "email": "vcivel21@tjal.jus.br",
        "contato": "(82) 4009-3520 (CARTÓRIO), (82) 4009-3564 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 20ª Vara Cível da Capital -  Sucessão, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2025: 19 A 28 DE AGOSTO DE 2026 (1º PERÍODO DE 2025 SUSPENSO E POSTERIORMENTE REAGENDADO, CONFORME PROCESSO Nº 26.0.000009948-0)"
      },
      {
        "nome": "PEDRO CAMPANHOLO MARQUES",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Rodoviária da Capital - Turma Recursal dos Juizados Especiais Cíveis, Criminais e da Fazenda Pública do Estado de Alagoas",
        "email": "turmarecursaldemaceio@tjal.jus.br",
        "contato": "(82) 2126-9832",
        "observacao": "***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/127030) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Bruno Eric Ribeiro de Souza",
        "condicao": "Auxiliar",
        "lotacao": "Maceió - Fórum da Capital - 27ª Vara Cível da Capital Família",
        "email": "27vcf@tjal.jus.br",
        "contato": "(82) 4009-3503 (ATENDIMENTO), (82) 4009-3736 (CHEFE DE SECRETARIA), (82) 4009-3636 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 24ª Vara Cível da Capital - Sucessão e Família, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 3 A 22 DE NOVEMBRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000007607-3) E 29 DE NOVEMBRO A 18 DE DEZEMBRO"
      },
      {
        "nome": "Gustavo Adolfo Câmara de Araújo",
        "condicao": "Auxiliar",
        "lotacao": "Maceió - Fórum da Capital - 2º Juizado Especial Fazenda Pública Estadual da Capital",
        "email": "jefpc2@tjal.jus.br",
        "contato": "(82)4009-3588/3589 (CARTÓRIO), 3592 (GABINETE DO MAGISTRADO)",
        "observacao": "-Substituto legal: 1º Juizado Especial da Fazenda Pública da Capital. (Resolução nº 35, de 13 de agosto de 2024)\r\n\r\n***FÉRIAS 2026 DO TITULAR: 12 DE FEVEREIRO A 3 DE MARÇO (1º PERÍODO - SUSPENSO NO BOJO DO PROCESSO Nº 2026/101747) E 02 A 21 DE JULHO"
      },
      {
        "nome": "Marcli Guimarães de Aguiar",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital -  2ª Vara Cível da Capital",
        "email": "vcivelfnp2@tjal.jus.br",
        "contato": "(82) 4009-3567 (CARTÓRIO), (82) 4009-3608 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 1ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n*** FÉRIAS 2026: 28 DE MAIO A 16 DE JUNHO (1º PERÍODO) E 12 A 21 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).´"
      },
      {
        "nome": "Sóstenes Alex Costa de Andrade",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum Ponta verde - 28ª Vara Cível da Capital Infância e Juventude",
        "email": "vcivel28@tjal.jus.br",
        "contato": "(82) 2126-4700/4747",
        "observacao": "Substituto Legal :  1ª Vara Criminal da Capital - Infância e Juventude, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO) E 11 A 30 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº"
      },
      {
        "nome": "Geraldo Tenório Silveira Júnior",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital - 2º Juizado Especial Fazenda Pública Estadual da Capital",
        "email": "jefpc2@tjal.jus.br",
        "contato": "(82)4009-3588/3589 (CARTÓRIO), 3592 (GABINETE DO MAGISTRADO)",
        "observacao": "-Substituto legal: 1º Juizado Especial da Fazenda Pública da Capital. (Resolução nº 35, de 13 de agosto de 2024)\r\n\r\n***FÉRIAS 2026 DO TITULAR: 12 DE FEVEREIRO A 3 DE MARÇO (1º PERÍODO - SUSPENSO NO BOJO DO PROCESSO Nº 2026/101747) E 02 A 21 DE JULHO"
      },
      {
        "nome": "JONATHAN PABLO ARAÚJO",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital - 18ª Vara Cível da Capital Fazenda Estadual",
        "email": "vcivel18@tjal.jus.br",
        "contato": "(82) 4009-3666 (ASSESSORIA), (82) 4009-3522 (CARTÓRIO), (82) 4009-3570 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 16ª Vara Cível da Capital - Fazenda Estadual, conforme Resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE JANEIRO (1º PERÍODO) E 10 A 29 DE MAIO (2º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000002344-1. JÁ H"
      },
      {
        "nome": "Brenno Livio Barbosa Bezerra",
        "condicao": "Designado",
        "lotacao": "Maceió - 7º Juizado - 7º Juizado Especial Cível da Capital",
        "email": "jecc7@tjal.jus.br",
        "contato": "(82) 4009-3875",
        "observacao": "Substituto Legal : 1º JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***JUIZ SUBSTITUTO DESIGNADO: BRENNO LIVIO BARBOSA BEZERRA, PARA RESPONDER, CUMULATIVAMENTE, PELO 7º JUIZADO ESPECIAL CÍVEL DA CAPITAL, EM RAZÃO DA CONVOCAÇÃO, COM PRE"
      },
      {
        "nome": "André Gêda Peixoto Melo",
        "condicao": "Designado",
        "lotacao": "Maceió - 1º Juizado - 1º Juizado Especial Cível da Capital",
        "email": "1jecc@tjal.jus.br",
        "contato": "(82) 4009-3741 (Recepção),  (82) 4009-3742/3743 (Secretaria), (82) 4009-3744 (Asssesoria), (82) 4009-3849 (Conciliação),  (82) 4009-3735 (CJUSC),  (82) 4009-3740 (Policial),  (82) 4009-3739 (Audiência)",
        "observacao": "Substituto Legal: 7º JEC, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2025: 5 A 24 DE JANEIRO DE 2026 (1º PERÍODO REAGENDADO, CONFORME PROCESSO Nº 2025/112295).\r\n\r\n***FÉRIAS 2026: 21 A 30 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTE"
      },
      {
        "nome": "Filipe Ferreira Munguba",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Rodoviária da Capital - Turma Recursal dos Juizados Especiais Cíveis, Criminais e da Fazenda Pública do Estado de Alagoas",
        "email": "turmarecursaldemaceio@tjal.jus.br",
        "contato": "(82) 2126-9832",
        "observacao": "***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/127030) E 02 A 21 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Antônio José Bittencourt Araújo",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital - 12ª Vara Criminal da Capital",
        "email": "vcriminal12@tjal.jus.br",
        "contato": "(82) 4009-3722 (ATENDIMENTO), (82) 4009-3527 (CARTÓRIO), (82) 4009-3627 (GABINETE DO MAGISTRADO), (82) 4009-3726 (AUDIÊNCIA)",
        "observacao": "Substituto Legal :  11ª  Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 06 A 25 DE ABRIL  (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/128318) E 9 A 18 DE ZEMBRO (2º PERÍODO ALTERADO, CONFORME PRO"
      },
      {
        "nome": "BRUNA DE LEAO FIGUEIREDO CARDOSO",
        "condicao": "Auxiliar",
        "lotacao": "Maceió - 9º Juizado - 9º Juizado Especial Cível da Capital",
        "email": "jecc9@tjal.jus.br",
        "contato": "(82) 3235-9902",
        "observacao": "Substituto Legal: 3º JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026 DA TITULAR: 23 DE NOVEMBRO A 2 DE DEZEMBRO (1º PERÍODO REAGENDADO APÓS SUSPENSÃO, CONFORME PROCESSO Nº 26.0.000008724-5) E 03 A 22 DE NOVEMBRO (2º PERÍOD"
      },
      {
        "nome": "Bruno Eric Ribeiro de Souza",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital -  2ª Vara Cível da Capital",
        "email": "vcivelfnp2@tjal.jus.br",
        "contato": "(82) 4009-3567 (CARTÓRIO), (82) 4009-3608 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 1ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n*** FÉRIAS 2026: 28 DE MAIO A 16 DE JUNHO (1º PERÍODO) E 12 A 21 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).´"
      },
      {
        "nome": "MARCELO PIMENTA CAVALCANTI",
        "condicao": "Auxiliar",
        "lotacao": "Maceió - Fórum da Capital - 15ª Vara Cível da Capital Fazenda Municipal",
        "email": "vcivel15@tjal.jus.br",
        "contato": "(82) 4009-3663 (ATENDIMENTO), (82) 4009-3713 (ASSESSORIA), (82) 4009-3524 (CARTÓRIO), (82) 4009-3572 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal: 19ª Vara Cível da Capital, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DO TITULAR: 05 A 24 DE JANEIRO (1º PERÍODO) E 1º A 20 DE JUNHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Ricardo Jorge Cavalcante Lima",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum Regional do Benedito Bentes - 10º Juizado Especial Cível da Capital",
        "email": "jecc10@tjal.jus.br",
        "contato": "(82) 4009-3578",
        "observacao": "Substituto Legal : 8º JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***CONFORME A PORTARIA TJAL Nº 1.666, DE 13 DE OUTUBRO DE 2025, A MAGISTRADA TITULAR FOI DESIGNADA PARA EXERCER AS ATRIBUIÇÕES DE DIRETORA DO FÓRUM REGIONAL DO BENEDIT"
      },
      {
        "nome": "Claudemiro Avelino de Souza",
        "condicao": "Designado",
        "lotacao": "Maceió - 5º Juizado - 5º Juizado Especial Cível da Capital",
        "email": "jecc5@tjal.jus.br",
        "contato": "(82) 3235-9868 (CONCILIAÇÃO), (82) 3235-9869 (GABINETE), (82) 3235-9870 (RECEPÇÃO), (82) 3235-9871 (SECRETARIA), (82) 3235-9872 (AUDIÊNCIA), (82) 3235-9873/9874 (ASSESSORIA)",
        "observacao": "Substituto Legal : 6º JEC, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO) E 12 DE NOVEMBRO A 1º DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***LICENÇA MÉ"
      },
      {
        "nome": "Soraya Maranhão Silva",
        "condicao": "Designado",
        "lotacao": "Maceió - 4º Juizado - 2º Juizado de Violência Doméstica e Familiar Contra a Mulher da Capital",
        "email": "2jviolencia@tjal.jus.br",
        "contato": "(82) 4009-3528 (CARTÓRIO), (82) 4009-3711 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal : 1º Juizado de Violência Doméstica, conforme Resolução nº 35, de 22 de agosto de 2023. \r\n\r\n***FÉRIAS 2025: 4 A 23 DE JANEIRO DE 2026 (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025-109989).\r\n\r\n***FÉRIAS 2026:26 DE MARÇO A 14 DE ABRI"
      },
      {
        "nome": "Geraldo Cavalcante Amorim",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum da Capital -  7ª Vara Criminal da Capital Tribunal do Júri",
        "email": "vcriminal7@tjal.jus.br",
        "contato": "(82) 4009-3712 (CARTÓRIO), (82) 4009-3631 (GABINETE DO MAGISTRADO)",
        "observacao": "Substituto Legal :  9ª Vara Criminal da Capital, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***FÉRIAS 2026: 5 A 24 DE JANEIRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025-127931) E 1º A 20 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS,"
      },
      {
        "nome": "Diego Araújo Dantas",
        "condicao": "Designado",
        "lotacao": "Maceió - 4º Juizado - 1º Juizado de Violência Doméstica e Familiar Contra a Mulher da Capital",
        "email": "1jviolencia@tjal.jus.br",
        "contato": "(82) 2126-9671, (82) 2126-9672, (82) 2126-9673",
        "observacao": "Substituto Legal: 2º Juizado de Violência Doméstica, conforme Resolução nº 35, de 22 de agosto de 2023.  \r\n\r\n***POR MEIO DA PORTARIA Nº 2.567, DE 13 DE DEZEMBRO DE 2024, A MAGISTRADA SORAYA MARANHÃO SILVA FOI DESIGNADA COMO DIRETORA DO FÓRUM DO JUIZA"
      },
      {
        "nome": "Paulo de Souza Avila",
        "condicao": "Designado",
        "lotacao": "Maceió - Fórum Ponta verde - 28ª Vara Cível da Capital Infância e Juventude",
        "email": "vcivel28@tjal.jus.br",
        "contato": "(82) 2126-4700/4747",
        "observacao": "Substituto Legal :  1ª Vara Criminal da Capital - Infância e Juventude, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO) E 11 A 30 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº"
      }
    ]
  },
  {
    "id": 19,
    "comarca": "Major Izidoro",
    "cidadeUf": "Major Izidoro-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Major Izidoro",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua 31 de março sn, Centro",
        "cep": "57580-000",
        "telefone": "(82) 3429-9294 / 3429-9295",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "ISYS GABRIELA LEITE MARTINS DANTAS",
        "condicao": "Designado",
        "lotacao": "Major Izidoro - Fórum da Comarca de Major Izidoro - Vara do Único Ofício",
        "email": "majorizidoro@tjal.jus.br",
        "contato": "(82) 3429-9294 / 3429-9295",
        "observacao": "Substituto Legal: Cacimbinhas, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***MAGISTRADA DESIGNADA: ISYS GABRIELA LEITE MARTINS DANTAS, PARA RESPONDER PELA COMARCA DE MAJOR IZIDORO, EM RAZÃO DA VACÂNCIA E ATÉ ULTERIOR DELIBERAÇÃO,  CONSOANTE"
      },
      {
        "nome": "ROBERIO MONTEIRO DE SOUZA",
        "condicao": "Designado",
        "lotacao": "Major Izidoro - Fórum da Comarca de Major Izidoro - Vara do Único Ofício",
        "email": "majorizidoro@tjal.jus.br",
        "contato": "(82) 3429-9294 / 3429-9295",
        "observacao": "Substituto Legal: Cacimbinhas, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***MAGISTRADA DESIGNADA: ISYS GABRIELA LEITE MARTINS DANTAS, PARA RESPONDER PELA COMARCA DE MAJOR IZIDORO, EM RAZÃO DA VACÂNCIA E ATÉ ULTERIOR DELIBERAÇÃO,  CONSOANTE"
      }
    ]
  },
  {
    "id": 21,
    "comarca": "Maragogi",
    "cidadeUf": "Maragogi-AL",
    "locais": [
      {
        "local": "Fórum  Tabelião Melchides Lindoso",
        "vara": "Vara do Único Ofício",
        "endereco": "Rodovia AL 101 Norte, s/n, Nao informado",
        "cep": "57965-000",
        "telefone": "(82) 3254-2404",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Júlia Ribeiro Montebello",
        "condicao": "Designado",
        "lotacao": "Maragogi - Fórum  Tabelião Melchides Lindoso - Vara do Único Ofício",
        "email": "maragogi@tjal.jus.br",
        "contato": "(82) 3254-2404",
        "observacao": "Substituto Legal: Passo de Camaragibe, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***JUÍZA SUBSTITUTA DESIGNADA: JÚLIA RIBEIRO MONTEBELLO, PARA RESPONDER PELA VARA PELA COMARCA DE MARAGOGI, A PARTIR DE 19 DE JUNHO DE 2026, ATÉ ULTERIOR DELI"
      },
      {
        "nome": "Pedro Felipe Cardoso Mota Fontes",
        "condicao": "Auxiliar",
        "lotacao": "Maragogi - Fórum  Tabelião Melchides Lindoso - Vara do Único Ofício",
        "email": "maragogi@tjal.jus.br",
        "contato": "(82) 3254-2404",
        "observacao": "Substituto Legal: Passo de Camaragibe, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***JUÍZA SUBSTITUTA DESIGNADA: JÚLIA RIBEIRO MONTEBELLO, PARA RESPONDER PELA VARA PELA COMARCA DE MARAGOGI, A PARTIR DE 19 DE JUNHO DE 2026, ATÉ ULTERIOR DELI"
      }
    ]
  },
  {
    "id": 22,
    "comarca": "Maravilha",
    "cidadeUf": "Maravilha-AL",
    "locais": [
      {
        "local": "Fórum João da Silva Yoyô Filho",
        "vara": "Vara do Único Ofício",
        "endereco": "R. NOSSA S DE FATIMA, 10, Centro",
        "cep": "57520-000",
        "telefone": "(82) 3429-9292 / 3429-9293",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "JADER DE MEDEIROS MARIZ NETO",
        "condicao": "Titular",
        "lotacao": "Maravilha - Fórum João da Silva Yoyô Filho - Vara do Único Ofício",
        "email": "maravilha@tjal.jus.br",
        "contato": "(82) 3429-9292 / 3429-9293",
        "observacao": "Substituto Legal : Olho D Água das Flores, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026:  16 DE NOVEMBRO A 05 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 23,
    "comarca": "Marechal Deodoro",
    "cidadeUf": "Marechal Deodoro-AL",
    "locais": [
      {
        "local": "Fórum Des. Ernande Lopes Dorvillé",
        "vara": "1ª Vara",
        "endereco": "Rodovia Edval Lemos, sn, José Dias",
        "cep": "57160-000",
        "telefone": "(82) 4009-3891",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Des. Ernande Lopes Dorvillé",
        "vara": "2ª Vara",
        "endereco": "Rodovia Edval Lemos, sn, José Dias",
        "cep": "57160-000",
        "telefone": "(82) 4009-3892",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Des. Ernande Lopes Dorvillé",
        "vara": "Direção do Fórum",
        "endereco": "Rodovia Edval Lemos, sn, José Dias",
        "cep": "57160-000",
        "telefone": "(82) 3260-1835",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Des. Ernande Lopes Dorvillé",
        "vara": "Distribuição",
        "endereco": "Rodovia Edval Lemos, sn, José Dias",
        "cep": "57160-000",
        "telefone": "(82) 3260-1835",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Fabíola Melo Feijão",
        "condicao": "Titular",
        "lotacao": "Marechal Deodoro - Fórum Des. Ernande Lopes Dorvillé - 2ª Vara",
        "email": "marechalvara2@tjal.jus.br",
        "contato": "(82) 4009-3892",
        "observacao": "Substituto legal: 1ª Vara de Marechal Deodoro, conforme Resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 1º A 20 DE MARÇO (1º PERÍODO) E 3 A 12 DE NOVEMBRO (2º PERÍODO ALTERADO - PROCESSO Nº  26.0.000009491-8) - (PERÍODOS ALTERADOS, CONFO"
      },
      {
        "nome": "Pedro Felipe Cardoso Mota Fontes",
        "condicao": "Auxiliar",
        "lotacao": "Marechal Deodoro - Fórum Des. Ernande Lopes Dorvillé - 1ª Vara",
        "email": "marechaldeodoro@tjal.jus.br",
        "contato": "(82) 4009-3891",
        "observacao": "Substituto Legal : 2ª Vara de Marechal Deodoro, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n**FÉRIAS 2026: 30 DE MAIO A 18 DE JUNHO (1º PERÍODO) E 29 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/"
      },
      {
        "nome": "Ewerton Luiz Chaves Carminati",
        "condicao": "Titular",
        "lotacao": "Marechal Deodoro - Fórum Des. Ernande Lopes Dorvillé - 1ª Vara",
        "email": "marechaldeodoro@tjal.jus.br",
        "contato": "(82) 4009-3891",
        "observacao": "Substituto Legal : 2ª Vara de Marechal Deodoro, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n**FÉRIAS 2026: 30 DE MAIO A 18 DE JUNHO (1º PERÍODO) E 29 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/"
      }
    ]
  },
  {
    "id": 24,
    "comarca": "Maribondo",
    "cidadeUf": "Maribondo-AL",
    "locais": [
      {
        "local": "Fórum Rua Dr. Cleto Marques Luz",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Isaura Bastos de Araújo, 40, Centro",
        "cep": "57670-000",
        "telefone": "(82) 3429-9276 / 3429-9277",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "PEDRO CAMPANHOLO MARQUES",
        "condicao": "Titular",
        "lotacao": "Maribondo - Fórum Rua Dr. Cleto Marques Luz - Vara do Único Ofício",
        "email": "maribondo@tjal.jus.br",
        "contato": "(82) 3429-9276 / 3429-9277",
        "observacao": "Substituto Legal: Boca da Mata, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026:19 DE FEVEREIRO A 10 DE MARÇO (1º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 20,
    "comarca": "Mata Grande",
    "cidadeUf": "Mata Grande-AL",
    "locais": [
      {
        "local": "Fórum Des. Adalberto Correia de Lima",
        "vara": "Vara do Único Ofício",
        "endereco": "R. MANOEL ALVES MARTINS, SN, Centro",
        "cep": "57540-000",
        "telefone": "(82) 3429-9274 / 3429-9275",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "THIAGO AUGUSTO LOPES DE MORAIS",
        "condicao": "Titular",
        "lotacao": "Mata Grande - Fórum Des. Adalberto Correia de Lima - Vara do Único Ofício",
        "email": "matagrande@tjal.jus.br",
        "contato": "(82) 3429-9274 / 3429-9275",
        "observacao": "Substituto Legal: Água Branca, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DO TITULAR: 2 A 21 DE JULHO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000008622-2. JÁ HAVIA SIDO ALTERADO POR MEIO DO  PROCESSO Nº 2026/102812)"
      },
      {
        "nome": "NATHALIA SILVA VIANA",
        "condicao": "Designado",
        "lotacao": "Mata Grande - Fórum Des. Adalberto Correia de Lima - Vara do Único Ofício",
        "email": "matagrande@tjal.jus.br",
        "contato": "(82) 3429-9274 / 3429-9275",
        "observacao": "Substituto Legal: Água Branca, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DO TITULAR: 2 A 21 DE JULHO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000008622-2. JÁ HAVIA SIDO ALTERADO POR MEIO DO  PROCESSO Nº 2026/102812)"
      },
      {
        "nome": "Amauri Fukuda",
        "condicao": "Auxiliar",
        "lotacao": "Mata Grande - Fórum Des. Adalberto Correia de Lima - Vara do Único Ofício",
        "email": "matagrande@tjal.jus.br",
        "contato": "(82) 3429-9274 / 3429-9275",
        "observacao": "Substituto Legal: Água Branca, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DO TITULAR: 2 A 21 DE JULHO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000008622-2. JÁ HAVIA SIDO ALTERADO POR MEIO DO  PROCESSO Nº 2026/102812)"
      },
      {
        "nome": "Marcos Vinicius Linhares Constantino da Silva",
        "condicao": "Designado",
        "lotacao": "Mata Grande - Fórum Des. Adalberto Correia de Lima - Vara do Único Ofício",
        "email": "matagrande@tjal.jus.br",
        "contato": "(82) 3429-9274 / 3429-9275",
        "observacao": "Substituto Legal: Água Branca, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DO TITULAR: 2 A 21 DE JULHO (1º PERÍODO SUSPENSO, CONFORME PROCESSO Nº 26.0.000008622-2. JÁ HAVIA SIDO ALTERADO POR MEIO DO  PROCESSO Nº 2026/102812)"
      }
    ]
  },
  {
    "id": 25,
    "comarca": "Matriz de Camaragibe",
    "cidadeUf": "Matriz de Camaragibe-AL",
    "locais": [
      {
        "local": "Fórum Des. Paulo de Albuquerque",
        "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas)",
        "endereco": "Pç. Senador Renan Calheiros, sn, Centro",
        "cep": "57910-000",
        "telefone": "(82) 3254 - 2408",
        "entrancia": "1ª entrancia"
      },
      {
        "local": "Fórum Des. Paulo de Albuquerque",
        "vara": "Vara do Único Ofício",
        "endereco": "Pç. Senador Renan Calheiros, sn, Centro",
        "cep": "57910-000",
        "telefone": "(82) 3254 - 2408",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "TAIS PEREIRA DA ROSA",
        "condicao": "Titular",
        "lotacao": "Matriz de Camaragibe - Fórum Des. Paulo de Albuquerque - Vara do Único Ofício",
        "email": "matrizdecamaragibe@tjal.jus.br",
        "contato": "(82) 3254 - 2408",
        "observacao": "Substituto Legal: Joaquim Gomes, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE AGOSTO (1º PERÍODO) E 29 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 27,
    "comarca": "Murici",
    "cidadeUf": "Murici-AL",
    "locais": [
      {
        "local": "Fórum Ministro Pedro da Rocha Acioly",
        "vara": "Vara do Único Ofício",
        "endereco": "TRAVESSA JOSE LEAO 76, Centro",
        "cep": "57820-000",
        "telefone": "(82) 4009-3876",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Paula de Góes Brito Pontes",
        "condicao": "Titular",
        "lotacao": "Murici - Fórum Ministro Pedro da Rocha Acioly - Vara do Único Ofício",
        "email": "murici@tjal.jus.br",
        "contato": "(82) 4009-3876",
        "observacao": "Substituto Legal: São José da Laje, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE JANEIRO (1º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 29,
    "comarca": "Olho DÁgua das Flores",
    "cidadeUf": "Olho DÁgua das Flores-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Olho D Água das Flores",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Lourenço de Abreu, 06, Centro",
        "cep": "57442-000",
        "telefone": "(82) 3429-9272 / 3429-9273",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "KAIO CESAR QUEIROZ SILVA SANTOS",
        "condicao": "Titular",
        "lotacao": "Olho DÁgua das Flores - Fórum da Comarca de Olho D Água das Flores - Vara do Único Ofício",
        "email": "olhodaguadasflores@tjal.jus.br",
        "contato": "(82) 3429-9272 / 3429-9273",
        "observacao": "Substituto Legal: Maravilha, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS DE  2026: 25 DE MAIO A 13 DE JUNHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000003949-6) E 1ª  A 8 E 10 A 20 DE JULHO (2º PERÍODO - DIA 9/7 SUSPENSO, C"
      }
    ]
  },
  {
    "id": 30,
    "comarca": "Palmeira dos Índios",
    "cidadeUf": "Palmeira dos Índios-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Palmeira dos Índios",
        "vara": "1ª Vara",
        "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
        "cep": "57600-970",
        "telefone": "(82) 3429-9256",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Palmeira dos Índios",
        "vara": "2ª Vara",
        "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
        "cep": "57600-970",
        "telefone": "(82) 3429-9260",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Palmeira dos Índios",
        "vara": "3ª Vara",
        "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
        "cep": "57600-970",
        "telefone": "(82) 3429-9264",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Palmeira dos Índios",
        "vara": "4ª Vara",
        "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
        "cep": "57600-970",
        "telefone": "(82) 3429-9268",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Palmeira dos Índios",
        "vara": "Direção do Fórum",
        "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
        "cep": "57600-970",
        "telefone": "(82) 3429-9273",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Palmeira dos Índios",
        "vara": "Distribuição Judicial",
        "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
        "cep": "57600-970",
        "telefone": "(82) 3429-9274",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Juizado",
        "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Palmeira dos Índios",
        "endereco": "Rua Otávio Cavalcante, s/n, 1º Andar, Centro",
        "cep": "57600-070",
        "telefone": "(82) 3429-9251(Recepção) / 3429-9252(Secretaria)",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Palmeira dos Índios",
        "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas)",
        "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
        "cep": "57600-970",
        "telefone": "(82) 3000-0000",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "BRUNA FANNY DE OLIVEIRA LEMOS",
        "condicao": "Titular",
        "lotacao": "Palmeira dos Índios - Fórum da Comarca de Palmeira dos Índios -  4ª Vara",
        "email": "vara4palmeira@tjal.jus.br",
        "contato": "(82) 3429-9268",
        "observacao": "Substituto Legal: JECC de Palmeira dos Índios, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DA TITULAR: 12 A 31 DE JANEIRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025-128795) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/"
      },
      {
        "nome": "NATHALLYE COSTA ALCÂNTARA DE OLIVEIRA",
        "condicao": "Titular",
        "lotacao": "Palmeira dos Índios - Juizado - Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Palmeira dos Índios",
        "email": "jeccpalmeira@tjal.jus.br",
        "contato": "(82) 3429-9251(Recepção) / 3429-9252(Secretaria)",
        "observacao": "Substituto Legal: 4ª Vara de Palmeira dos Índios, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 31 DE MARÇO (1º PERÍODO) E 19 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍODO)."
      },
      {
        "nome": "NATHALIA SILVA VIANA",
        "condicao": "Titular",
        "lotacao": "Palmeira dos Índios - Fórum da Comarca de Palmeira dos Índios -  3ª Vara",
        "email": "vara3palmeira@tjal.jus.br",
        "contato": "(82) 3429-9264",
        "observacao": "Substituto Legal: 2ª Vara da Comarca de Palmeira dos Índios, conforme resolução nº 10, de 24 de abril de 2018. \r\n  \r\n***FÉRIAS 2026 DA TITULAR: 3 A 22 DE JUNHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103164), 12 A 26 DE AGOSTO E 15 A 19 DE DE"
      },
      {
        "nome": "Amauri Fukuda",
        "condicao": "Designado",
        "lotacao": "Palmeira dos Índios - Fórum da Comarca de Palmeira dos Índios -  3ª Vara",
        "email": "vara3palmeira@tjal.jus.br",
        "contato": "(82) 3429-9264",
        "observacao": "Substituto Legal: 2ª Vara da Comarca de Palmeira dos Índios, conforme resolução nº 10, de 24 de abril de 2018. \r\n  \r\n***FÉRIAS 2026 DA TITULAR: 3 A 22 DE JUNHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103164), 12 A 26 DE AGOSTO E 15 A 19 DE DE"
      },
      {
        "nome": "Christiano Silva Sibaldo de Assunção",
        "condicao": "Titular",
        "lotacao": "Palmeira dos Índios - Fórum da Comarca de Palmeira dos Índios -  1ª Vara",
        "email": "vara1palmeira@tjal.jus.br",
        "contato": "(82) 3429-9256",
        "observacao": "Substituto Legal : 3ª Vara de Palmeira dos Índios, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DO TITULAR: 02 a 21 DE JANEIRO (1º PERÍODO) E 11 A 30 DE ABRIL (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117"
      },
      {
        "nome": "Amauri Fukuda",
        "condicao": "Designado",
        "lotacao": "Palmeira dos Índios - Fórum da Comarca de Palmeira dos Índios -  1ª Vara",
        "email": "vara1palmeira@tjal.jus.br",
        "contato": "(82) 3429-9256",
        "observacao": "Substituto Legal : 3ª Vara de Palmeira dos Índios, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DO TITULAR: 02 a 21 DE JANEIRO (1º PERÍODO) E 11 A 30 DE ABRIL (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117"
      },
      {
        "nome": "DANILO VITAL DE OLIVEIRA",
        "condicao": "Titular",
        "lotacao": "Palmeira dos Índios - Fórum da Comarca de Palmeira dos Índios -  2ª Vara",
        "email": "vara2palmeira@tjal.jus.br",
        "contato": "(82) 3429-9260",
        "observacao": "Substituto Legal: 1ª Vara da Comarca de Palmeira dos Índios,  conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE JANEIRO (1º PERÍODO) E 02 A 8 E 11 DE JULHO (2º PERÍODO - DIAS 9 E 10/7/2026 SUSPENSOS, CONFORME PROCESSO Nº"
      }
    ]
  },
  {
    "id": 33,
    "comarca": "Paripueira",
    "cidadeUf": "Paripueira-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Paripueira",
        "vara": "CEJUSC Pré Processual de Paripueira",
        "endereco": "Pç. Marechal Deodoro, 319, Centro",
        "cep": "57020-919",
        "telefone": "(82) 4009-3881 / 4009-3882",
        "entrancia": "1ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Paripueira",
        "vara": "Vara do Único Ofício",
        "endereco": "Loteamento Amaropolis, s/n, Centro",
        "cep": "57935-000",
        "telefone": "(82) 4009-3881 / 4009-3882",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Juliana Accioly Uchôa",
        "condicao": "Titular",
        "lotacao": "Paripueira - Fórum da Comarca de Paripueira - Vara do Único Ofício",
        "email": "paripueira@tjal.jus.br",
        "contato": "(82) 4009-3881 / 4009-3882",
        "observacao": "Substituto Legal: São Luiz do Quitunde, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026 DA MAGISTRADA TITULAR: 27 DE JULHO A 5 DE AGOSTO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000008477-7) - (PERÍODOS ALTERADOS, CONFORME"
      },
      {
        "nome": "Mariane Torreao Dantas",
        "condicao": "Auxiliar",
        "lotacao": "Paripueira - Fórum da Comarca de Paripueira - Vara do Único Ofício",
        "email": "paripueira@tjal.jus.br",
        "contato": "(82) 4009-3881 / 4009-3882",
        "observacao": "Substituto Legal: São Luiz do Quitunde, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026 DA MAGISTRADA TITULAR: 27 DE JULHO A 5 DE AGOSTO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000008477-7) - (PERÍODOS ALTERADOS, CONFORME"
      }
    ]
  },
  {
    "id": 65,
    "comarca": "Passo de Camaragibe",
    "cidadeUf": "Passo de Camaragibe-AL",
    "locais": [
      {
        "local": "Fórum Desembargador Alfredo Gaspar de Mendonça",
        "vara": "Vara do Único Ofício",
        "endereco": "RUA DOUTOR PEDRO DA CUNHA, 13, Centro",
        "cep": "57930-000",
        "telefone": "(82) 3254-2423 / 3254-2424",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "PRISCILLA EMANUELLE DE MELO CAVALCANTE",
        "condicao": "Titular",
        "lotacao": "Passo de Camaragibe - Fórum Desembargador Alfredo Gaspar de Mendonça - Vara do Único Ofício",
        "email": "passodecamaragibe@tjal.jus.br",
        "contato": "(82) 3254-2423 / 3254-2424",
        "observacao": "Substituto Legal: Maragogi, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117) .\r\n\r\n***A MAGISTRADA TITULAR FOI CONVOCADO COM PREJUÍZO DAS FUNÇÕ"
      },
      {
        "nome": "JOSE IVAN MELO DOS SANTOS",
        "condicao": "Designado",
        "lotacao": "Passo de Camaragibe - Fórum Desembargador Alfredo Gaspar de Mendonça - Vara do Único Ofício",
        "email": "passodecamaragibe@tjal.jus.br",
        "contato": "(82) 3254-2423 / 3254-2424",
        "observacao": "Substituto Legal: Maragogi, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117) .\r\n\r\n***A MAGISTRADA TITULAR FOI CONVOCADO COM PREJUÍZO DAS FUNÇÕ"
      },
      {
        "nome": "Júlia Ribeiro Montebello",
        "condicao": "Designado",
        "lotacao": "Passo de Camaragibe - Fórum Desembargador Alfredo Gaspar de Mendonça - Vara do Único Ofício",
        "email": "passodecamaragibe@tjal.jus.br",
        "contato": "(82) 3254-2423 / 3254-2424",
        "observacao": "Substituto Legal: Maragogi, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117) .\r\n\r\n***A MAGISTRADA TITULAR FOI CONVOCADO COM PREJUÍZO DAS FUNÇÕ"
      }
    ]
  },
  {
    "id": 35,
    "comarca": "Penedo",
    "cidadeUf": "Penedo-AL",
    "locais": [
      {
        "local": "Fórum Des. Alfredo Gaspar de Mendonça",
        "vara": "1ª Vara",
        "endereco": "Tv. Fernando Peixoto, 526, Centro",
        "cep": "57200-000",
        "telefone": "(82) 3551-9363",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. Alfredo Gaspar de Mendonça",
        "vara": "2ª Vara",
        "endereco": "Tv. Fernando Peixoto, 526, Centro",
        "cep": "57200-000",
        "telefone": "(82) 3551-9355",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. Alfredo Gaspar de Mendonça",
        "vara": "3ª Vara",
        "endereco": "Tv. Fernando Peixoto, 526, Centro",
        "cep": "57200-000",
        "telefone": "(82) 3551-9368",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. Alfredo Gaspar de Mendonça",
        "vara": "4ª Vara",
        "endereco": "Tv. Fernando Peixoto, 526, Centro",
        "cep": "57200-000",
        "telefone": "(82) 3551-9380",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. Alfredo Gaspar de Mendonça",
        "vara": "Distribuição",
        "endereco": "Tv. Fernando Peixoto, 526, Centro",
        "cep": "57200-000",
        "telefone": "(82) 3551-9372 e 3551-9373",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Juizado",
        "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Penedo",
        "endereco": "Tv. Fernando Peixoto, 526, Centro",
        "cep": "57200-000",
        "telefone": "(82) 3551-9359",
        "entrancia": "3ª entrancia"
      },
      {
        "local": "Fórum Des. Alfredo Gaspar de Mendonça",
        "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas)",
        "endereco": "Tv. Fernando Peixoto, 526, Centro",
        "cep": "57200-000",
        "telefone": "(82) 3000-0000",
        "entrancia": "3ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Marina Gurgel da Costa",
        "condicao": "Titular",
        "lotacao": "Penedo - Fórum Des. Alfredo Gaspar de Mendonça -  1ª Vara",
        "email": "vara1penedo@tjal.jus.br",
        "contato": "(82) 3551-9363",
        "observacao": "Substituto Legal: 3ª Vara de Penedo, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 02 A 31 DE JANEIRO (1º PERÍODO) E 25 DE MAIO A 23 DE JUNHO (2º PERÍODO).\r\n\r\n*** AFASTAMENTO TEMPORÁRIO DA MAGISTRADA TITULAR, SEM PREJUÍZO DAS"
      },
      {
        "nome": "Lucas Lopes Dória Ferreira",
        "condicao": "Titular",
        "lotacao": "Penedo - Fórum Des. Alfredo Gaspar de Mendonça -  4ª Vara",
        "email": "4varapenedo@tjal.jus.br",
        "contato": "(82) 3551-9380",
        "observacao": "Substituto Legal: JECC de Penedo, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 1º A 20 DE ABRIL (1º PERÍODO) E 1º A 20 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "Bruno Acioli Araújo",
        "condicao": "Titular",
        "lotacao": "Penedo - Fórum Des. Alfredo Gaspar de Mendonça -  2ª Vara",
        "email": "vara2penedo@tjal.jus.br",
        "contato": "(82) 3551-9355",
        "observacao": "Substituto Legal: 1ª Vara de Penedo, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***CONFORME A PORTARIA TJAL Nº 1.906, DE 12 DE DEZEMBRO DE 2025, O MAGISTRADO TITULAR FOI DESIGNADO PARA EXERCER AS ATRIBUIÇÕES DE DIRETOR DO FÓRUM DA COMARCA D"
      },
      {
        "nome": "Roberto Alcântara de Oliveira Araújo",
        "condicao": "Titular",
        "lotacao": "Penedo - Juizado - Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Penedo",
        "email": "jeccpenedo@tjal.jus.br",
        "contato": "(82) 3551-9359",
        "observacao": "Substituto Legal: 4ª Vara de Penedo, conforme resolução nº 10, de 24 de abril de 2018."
      },
      {
        "nome": "Leandro de Castro Folly",
        "condicao": "Titular",
        "lotacao": "Penedo - Fórum Des. Alfredo Gaspar de Mendonça -  3ª Vara",
        "email": "vara3penedo@tjal.jus.br",
        "contato": "(82) 3551-9368",
        "observacao": "Substituto Legal: 2º Vara de Penedo, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2025: 2 A 21 DE NOVEMBRO DE 2026 (2º PERÍODO REMARCADO, CONFOME PROCESSO Nº 26.0.000006977-8).\r\n\r\n***FÉRIAS 2026:11 A 30 DE ABRIL (1º PERÍODO) E 03 A"
      }
    ]
  },
  {
    "id": 38,
    "comarca": "Piaçabuçu",
    "cidadeUf": "Piaçabuçu-AL",
    "locais": [
      {
        "local": "Fórum Dr. Augusto Rodrigues Souza Campos",
        "vara": "Vara do Único Ofício",
        "endereco": "Av. CORONEL FERNANDO TEODOMIRO, SN, Centro",
        "cep": "57210-000",
        "telefone": "(82) 3551-9394 / 3551-9395",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "EDMILSON MACHADO DE ALMEIDA NETO",
        "condicao": "Titular",
        "lotacao": "Piaçabuçu - Fórum Dr. Augusto Rodrigues Souza Campos - Vara do Único Ofício",
        "email": "piacabucu@tjal.jus.br",
        "contato": "(82) 3551-9394 / 3551-9395",
        "observacao": "Substituto Legal: Igreja Nova, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DO TITULAR: 04 A 23 DE MAIO (1º PERÍODO)  - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n*** AFASTAMENTO TEMPORÁRIO DO MAGISTRADO TITULAR,"
      },
      {
        "nome": "LEANDRO FRANCISCO AMBROSIO",
        "condicao": "Designado",
        "lotacao": "Piaçabuçu - Fórum Dr. Augusto Rodrigues Souza Campos - Vara do Único Ofício",
        "email": "piacabucu@tjal.jus.br",
        "contato": "(82) 3551-9394 / 3551-9395",
        "observacao": "Substituto Legal: Igreja Nova, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DO TITULAR: 04 A 23 DE MAIO (1º PERÍODO)  - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n*** AFASTAMENTO TEMPORÁRIO DO MAGISTRADO TITULAR,"
      }
    ]
  },
  {
    "id": 36,
    "comarca": "Pilar",
    "cidadeUf": "Pilar-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Pilar",
        "vara": "Vara do Único Ofício",
        "endereco": "Av. Antonio Aniceto dos Santos, sn, Centro",
        "cep": "57150-000",
        "telefone": "(82) 4009-3890",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Amine Mafra Chukr Conrado",
        "condicao": "Titular",
        "lotacao": "Pilar - Fórum da Comarca de Pilar - Vara do Único Ofício",
        "email": "pilar@tjal.jus.br",
        "contato": "(82) 4009-3890",
        "observacao": "Substituto Legal: Santa Luzia do Norte, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DA TITULAR: 19 A 28 DE MAIO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000003369-2) E 29 DE MAIO A 3 DE JUNHO E 5 A 18 DE DEZEMBRO (2º P"
      },
      {
        "nome": "MÁRIO DE MEDEIROS ROCHA FILHO",
        "condicao": "Designado",
        "lotacao": "Pilar - Fórum da Comarca de Pilar - Vara do Único Ofício",
        "email": "pilar@tjal.jus.br",
        "contato": "(82) 4009-3890",
        "observacao": "Substituto Legal: Santa Luzia do Norte, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DA TITULAR: 19 A 28 DE MAIO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000003369-2) E 29 DE MAIO A 3 DE JUNHO E 5 A 18 DE DEZEMBRO (2º P"
      },
      {
        "nome": "Brenno Livio Barbosa Bezerra",
        "condicao": "Auxiliar",
        "lotacao": "Pilar - Fórum da Comarca de Pilar - Vara do Único Ofício",
        "email": "pilar@tjal.jus.br",
        "contato": "(82) 4009-3890",
        "observacao": "Substituto Legal: Santa Luzia do Norte, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DA TITULAR: 19 A 28 DE MAIO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000003369-2) E 29 DE MAIO A 3 DE JUNHO E 5 A 18 DE DEZEMBRO (2º P"
      },
      {
        "nome": "VERIDIANA OLIVEIRA DE LIMA",
        "condicao": "Designado",
        "lotacao": "Pilar - Fórum da Comarca de Pilar - Vara do Único Ofício",
        "email": "pilar@tjal.jus.br",
        "contato": "(82) 4009-3890",
        "observacao": "Substituto Legal: Santa Luzia do Norte, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DA TITULAR: 19 A 28 DE MAIO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000003369-2) E 29 DE MAIO A 3 DE JUNHO E 5 A 18 DE DEZEMBRO (2º P"
      },
      {
        "nome": "Paulo de Souza Avila",
        "condicao": "Auxiliar",
        "lotacao": "Pilar - Fórum da Comarca de Pilar - Vara do Único Ofício",
        "email": "pilar@tjal.jus.br",
        "contato": "(82) 4009-3890",
        "observacao": "Substituto Legal: Santa Luzia do Norte, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026 DA TITULAR: 19 A 28 DE MAIO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000003369-2) E 29 DE MAIO A 3 DE JUNHO E 5 A 18 DE DEZEMBRO (2º P"
      }
    ]
  },
  {
    "id": 37,
    "comarca": "Piranhas",
    "cidadeUf": "Piranhas-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Piranhas",
        "vara": "Vara do Único Ofício",
        "endereco": "Av. Altemar Dutra, s/n, Vila Sergipe, Xingo",
        "cep": "57460-000",
        "telefone": "(82) 3429-9289",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "BRUCE LEE SIMOES PIMENTEL",
        "condicao": "Titular",
        "lotacao": "Piranhas - Fórum da Comarca de Piranhas - Vara do Único Ofício",
        "email": "piranhas@tjal.jus.br",
        "contato": "(82) 3429-9289",
        "observacao": "Substituto Legal: São José da Tapera,  conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2025: 2 A 21 DE JANEIRO DE 2026 (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/124524).\r\n\r\n***FÉRIAS 2026: 30 DE MAIO A 18 DE JUNHO (1º PERÍODO) E"
      }
    ]
  },
  {
    "id": 39,
    "comarca": "Porto Calvo",
    "cidadeUf": "Porto Calvo-AL",
    "locais": [
      {
        "local": "Fórum Domingos Fernandes Calabar",
        "vara": "1ª Vara",
        "endereco": "Rua Professor Guedes de Miranda, 01, Centro",
        "cep": "57900-000",
        "telefone": "(82) 3254 - 2428",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Domingos Fernandes Calabar",
        "vara": "2ª Vara",
        "endereco": "Rua Professor Guedes de Miranda, 01, Centro",
        "cep": "57900-000",
        "telefone": "(82) 3254 - 2429",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Domingos Fernandes Calabar",
        "vara": "Distribuição",
        "endereco": "Rua Professor Guedes de Miranda, 01, Centro",
        "cep": "57900-000",
        "telefone": "(82) 3000-0000",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Vinicius Garcia Modesto",
        "condicao": "Titular",
        "lotacao": "Porto Calvo - Fórum Domingos Fernandes Calabar - 2ª Vara",
        "email": "v2portocalvo@tjal.jus.br",
        "contato": "(82) 3254 - 2429",
        "observacao": "Substituto Legal: 1ª Vara de Porto Calvo, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 1º A 20 DE JULHO (1º PERÍODO) E 03 A 22 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***CONFORME A"
      },
      {
        "nome": "WILIANS ALENCAR COELHO JUNIOR",
        "condicao": "Titular",
        "lotacao": "Porto Calvo - Fórum Domingos Fernandes Calabar - 1ª Vara",
        "email": "v1portocalvo@tjal.jus.br",
        "contato": "(82) 3254 - 2428",
        "observacao": "Substituto Legal: 2ª Vara de Porto Calvo, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026:13 A 22 DE JUNHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 26.0.000005364-2) E  30 DE NOVEMBRO A 19 DE DEZEMBRO (2º PERÍODO ALTERADO, CONFO"
      }
    ]
  },
  {
    "id": 41,
    "comarca": "Porto Real do Colégio",
    "cidadeUf": "Porto Real do Colégio-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Porto Real do Colégio",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Capitão Vieira, 25, Centro",
        "cep": "57290-300",
        "telefone": "(82) 3551-9398 / 3551-9399",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "ALANA MENDONCA OLIVEIRA SOBRAL",
        "condicao": "Titular",
        "lotacao": "Porto Real do Colégio - Fórum da Comarca de Porto Real do Colégio - Vara do Único Ofício",
        "email": "portorealdocolegio@tjal.jus.br",
        "contato": "(82) 3551-9398 / 3551-9399",
        "observacao": "Substituto Legal: São Sebastião, conforme resolução nº 10, de 24 abril de 2018.\r\n\r\n***FÉRIAS 2026: 10  A 19 DE JUNHO (1º PERÍODO -TRANSFERIDO POR MEIO DO PROCESSO SEI Nº 26.0.000004510-0) - (PERÍODO ALTERADO CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 32,
    "comarca": "Pão de Açúcar",
    "cidadeUf": "Pão de Açúcar-AL",
    "locais": [
      {
        "local": "Fórum Átila Pinto Machado",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Alameda da Esperança, sn, Farol",
        "cep": "57400-000",
        "telefone": "(82) 3429-9270 / 3429-9271",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "LUCAS CARVALHO TENÓRIO DE ALBUQUERQUE",
        "condicao": "Titular",
        "lotacao": "Pão de Açúcar - Fórum Átila Pinto Machado - Vara do Único Ofício",
        "email": "paodeacucar@tjal.jus.br",
        "contato": "(82) 3429-9270 / 3429-9271",
        "observacao": "Substituto Legal: Batalha, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 3 A 22 DE JUNHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/102868) E 19 DE NOVEMBRO A 08 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PR"
      }
    ]
  },
  {
    "id": 42,
    "comarca": "Quebrangulo",
    "cidadeUf": "Quebrangulo-AL",
    "locais": [
      {
        "local": "Fórum Tabelião Jerônimo da Cunha Lima",
        "vara": "Vara do Único Ofício",
        "endereco": "R. QUINZE DE NOVEMBRO, 238, Centro",
        "cep": "57750-000",
        "telefone": "(82) 3429-9269",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "MÁRIO DE MEDEIROS ROCHA FILHO",
        "condicao": "Titular",
        "lotacao": "Quebrangulo - Fórum Tabelião Jerônimo da Cunha Lima - Vara do Único Ofício",
        "email": "quebrangulo@tjal.jus.br",
        "contato": "(82) 3429-9269",
        "observacao": "Substituto Legal: Igaci, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DO TITULAR: 11 A 30 DE ABRIL (1º PERÍODO) E 14 DE MAIO A 02 DE JUNHO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***POR MEIO DA"
      },
      {
        "nome": "LUIS FILLIPE DE GODOI TRINO",
        "condicao": "Designado",
        "lotacao": "Quebrangulo - Fórum Tabelião Jerônimo da Cunha Lima - Vara do Único Ofício",
        "email": "quebrangulo@tjal.jus.br",
        "contato": "(82) 3429-9269",
        "observacao": "Substituto Legal: Igaci, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DO TITULAR: 11 A 30 DE ABRIL (1º PERÍODO) E 14 DE MAIO A 02 DE JUNHO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***POR MEIO DA"
      }
    ]
  },
  {
    "id": 43,
    "comarca": "Rio Largo",
    "cidadeUf": "Rio Largo-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Rio Largo",
        "vara": "1ª Vara",
        "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
        "cep": "57100-000",
        "telefone": "(82) 4009-3886",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Rio Largo",
        "vara": "2ª Vara",
        "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
        "cep": "57100-000",
        "telefone": "(82) 4009-3885",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Rio Largo",
        "vara": "3ª Vara",
        "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
        "cep": "57100-000",
        "telefone": "(82) 4009-3884",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum da Comarca de Rio Largo",
        "vara": "Central",
        "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
        "cep": "57100-000",
        "telefone": "(82) 3261-1108",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Juizado",
        "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Rio Largo",
        "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
        "cep": "57100-000",
        "telefone": "(82) 4009-3888",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "GUILHERME BUBOLZ BOHM",
        "condicao": "Titular",
        "lotacao": "Rio Largo - Fórum da Comarca de Rio Largo -  1ª Vara",
        "email": "vara1deriolargo@tjal.jus.br",
        "contato": "(82) 4009-3886",
        "observacao": "Substituto Legal: 2ª Vara da Comarca de Rio Largo, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 14 DE MAIO A 02 DE JUNHO (1º PERÍODO) E 29 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº"
      },
      {
        "nome": "LARRISSA GABRIELLA LINS VICTOR LACERDA",
        "condicao": "Titular",
        "lotacao": "Rio Largo - Fórum da Comarca de Rio Largo -  2ª Vara",
        "email": "vara2deriolargo@tjal.jus.br",
        "contato": "(82) 4009-3885",
        "observacao": "Substituto Legal: 1ª Vara da Comarca de Rio Largo, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***MAGISTRADA DESIGNADA PARA EXERCER AS ATRIBUIÇÕES DE DIRETORA DO FÓRUM DA COMARCA DE RIO LARGO (PORTARIA Nº 1.833, DE 11 DE SETEMBRO DE 2024)."
      },
      {
        "nome": "Marcella Waleska Costa Pontes  Garcia",
        "condicao": "Titular",
        "lotacao": "Rio Largo - Juizado - Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Rio Largo",
        "email": "jeccderiolargo@tjal.jus.br",
        "contato": "(82) 4009-3888",
        "observacao": "Substituto Legal: 3ª Vara de Rio Largo, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 1º A 20 DE JULHO (1º PERÍODO) E 03 A 22 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "FERNANDA DE GOES BRITO DIAMANTARAS",
        "condicao": "Titular",
        "lotacao": "Rio Largo - Fórum da Comarca de Rio Largo -  3ª Vara",
        "email": "vara3deriolargo@tjal.jus.br",
        "contato": "(82) 4009-3884",
        "observacao": "Substituto Legal: JECC Vara da Comarca de Rio Largo,  conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO) E 29 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103342) - (P"
      },
      {
        "nome": "LARRISSA GABRIELLA LINS VICTOR LACERDA",
        "condicao": "Designado",
        "lotacao": "Rio Largo - Fórum da Comarca de Rio Largo -  1ª Vara",
        "email": "vara1deriolargo@tjal.jus.br",
        "contato": "(82) 4009-3886",
        "observacao": "Substituto Legal: 2ª Vara da Comarca de Rio Largo, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 14 DE MAIO A 02 DE JUNHO (1º PERÍODO) E 29 DE NOVEMBRO A 18 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº"
      }
    ]
  },
  {
    "id": 55,
    "comarca": "Santa Luzia do Norte",
    "cidadeUf": "Santa Luzia do Norte-AL",
    "locais": [
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Ofício de Notas de Coqueiro Sêco",
        "endereco": "Rua João Navarro, 1281, Centro",
        "cep": "57140-000",
        "telefone": "(82) 3267-1193 / 3267-1117",
        "entrancia": "1ª entrancia"
      },
      {
        "local": "Serviços Registrais e Notariais Oficializados",
        "vara": "Ofício de Notas de Santa Luzia do Norte",
        "endereco": "Rua Amaro Romeiro, 68, Caldeireiro",
        "cep": "57130-000",
        "telefone": "(82) 3268-1214 / 3268-1170",
        "entrancia": "1ª entrancia"
      },
      {
        "local": "Fórum Deoclécio Feitosa",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Imaculada Conceição, s/n , Centro",
        "cep": "57130-000",
        "telefone": "(82) 4009-3894 / (82) 99189-1229",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "VERIDIANA OLIVEIRA DE LIMA",
        "condicao": "Titular",
        "lotacao": "Santa Luzia do Norte - Fórum Deoclécio Feitosa - Vara do Único Ofício",
        "email": "santaluzianorte@tjal.jus.br",
        "contato": "(82) 4009-3894 / (82) 99189-1229",
        "observacao": "Substituto Legal: Pilar, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 10 A 29 DE MARÇO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/128809) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/"
      },
      {
        "nome": "MÁRIO DE MEDEIROS ROCHA FILHO",
        "condicao": "Designado",
        "lotacao": "Santa Luzia do Norte - Fórum Deoclécio Feitosa - Vara do Único Ofício",
        "email": "santaluzianorte@tjal.jus.br",
        "contato": "(82) 4009-3894 / (82) 99189-1229",
        "observacao": "Substituto Legal: Pilar, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 10 A 29 DE MARÇO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/128809) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/"
      },
      {
        "nome": "GABRIEL MEIRA NOBREGA DE LIMA",
        "condicao": "Designado",
        "lotacao": "Santa Luzia do Norte - Fórum Deoclécio Feitosa - Vara do Único Ofício",
        "email": "santaluzianorte@tjal.jus.br",
        "contato": "(82) 4009-3894 / (82) 99189-1229",
        "observacao": "Substituto Legal: Pilar, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 10 A 29 DE MARÇO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/128809) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/"
      }
    ]
  },
  {
    "id": 53,
    "comarca": "Santana do Ipanema",
    "cidadeUf": "Santana do Ipanema-AL",
    "locais": [
      {
        "local": "Fórum Des. Hélio Cabral de Vasconcelos",
        "vara": "1ª Vara",
        "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
        "cep": "57500-000",
        "telefone": "(82) 3429-9282",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Des. Hélio Cabral de Vasconcelos",
        "vara": "2ª Vara",
        "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
        "cep": "57500-000",
        "telefone": "(82) 9 9302-7180, (82) 3429-9283",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Des. Hélio Cabral de Vasconcelos",
        "vara": "3ª Vara",
        "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
        "cep": "57500-000",
        "telefone": "(82) 3429-9284",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Des. Hélio Cabral de Vasconcelos",
        "vara": "Distribuição",
        "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
        "cep": "57500-000",
        "telefone": "(82) 3621-1955",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Juizado",
        "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Santana do Ipanema",
        "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
        "cep": "57500-000",
        "telefone": "(82) 3429-9285",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Des. Hélio Cabral de Vasconcelos",
        "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas)",
        "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
        "cep": "57500-000",
        "telefone": "(82) 3000-0000",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "MYLENA RIOS CAMARDELLA DA SILVEIRA",
        "condicao": "Titular",
        "lotacao": "Santana do Ipanema - Fórum Des. Hélio Cabral de Vasconcelos -  1ª Vara",
        "email": "vara1santana@tjal.jus.br",
        "contato": "(82) 3429-9282",
        "observacao": "Substituto Legal: 2ª Vara de Santana do Ipanema, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 3 A 22 DE NOVEMBRO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/102844) E 12 A 21 DE AGOSTO (2º PERÍODO ALTERADO, CONFORME PROCE"
      },
      {
        "nome": "Edivaldo Landeosi",
        "condicao": "Titular",
        "lotacao": "Santana do Ipanema - Juizado - Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Santana do Ipanema",
        "email": "jeccsantana@tjal.jus.br",
        "contato": "(82) 3429-9285",
        "observacao": "Substituto Legal: 3ª Vara de Santana do Ipanema, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***MAGISTRADO DESIGNADO PARA EXERCER AS ATRIBUIÇÕES DE DIRETOR DO FÓRUM DA COMARCA DE SANTANA DO IPANEMA (PORTARIA Nº 778, DE 22/02/2023, DISPONIBI"
      },
      {
        "nome": "FELIPE PACHECO CAVALCANTI",
        "condicao": "Titular",
        "lotacao": "Santana do Ipanema - Fórum Des. Hélio Cabral de Vasconcelos -  2ª Vara",
        "email": "vara2santana@tjal.jus.br",
        "contato": "(82) 9 9302-7180, (82) 3429-9283",
        "observacao": "Substituto Legal: 1ª Vara de Santana do Ipanema\r\n\r\n***FÉRIAS 2026: 5 A 24 DE JULHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/101669) E 15 DE JUNHO A 4 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "CHARLES DE SOUSA ALVES",
        "condicao": "Titular",
        "lotacao": "Santana do Ipanema - Fórum Des. Hélio Cabral de Vasconcelos -  3ª Vara",
        "email": "vara3santana@tjal.jus.br",
        "contato": "(82) 3429-9284",
        "observacao": "Substituto Legal: JECC de Santana do Ipanema, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E 16 DE DEZEMBRO (2º PERÍODO) -  (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO"
      },
      {
        "nome": "Edivaldo Landeosi",
        "condicao": "Designado",
        "lotacao": "Santana do Ipanema - Fórum Des. Hélio Cabral de Vasconcelos -  3ª Vara",
        "email": "vara3santana@tjal.jus.br",
        "contato": "(82) 3429-9284",
        "observacao": "Substituto Legal: JECC de Santana do Ipanema, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E 16 DE DEZEMBRO (2º PERÍODO) -  (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO"
      }
    ]
  },
  {
    "id": 45,
    "comarca": "São José da Laje",
    "cidadeUf": "São José da Laje-AL",
    "locais": [
      {
        "local": "Fórum Comendador Olympio Bezerra Filho",
        "vara": "Vara do Único Ofício",
        "endereco": "Praça Osman Costa Pino, Centro",
        "cep": "57860-000",
        "telefone": "(82) 3254-2419 / 3254-2420",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "José Alberto Ramos",
        "condicao": "Titular",
        "lotacao": "São José da Laje - Fórum Comendador Olympio Bezerra Filho - Vara do Único Ofício",
        "email": "saojosedalaje@tjal.jus.br",
        "contato": "(82) 3254-2419 / 3254-2420",
        "observacao": "Substituto Legal: Murici, conforme Resolução nº 23, de 06 de junho de 2023. \r\n\r\n***FÉRIAS 2026: 16 DE ABRIL A 5 DE MAIO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2025/124492) E 19 DE NOVEMBRO A 08 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONF"
      }
    ]
  },
  {
    "id": 47,
    "comarca": "São José da Tapera",
    "cidadeUf": "São José da Tapera-AL",
    "locais": [
      {
        "local": "Fórum Des. José Marçal Cavalcanti",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua 13 de Maio, s/n, Centro",
        "cep": "57445-000",
        "telefone": "(82) 3429-9290 / 3429-9291",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "ELIELSON DOS SANTOS PEREIRA",
        "condicao": "Titular",
        "lotacao": "São José da Tapera - Fórum Des. José Marçal Cavalcanti - Vara do Único Ofício",
        "email": "saojosedatapera@tjal.jus.br",
        "contato": "(82) 3429-9290 / 3429-9291",
        "observacao": "Substituto Legal : Piranhas,  conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 19 DE FEVEREIRO A 10 DE MARÇO (1º PERÍODO)  - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 46,
    "comarca": "São Luís do Quitunde",
    "cidadeUf": "São Luís do Quitunde-AL",
    "locais": [
      {
        "local": "Fórum Dr. José Porto Cavalcanti",
        "vara": "Vara do Único Ofício",
        "endereco": "Pr. Ernesto Gomes Maranhão, 57, Centro",
        "cep": "57920-000",
        "telefone": "(82) 3254-2400 / 3254-2401",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "RAFAEL WANDERLEY DE SIQUEIRA ARAUJO",
        "condicao": "Titular",
        "lotacao": "São Luís do Quitunde - Fórum Dr. José Porto Cavalcanti - Vara do Único Ofício",
        "email": "saoluizdoquitunde@tjal.jus.br",
        "contato": "(82) 3254-2400 / 3254-2401",
        "observacao": "Substituto Legal: Paripueira, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO DE PLANTÃO DO MAGISTRADO TITULAR, NOS DIAS 1"
      },
      {
        "nome": "Juliana Accioly Uchôa",
        "condicao": "Designado",
        "lotacao": "São Luís do Quitunde - Fórum Dr. José Porto Cavalcanti - Vara do Único Ofício",
        "email": "saoluizdoquitunde@tjal.jus.br",
        "contato": "(82) 3254-2400 / 3254-2401",
        "observacao": "Substituto Legal: Paripueira, conforme Resolução nº 23, de 06 de junho de 2023.\r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO DE PLANTÃO DO MAGISTRADO TITULAR, NOS DIAS 1"
      }
    ]
  },
  {
    "id": 48,
    "comarca": "São Miguel dos Campos",
    "cidadeUf": "São Miguel dos Campos-AL",
    "locais": [
      {
        "local": "Fórum Dr. Antônio de Moura Castro",
        "vara": "1ª Vara - Cível",
        "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3551-9383",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Antônio de Moura Castro",
        "vara": "2ª Vara - Cível",
        "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3551-9384",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Antônio de Moura Castro",
        "vara": "3ª Vara - Cível",
        "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3551-9385",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Antônio de Moura Castro",
        "vara": "4ª Vara - Criminal",
        "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3551-9386",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Antônio de Moura Castro",
        "vara": "CEJUSC - Centro Judiciário de Solução de Conflitos e Cidadania",
        "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3551-9387",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Antônio de Moura Castro",
        "vara": "Central",
        "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3000-0000",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Antônio de Moura Castro",
        "vara": "Distribuição",
        "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3551-9376",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Juizado",
        "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de São Miguel dos Campos",
        "endereco": "Rua Coronel Francisco Cavalcante, nº 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3551-9382",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. Antônio de Moura Castro",
        "vara": "Superintendência do Foro",
        "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
        "cep": "57240-000",
        "telefone": "(82) 3211-0200",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "RAUL CABUS",
        "condicao": "Titular",
        "lotacao": "São Miguel dos Campos - Fórum Dr. Antônio de Moura Castro -  2ª Vara - Cível",
        "email": "2vsaomiguelcampos@tjal.jus.br",
        "contato": "(82) 3551-9384",
        "observacao": "Substituto Legal: 1ª Vara de São Miguel dos Campos, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO) E 13 DE MAIO A 1º DE JUNHO (2º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/101892) - (PERÍODOS A"
      },
      {
        "nome": "Renata Malafaia Vianna",
        "condicao": "Titular",
        "lotacao": "São Miguel dos Campos - Fórum Dr. Antônio de Moura Castro -  3ª Vara - Cível",
        "email": "3vsaomiguelcampos@tjal.jus.br",
        "contato": "(82) 3551-9385",
        "observacao": "Substituto Legal: 2ª Vara de São Miguel dos Campos, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***MAGISTRADA DESIGNADA PARA EXERCER AS ATRIBUIÇÕES DE DIRETOR DO FÓRUM DA COMARCA DE SÃO MIGUEL DOS CAMPOS (PORTARIA Nº 1.211, DE 11/05/2023)."
      },
      {
        "nome": "Vilma Renata Jatobá De Carvalho",
        "condicao": "Titular",
        "lotacao": "São Miguel dos Campos - Juizado - Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de São Miguel dos Campos",
        "email": "jeccsmc@tjal.jus.br",
        "contato": "(82) 3551-9382",
        "observacao": "Substituto Legal: 4ª Vara de São Miguel dos Campos,  conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 12 A 31 DE MARÇO (1º PERÍODO) E 12 A 31 DE AGOSTO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      },
      {
        "nome": "ALLYSSON JORGE LIRA DE AMORIM",
        "condicao": "Titular",
        "lotacao": "São Miguel dos Campos - Fórum Dr. Antônio de Moura Castro -  4ª Vara - Criminal",
        "email": "4vsaomiguelcampos@tjal.jus.br",
        "contato": "(82) 3551-9386",
        "observacao": "Substituto Legal : JECC de São Miguel dos Campos, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***O MAGISTRADO TITULAR, FOI DESIGNADO PARA COMPOR A COMISSÃO GESTORA DO FUNDO DE MODERNIZAÇÃO DO PODER JUDICIÁRIO (FUNJURIS), NA QUALIDADE DE COO"
      },
      {
        "nome": "Renata Malafaia Vianna",
        "condicao": "Designado",
        "lotacao": "São Miguel dos Campos - Fórum Dr. Antônio de Moura Castro -  1ª Vara - Cível",
        "email": "vsmc1@tjal.jus.br",
        "contato": "(82) 3551-9383",
        "observacao": "Substituto Legal: 3ª Vara de São Miguel dos Campos, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***MAGISTRADA DESIGNADA: RENATA MALAFAIA VIANNA, PARA RESPONDER PELA 1ª VARA DA COMARCA DE SÃO MIGUEL DOS CAMPOS, EM RAZÃO DE SUA VACÂNCIA,  CONS"
      }
    ]
  },
  {
    "id": 54,
    "comarca": "São Sebastião",
    "cidadeUf": "São Sebastião-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de São Sebastião",
        "vara": "Vara do Único Ofício",
        "endereco": "RUA 07 DE SETEMBRO, S/N - EPP, Centro",
        "cep": "57275-000",
        "telefone": "(82) 3482-9584 / 3482-9585",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "BRUNA DE LEAO FIGUEIREDO CARDOSO",
        "condicao": "Titular",
        "lotacao": "São Sebastião - Fórum da Comarca de São Sebastião - Vara do Único Ofício",
        "email": "saosebastiao@tjal.jus.br",
        "contato": "(82) 3482-9584 / 3482-9585",
        "observacao": "Substituto Legal: Porto Real do Colégio, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO) E 03 A 22 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n**JUIZ SUBSTI"
      },
      {
        "nome": "Victor Valann Holanda Goes",
        "condicao": "Auxiliar",
        "lotacao": "São Sebastião - Fórum da Comarca de São Sebastião - Vara do Único Ofício",
        "email": "saosebastiao@tjal.jus.br",
        "contato": "(82) 3482-9584 / 3482-9585",
        "observacao": "Substituto Legal: Porto Real do Colégio, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO) E 03 A 22 DE NOVEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS CONFORME PROCESSO Nº 2025/126117).\r\n\r\n**JUIZ SUBSTI"
      }
    ]
  },
  {
    "id": 63,
    "comarca": "Taquarana",
    "cidadeUf": "Taquarana-AL",
    "locais": [
      {
        "local": "Forum Juiz Odilon Raimundo Maciel Marques Luz",
        "vara": "Vara de Único Ofício",
        "endereco": "LOTEAMENTO RES. ALTO DAS COLINAS, 83, Pai João",
        "cep": "57325-000",
        "telefone": "(82) 3482-9594 / 3482-9595",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "NATHALYA ATAIDE FERNANDES",
        "condicao": "Titular",
        "lotacao": "Taquarana - Forum Juiz Odilon Raimundo Maciel Marques Luz - Vara de Único Ofício",
        "email": "vuotaquarana@tjal.jus.br",
        "contato": "(82) 3482-9594 / 3482-9595",
        "observacao": "Substituto Legal: Limoeiro de Anadia, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DA TITULAR: 1º A 20 DE NOVEMBRO (1º PERÍODO SUSPENSO E APÓS REAGENDADO, CONFORME PROCESSO Nº 2026/100724) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PE"
      },
      {
        "nome": "Marcell Menezes Aquino",
        "condicao": "Auxiliar",
        "lotacao": "Taquarana - Forum Juiz Odilon Raimundo Maciel Marques Luz - Vara de Único Ofício",
        "email": "vuotaquarana@tjal.jus.br",
        "contato": "(82) 3482-9594 / 3482-9595",
        "observacao": "Substituto Legal: Limoeiro de Anadia, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DA TITULAR: 1º A 20 DE NOVEMBRO (1º PERÍODO SUSPENSO E APÓS REAGENDADO, CONFORME PROCESSO Nº 2026/100724) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PE"
      },
      {
        "nome": "Matheus de Miranda Medeiros",
        "condicao": "Designado",
        "lotacao": "Taquarana - Forum Juiz Odilon Raimundo Maciel Marques Luz - Vara de Único Ofício",
        "email": "vuotaquarana@tjal.jus.br",
        "contato": "(82) 3482-9594 / 3482-9595",
        "observacao": "Substituto Legal: Limoeiro de Anadia, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026 DA TITULAR: 1º A 20 DE NOVEMBRO (1º PERÍODO SUSPENSO E APÓS REAGENDADO, CONFORME PROCESSO Nº 2026/100724) E 02 A 21 DE AGOSTO (2º PERÍODO) - (PE"
      }
    ]
  },
  {
    "id": 56,
    "comarca": "Teotônio Vilela",
    "cidadeUf": "Teotônio Vilela-AL",
    "locais": [
      {
        "local": "Fórum da Comarca de Teotônio Vilela",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Teófilo Pereira, 555, Centro",
        "cep": "57265-000",
        "telefone": "(82) 3551-9388/3551-9389",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "RAFAEL MAIA CORREA",
        "condicao": "Titular",
        "lotacao": "Teotônio Vilela - Fórum da Comarca de Teotônio Vilela - Vara do Único Ofício",
        "email": "teotoniovilela@tjal.jus.br",
        "contato": "(82) 3551-9388/3551-9389",
        "observacao": "Substituto Legal : Junqueiro, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 04 A 23 DE MAIO (1º PERÍODO) E 26 DE NOVEMBRO A 05 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO"
      },
      {
        "nome": "ALANA MENDONCA OLIVEIRA SOBRAL",
        "condicao": "Designado",
        "lotacao": "Teotônio Vilela - Fórum da Comarca de Teotônio Vilela - Vara do Único Ofício",
        "email": "teotoniovilela@tjal.jus.br",
        "contato": "(82) 3551-9388/3551-9389",
        "observacao": "Substituto Legal : Junqueiro, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 04 A 23 DE MAIO (1º PERÍODO) E 26 DE NOVEMBRO A 05 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO"
      },
      {
        "nome": "EDUARDO LIGIERO ROCHA",
        "condicao": "Designado",
        "lotacao": "Teotônio Vilela - Fórum da Comarca de Teotônio Vilela - Vara do Único Ofício",
        "email": "teotoniovilela@tjal.jus.br",
        "contato": "(82) 3551-9388/3551-9389",
        "observacao": "Substituto Legal : Junqueiro, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 04 A 23 DE MAIO (1º PERÍODO) E 26 DE NOVEMBRO A 05 DE DEZEMBRO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117).\r\n\r\n***COMPENSAÇÃO"
      }
    ]
  },
  {
    "id": 57,
    "comarca": "Traipu",
    "cidadeUf": "Traipu-AL",
    "locais": [
      {
        "local": "Fórum da comarca de Traipu/AL",
        "vara": "Vara do Único Ofício",
        "endereco": "Ed. Des. Gerson Omena Bezerra - Rua 22, s/n, Conjunto Habitacional Antônio Medeiros Neto, Centro",
        "cep": "57370-000",
        "telefone": "(82) 3482-9582 / 3482-9583",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "JONATHAN PABLO ARAÚJO",
        "condicao": "Titular",
        "lotacao": "Traipu - Fórum da comarca de Traipu/AL - Vara do Único Ofício",
        "email": "traipu@tjal.jus.br",
        "contato": "(82) 3482-9582 / 3482-9583",
        "observacao": "Substituto Legal: Girau do Ponciano, conforme resolução nº 10, de 24 de abril de 2018.\r\n\r\n***FÉRIAS 2026: 02 A 21 DE MARÇO (1º PERÍODO) E 11 A 30 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME O PROCESSO Nº 2025/126117).\r\n\r\n***MAGISTRADO TITUL"
      }
    ]
  },
  {
    "id": 58,
    "comarca": "União dos Palmares",
    "cidadeUf": "União dos Palmares-AL",
    "locais": [
      {
        "local": "Fórum Dr. José César Sobrinho",
        "vara": "1ª Vara",
        "endereco": "Av. Padre Donald, s/n, Cohab Velha",
        "cep": "57800-000",
        "telefone": "(82) 3281-2260",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. José César Sobrinho",
        "vara": "2ª Vara",
        "endereco": "Av. Padre Donald, s/n, Cohab Velha",
        "cep": "57800-000",
        "telefone": "(82) 3281-1866",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. José César Sobrinho",
        "vara": "3ª Vara Criminal",
        "endereco": "Av. Padre Donald, s/n, Cohab Velha",
        "cep": "57800-000",
        "telefone": "(82) 3281-2250",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. José César Sobrinho",
        "vara": "Cartório de Distribuição",
        "endereco": "Av. Padre Donald, s/n, Cohab Velha",
        "cep": "57800-000",
        "telefone": "(82) 3281-2250",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Juizado",
        "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de União dos Palmares",
        "endereco": "BR-104, 45, Nao informado",
        "cep": "57800-000",
        "telefone": "(82)  3254 – 2412 / 3254 – 2414",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. José César Sobrinho",
        "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas)",
        "endereco": "Av. Padre Donald, s/n, Cohab Velha",
        "cep": "57800-000",
        "telefone": "(82) 3000-0000",
        "entrancia": "2ª entrancia"
      },
      {
        "local": "Fórum Dr. José César Sobrinho",
        "vara": "Turma Recursal da 6ª Região",
        "endereco": "Distrito Industrial Floriano Rosa, BR 104 , Km 36, Nao informado",
        "cep": "57800-000",
        "telefone": "(82) 99122-4271",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "LIGIA MONT ALVERNE JUCA SEABRA",
        "condicao": "Titular",
        "lotacao": "União dos Palmares - Juizado - Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de União dos Palmares",
        "email": "jeccuniaopalmares@tjal.jus.br",
        "contato": "(82)  3254 – 2412 / 3254 – 2414",
        "observacao": "Substituto Legal: 1ª Vara da Comarca de União dos Palmares, conforme Resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***MAGISTRADA SUPERINTENDENTE-DIRETORA DO FÓRUM DO JUIZADO DA COMARCA DE UNIÃO DOS PALMARES, CONFORME PORTARIA Nº 1678, DE 5 DE AGOSTO D"
      },
      {
        "nome": "Lisandro Suassuna De Oliveira",
        "condicao": "Titular",
        "lotacao": "União dos Palmares - Fórum Dr. José César Sobrinho -  3ª Vara Criminal",
        "email": "3varauniaopalmares@tjal.jus.br",
        "contato": "(82) 3281-2250",
        "observacao": "Substituto Legal: 2ª Vara da Comarca de União dos Palmares, conforme Resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***FÉRIAS 2026: 05 A 24 DE JANEIRO (1º PERÍODO) ."
      },
      {
        "nome": "DOUGLAS BECKHAUSER DE FREITAS",
        "condicao": "Titular",
        "lotacao": "União dos Palmares - Fórum Dr. José César Sobrinho -  1ª Vara",
        "email": "vara1uniao@tjal.jus.br",
        "contato": "(82) 3281-2260",
        "observacao": "Substituto Legal: Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher da Comarca de União dos Palmares, conforme Resolução nº 35, de 13/08/2024.\r\n\r\n***FÉRIAS 2026: 04 A 13 DE MAIO (1º PERÍODO) - (PERÍODOS ALTERADOS C"
      },
      {
        "nome": "VINICIUS AUGUSTO DE SOUZA ARAUJO",
        "condicao": "Titular",
        "lotacao": "União dos Palmares - Fórum Dr. José César Sobrinho -  2ª Vara",
        "email": "vara2uniao@tjal.jus.br",
        "contato": "(82) 3281-1866",
        "observacao": "Substituto Legal: 3ª Vara da Comarca de União dos Palmares, conforme Resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***FÉRIAS 2026: 2 A 21 DE JUNHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103091) E 19 DE JULHO A 7 DE AGOSTO (2º PERÍODO ALTERADO"
      },
      {
        "nome": "Lisandro Suassuna De Oliveira",
        "condicao": "Designado",
        "lotacao": "União dos Palmares - Fórum Dr. José César Sobrinho -  2ª Vara",
        "email": "vara2uniao@tjal.jus.br",
        "contato": "(82) 3281-1866",
        "observacao": "Substituto Legal: 3ª Vara da Comarca de União dos Palmares, conforme Resolução nº 35, de 13 de agosto de 2024.\r\n\r\n***FÉRIAS 2026: 2 A 21 DE JUNHO (1º PERÍODO ALTERADO, CONFORME PROCESSO Nº 2026/103091) E 19 DE JULHO A 7 DE AGOSTO (2º PERÍODO ALTERADO"
      }
    ]
  },
  {
    "id": 59,
    "comarca": "Viçosa",
    "cidadeUf": "Viçosa-AL",
    "locais": [
      {
        "local": "Fórum Des. Oscar Tenório",
        "vara": "Vara do Único Ofício",
        "endereco": "Rua Francisco Bahia, 10, Centro",
        "cep": "57700-000",
        "telefone": "(82) 3254-2421 / 3254-2422",
        "entrancia": "2ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Juliana Batistela Guimarães de Alencar",
        "condicao": "Titular",
        "lotacao": "Viçosa - Fórum Des. Oscar Tenório - Vara do Único Ofício",
        "email": "vicosa@tjal.jus.br",
        "contato": "(82) 3254-2421 / 3254-2422",
        "observacao": "Substituto Legal : Comarca de Cajueiro, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 15 DE JANEIRO A 03 DE FEVEREIRO (1º PERÍODO) E 02 A 11 DE JULHO (2º PERÍODO) - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  },
  {
    "id": 3,
    "comarca": "Água Branca",
    "cidadeUf": "Água Branca-AL",
    "locais": [
      {
        "local": "Fórum Miguel Arcanjo de Cerqueira Torres",
        "vara": "Vara do Único Ofício",
        "endereco": "R. Barão de Água Branca, 1-403, Centro",
        "cep": "57490-000",
        "telefone": "(82) 3429-9280 / 3429-9281",
        "entrancia": "1ª entrancia"
      }
    ],
    "magistrados": [
      {
        "nome": "Marcos Vinicius Linhares Constantino da Silva",
        "condicao": "Titular",
        "lotacao": "Água Branca - Fórum Miguel Arcanjo de Cerqueira Torres - Vara do Único Ofício",
        "email": "aguabranca@tjal.jus.br",
        "contato": "(82) 3429-9280 / 3429-9281",
        "observacao": "Substituto Legal : Mata Grande, conforme resolução nº 10, de 24 de abril de 2018. \r\n\r\n***FÉRIAS 2026: 05 A 24 DE MARÇO (1º PERÍODO)  - (PERÍODOS ALTERADOS, CONFORME PROCESSO Nº 2025/126117)."
      }
    ]
  }
];

export const TJAL_COMARCAS_DATABASE: TjalVaraEntry[] = [
  {
    "id": "tjal-2-0-anadia",
    "comarca": "Anadia",
    "vara": "Vara do Único Ofício de Anadia",
    "local": "Fórum da Comarca de Anadia",
    "endereco": "AV. PRES. JOSÉ SARNEI SN, Centro",
    "cep": "57660-000",
    "telefone": "(82) 3482-9561 / 3482-9562",
    "cidadeUf": "Anadia-AL",
    "email": "anadia@tjal.jus.br",
    "juizPresidentePadrao": "Dr. ANNA CELINA DE OLIVEIRA NUNES ASSIS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-2-1-anadia",
    "comarca": "Anadia",
    "vara": "Vara do Único Ofício de Anadia",
    "local": "Fórum Ernande Carvalho",
    "endereco": "Rua da Olaria, S/N, Centro",
    "cep": "57260-000",
    "telefone": "(82) 3482-9586 / 3482-9587",
    "cidadeUf": "Anadia-AL",
    "email": "anadia@tjal.jus.br",
    "juizPresidentePadrao": "Dr. ANNA CELINA DE OLIVEIRA NUNES ASSIS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-0-arapiraca",
    "comarca": "Arapiraca",
    "vara": "2ª Região de Arapiraca",
    "local": "Turma Recursal",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9575",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara2arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Luciana Josué Raposo Lima Dias",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-1-arapiraca",
    "comarca": "Arapiraca",
    "vara": "10ª Vara da Comarca de Arapiracal - Família e Sucessões",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9511",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-2-arapiraca",
    "comarca": "Arapiraca",
    "vara": "1ª Vara da Comarca de Arapiraca - Infância, Juventude e Crimes Praticados contra Criança e Adolescente",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-5281",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-3-arapiraca",
    "comarca": "Arapiraca",
    "vara": "1º JUIZADO ESPECIAL CÍVEL DE ARAPIRACA",
    "local": "1º Juizado",
    "endereco": "Av. Deputada Ceci Cunha, 127, Alto do Cruzeiro",
    "cep": "57312-485",
    "telefone": "(82) 3482-9580",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-4-arapiraca",
    "comarca": "Arapiraca",
    "vara": "2ª Vara da Comarca de Arapiraca - Cível Residual",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9521",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara2arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Luciana Josué Raposo Lima Dias",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-5-arapiraca",
    "comarca": "Arapiraca",
    "vara": "2º Juizado Especial Cível de Arapiraca",
    "local": "2º Juizado",
    "endereco": "Rua Samaritana, 190, Complexo Integrado de Justiça Especializada , Santa Edwirges",
    "cep": "57300-495",
    "telefone": "(82) 3482-9581",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-6-arapiraca",
    "comarca": "Arapiraca",
    "vara": "3ª Vara da Comarca de Arapiraca - Cível Residual",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9519",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara3arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Filipe Ferreira Munguba",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-7-arapiraca",
    "comarca": "Arapiraca",
    "vara": "4ª Vara da Comarca de Arapiraca - 1 Fazenda Pública - Estadual e Municipal",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9524",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara4arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Laila Kerckhoff dos Santos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-8-arapiraca",
    "comarca": "Arapiraca",
    "vara": "5ª Vara da Comarca de Arapiraca - Criminal",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9517",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-9-arapiraca",
    "comarca": "Arapiraca",
    "vara": "6ª Vara da Comarca de Arapiraca - Cível Residual",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9547",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-10-arapiraca",
    "comarca": "Arapiraca",
    "vara": "7ª Vara da Comarca de Arapiraca - Família e Sucessões",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9514",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-11-arapiraca",
    "comarca": "Arapiraca",
    "vara": "8ª Vara da Comarca de Arapiraca - Cível Residual",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9516",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-12-arapiraca",
    "comarca": "Arapiraca",
    "vara": "9ª Vara da Comarca de Arapiraca - Criminal e Execuções Penais",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9526",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-13-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Cartório do Registro Civil de Pessoas Naturais de Canaã de Arapiraca",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Praça Antônio Juvino da Silva, 101, Centro, Centro",
    "cep": "57610-200",
    "telefone": "(82) 3521-2304",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-14-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Cartório do Registro Civil de Pessoas Naturais de Folha Miúda de Arapiraca",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Rua do Comércio, 10 , Povoado Folha Miúda",
    "cep": "57320-000",
    "telefone": "(82) 3721-1139",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-15-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Cartório do Único Ofício de Craíbas de Arapiraca",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Rua Pedro Gama, 10, Centro",
    "cep": "57320-000",
    "telefone": "(82) 3521-1160",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-16-arapiraca",
    "comarca": "Arapiraca",
    "vara": "CEJUSC - Centro Judiciário de Solução de Conflitos e Cidadania de Arapiraca",
    "local": "CEJUSC",
    "endereco": "Rua Gov. Silvestre Péricles, Jardim Tropical",
    "cep": "57316-065",
    "telefone": "(82)  3482-9598 / 3482-9599",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-17-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Central de Mandados de Arapiraca",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9500",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-18-arapiraca",
    "comarca": "Arapiraca",
    "vara": "CPD - Arapiraca",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9508",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-19-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Direção do Forum de Arapiraca",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9502",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-20-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Distribuição de Arapiraca",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9503",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-21-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Juizado Especial Criminal e da Violência Doméstica de Arapiraca/AL",
    "local": "Juizado da Mulher",
    "endereco": "Rua Samaritana, 160,  Ed. Juiz Pedro Medeiros Pereira, Complexo Integrado de Justiça Especializada Des. Paulo da Rocha Mendes, Santa Edwirges",
    "cep": "57310-245",
    "telefone": "(82) 3482-9574",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-22-arapiraca",
    "comarca": "Arapiraca",
    "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas) de Arapiraca",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9509",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-23-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Núcleo Técnico Regional de Arapiraca",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-24-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Postagem de Arapiraca",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9553",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-4-25-arapiraca",
    "comarca": "Arapiraca",
    "vara": "Superintendência de Arapiraca",
    "local": "Fórum Des. João Oliveira e Silva",
    "endereco": "Rua Samaritana, 190,  Complexo Integrado de Justiça Especializada, Santa Edwirgens",
    "cep": "57311-180",
    "telefone": "(82) 3482-9501",
    "cidadeUf": "Arapiraca-AL",
    "email": "vara1arapiraca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Anderson Santos dos Passos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-15-0-atalaia",
    "comarca": "Atalaia",
    "vara": "Vara do Único Ofício de Atalaia",
    "local": "Fórum José Jerônimo de Albuquerque",
    "endereco": "Lot. Santa Inês, 610 - AL-210, José Paulino",
    "cep": "57690-000",
    "telefone": "(82) 4009-3895",
    "cidadeUf": "Atalaia-AL",
    "email": "atalaia@tjal.jus.br",
    "juizPresidentePadrao": "Dr. João Paulo Alexandre dos Santos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-16-0-batalha",
    "comarca": "Batalha",
    "vara": "Vara do Único Ofício de Batalha",
    "local": "Fórum da Comarca de Batalha",
    "endereco": "Rua Antero Costa, 2-24, Centro",
    "cep": "57420-000",
    "telefone": "(82) 3429-9298 / 3429-9299",
    "cidadeUf": "Batalha-AL",
    "email": "batalha@tjal.jus.br",
    "juizPresidentePadrao": "Dr. DIEGO CADORE PEDROSO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-17-0-boca-da-mata",
    "comarca": "Boca da Mata",
    "vara": "Vara do Único Ofício de Boca da Mata",
    "local": "Fórum Des. Moura Castro",
    "endereco": "AL 215, S/N, Centro",
    "cep": "57680-000",
    "telefone": "(82) 3551-9390 / 3551-9391",
    "cidadeUf": "Boca da Mata-AL",
    "email": "bocadamata@tjal.jus.br",
    "juizPresidentePadrao": "Dr. PATRICIA SIQUEIRA DE FREITAS CURVELO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-8-0-cacimbinhas",
    "comarca": "Cacimbinhas",
    "vara": "Vara do Único Ofício de Cacimbinhas",
    "local": "Fórum ADVOGADO ALFREDO DE MAYA",
    "endereco": "AVENIDA NOSSA SENHORA DA PENHA Nº 437, Centro - 575570-000",
    "cep": "57000-000",
    "telefone": "(82) 3429-9296 / 3429-9297",
    "cidadeUf": "Cacimbinhas-AL",
    "email": "cacimbinhas@tjal.jus.br",
    "juizPresidentePadrao": "Dr. ROBERIO MONTEIRO DE SOUZA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-7-0-cajueiro",
    "comarca": "Cajueiro",
    "vara": "Vara do Único Ofício de Cajueiro",
    "local": "Fórum Des. Horacio Gomes de Melo",
    "endereco": "AV. Antônio Jorge de Melo, S/N, Centro",
    "cep": "57770-000",
    "telefone": "(82) 3254 - 2427",
    "cidadeUf": "Cajueiro-AL",
    "email": "cajueiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. MAYARA LIMA ROCHA MACEDO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-9-0-campo-alegre",
    "comarca": "Campo Alegre",
    "vara": "Vara do Único Ofício de Campo Alegre",
    "local": "Fórum Dr. Olival Tenório Costa",
    "endereco": "Av. Governador Divaldo Suruagy, 284, Centro",
    "cep": "57250-000",
    "telefone": "(82) 3482-9563 / 3482-9564",
    "cidadeUf": "Campo Alegre-AL",
    "email": "campoalegre@tjal.jus.br",
    "juizPresidentePadrao": "Dr. EMANUEL DE ANDRADE BARBOSA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-18-0-capela",
    "comarca": "Capela",
    "vara": "Vara do Único Ofício de Capela",
    "local": "Fórum Des. José Xisto Gomes de Melo",
    "endereco": "Rua Inácio Moraes, sn, Centro",
    "cep": "57780-000",
    "telefone": "(82) 3254-2425 /  3254-2426",
    "cidadeUf": "Capela-AL",
    "email": "vara1capela@tjal.jus.br",
    "juizPresidentePadrao": "Dr. André Luis Parizio Maia Paiva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-11-0-colônia-leopodi",
    "comarca": "Colônia Leopodina",
    "vara": "Vara do Único Ofício de Colônia Leopodina",
    "local": "Fórum da Comarca de Colônia Leopodina",
    "endereco": "Fórum da Comarca de Colônia Leopodina, Centro",
    "cep": "57000-000",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Colônia Leopodina-AL",
    "email": "colonialeopoldina@tjal.jus.br",
    "juizPresidentePadrao": "Dr. CAIO NUNES DE BARROS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-12-0-coruripe",
    "comarca": "Coruripe",
    "vara": "1º Vara de Coruripe",
    "local": "Fórum da Comarca de Coruripe",
    "endereco": "Av. Luis Lima Beltrão,  Cj. Comendador Tércio Wanderley, Rodovia AL 101 Sul, Nao informado",
    "cep": "57230-000",
    "telefone": "(82) 3551-9392 / 3551-9393",
    "cidadeUf": "Coruripe-AL",
    "email": "vara1coruripe@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Mauro Baldini",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-12-1-coruripe",
    "comarca": "Coruripe",
    "vara": "2º Vara de Coruripe",
    "local": "Fórum da Comarca de Coruripe",
    "endereco": "Av. Luis Lima Beltrão,  Cj. Comendador Tércio Wanderley, Rodovia AL 101 Sul, Nao informado",
    "cep": "57230-000",
    "telefone": "(82) 3551-9392 / 3551-9393",
    "cidadeUf": "Coruripe-AL",
    "email": "vara1coruripe@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Mauro Baldini",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-12-2-coruripe",
    "comarca": "Coruripe",
    "vara": "Assuntos Concernentes ao Processo de Falência da Laginha Agroindustrial S/A de Coruripe",
    "local": "Fórum da Comarca de Coruripe",
    "endereco": "TRAVESSA JOSE LEAO 76, Centro",
    "cep": "57820-000",
    "telefone": "(82) 3551-9392 / 3551-9393",
    "cidadeUf": "Coruripe-AL",
    "email": "vara1coruripe@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Mauro Baldini",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-12-3-coruripe",
    "comarca": "Coruripe",
    "vara": "Distribuição de Coruripe",
    "local": "Fórum da Comarca de Coruripe",
    "endereco": "Av. Luis Lima Beltrão,  Cj. Comendador Tércio Wanderley, Rodovia AL 101 Sul, Nao informado",
    "cep": "57230-000",
    "telefone": "(82) 3551-9392 / 3551-9393",
    "cidadeUf": "Coruripe-AL",
    "email": "vara1coruripe@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Mauro Baldini",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-12-4-coruripe",
    "comarca": "Coruripe",
    "vara": "Registro Civil de Pessoas Naturais de Poxim de Coruripe",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Rua São José, 101, Centro, Poxim",
    "cep": "57230-000",
    "telefone": "(82) 3722-1103 / 3722-1102",
    "cidadeUf": "Coruripe-AL",
    "email": "vara1coruripe@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Mauro Baldini",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-13-0-delmiro-gouveia",
    "comarca": "Delmiro Gouveia",
    "vara": "1ª Vara de Delmiro Gouveia",
    "local": "Fórum Dr. Walter Cavalcanti Veloso",
    "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
    "cep": "57480-000",
    "telefone": "(82) 3429-9286",
    "cidadeUf": "Delmiro Gouveia-AL",
    "email": "vara1delmiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Jéssica Lourenço de Sá Santos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-13-1-delmiro-gouveia",
    "comarca": "Delmiro Gouveia",
    "vara": "2ª Vara de Delmiro Gouveia",
    "local": "Fórum Dr. Walter Cavalcanti Veloso",
    "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
    "cep": "57480-000",
    "telefone": "(82) 3429-9287",
    "cidadeUf": "Delmiro Gouveia-AL",
    "email": "vara2delmiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Jéssica Lourenço de Sá Santos",
    "juizCargoPadrao": "Juiz de Direito (Designado)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-13-2-delmiro-gouveia",
    "comarca": "Delmiro Gouveia",
    "vara": "Cartório do Registro Civil de Pessoas Naturais de Barragem Leste de Delmiro Gouveia",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Conj. Rui Palmeira, n61 Qd. B, Cohab Velha",
    "cep": "57480-000",
    "telefone": "(82) 3261-1586",
    "cidadeUf": "Delmiro Gouveia-AL",
    "email": "jeccdelmiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Raquel David Torres de Oliveira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-13-3-delmiro-gouveia",
    "comarca": "Delmiro Gouveia",
    "vara": "Cartório do Registro Civil de Pessoas Naturais de Lagoinha de Delmiro Gouveia",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Rua Pedro II, n200, Lagoinha",
    "cep": "57480-000",
    "telefone": "(82) 3641-1179",
    "cidadeUf": "Delmiro Gouveia-AL",
    "email": "jeccdelmiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Raquel David Torres de Oliveira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-13-4-delmiro-gouveia",
    "comarca": "Delmiro Gouveia",
    "vara": "Direção do Fórum de Delmiro Gouveia",
    "local": "Fórum Dr. Walter Cavalcanti Veloso",
    "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
    "cep": "57480-000",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Delmiro Gouveia-AL",
    "email": "jeccdelmiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Raquel David Torres de Oliveira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-13-5-delmiro-gouveia",
    "comarca": "Delmiro Gouveia",
    "vara": "Distribuição de Delmiro Gouveia",
    "local": "Fórum Dr. Walter Cavalcanti Veloso",
    "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
    "cep": "57480-000",
    "telefone": "(82) 3641-1028",
    "cidadeUf": "Delmiro Gouveia-AL",
    "email": "jeccdelmiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Raquel David Torres de Oliveira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-13-6-delmiro-gouveia",
    "comarca": "Delmiro Gouveia",
    "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Delmiro Gouveia",
    "local": "Juizado",
    "endereco": "Av.  José Oliveira Rocha, S/N, Bairro Novo",
    "cep": "57480-000",
    "telefone": "(82) 3429-9288",
    "cidadeUf": "Delmiro Gouveia-AL",
    "email": "jeccdelmiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Raquel David Torres de Oliveira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-13-7-delmiro-gouveia",
    "comarca": "Delmiro Gouveia",
    "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas) de Delmiro Gouveia",
    "local": "Fórum Dr. Walter Cavalcanti Veloso",
    "endereco": "Av. José Oliveira Rocha, sn, Bairro Novo",
    "cep": "57480-000",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Delmiro Gouveia-AL",
    "email": "jeccdelmiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Raquel David Torres de Oliveira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-60-0-feira-grande",
    "comarca": "Feira Grande",
    "vara": "Registro Civil de Pessoas Naturais de Massapê de Feira Grande",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "R. Virgiliana Ribeiro Gonçalves, 437, São Luiz",
    "cep": "57340-000",
    "telefone": "(82) 3521-1537",
    "cidadeUf": "Feira Grande-AL",
    "email": "feiragrande@tjal.jus.br",
    "juizPresidentePadrao": "Dr. DARLAN SOARES SOUZA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-60-1-feira-grande",
    "comarca": "Feira Grande",
    "vara": "Registro de Imóveis e Notas de Lagoa da Canoa de Feira Grande",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Praça Vereador Benício Alves, 62, Centro",
    "cep": "57330-000",
    "telefone": "(82) 3528-1171 / 3528 -2260",
    "cidadeUf": "Feira Grande-AL",
    "email": "feiragrande@tjal.jus.br",
    "juizPresidentePadrao": "Dr. DARLAN SOARES SOUZA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-60-2-feira-grande",
    "comarca": "Feira Grande",
    "vara": "Vara do Único Ofício de Feira Grande",
    "local": "Fórum Dr. Ivan Vasconcelos Brito",
    "endereco": "Rua Virgilia Ribeiro Gonçalves, 437, Centro",
    "cep": "57340-000",
    "telefone": "(82) 3482-9592/ 3482-9593",
    "cidadeUf": "Feira Grande-AL",
    "email": "feiragrande@tjal.jus.br",
    "juizPresidentePadrao": "Dr. DARLAN SOARES SOUZA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-14-0-girau-do-poncia",
    "comarca": "Girau do Ponciano",
    "vara": "Vara do Único Ofício de Girau do Ponciano",
    "local": "Fórum Des. José Marçal Cavalvanti",
    "endereco": "Rua Serventuário Gilberto Matias Da Silva, 47, Progresso",
    "cep": "57360-000",
    "telefone": "(82) 3482-9597",
    "cidadeUf": "Girau do Ponciano-AL",
    "email": "giraudoponciano@tjal.jus.br",
    "juizPresidentePadrao": "Dr. NATALIA CERQUEIRA DE CASTRO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-6-0-igaci",
    "comarca": "Igaci",
    "vara": "Vara do Único Ofício de Igaci",
    "local": "Fórum Des. Eraldo de Castro Vasconcelos",
    "endereco": "Rua Prefeito Lourenço Ferreira,  740, Centro",
    "cep": "57620-000",
    "telefone": "(82) 3482-9590 / 3482-9591",
    "cidadeUf": "Igaci-AL",
    "email": "igaci@tjal.jus.br",
    "juizPresidentePadrao": "Dr. EVALDO DA CUNHA MACHADO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-49-0-igreja-nova",
    "comarca": "Igreja Nova",
    "vara": "Vara do Único Ofício de Igreja Nova",
    "local": "Fórum da Cormarca de Igreja Nova",
    "endereco": "Av. 16 de maio, sn, Nao informado",
    "cep": "57280-970",
    "telefone": "(82) 3551-9396/ 3551-9397",
    "cidadeUf": "Igreja Nova-AL",
    "email": "igrejanova@tjal.jus.br",
    "juizPresidentePadrao": "Dr. LUIS FILLIPE DE GODOI TRINO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-51-0-joaquim-gomes",
    "comarca": "Joaquim Gomes",
    "vara": "Vara do Único Ofício de Joaquim Gomes",
    "local": "Fórum Dr. Frederico George Brotherhood de Medeiros",
    "endereco": "ROD PREFEITO OSMÁRIO GOMES, SN, Centro",
    "cep": "57980-000",
    "telefone": "(82) 3254-2415 / 3254-2416",
    "cidadeUf": "Joaquim Gomes-AL",
    "email": "joaquimgomes@tjal.jus.br",
    "juizPresidentePadrao": "Dr. ANTÔNIO IRIS DA COSTA JÚNIOR",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-50-0-junqueiro",
    "comarca": "Junqueiro",
    "vara": "Vara do Único Ofício de Junqueiro",
    "local": "Fórum João Malta Tavares",
    "endereco": "Rua Frei Pascasio, s/n, Centro",
    "cep": "57270-000",
    "telefone": "(82) 3482-9588 / 3482-9589",
    "cidadeUf": "Junqueiro-AL",
    "email": "junqueiro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. EDUARDO LIGIERO ROCHA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-52-0-limoeiro-de-ana",
    "comarca": "Limoeiro de Anadia",
    "vara": "Vara do Único Ofício de Limoeiro de Anadia",
    "local": "Fórum da Comarca de Anadia",
    "endereco": "AV. PRES. JOSÉ SARNEI SN, Centro",
    "cep": "57660-000",
    "telefone": "(82) 3482-9561 / 3482-9562",
    "cidadeUf": "Limoeiro de Anadia-AL",
    "email": "limoeirodeanadia@tjal.jus.br",
    "juizPresidentePadrao": "Dr. JOSE IVAN MELO DOS SANTOS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-52-1-limoeiro-de-ana",
    "comarca": "Limoeiro de Anadia",
    "vara": "Vara do Único Ofício de Limoeiro de Anadia",
    "local": "Fórum Ernande Carvalho",
    "endereco": "Rua da Olaria, S/N, Centro",
    "cep": "57260-000",
    "telefone": "(82) 3482-9586 / 3482-9587",
    "cidadeUf": "Limoeiro de Anadia-AL",
    "email": "limoeirodeanadia@tjal.jus.br",
    "juizPresidentePadrao": "Dr. JOSE IVAN MELO DOS SANTOS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-0-maceió",
    "comarca": "Maceió",
    "vara": "1ª Câmara Cível de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel1@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marcli Guimarães de Aguiar",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-1-maceió",
    "comarca": "Maceió",
    "vara": "1ª Região de Maceió",
    "local": "Turma Recursal",
    "endereco": "Rodovia João Paulo II, s/n, Feitosa",
    "cep": "57041-970",
    "telefone": "(82) 2126-9832 (ATENDIMENTO), (82) 2126-9833 (SECRETARIA), (82) 2126-9836 (COPA), (82) 2126-9839 (GABINETE 1), (82) 2126-9840 (GABINETE 2), (82) 2126-9841 (GABINETE 3)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel1@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marcli Guimarães de Aguiar",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-2-maceió",
    "comarca": "Maceió",
    "vara": "1ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3507 (CARTÓRIO), (82) 4009-3607 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel1@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marcli Guimarães de Aguiar",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-3-maceió",
    "comarca": "Maceió",
    "vara": "2ª Câmara Cível de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "vcivelfnp2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Pedro Ivens Simões de França",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-4-maceió",
    "comarca": "Maceió",
    "vara": "2ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3567 (CARTÓRIO), (82) 4009-3608 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivelfnp2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Pedro Ivens Simões de França",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-5-maceió",
    "comarca": "Maceió",
    "vara": "3ª Câmara Cível de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3268",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel3@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Henrique Gomes de Barros Teixeira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-6-maceió",
    "comarca": "Maceió",
    "vara": "3ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3509 (CARTÓRIO), (82) 4009-3609 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel3@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Henrique Gomes de Barros Teixeira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-7-maceió",
    "comarca": "Maceió",
    "vara": "3ª Vara Criminal da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3529 (ATENDIMENTO), (82) 4009-3633 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel3@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Henrique Gomes de Barros Teixeira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-8-maceió",
    "comarca": "Maceió",
    "vara": "4ª Câmara Cível de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3015, (82) 4009-3016",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel4@tjal.jus.br",
    "juizPresidentePadrao": "Dr. José Cícero Alves da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-9-maceió",
    "comarca": "Maceió",
    "vara": "4ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3510 (CARTÓRIO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel4@tjal.jus.br",
    "juizPresidentePadrao": "Dr. José Cícero Alves da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-10-maceió",
    "comarca": "Maceió",
    "vara": "4ª Vara Criminal da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3530 (CARTÓRIO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel4@tjal.jus.br",
    "juizPresidentePadrao": "Dr. José Cícero Alves da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-11-maceió",
    "comarca": "Maceió",
    "vara": "5ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3511 (CARTÓRIO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-12-maceió",
    "comarca": "Maceió",
    "vara": "6ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3512 (CARTÓRIO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-13-maceió",
    "comarca": "Maceió",
    "vara": "6ª Vara Criminal da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3677 (CARTÓRIO), (82) 4009-3632 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-14-maceió",
    "comarca": "Maceió",
    "vara": "7ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3513 (CARTÓRIO), (82) 4009-3613(GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-15-maceió",
    "comarca": "Maceió",
    "vara": "7ª Vara Criminal da Capital Tribunal do Júri de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3712 (CARTÓRIO), (82) 4009-3631 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-16-maceió",
    "comarca": "Maceió",
    "vara": "8ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3514 (CARTÓRIO), (82) 4009-3614 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-17-maceió",
    "comarca": "Maceió",
    "vara": "8ª Vara Criminal da Capital Tribunal do Júri de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3534 (ATENDIMENTO), (82) 4009-3634 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-18-maceió",
    "comarca": "Maceió",
    "vara": "9ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3515 (CARTÓRIO), (82) 4009-3615 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-19-maceió",
    "comarca": "Maceió",
    "vara": "9ª Vara Criminal da Capital Tribunal do Júri de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3595 (CARTÓRIO), (82) 4009-3695 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-20-maceió",
    "comarca": "Maceió",
    "vara": "10ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3579 (ASESSORIA), (82) 4009-3516 (CARTÓRIO), (82) 4009-3687 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-21-maceió",
    "comarca": "Maceió",
    "vara": "10ª Vara Criminal da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3537(CARTÓRIO), (82) 4009-3637 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-22-maceió",
    "comarca": "Maceió",
    "vara": "10º Juizado Especial Cível da Capital de Maceió",
    "local": "Fórum Regional do Benedito Bentes",
    "endereco": "R. Jussara, Benedito Bentes",
    "cep": "57084-800",
    "telefone": "(82) 4009-3578",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-23-maceió",
    "comarca": "Maceió",
    "vara": "11ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3531 (ASSESSORIA), (82) 4009-3517 (CARTÓRIO), (82) 4009-3617 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel1@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marcli Guimarães de Aguiar",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-24-maceió",
    "comarca": "Maceió",
    "vara": "11ª Vara Criminal - Entorpecentes de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3593 (CARTÓRIO), (82) 4009-3643 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel1@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marcli Guimarães de Aguiar",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-25-maceió",
    "comarca": "Maceió",
    "vara": "11º Juizado Especial Cível da Capital de Maceió",
    "local": "11º Juizado",
    "endereco": "Terminal Rodoviário João Paulo II – 1º  Piso, Feitosa",
    "cep": "57043-000",
    "telefone": "(82) 2126-9813, (82) 2126-9815,(82) 99107-4845",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-26-maceió",
    "comarca": "Maceió",
    "vara": "12ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3502 (CARTÓRIO - ATENDIMENTO), (82) 4009-3583 (CARTÓRIO), (82) 4009-3602 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivelfnp2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Pedro Ivens Simões de França",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-27-maceió",
    "comarca": "Maceió",
    "vara": "12ª Vara Criminal da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3722 (ATENDIMENTO), (82) 4009-3527 (CARTÓRIO), (82) 4009-3627 (GABINETE DO MAGISTRADO), (82) 4009-3726 (AUDIÊNCIA)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivelfnp2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Pedro Ivens Simões de França",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-28-maceió",
    "comarca": "Maceió",
    "vara": "13ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3501 (CARTÓRIO), (82) 4009-3601 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel3@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Henrique Gomes de Barros Teixeira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-29-maceió",
    "comarca": "Maceió",
    "vara": "13ª Vara Criminal da Capital Auditoria Militar de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3538 (CARTÓRIO), (82) 4009-3704 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel3@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Henrique Gomes de Barros Teixeira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-30-maceió",
    "comarca": "Maceió",
    "vara": "14ª Vara Cível da Capital Fazenda Municipal de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3523 (CARTÓRIO), (82) 4009-3556 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel4@tjal.jus.br",
    "juizPresidentePadrao": "Dr. José Cícero Alves da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-31-maceió",
    "comarca": "Maceió",
    "vara": "14ª Vara Criminal da Capital - Crime Contra Menor/Idoso/Deficiente e Vulnerável de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3577 (CARTÓRIO), (82) 4009-3574 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel4@tjal.jus.br",
    "juizPresidentePadrao": "Dr. José Cícero Alves da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-32-maceió",
    "comarca": "Maceió",
    "vara": "15ª Vara Cível da Capital Fazenda Municipal de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3663 (ATENDIMENTO), (82) 4009-3713 (ASSESSORIA), (82) 4009-3524 (CARTÓRIO), (82) 4009-3572 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-33-maceió",
    "comarca": "Maceió",
    "vara": "15ª Vara Criminal da Capital Juizado de Entorpecentes de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3661 (CARTÓRIO), (82) 4009-3668 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-34-maceió",
    "comarca": "Maceió",
    "vara": "16ª Vara Cível da Capital Fazenda Estadual de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3506 (ATENDIMENTO), (82) 4009-3673 (CHEFE DE SECRETARIA), (82) 4009-3606 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-35-maceió",
    "comarca": "Maceió",
    "vara": "16ª Vara Criminal da Capital Execuções Penais de Maceió",
    "local": "Fórum Regional da Universidade Federal de Alagoas",
    "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
    "cep": "57072-970",
    "telefone": "(82) 4009-3859, (82) 4009-3860",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-36-maceió",
    "comarca": "Maceió",
    "vara": "17ª Vara Cível da Capital Fazenda Estadual de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3521 (CARTÓRIO), (82) 4009-3621 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-37-maceió",
    "comarca": "Maceió",
    "vara": "17ª Vara Criminal da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3562 (ATENDIMENTO),(82) 4009-3546 (CARTÓRIO), (82) 4009-3536 /3714 /3674 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-38-maceió",
    "comarca": "Maceió",
    "vara": "18ª Vara Cível da Capital Fazenda Estadual de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3666 (ASSESSORIA), (82) 4009-3522 (CARTÓRIO), (82) 4009-3570 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-39-maceió",
    "comarca": "Maceió",
    "vara": "19ª Vara Cível da Capital Fazenda Estadual de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3582 (CARTÓRIO), (82) 4009-3662 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-40-maceió",
    "comarca": "Maceió",
    "vara": "1ª Vara Criminal da Capital Infância e Juventude de Maceió",
    "local": "Fórum Ponta verde",
    "endereco": "Rua Hélio Pradines, 600, Ponta Verde",
    "cep": "57035-220",
    "telefone": "(82) 2126-4721 Cartório 1ª Vara, (82) 2126-4705 Cartório 28ª Vara",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel1@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marcli Guimarães de Aguiar",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-41-maceió",
    "comarca": "Maceió",
    "vara": "1º Juizado de Violência Doméstica e Familiar Contra a Mulher da Capital de Maceió",
    "local": "4º Juizado",
    "endereco": "R. do Imperador, 119 - Centro, Maceió - AL, Centro",
    "cep": "57020-670",
    "telefone": "(82) 2126-9671, (82) 2126-9672, (82) 2126-9673",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-42-maceió",
    "comarca": "Maceió",
    "vara": "1º Juizado Especial Cível da Capital de Maceió",
    "local": "1º Juizado",
    "endereco": "Rua Durval Guimarães, 402, Ponta Verde",
    "cep": "57035-060",
    "telefone": "(82) 4009-3741 (Recepção),  (82) 4009-3742/3743 (Secretaria), (82) 4009-3744 (Asssesoria), (82) 4009-3849 (Conciliação),  (82) 4009-3735 (CJUSC),  (82) 4009-3740 (Policial),  (82) 4009-3739 (Audiência)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-43-maceió",
    "comarca": "Maceió",
    "vara": "1º Juizado Especial da Fazenda Pública Estadual da Capital de Maceió",
    "local": "Juizado da Fazenda",
    "endereco": "Av Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3760/3763 (CARTÓRIO), (82) 4009-3767 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-44-maceió",
    "comarca": "Maceió",
    "vara": "20ª Vara Cível da Capital Sucessões de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3519 (ATENDIMENTO), (82) 4009-3688 (CARTÓRIO), (82) 4009-3626 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-45-maceió",
    "comarca": "Maceió",
    "vara": "21ª Vara Cível da Capital Sucessões de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3520 (CARTÓRIO), (82) 4009-3564 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel1@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marcli Guimarães de Aguiar",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-46-maceió",
    "comarca": "Maceió",
    "vara": "22ª Vara Cível da Capital Família de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3685",
    "cidadeUf": "Maceió-AL",
    "email": "vcivelfnp2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Pedro Ivens Simões de França",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-47-maceió",
    "comarca": "Maceió",
    "vara": "23ª Vara Cível da Capital Família de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3505 (ATENDIMENTO), (82) 4009-3605 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel3@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Henrique Gomes de Barros Teixeira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-48-maceió",
    "comarca": "Maceió",
    "vara": "24ª Vara Cível da Capital Família de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3504 (ATENDIMENTO), (82) 4009-3604 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivel4@tjal.jus.br",
    "juizPresidentePadrao": "Dr. José Cícero Alves da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-49-maceió",
    "comarca": "Maceió",
    "vara": "25ª Vara Cível da Capital Família de Maceió",
    "local": "Fórum Regional do Benedito Bentes",
    "endereco": "R. Jussara, Benedito Bentes",
    "cep": "57084-800",
    "telefone": "(82) 4009-3880",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-50-maceió",
    "comarca": "Maceió",
    "vara": "26ª Vara Cível da Capital Família de Maceió",
    "local": "Fórum Regional da Universidade Federal de Alagoas",
    "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
    "cep": "57072-970",
    "telefone": "(82) 4009-3864",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-51-maceió",
    "comarca": "Maceió",
    "vara": "27ª Vara Cível da Capital Família de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3503 (ATENDIMENTO), (82) 4009-3736 (CHEFE DE SECRETARIA), (82) 4009-3636 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-52-maceió",
    "comarca": "Maceió",
    "vara": "28ª Vara Cível da Capital Infância e Juventude de Maceió",
    "local": "Fórum Ponta verde",
    "endereco": "Rua Hélio Pradines, 600, Ponta Verde",
    "cep": "57035-220",
    "telefone": "(82) 2126-4700/4747",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-53-maceió",
    "comarca": "Maceió",
    "vara": "29ª Vara Cível da Capital - Conflitos Agrários de Maceió",
    "local": "Fórum Agrário de Alagoas",
    "endereco": "Terminal Rodoviário João Paulo II - Térreo, Av. Gov. Lamenha Filho, Feitosa",
    "cep": "57043-001",
    "telefone": "(82) 3235-9850 (RECEPÇÃO), (82) 3235-9851 (SECRETARIA), (82) 3235-9852 (GABINETE), (82) 3235-9853 (ASSESSORIA), (82) 3235-9854 (AUDIÊNCIA), (82) 3235-9855 (COPA)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-54-maceió",
    "comarca": "Maceió",
    "vara": "2º Juizado de Violência Doméstica e Familiar Contra a Mulher da Capital de Maceió",
    "local": "4º Juizado",
    "endereco": "R. do Imperador, 119 - Centro, Maceió - AL, Centro",
    "cep": "57020-670",
    "telefone": "(82) 4009-3528 (CARTÓRIO), (82) 4009-3711 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-55-maceió",
    "comarca": "Maceió",
    "vara": "2º Juizado Especial Fazenda Pública Estadual da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82)4009-3588/3589 (CARTÓRIO), 3592 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-56-maceió",
    "comarca": "Maceió",
    "vara": "30ª Vara Cível da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3545 (CARTÓRIO), (82) 4009-3807 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-57-maceió",
    "comarca": "Maceió",
    "vara": "32ª Vara Cível da Capital - Fazenda Municipal de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3552 (CARTÓRIO), (82) 4009-3553 (GABINETE DO MAGISTRADO)",
    "cidadeUf": "Maceió-AL",
    "email": "vcivelfnp2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Pedro Ivens Simões de França",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-58-maceió",
    "comarca": "Maceió",
    "vara": "3º Juizado Especial Cível da Capital de Maceió",
    "local": "3º Juizado",
    "endereco": "Avenida Comendador Gustavo Paiva, 2990 (MACEIÓ SHOPPING), 3º PISO, Mangabeiras",
    "cep": "57032-901",
    "telefone": "99361-1882 - Balcão Virtual, (82) 4009-3655 (Atendimento), (82) 4009-3652 (Chefe de Secretaria), (82) 4009-3653 (Copa), (82) 4009-3654 (Gabinete), (82) 4009-3656 (Assessoria), (82) 4009-3657 (Conciliação)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-59-maceió",
    "comarca": "Maceió",
    "vara": "5º Juizado Especial Cível da Capital de Maceió",
    "local": "5º Juizado",
    "endereco": "Terminal Rodoviário Jõao Paulo II, Av. Gov. Lamenha Filho, Feitosa",
    "cep": "57043-001",
    "telefone": "(82) 3235-9868 (CONCILIAÇÃO), (82) 3235-9869 (GABINETE), (82) 3235-9870 (RECEPÇÃO), (82) 3235-9871 (SECRETARIA), (82) 3235-9872 (AUDIÊNCIA), (82) 3235-9873/9874 (ASSESSORIA)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-60-maceió",
    "comarca": "Maceió",
    "vara": "6º Juizado Especial Cível da Capital de Maceió",
    "local": "6º Juizado",
    "endereco": "Terminal Rodoviário João Paulo II - Av. Gov. Afrânio Lages, 2º Piso, Feitosa",
    "cep": "57043-332",
    "telefone": "(82) 2126-9800 (RECEPÇÃO), (82) 2126-9804 (CHEFE SECRETARIA), (82) 2126-9810 (ASSESSORIA)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-61-maceió",
    "comarca": "Maceió",
    "vara": "7º Juizado Especial Cível da Capital de Maceió",
    "local": "7º Juizado",
    "endereco": "Unnamed Road, Cruz das Almas -",
    "cep": "57000-000",
    "telefone": "(82) 4009-3875",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-62-maceió",
    "comarca": "Maceió",
    "vara": "8º Juizado Especial Cível da Capital de Maceió",
    "local": "8º Juizado",
    "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
    "cep": "57072-970",
    "telefone": "(82) 4009-3861 (RECEPÇÃO )",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-63-maceió",
    "comarca": "Maceió",
    "vara": "9º Juizado Especial Cível da Capital de Maceió",
    "local": "9º Juizado",
    "endereco": "Rua Íris Alagoense, 103, Farol",
    "cep": "57051-370",
    "telefone": "(82) 3235-9902",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-64-maceió",
    "comarca": "Maceió",
    "vara": "Administração do Depósito Judicial de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3549",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-65-maceió",
    "comarca": "Maceió",
    "vara": "Agente de Proteção de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-66-maceió",
    "comarca": "Maceió",
    "vara": "AGUARDANDO DEFINIÇÃO DE LOTAÇÃO de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-67-maceió",
    "comarca": "Maceió",
    "vara": "Almoxarifado de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Avenida Juca Sampaio, 1049, Barro Duro",
    "cep": "57040-600",
    "telefone": "(82) 4009-3671,4009-3678,4009-3672;4009-3558;4009-3659",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-68-maceió",
    "comarca": "Maceió",
    "vara": "Apoio da Presidência de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-69-maceió",
    "comarca": "Maceió",
    "vara": "Arquivo de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-70-maceió",
    "comarca": "Maceió",
    "vara": "Arquivo Judiciário de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3460",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-71-maceió",
    "comarca": "Maceió",
    "vara": "Arquivo Judiciário de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3547 (RECEPÇÃO), (82) 4009-3779 (DIREÇÃO), (82) 4009-3772 (SECRETARIA)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-72-maceió",
    "comarca": "Maceió",
    "vara": "Assessoria de comunicação de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3826",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-73-maceió",
    "comarca": "Maceió",
    "vara": "Assessoria de Planejamento e Modernização do Poder Judiciário (APMP) de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3197",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-74-maceió",
    "comarca": "Maceió",
    "vara": "Assessoria Especial das Serventias Extrajudiciais - AESE de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3805",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-75-maceió",
    "comarca": "Maceió",
    "vara": "Assessoria Especial Judicial - AEJ de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3828",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-76-maceió",
    "comarca": "Maceió",
    "vara": "Assessoria Militar de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-77-maceió",
    "comarca": "Maceió",
    "vara": "Assessoria Militar de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-78-maceió",
    "comarca": "Maceió",
    "vara": "Autuação de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-79-maceió",
    "comarca": "Maceió",
    "vara": "Balancete de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-80-maceió",
    "comarca": "Maceió",
    "vara": "Biblioteca de Maceió",
    "local": "Esmal",
    "endereco": "Rua Cônego Machado, 1061, Farol",
    "cep": "57051-160",
    "telefone": "(82) 2126-5350",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-81-maceió",
    "comarca": "Maceió",
    "vara": "CADASTRO DE CONTRATOS - DGC de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-82-maceió",
    "comarca": "Maceió",
    "vara": "Câmara Criminal de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3126 / (82) 99104-4509",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-83-maceió",
    "comarca": "Maceió",
    "vara": "Casa da Mulher Alagoana de Maceió",
    "local": "Casa da Mulher",
    "endereco": "R. do Imperador, 119 - Centro, Maceió - AL, Centro",
    "cep": "57020-670",
    "telefone": "(82)2126-9650",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-84-maceió",
    "comarca": "Maceió",
    "vara": "Casa de Direito de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-85-maceió",
    "comarca": "Maceió",
    "vara": "CEJAI - Comissão Estadual Judiciária de Adoção Internacional de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3139",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-86-maceió",
    "comarca": "Maceió",
    "vara": "CEJUS - PROCESSUAL de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Prédio Anexo Francisco Guilherme Tobias Granja, Barro Duro",
    "cep": "57040-060",
    "telefone": "(82) 4009-3709/3719(MANHÃ)  (82) 4009-3599/3702/3706/3707(TARDE)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-87-maceió",
    "comarca": "Maceió",
    "vara": "CEJUSC de Maceió",
    "local": "Fórum Regional da Universidade Federal de Alagoas",
    "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
    "cep": "57072-970",
    "telefone": "(82) 4009-3862",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-88-maceió",
    "comarca": "Maceió",
    "vara": "CEJUSC - Central de Mandados da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "824009-3696",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-89-maceió",
    "comarca": "Maceió",
    "vara": "CEJUSC - Centro Judiciário de Solução de Conflitos e Cidadania Violência Doméstica da Capital de Maceió",
    "local": "CEJUSC",
    "endereco": "R. do Imperador, 119 - Centro, Maceió - AL, Centro",
    "cep": "57020-670",
    "telefone": "(82) 2126-9671",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-90-maceió",
    "comarca": "Maceió",
    "vara": "CEJUSC - Centro Judiciário de Soluções de Conflitos e Cidadania da Base Comunitária da PM no Vergel do Lago de Maceió",
    "local": "CEJUSC",
    "endereco": "R. Humberto Santa Cruz, 355 - Vergel do Lago, Maceió - AL, Vergel do Lago",
    "cep": "57015-090",
    "telefone": "98227-5437",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-91-maceió",
    "comarca": "Maceió",
    "vara": "CEJUSC - Centro Judiciário de Soluções de Conflitos e Cidadania da Comunidade Espírita Nosso Lar de Maceió",
    "local": "CEJUSC",
    "endereco": "Av. Sen. Rui Palmeira, 47 - Vergel do Lago, Maceió - AL, Vergel do Lago",
    "cep": "57017-465",
    "telefone": "99421-8088 (whatsapp)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-92-maceió",
    "comarca": "Maceió",
    "vara": "Central de Audiências de Custódia da Capital - Núcleo de Apoio às Audiências de Custódia – NAAC de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82)4009-3715 (CARTÓRIO), (82)4009-3594 (APEC)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-93-maceió",
    "comarca": "Maceió",
    "vara": "Central de Conciliação de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3776 (CONCIILIAÇÃO), (82) 4009-3709 (SALA VIRTUAL)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-94-maceió",
    "comarca": "Maceió",
    "vara": "CENTRAL DE FOTOCÓPIA de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-95-maceió",
    "comarca": "Maceió",
    "vara": "Central de Mandados de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3799",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-96-maceió",
    "comarca": "Maceió",
    "vara": "Central de Penas Alternativas de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-97-maceió",
    "comarca": "Maceió",
    "vara": "CENTRO DE CULTURA E MEMÓRIA DO PODER JUDICIÁRIO DE ALAGOAS - CCMTJAL de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-98-maceió",
    "comarca": "Maceió",
    "vara": "Centro de Custódia de Armas e Munições de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3701",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-99-maceió",
    "comarca": "Maceió",
    "vara": "Centro de Custódia Temporárias de Objetos e Bens Apreendidos da Comarca da Capital - CTBAC de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3549",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-100-maceió",
    "comarca": "Maceió",
    "vara": "Centro Judiciário de Solução de Conflitos e Cidadania - CEJUSC Maceió Shopping",
    "local": "CEJUSC",
    "endereco": "Av. Comendador Gustavo Paiva, 2990, Mangabeiras, Maceió-AL, Mangabeiras",
    "cep": "57031-530",
    "telefone": "(82) 4009- 3735",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-101-maceió",
    "comarca": "Maceió",
    "vara": "Cerimonial de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-102-maceió",
    "comarca": "Maceió",
    "vara": "Chefia de Gabinete de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3815",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-103-maceió",
    "comarca": "Maceió",
    "vara": "CIBJEC - Central de informações das ações penais com aplicação dos benefícios da lei 9.099/95 de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3805",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-104-maceió",
    "comarca": "Maceió",
    "vara": "CJUS - ATENDIMENTO E ORIENTAÇÃO À CIDADANIA de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3691",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-105-maceió",
    "comarca": "Maceió",
    "vara": "CJUS - PRÉ -PROCESSUAL de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3693 /3681",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-106-maceió",
    "comarca": "Maceió",
    "vara": "CJUS 2º Grau de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82)4009-3983,(82)4009-3984",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-107-maceió",
    "comarca": "Maceió",
    "vara": "Comissão Avaliadora do Banco de Boas Práticas de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3197",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-108-maceió",
    "comarca": "Maceió",
    "vara": "Comissão de Gestão Ambiental do Poder Judiciário de Alagoas de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-109-maceió",
    "comarca": "Maceió",
    "vara": "Comissão de Informática (CI/TJ-AL) de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "-82",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-110-maceió",
    "comarca": "Maceió",
    "vara": "Comissão de Metas 2010 de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-111-maceió",
    "comarca": "Maceió",
    "vara": "Comissão de Unificação das Tabelas do CNJ de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-112-maceió",
    "comarca": "Maceió",
    "vara": "Comissão de Virtualização de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-113-maceió",
    "comarca": "Maceió",
    "vara": "COMISSÃO DO MUSEU HISTÓRICO DO PODER JUDICIÁRIO DE ALAGOAS de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-114-maceió",
    "comarca": "Maceió",
    "vara": "Comissão Para Elaboração de Proposta e Reestruturação Administrativo-Organizacional do TJ/AL de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-115-maceió",
    "comarca": "Maceió",
    "vara": "Comissão Permanente de Controle de bens do patrimônio do Judiciário – COMPEC de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-116-maceió",
    "comarca": "Maceió",
    "vara": "COMISSÃO REGIONAL DE SOLUÇÕES FUNDIÁRIAS de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-117-maceió",
    "comarca": "Maceió",
    "vara": "COMITÊ DE GOVERNANÇA de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3175",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-118-maceió",
    "comarca": "Maceió",
    "vara": "COMITÊ GESTOR ESTADUAL PELA PRIMEIRA INFÂNCIA de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-119-maceió",
    "comarca": "Maceió",
    "vara": "Comitê gestor regional de atenção prioritária ao Primeiro Grau. de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-120-maceió",
    "comarca": "Maceió",
    "vara": "Conselho Disciplinar de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-121-maceió",
    "comarca": "Maceió",
    "vara": "Conselho Estadual da Magistratura de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-122-maceió",
    "comarca": "Maceió",
    "vara": "Conselho Penitenciário de Maceió",
    "local": "Fórum Regional da Universidade Federal de Alagoas",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 3218-3568",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-123-maceió",
    "comarca": "Maceió",
    "vara": "Contadoria de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3541",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-124-maceió",
    "comarca": "Maceió",
    "vara": "Contadoria - Diretor de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3541",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-125-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação da Itinerante de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-126-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação de Audiência de Custódia de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-127-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação de D.N.A de Maceió",
    "local": "Esmal",
    "endereco": "Rua Cônego Machado, 1061, Farol",
    "cep": "57051-160",
    "telefone": "2126-5350",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-128-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação de Ensino a Distância de Maceió",
    "local": "Esmal",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-129-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação de Estágio de Maceió",
    "local": "Esmal",
    "endereco": "Rua Cônego Machado, 1061, Farol",
    "cep": "57051-160",
    "telefone": "(82) 2126-5360 /5370",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-130-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação de Otimização do Judiciário - COJ de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-131-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação de Projetos Especiais de Maceió",
    "local": "Esmal",
    "endereco": "Rua Cônego Machado, 1061, Farol",
    "cep": "57051-160",
    "telefone": "(82) 2126-5364",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-132-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação de Servidores de Maceió",
    "local": "Esmal",
    "endereco": "Rua Cônego Machado, 1061, Farol",
    "cep": "57051-160",
    "telefone": "(82) 2126-5353",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-133-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação Geral de Cursos de Maceió",
    "local": "Esmal",
    "endereco": "Rua Cônego Machado, 1061, Farol",
    "cep": "57051-160",
    "telefone": "(82) 2126-5362 /5377",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-134-maceió",
    "comarca": "Maceió",
    "vara": "Coordenação Juizados Especiais de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3263/3264, (82) 4009-3328",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-135-maceió",
    "comarca": "Maceió",
    "vara": "Coordenadoria das Equipes Multidisciplinares de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-136-maceió",
    "comarca": "Maceió",
    "vara": "Coordenadoria de Direitos Humanos de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 98840-0008",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-137-maceió",
    "comarca": "Maceió",
    "vara": "Coordenadoria de Gestão Documental e Memória do Poder Judiciário de Alagoas de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-138-maceió",
    "comarca": "Maceió",
    "vara": "Coordenadoria Estadual da Infância e da Juventude - CEIJ de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-139-maceió",
    "comarca": "Maceió",
    "vara": "Coordenadoria Estadual da Mulher em Situação de Violência Doméstica e Familiar de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3048",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-140-maceió",
    "comarca": "Maceió",
    "vara": "Coordenadoria Estadual do Programa Fazendo Justiça do Conselho Nacional de Justiça-AL de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(61) 98261-0801 (ana.pereira",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-141-maceió",
    "comarca": "Maceió",
    "vara": "CPD de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3565",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-142-maceió",
    "comarca": "Maceió",
    "vara": "CPUDAL de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3543",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-143-maceió",
    "comarca": "Maceió",
    "vara": "De_s. Eduardo José de Andrade de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-144-maceió",
    "comarca": "Maceió",
    "vara": "DECA - Departamento Central de Administração de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3809",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-145-maceió",
    "comarca": "Maceió",
    "vara": "Defensoria Pública de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3551",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-146-maceió",
    "comarca": "Maceió",
    "vara": "Departamento Central de Aquisições - DCA (Compras) de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3773",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-147-maceió",
    "comarca": "Maceió",
    "vara": "Departamento Central de Assuntos Judiciários  DCAJ de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3816/3817/ 3818",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-148-maceió",
    "comarca": "Maceió",
    "vara": "Departamento Central de Material e Patrimônio de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Avenida Juca Sampaio, 1049, Barro Duro",
    "cep": "57040-600",
    "telefone": "(82) 4009-3525 (PATRIMÔNIO), (82)4009-3671/3672 (ASSESORIA), 4009-3737(DIRETOR)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-149-maceió",
    "comarca": "Maceió",
    "vara": "Departamento de Cadastro - DECAD de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-150-maceió",
    "comarca": "Maceió",
    "vara": "Departamento de Cadastro da Diretoria Adjunta de Gestão de Pessoas – DAGP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-151-maceió",
    "comarca": "Maceió",
    "vara": "DEPARTAMENTO DE DESENVOLVIMENTO - DAGP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-152-maceió",
    "comarca": "Maceió",
    "vara": "DEPARTAMENTO DE DESENVOLVIMENTO DA DIRETORIA ADJUNTA DE GESTÃO DE PESSOAS – DAGP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-153-maceió",
    "comarca": "Maceió",
    "vara": "Departamento de Gestão de Contratos - DGC de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-154-maceió",
    "comarca": "Maceió",
    "vara": "DEPARTAMENTO DE SAÚDE E QUALIDADE DE VIDA - DESQV - Odontológico de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-155-maceió",
    "comarca": "Maceió",
    "vara": "Departamento de Sindicância de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-156-maceió",
    "comarca": "Maceió",
    "vara": "Departamento Financeiro de Pessoal - DEFIP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-157-maceió",
    "comarca": "Maceió",
    "vara": "Des. Alcides Gusmão da Silva de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3323",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-158-maceió",
    "comarca": "Maceió",
    "vara": "Des. Carlos Cavalcanti de Albuquerque Filho de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3169",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-159-maceió",
    "comarca": "Maceió",
    "vara": "Des. Celyrio Adamastor Tenório Accioly de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3227",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-160-maceió",
    "comarca": "Maceió",
    "vara": "Des. Domingos de Araújo Lima Neto de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3332",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-161-maceió",
    "comarca": "Maceió",
    "vara": "Des. Fábio Costa de Almeida Ferrario de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3481",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-162-maceió",
    "comarca": "Maceió",
    "vara": "Des. Fábio José Bittencourt Araújo de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3251",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-163-maceió",
    "comarca": "Maceió",
    "vara": "Des. Fernando Tourinho de Omena Souza de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3175 / WhatsApp: (82) 99122-1467",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-164-maceió",
    "comarca": "Maceió",
    "vara": "Des. Ivan Vasconcelos Brito Junior de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3485",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-165-maceió",
    "comarca": "Maceió",
    "vara": "Des. João Luiz Azevedo Lessa de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3159",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-166-maceió",
    "comarca": "Maceió",
    "vara": "Des. Klever Rêgo Loureiro de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3331",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-167-maceió",
    "comarca": "Maceió",
    "vara": "Des. Márcio Roberto Tenório de Albuquerque de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "4009-3270",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-168-maceió",
    "comarca": "Maceió",
    "vara": "Des. Otávio Leão Praxedes de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3325",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-169-maceió",
    "comarca": "Maceió",
    "vara": "Des. Paulo Barros da Silva Lima de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3172",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-170-maceió",
    "comarca": "Maceió",
    "vara": "Des. Paulo Zacarias da Silva de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3226",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-171-maceió",
    "comarca": "Maceió",
    "vara": "Des. Tutmés Airan de Albuquerque Melo de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3271",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-172-maceió",
    "comarca": "Maceió",
    "vara": "Desa. Ana Florinda Mendonça da Silva Dantas de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "4009-3490",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-173-maceió",
    "comarca": "Maceió",
    "vara": "Desa. Silvana Lessa Omena de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "4009-3973",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-174-maceió",
    "comarca": "Maceió",
    "vara": "DIATI - Gestão de contratos e projetos de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3017",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-175-maceió",
    "comarca": "Maceió",
    "vara": "Direção do Fórum de Maceió",
    "local": "Fórum Regional da Universidade Federal de Alagoas",
    "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
    "cep": "57072-970",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-176-maceió",
    "comarca": "Maceió",
    "vara": "Direção do Fórum da Rodoviária da Capital de Maceió",
    "local": "Fórum da Rodoviária da Capital",
    "endereco": "Terminal Rodoviário Jõao Paulo II, Av. Gov. Lamenha Filho, Feitosa",
    "cep": "57043-001",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-177-maceió",
    "comarca": "Maceió",
    "vara": "Direção do Fórum Regional da Universidade Federal de Alagoas de Maceió",
    "local": "Fórum Regional da Universidade Federal de Alagoas",
    "endereco": "BR-104, Km 97 - 6, s/n, Tabuleiro dos Martins",
    "cep": "57072-970",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-178-maceió",
    "comarca": "Maceió",
    "vara": "Direção Geral de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3550 (APOIO) (82) 4009-3600 (DIRETORA)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-179-maceió",
    "comarca": "Maceió",
    "vara": "Direção Geral de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-180-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta da Administração - DARAD - Assessoria de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3191",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-181-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta da Administração - DARAD - Diretor de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3039",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-182-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Administração - Apoio de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-183-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Assuntos Judiciários - Ante Sala - DAAJUC de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-184-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Assuntos Judiciários - DAAJUC de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-185-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Contabilidade e Finanças - DICONF de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-186-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Controle Interno - DIACI de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-187-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Gestão de Pessoas - DAGP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82)98172-9586",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-188-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Infraestrutura de Obras e Serviços - DINFRA de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "4009-3020",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-189-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Saúde e Qualidade de Vida - DASQV de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-190-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Tecnologia da Informação - DIATI de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3166/3406",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-191-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Tecnologia da Informação - DIATI - SAJ/PG5 de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3055 /3056 /3057 /3058 /3059 /3060",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-192-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria Adjunta de Tecnologia da Informação - DIATI - Selo Digital de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3840/3841/3842",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-193-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria de Comunicação - DICOM de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-194-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria de Jurisprudência e Divulgação e Arquivo do TJAL de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-195-maceió",
    "comarca": "Maceió",
    "vara": "Diretoria de Precatórios e RPV's de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3452",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-196-maceió",
    "comarca": "Maceió",
    "vara": "Distribuição de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3676",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-197-maceió",
    "comarca": "Maceió",
    "vara": "Divisão de Cessão de Servidores da Diretoria Adjunta de Gestão de Pessoas – DAGP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-198-maceió",
    "comarca": "Maceió",
    "vara": "Divisão de Estatística de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3197",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-199-maceió",
    "comarca": "Maceió",
    "vara": "Divisão de Gerenciamento de Projetos de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3197",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-200-maceió",
    "comarca": "Maceió",
    "vara": "Divisão de Inspeção e Correição – DIC de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3827",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-201-maceió",
    "comarca": "Maceió",
    "vara": "Divisão de Juízes de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3820 / 3821 / 3822 / 3823",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-202-maceió",
    "comarca": "Maceió",
    "vara": "Divisão de Magistrados da Diretoria Adjunta de Gestão de Pessoas – DAGP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-203-maceió",
    "comarca": "Maceió",
    "vara": "Divisão de Processos Disciplinares – DPD de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3824",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-204-maceió",
    "comarca": "Maceió",
    "vara": "Divisão de Servidores Efetivos e Comissionados da Diretoria Adjunta de Gestão de Pessoas – DAGP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-205-maceió",
    "comarca": "Maceió",
    "vara": "Empenho de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-206-maceió",
    "comarca": "Maceió",
    "vara": "Equipe de Digitalização de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3469",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-207-maceió",
    "comarca": "Maceió",
    "vara": "EQUIPE INTERAGIR de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3825",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-208-maceió",
    "comarca": "Maceió",
    "vara": "Equipe Multidisciplinar do Fórum da Capital de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3598",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-209-maceió",
    "comarca": "Maceió",
    "vara": "Financeiro de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-210-maceió",
    "comarca": "Maceió",
    "vara": "Funjuris de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82)  4009 3347",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-211-maceió",
    "comarca": "Maceió",
    "vara": "Funjuris - Departamento de Arrecadação de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3347 | (82) 99131-2760",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-212-maceió",
    "comarca": "Maceió",
    "vara": "Funjuris - Departamento de Arrecadação Extrajudicial de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-213-maceió",
    "comarca": "Maceió",
    "vara": "Funjuris - Departamento Financeiro de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-214-maceió",
    "comarca": "Maceió",
    "vara": "FUNOREG - Coordenação Administrativa de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82)  4009 3347",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-215-maceió",
    "comarca": "Maceió",
    "vara": "FUNOREG - Presidência de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-216-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete da Juíza Convocada Adriana Carla Feitosa Martins de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-217-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete da Juíza Convocada Ana Florinda Mendonça da Silva Dantas de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-218-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete da Juíza Convocada Dra. Silvana Lessa Omena de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-219-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete da Juíza Convocada Maria Verônica Correia de Carvalho Souza Araújo de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "4009-3337",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-220-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete da Presidência - Chefe de Gabinete de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3278",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-221-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete da Presidência - Recepção de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-222-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete do Corregedor de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3781",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-223-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete do Juiz Convocado - Dr. José Cícero Alves da Silva de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-224-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete do Juiz Convocado Alberto Jorge Correia de Barros Lima de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-225-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete do Juiz Convocado Dr. Marcelo Tadeu de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-226-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete do Juiz Convocado Dr. Ney Costa Alcântara de Oliveira de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-227-maceió",
    "comarca": "Maceió",
    "vara": "Gabinete do Juiz Convocado Mauricio Breda Filho de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-228-maceió",
    "comarca": "Maceió",
    "vara": "Gestão de Contratos - ATIVA de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-229-maceió",
    "comarca": "Maceió",
    "vara": "GMF - Grupo de Monitoramento e Fiscalização do Sistema Carcerário de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82)4009-3215",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-230-maceió",
    "comarca": "Maceió",
    "vara": "Grupo e Trabalho JE de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-231-maceió",
    "comarca": "Maceió",
    "vara": "Grupo Interinstitucional de Trabalho Interdisciplinar de Atenção à Saúde Mental - GITIS de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-232-maceió",
    "comarca": "Maceió",
    "vara": "Juizado Especial Cível e Criminal de Acidente de  Trânsito da Capital de Maceió",
    "local": "12º Juizado",
    "endereco": "Av. Durval de Góes Monteiro, 829, Tabuleiro dos Martins",
    "cep": "57061-090",
    "telefone": "(82) 3235 9900 e 3235 9901",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-233-maceió",
    "comarca": "Maceió",
    "vara": "Juizado Especial Criminal e do Torcedor de Maceió",
    "local": "Juizado do Torcedor",
    "endereco": "Avenida Governador Lamenha Filho, s/n, Terminal Rodoviário João Paulo II, 1º Piso, Feitosa",
    "cep": "57043-001",
    "telefone": "9818 (RECEPÇÃO) / 9819 (SECRETARIA)  / 9820 (AUDIÊNCIA) / 9821 (GABINETE) / 9822 ( ASSESORIA)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-234-maceió",
    "comarca": "Maceió",
    "vara": "Juízes Auxiliares de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3829/3830",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-235-maceió",
    "comarca": "Maceió",
    "vara": "Juízes Auxiliares da Presidência de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-236-maceió",
    "comarca": "Maceió",
    "vara": "JUÍZO DE DIREITO DO 2º JUIZADO ESPECIAL CÍVEL DA CAPITAL de Maceió",
    "local": "2º Juizado",
    "endereco": "Terminal Rodoviário Jõao Paulo II, Av. Gov. Lamenha Filho, Feitosa",
    "cep": "57043-001",
    "telefone": "(82) 9.9121-4096 (Balcão virtual), (82) 3235-9860",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-237-maceió",
    "comarca": "Maceió",
    "vara": "Justiça Efetiva - Juízes Leigos de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3244",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-238-maceió",
    "comarca": "Maceió",
    "vara": "Laboratório de Inovação do Tribunal de Justiça de Alagoas de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-239-maceió",
    "comarca": "Maceió",
    "vara": "LACOR - Laboratório de Conservação e Restauro de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-240-maceió",
    "comarca": "Maceió",
    "vara": "Manutenção de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3703",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-241-maceió",
    "comarca": "Maceió",
    "vara": "Menor Aprendiz de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3236",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-242-maceió",
    "comarca": "Maceió",
    "vara": "NAI - Núcleo de Acessibilidade e Inclusão de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-243-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo 4.0 – Justiça Efetiva de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-244-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo de Apoio às Audiências de Custódia – NAAC de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3045",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-245-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo de Cooperação Judiciária do Estado de Alagoas de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-246-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo de Gerenciamento de Precedentes - NUGEP de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3064",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-247-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo de Processos de Improbidade Administrativa de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3596",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-248-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo de Promoção da Filiação de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3571",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-249-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos - NJUS-AL - Assessoria de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-250-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos - NJUS-AL - Coordenação Adjunta de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-251-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos - NJUS-AL - Coordenação Geral de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-252-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais de Solução de Conflitos - NJUS-AL - Secretaria Executiva de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-253-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Constelação e Direito Sistêmico de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-254-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Coordenadoria Geral de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-255-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Fazenda Pública de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-256-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Grandes Litigantes de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-257-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Justiça Restaurativa de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-258-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Mediação Escolar de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-259-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Setor Pré-Processual de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-260-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Setor Processual de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-261-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Permanente de Métodos Consensuais e Solução de Conflitos - NUPEMEC - Vice-Coordenadoria Geral de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3036 / 3958",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-262-maceió",
    "comarca": "Maceió",
    "vara": "Núcleo Socioambiental de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-263-maceió",
    "comarca": "Maceió",
    "vara": "Oficiais de Justiça de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3801",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-264-maceió",
    "comarca": "Maceió",
    "vara": "Ouvidoria Judiciária de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82)  4009-3148 / 3213 / 3214 / 3149",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-265-maceió",
    "comarca": "Maceió",
    "vara": "Pagamento de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3134 / 3136 / 3133",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-266-maceió",
    "comarca": "Maceió",
    "vara": "Postagem de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3200",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-267-maceió",
    "comarca": "Maceió",
    "vara": "Presidência - Gabinete de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-268-maceió",
    "comarca": "Maceió",
    "vara": "Procuradoria Geral de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-269-maceió",
    "comarca": "Maceió",
    "vara": "Procuradorias de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-270-maceió",
    "comarca": "Maceió",
    "vara": "Projeto Cidadania e Justiça na Escola de Maceió",
    "local": "Esmal",
    "endereco": "Rua Cônego Machado, 1061, Farol",
    "cep": "57051-160",
    "telefone": "(82) 2126-5367",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-271-maceió",
    "comarca": "Maceió",
    "vara": "Projeto Justiça Efetiva de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3244",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-272-maceió",
    "comarca": "Maceió",
    "vara": "Protocolo de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3787",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-273-maceió",
    "comarca": "Maceió",
    "vara": "Protocolo Administrativo de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-274-maceió",
    "comarca": "Maceió",
    "vara": "Protocolo das Câmaras de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-275-maceió",
    "comarca": "Maceió",
    "vara": "REMIP / Setor de Mapas de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-276-maceió",
    "comarca": "Maceió",
    "vara": "SAJ/PG de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "4009-3837",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-277-maceió",
    "comarca": "Maceió",
    "vara": "Sala de Reunião do Conselho da Magistratura de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-278-maceió",
    "comarca": "Maceió",
    "vara": "Seção Especializada Cível de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3454",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-279-maceió",
    "comarca": "Maceió",
    "vara": "Secretaria de Maceió",
    "local": "Esmal",
    "endereco": "Rua Cônego Machado, 1061, Farol",
    "cep": "57051-160",
    "telefone": "(82) 2126-5399 /5161",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-280-maceió",
    "comarca": "Maceió",
    "vara": "Secretaria da Procuradoria do Poder Judiciário de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-281-maceió",
    "comarca": "Maceió",
    "vara": "Secretaria de Processamento Unificado - SPU de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-282-maceió",
    "comarca": "Maceió",
    "vara": "Secretaria Especial da Presidência de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-283-maceió",
    "comarca": "Maceió",
    "vara": "Secretaria Geral de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-284-maceió",
    "comarca": "Maceió",
    "vara": "Secretaria-Geral de Maceió",
    "local": "Corregedoria-Geral da Justiça",
    "endereco": "Rua do Livamento, nº 384, Centro",
    "cep": "57020-030",
    "telefone": "(82) 4009-3782 / 3783 / 3784 / 3785",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-285-maceió",
    "comarca": "Maceió",
    "vara": "Serviço Social / Psicol. de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82)4009-3599",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-286-maceió",
    "comarca": "Maceió",
    "vara": "Setor de Aquisições(Licitação) de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-287-maceió",
    "comarca": "Maceió",
    "vara": "Setor de Manutenção (DCEA) de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3022",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-288-maceió",
    "comarca": "Maceió",
    "vara": "Setor de Serviços Gerais de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3321",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-289-maceió",
    "comarca": "Maceió",
    "vara": "Setor de Transporte de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3448 (DIRETOR), (82) 4009-3165 / 3954 /3143 (ASSESSORIA)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-290-maceió",
    "comarca": "Maceió",
    "vara": "Setor Médico de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3699 (RECEPÇÃO), (82) 4009-3730 (CONSULTÓRIO OONTOLÓGICO 01), (82) 4009-3544 (CONSULTÓRIO OONTOLÓGICO 02), (82) 4009-3728 (RECEPÇÃO PSIQUIÁTRICA), (82) 4009-3727 (CONSULTÓRIO PSIQUIÁTRICA), (82) 4009-3731 /3732 /3733 (ASSESORIA)",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-291-maceió",
    "comarca": "Maceió",
    "vara": "Setor Psiquiátrico de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3449",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-292-maceió",
    "comarca": "Maceió",
    "vara": "Subdireção-Geral de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-293-maceió",
    "comarca": "Maceió",
    "vara": "Superintendência de Maceió",
    "local": "Fórum Regional do Benedito Bentes",
    "endereco": "R. Jussara, Benedito Bentes",
    "cep": "57084-800",
    "telefone": "(82) 4009-5783",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-294-maceió",
    "comarca": "Maceió",
    "vara": "Superintendência de Maceió",
    "local": "Fórum da Capital",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 4009-3550",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-295-maceió",
    "comarca": "Maceió",
    "vara": "Transição - CGJ de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-296-maceió",
    "comarca": "Maceió",
    "vara": "Turma de Uniformização dos Juizados Especiais de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-297-maceió",
    "comarca": "Maceió",
    "vara": "Turma Recursal de Maceió",
    "local": "Turma Recursal",
    "endereco": "Terminal Rodoviário João Paulo II – 1º  Piso, Feitosa",
    "cep": "57043-000",
    "telefone": "(82) 2126-9832 e (82) 99101-8880",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-298-maceió",
    "comarca": "Maceió",
    "vara": "Turma Recursal - Gab. Juiz de Maceió",
    "local": "Turma Recursal",
    "endereco": "Av. Juca Sampaio, 206, Barro Duro",
    "cep": "57045-365",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-299-maceió",
    "comarca": "Maceió",
    "vara": "Turma Recursal dos Juizados Especiais Cíveis, Criminais e da Fazenda Pública do Estado de Alagoas de Maceió",
    "local": "Fórum da Rodoviária da Capital",
    "endereco": "Rodovia João Paulo II, s/n, Feitosa",
    "cep": "57041-970",
    "telefone": "(82) 2126-9832",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-300-maceió",
    "comarca": "Maceió",
    "vara": "Unidade de Auditoria Interna de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-1-301-maceió",
    "comarca": "Maceió",
    "vara": "Vice-Presidência de Maceió",
    "local": "Tribunal de Justiça",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3065",
    "cidadeUf": "Maceió-AL",
    "email": "jefpc2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Antonio Rafael Wanderley Casado da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-19-0-major-izidoro",
    "comarca": "Major Izidoro",
    "vara": "Vara do Único Ofício de Major Izidoro",
    "local": "Fórum da Comarca de Major Izidoro",
    "endereco": "Rua 31 de março sn, Centro",
    "cep": "57580-000",
    "telefone": "(82) 3429-9294 / 3429-9295",
    "cidadeUf": "Major Izidoro-AL",
    "email": "majorizidoro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. ISYS GABRIELA LEITE MARTINS DANTAS",
    "juizCargoPadrao": "Juiz de Direito (Designado)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-21-0-maragogi",
    "comarca": "Maragogi",
    "vara": "Vara do Único Ofício de Maragogi",
    "local": "Fórum  Tabelião Melchides Lindoso",
    "endereco": "Rodovia AL 101 Norte, s/n, Nao informado",
    "cep": "57965-000",
    "telefone": "(82) 3254-2404",
    "cidadeUf": "Maragogi-AL",
    "email": "maragogi@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Júlia Ribeiro Montebello",
    "juizCargoPadrao": "Juiz de Direito (Designado)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-22-0-maravilha",
    "comarca": "Maravilha",
    "vara": "Vara do Único Ofício de Maravilha",
    "local": "Fórum João da Silva Yoyô Filho",
    "endereco": "R. NOSSA S DE FATIMA, 10, Centro",
    "cep": "57520-000",
    "telefone": "(82) 3429-9292 / 3429-9293",
    "cidadeUf": "Maravilha-AL",
    "email": "maravilha@tjal.jus.br",
    "juizPresidentePadrao": "Dr. JADER DE MEDEIROS MARIZ NETO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-23-0-marechal-deodor",
    "comarca": "Marechal Deodoro",
    "vara": "1ª Vara de Marechal Deodoro",
    "local": "Fórum Des. Ernande Lopes Dorvillé",
    "endereco": "Rodovia Edval Lemos, sn, José Dias",
    "cep": "57160-000",
    "telefone": "(82) 4009-3891",
    "cidadeUf": "Marechal Deodoro-AL",
    "email": "marechaldeodoro@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Pedro Felipe Cardoso Mota Fontes",
    "juizCargoPadrao": "Juiz de Direito (Auxiliar)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-23-1-marechal-deodor",
    "comarca": "Marechal Deodoro",
    "vara": "2ª Vara de Marechal Deodoro",
    "local": "Fórum Des. Ernande Lopes Dorvillé",
    "endereco": "Rodovia Edval Lemos, sn, José Dias",
    "cep": "57160-000",
    "telefone": "(82) 4009-3892",
    "cidadeUf": "Marechal Deodoro-AL",
    "email": "marechalvara2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Fabíola Melo Feijão",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-23-2-marechal-deodor",
    "comarca": "Marechal Deodoro",
    "vara": "Direção do Fórum de Marechal Deodoro",
    "local": "Fórum Des. Ernande Lopes Dorvillé",
    "endereco": "Rodovia Edval Lemos, sn, José Dias",
    "cep": "57160-000",
    "telefone": "(82) 3260-1835",
    "cidadeUf": "Marechal Deodoro-AL",
    "email": "marechalvara2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Fabíola Melo Feijão",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-23-3-marechal-deodor",
    "comarca": "Marechal Deodoro",
    "vara": "Distribuição de Marechal Deodoro",
    "local": "Fórum Des. Ernande Lopes Dorvillé",
    "endereco": "Rodovia Edval Lemos, sn, José Dias",
    "cep": "57160-000",
    "telefone": "(82) 3260-1835",
    "cidadeUf": "Marechal Deodoro-AL",
    "email": "marechalvara2@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Fabíola Melo Feijão",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-24-0-maribondo",
    "comarca": "Maribondo",
    "vara": "Vara do Único Ofício de Maribondo",
    "local": "Fórum Rua Dr. Cleto Marques Luz",
    "endereco": "Rua Isaura Bastos de Araújo, 40, Centro",
    "cep": "57670-000",
    "telefone": "(82) 3429-9276 / 3429-9277",
    "cidadeUf": "Maribondo-AL",
    "email": "maribondo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. PEDRO CAMPANHOLO MARQUES",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-20-0-mata-grande",
    "comarca": "Mata Grande",
    "vara": "Vara do Único Ofício de Mata Grande",
    "local": "Fórum Des. Adalberto Correia de Lima",
    "endereco": "R. MANOEL ALVES MARTINS, SN, Centro",
    "cep": "57540-000",
    "telefone": "(82) 3429-9274 / 3429-9275",
    "cidadeUf": "Mata Grande-AL",
    "email": "matagrande@tjal.jus.br",
    "juizPresidentePadrao": "Dr. THIAGO AUGUSTO LOPES DE MORAIS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-25-0-matriz-de-camar",
    "comarca": "Matriz de Camaragibe",
    "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas) de Matriz de Camaragibe",
    "local": "Fórum Des. Paulo de Albuquerque",
    "endereco": "Pç. Senador Renan Calheiros, sn, Centro",
    "cep": "57910-000",
    "telefone": "(82) 3254 - 2408",
    "cidadeUf": "Matriz de Camaragibe-AL",
    "email": "matrizdecamaragibe@tjal.jus.br",
    "juizPresidentePadrao": "Dr. TAIS PEREIRA DA ROSA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-25-1-matriz-de-camar",
    "comarca": "Matriz de Camaragibe",
    "vara": "Vara do Único Ofício de Matriz de Camaragibe",
    "local": "Fórum Des. Paulo de Albuquerque",
    "endereco": "Pç. Senador Renan Calheiros, sn, Centro",
    "cep": "57910-000",
    "telefone": "(82) 3254 - 2408",
    "cidadeUf": "Matriz de Camaragibe-AL",
    "email": "matrizdecamaragibe@tjal.jus.br",
    "juizPresidentePadrao": "Dr. TAIS PEREIRA DA ROSA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-27-0-murici",
    "comarca": "Murici",
    "vara": "Vara do Único Ofício de Murici",
    "local": "Fórum Ministro Pedro da Rocha Acioly",
    "endereco": "TRAVESSA JOSE LEAO 76, Centro",
    "cep": "57820-000",
    "telefone": "(82) 4009-3876",
    "cidadeUf": "Murici-AL",
    "email": "murici@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Paula de Góes Brito Pontes",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-29-0-olho-dágua-das-",
    "comarca": "Olho DÁgua das Flores",
    "vara": "Vara do Único Ofício de Olho DÁgua das Flores",
    "local": "Fórum da Comarca de Olho D Água das Flores",
    "endereco": "Rua Lourenço de Abreu, 06, Centro",
    "cep": "57442-000",
    "telefone": "(82) 3429-9272 / 3429-9273",
    "cidadeUf": "Olho DÁgua das Flores-AL",
    "email": "olhodaguadasflores@tjal.jus.br",
    "juizPresidentePadrao": "Dr. KAIO CESAR QUEIROZ SILVA SANTOS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-30-0-palmeira-dos-ín",
    "comarca": "Palmeira dos Índios",
    "vara": "1ª Vara de Palmeira dos Índios",
    "local": "Fórum da Comarca de Palmeira dos Índios",
    "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
    "cep": "57600-970",
    "telefone": "(82) 3429-9256",
    "cidadeUf": "Palmeira dos Índios-AL",
    "email": "vara1palmeira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Christiano Silva Sibaldo de Assunção",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-30-1-palmeira-dos-ín",
    "comarca": "Palmeira dos Índios",
    "vara": "2ª Vara de Palmeira dos Índios",
    "local": "Fórum da Comarca de Palmeira dos Índios",
    "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
    "cep": "57600-970",
    "telefone": "(82) 3429-9260",
    "cidadeUf": "Palmeira dos Índios-AL",
    "email": "vara2palmeira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. DANILO VITAL DE OLIVEIRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-30-2-palmeira-dos-ín",
    "comarca": "Palmeira dos Índios",
    "vara": "3ª Vara de Palmeira dos Índios",
    "local": "Fórum da Comarca de Palmeira dos Índios",
    "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
    "cep": "57600-970",
    "telefone": "(82) 3429-9264",
    "cidadeUf": "Palmeira dos Índios-AL",
    "email": "vara3palmeira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. NATHALIA SILVA VIANA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-30-3-palmeira-dos-ín",
    "comarca": "Palmeira dos Índios",
    "vara": "4ª Vara de Palmeira dos Índios",
    "local": "Fórum da Comarca de Palmeira dos Índios",
    "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
    "cep": "57600-970",
    "telefone": "(82) 3429-9268",
    "cidadeUf": "Palmeira dos Índios-AL",
    "email": "vara4palmeira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. BRUNA FANNY DE OLIVEIRA LEMOS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-30-4-palmeira-dos-ín",
    "comarca": "Palmeira dos Índios",
    "vara": "Direção do Fórum de Palmeira dos Índios",
    "local": "Fórum da Comarca de Palmeira dos Índios",
    "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
    "cep": "57600-970",
    "telefone": "(82) 3429-9273",
    "cidadeUf": "Palmeira dos Índios-AL",
    "email": "vara4palmeira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. BRUNA FANNY DE OLIVEIRA LEMOS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-30-5-palmeira-dos-ín",
    "comarca": "Palmeira dos Índios",
    "vara": "Distribuição Judicial de Palmeira dos Índios",
    "local": "Fórum da Comarca de Palmeira dos Índios",
    "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
    "cep": "57600-970",
    "telefone": "(82) 3429-9274",
    "cidadeUf": "Palmeira dos Índios-AL",
    "email": "vara4palmeira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. BRUNA FANNY DE OLIVEIRA LEMOS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-30-6-palmeira-dos-ín",
    "comarca": "Palmeira dos Índios",
    "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Palmeira dos Índios",
    "local": "Juizado",
    "endereco": "Rua Otávio Cavalcante, s/n, 1º Andar, Centro",
    "cep": "57600-070",
    "telefone": "(82) 3429-9251(Recepção) / 3429-9252(Secretaria)",
    "cidadeUf": "Palmeira dos Índios-AL",
    "email": "vara4palmeira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. BRUNA FANNY DE OLIVEIRA LEMOS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-30-7-palmeira-dos-ín",
    "comarca": "Palmeira dos Índios",
    "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas) de Palmeira dos Índios",
    "local": "Fórum da Comarca de Palmeira dos Índios",
    "endereco": "PRAÇA HUMBERTO MENDES, 36, Nao informado",
    "cep": "57600-970",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Palmeira dos Índios-AL",
    "email": "vara4palmeira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. BRUNA FANNY DE OLIVEIRA LEMOS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-33-0-paripueira",
    "comarca": "Paripueira",
    "vara": "CEJUSC Pré Processual de Paripueira",
    "local": "Fórum da Comarca de Paripueira",
    "endereco": "Pç. Marechal Deodoro, 319, Centro",
    "cep": "57020-919",
    "telefone": "(82) 4009-3881 / 4009-3882",
    "cidadeUf": "Paripueira-AL",
    "email": "paripueira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Juliana Accioly Uchôa",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-33-1-paripueira",
    "comarca": "Paripueira",
    "vara": "Vara do Único Ofício de Paripueira",
    "local": "Fórum da Comarca de Paripueira",
    "endereco": "Loteamento Amaropolis, s/n, Centro",
    "cep": "57935-000",
    "telefone": "(82) 4009-3881 / 4009-3882",
    "cidadeUf": "Paripueira-AL",
    "email": "paripueira@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Juliana Accioly Uchôa",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-65-0-passo-de-camara",
    "comarca": "Passo de Camaragibe",
    "vara": "Vara do Único Ofício de Passo de Camaragibe",
    "local": "Fórum Desembargador Alfredo Gaspar de Mendonça",
    "endereco": "RUA DOUTOR PEDRO DA CUNHA, 13, Centro",
    "cep": "57930-000",
    "telefone": "(82) 3254-2423 / 3254-2424",
    "cidadeUf": "Passo de Camaragibe-AL",
    "email": "passodecamaragibe@tjal.jus.br",
    "juizPresidentePadrao": "Dr. PRISCILLA EMANUELLE DE MELO CAVALCANTE",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-35-0-penedo",
    "comarca": "Penedo",
    "vara": "1ª Vara de Penedo",
    "local": "Fórum Des. Alfredo Gaspar de Mendonça",
    "endereco": "Tv. Fernando Peixoto, 526, Centro",
    "cep": "57200-000",
    "telefone": "(82) 3551-9363",
    "cidadeUf": "Penedo-AL",
    "email": "vara1penedo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marina Gurgel da Costa",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-35-1-penedo",
    "comarca": "Penedo",
    "vara": "2ª Vara de Penedo",
    "local": "Fórum Des. Alfredo Gaspar de Mendonça",
    "endereco": "Tv. Fernando Peixoto, 526, Centro",
    "cep": "57200-000",
    "telefone": "(82) 3551-9355",
    "cidadeUf": "Penedo-AL",
    "email": "vara2penedo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Bruno Acioli Araújo",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-35-2-penedo",
    "comarca": "Penedo",
    "vara": "3ª Vara de Penedo",
    "local": "Fórum Des. Alfredo Gaspar de Mendonça",
    "endereco": "Tv. Fernando Peixoto, 526, Centro",
    "cep": "57200-000",
    "telefone": "(82) 3551-9368",
    "cidadeUf": "Penedo-AL",
    "email": "vara3penedo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Leandro de Castro Folly",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-35-3-penedo",
    "comarca": "Penedo",
    "vara": "4ª Vara de Penedo",
    "local": "Fórum Des. Alfredo Gaspar de Mendonça",
    "endereco": "Tv. Fernando Peixoto, 526, Centro",
    "cep": "57200-000",
    "telefone": "(82) 3551-9380",
    "cidadeUf": "Penedo-AL",
    "email": "4varapenedo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Lucas Lopes Dória Ferreira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-35-4-penedo",
    "comarca": "Penedo",
    "vara": "Distribuição de Penedo",
    "local": "Fórum Des. Alfredo Gaspar de Mendonça",
    "endereco": "Tv. Fernando Peixoto, 526, Centro",
    "cep": "57200-000",
    "telefone": "(82) 3551-9372 e 3551-9373",
    "cidadeUf": "Penedo-AL",
    "email": "vara1penedo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marina Gurgel da Costa",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-35-5-penedo",
    "comarca": "Penedo",
    "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Penedo",
    "local": "Juizado",
    "endereco": "Tv. Fernando Peixoto, 526, Centro",
    "cep": "57200-000",
    "telefone": "(82) 3551-9359",
    "cidadeUf": "Penedo-AL",
    "email": "vara1penedo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marina Gurgel da Costa",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-35-6-penedo",
    "comarca": "Penedo",
    "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas) de Penedo",
    "local": "Fórum Des. Alfredo Gaspar de Mendonça",
    "endereco": "Tv. Fernando Peixoto, 526, Centro",
    "cep": "57200-000",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Penedo-AL",
    "email": "vara1penedo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marina Gurgel da Costa",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-38-0-piaçabuçu",
    "comarca": "Piaçabuçu",
    "vara": "Vara do Único Ofício de Piaçabuçu",
    "local": "Fórum Dr. Augusto Rodrigues Souza Campos",
    "endereco": "Av. CORONEL FERNANDO TEODOMIRO, SN, Centro",
    "cep": "57210-000",
    "telefone": "(82) 3551-9394 / 3551-9395",
    "cidadeUf": "Piaçabuçu-AL",
    "email": "piacabucu@tjal.jus.br",
    "juizPresidentePadrao": "Dr. EDMILSON MACHADO DE ALMEIDA NETO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-36-0-pilar",
    "comarca": "Pilar",
    "vara": "Vara do Único Ofício de Pilar",
    "local": "Fórum da Comarca de Pilar",
    "endereco": "Av. Antonio Aniceto dos Santos, sn, Centro",
    "cep": "57150-000",
    "telefone": "(82) 4009-3890",
    "cidadeUf": "Pilar-AL",
    "email": "pilar@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Amine Mafra Chukr Conrado",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-37-0-piranhas",
    "comarca": "Piranhas",
    "vara": "Vara do Único Ofício de Piranhas",
    "local": "Fórum da Comarca de Piranhas",
    "endereco": "Av. Altemar Dutra, s/n, Vila Sergipe, Xingo",
    "cep": "57460-000",
    "telefone": "(82) 3429-9289",
    "cidadeUf": "Piranhas-AL",
    "email": "piranhas@tjal.jus.br",
    "juizPresidentePadrao": "Dr. BRUCE LEE SIMOES PIMENTEL",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-39-0-porto-calvo",
    "comarca": "Porto Calvo",
    "vara": "1ª Vara de Porto Calvo",
    "local": "Fórum Domingos Fernandes Calabar",
    "endereco": "Rua Professor Guedes de Miranda, 01, Centro",
    "cep": "57900-000",
    "telefone": "(82) 3254 - 2428",
    "cidadeUf": "Porto Calvo-AL",
    "email": "v1portocalvo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. WILIANS ALENCAR COELHO JUNIOR",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-39-1-porto-calvo",
    "comarca": "Porto Calvo",
    "vara": "2ª Vara de Porto Calvo",
    "local": "Fórum Domingos Fernandes Calabar",
    "endereco": "Rua Professor Guedes de Miranda, 01, Centro",
    "cep": "57900-000",
    "telefone": "(82) 3254 - 2429",
    "cidadeUf": "Porto Calvo-AL",
    "email": "v2portocalvo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Vinicius Garcia Modesto",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-39-2-porto-calvo",
    "comarca": "Porto Calvo",
    "vara": "Distribuição de Porto Calvo",
    "local": "Fórum Domingos Fernandes Calabar",
    "endereco": "Rua Professor Guedes de Miranda, 01, Centro",
    "cep": "57900-000",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Porto Calvo-AL",
    "email": "v2portocalvo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Vinicius Garcia Modesto",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-41-0-porto-real-do-c",
    "comarca": "Porto Real do Colégio",
    "vara": "Vara do Único Ofício de Porto Real do Colégio",
    "local": "Fórum da Comarca de Porto Real do Colégio",
    "endereco": "Rua Capitão Vieira, 25, Centro",
    "cep": "57290-300",
    "telefone": "(82) 3551-9398 / 3551-9399",
    "cidadeUf": "Porto Real do Colégio-AL",
    "email": "portorealdocolegio@tjal.jus.br",
    "juizPresidentePadrao": "Dr. ALANA MENDONCA OLIVEIRA SOBRAL",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-32-0-pão-de-açúcar",
    "comarca": "Pão de Açúcar",
    "vara": "Vara do Único Ofício de Pão de Açúcar",
    "local": "Fórum Átila Pinto Machado",
    "endereco": "Rua Alameda da Esperança, sn, Farol",
    "cep": "57400-000",
    "telefone": "(82) 3429-9270 / 3429-9271",
    "cidadeUf": "Pão de Açúcar-AL",
    "email": "paodeacucar@tjal.jus.br",
    "juizPresidentePadrao": "Dr. LUCAS CARVALHO TENÓRIO DE ALBUQUERQUE",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-42-0-quebrangulo",
    "comarca": "Quebrangulo",
    "vara": "Vara do Único Ofício de Quebrangulo",
    "local": "Fórum Tabelião Jerônimo da Cunha Lima",
    "endereco": "R. QUINZE DE NOVEMBRO, 238, Centro",
    "cep": "57750-000",
    "telefone": "(82) 3429-9269",
    "cidadeUf": "Quebrangulo-AL",
    "email": "quebrangulo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. MÁRIO DE MEDEIROS ROCHA FILHO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-43-0-rio-largo",
    "comarca": "Rio Largo",
    "vara": "1ª Vara de Rio Largo",
    "local": "Fórum da Comarca de Rio Largo",
    "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
    "cep": "57100-000",
    "telefone": "(82) 4009-3886",
    "cidadeUf": "Rio Largo-AL",
    "email": "vara1deriolargo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. GUILHERME BUBOLZ BOHM",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-43-1-rio-largo",
    "comarca": "Rio Largo",
    "vara": "2ª Vara de Rio Largo",
    "local": "Fórum da Comarca de Rio Largo",
    "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
    "cep": "57100-000",
    "telefone": "(82) 4009-3885",
    "cidadeUf": "Rio Largo-AL",
    "email": "vara2deriolargo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. LARRISSA GABRIELLA LINS VICTOR LACERDA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-43-2-rio-largo",
    "comarca": "Rio Largo",
    "vara": "3ª Vara de Rio Largo",
    "local": "Fórum da Comarca de Rio Largo",
    "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
    "cep": "57100-000",
    "telefone": "(82) 4009-3884",
    "cidadeUf": "Rio Largo-AL",
    "email": "vara3deriolargo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. FERNANDA DE GOES BRITO DIAMANTARAS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-43-3-rio-largo",
    "comarca": "Rio Largo",
    "vara": "Central de Rio Largo",
    "local": "Fórum da Comarca de Rio Largo",
    "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
    "cep": "57100-000",
    "telefone": "(82) 3261-1108",
    "cidadeUf": "Rio Largo-AL",
    "email": "vara1deriolargo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. GUILHERME BUBOLZ BOHM",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-43-4-rio-largo",
    "comarca": "Rio Largo",
    "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Rio Largo",
    "local": "Juizado",
    "endereco": "Rodovia AL 210, KM 4, Gustavo Paiva",
    "cep": "57100-000",
    "telefone": "(82) 4009-3888",
    "cidadeUf": "Rio Largo-AL",
    "email": "vara1deriolargo@tjal.jus.br",
    "juizPresidentePadrao": "Dr. GUILHERME BUBOLZ BOHM",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-55-0-santa-luzia-do-",
    "comarca": "Santa Luzia do Norte",
    "vara": "Ofício de Notas de Coqueiro Sêco de Santa Luzia do Norte",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Rua João Navarro, 1281, Centro",
    "cep": "57140-000",
    "telefone": "(82) 3267-1193 / 3267-1117",
    "cidadeUf": "Santa Luzia do Norte-AL",
    "email": "santaluzianorte@tjal.jus.br",
    "juizPresidentePadrao": "Dr. VERIDIANA OLIVEIRA DE LIMA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-55-1-santa-luzia-do-",
    "comarca": "Santa Luzia do Norte",
    "vara": "Ofício de Notas de Santa Luzia do Norte",
    "local": "Serviços Registrais e Notariais Oficializados",
    "endereco": "Rua Amaro Romeiro, 68, Caldeireiro",
    "cep": "57130-000",
    "telefone": "(82) 3268-1214 / 3268-1170",
    "cidadeUf": "Santa Luzia do Norte-AL",
    "email": "santaluzianorte@tjal.jus.br",
    "juizPresidentePadrao": "Dr. VERIDIANA OLIVEIRA DE LIMA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-55-2-santa-luzia-do-",
    "comarca": "Santa Luzia do Norte",
    "vara": "Vara do Único Ofício de Santa Luzia do Norte",
    "local": "Fórum Deoclécio Feitosa",
    "endereco": "Rua Imaculada Conceição, s/n , Centro",
    "cep": "57130-000",
    "telefone": "(82) 4009-3894 / (82) 99189-1229",
    "cidadeUf": "Santa Luzia do Norte-AL",
    "email": "santaluzianorte@tjal.jus.br",
    "juizPresidentePadrao": "Dr. VERIDIANA OLIVEIRA DE LIMA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-53-0-santana-do-ipan",
    "comarca": "Santana do Ipanema",
    "vara": "1ª Vara de Santana do Ipanema",
    "local": "Fórum Des. Hélio Cabral de Vasconcelos",
    "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
    "cep": "57500-000",
    "telefone": "(82) 3429-9282",
    "cidadeUf": "Santana do Ipanema-AL",
    "email": "vara1santana@tjal.jus.br",
    "juizPresidentePadrao": "Dr. MYLENA RIOS CAMARDELLA DA SILVEIRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-53-1-santana-do-ipan",
    "comarca": "Santana do Ipanema",
    "vara": "2ª Vara de Santana do Ipanema",
    "local": "Fórum Des. Hélio Cabral de Vasconcelos",
    "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
    "cep": "57500-000",
    "telefone": "(82) 9 9302-7180, (82) 3429-9283",
    "cidadeUf": "Santana do Ipanema-AL",
    "email": "vara2santana@tjal.jus.br",
    "juizPresidentePadrao": "Dr. FELIPE PACHECO CAVALCANTI",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-53-2-santana-do-ipan",
    "comarca": "Santana do Ipanema",
    "vara": "3ª Vara de Santana do Ipanema",
    "local": "Fórum Des. Hélio Cabral de Vasconcelos",
    "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
    "cep": "57500-000",
    "telefone": "(82) 3429-9284",
    "cidadeUf": "Santana do Ipanema-AL",
    "email": "vara3santana@tjal.jus.br",
    "juizPresidentePadrao": "Dr. CHARLES DE SOUSA ALVES",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-53-3-santana-do-ipan",
    "comarca": "Santana do Ipanema",
    "vara": "Distribuição de Santana do Ipanema",
    "local": "Fórum Des. Hélio Cabral de Vasconcelos",
    "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
    "cep": "57500-000",
    "telefone": "(82) 3621-1955",
    "cidadeUf": "Santana do Ipanema-AL",
    "email": "vara1santana@tjal.jus.br",
    "juizPresidentePadrao": "Dr. MYLENA RIOS CAMARDELLA DA SILVEIRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-53-4-santana-do-ipan",
    "comarca": "Santana do Ipanema",
    "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de Santana do Ipanema",
    "local": "Juizado",
    "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
    "cep": "57500-000",
    "telefone": "(82) 3429-9285",
    "cidadeUf": "Santana do Ipanema-AL",
    "email": "vara1santana@tjal.jus.br",
    "juizPresidentePadrao": "Dr. MYLENA RIOS CAMARDELLA DA SILVEIRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-53-5-santana-do-ipan",
    "comarca": "Santana do Ipanema",
    "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas) de Santana do Ipanema",
    "local": "Fórum Des. Hélio Cabral de Vasconcelos",
    "endereco": "AV. PRESIDENTE EURICO DUTRA, 457, Nao informado",
    "cep": "57500-000",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "Santana do Ipanema-AL",
    "email": "vara1santana@tjal.jus.br",
    "juizPresidentePadrao": "Dr. MYLENA RIOS CAMARDELLA DA SILVEIRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-45-0-são-josé-da-laj",
    "comarca": "São José da Laje",
    "vara": "Vara do Único Ofício de São José da Laje",
    "local": "Fórum Comendador Olympio Bezerra Filho",
    "endereco": "Praça Osman Costa Pino, Centro",
    "cep": "57860-000",
    "telefone": "(82) 3254-2419 / 3254-2420",
    "cidadeUf": "São José da Laje-AL",
    "email": "saojosedalaje@tjal.jus.br",
    "juizPresidentePadrao": "Dr. José Alberto Ramos",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-47-0-são-josé-da-tap",
    "comarca": "São José da Tapera",
    "vara": "Vara do Único Ofício de São José da Tapera",
    "local": "Fórum Des. José Marçal Cavalcanti",
    "endereco": "Rua 13 de Maio, s/n, Centro",
    "cep": "57445-000",
    "telefone": "(82) 3429-9290 / 3429-9291",
    "cidadeUf": "São José da Tapera-AL",
    "email": "saojosedatapera@tjal.jus.br",
    "juizPresidentePadrao": "Dr. ELIELSON DOS SANTOS PEREIRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-46-0-são-luís-do-qui",
    "comarca": "São Luís do Quitunde",
    "vara": "Vara do Único Ofício de São Luís do Quitunde",
    "local": "Fórum Dr. José Porto Cavalcanti",
    "endereco": "Pr. Ernesto Gomes Maranhão, 57, Centro",
    "cep": "57920-000",
    "telefone": "(82) 3254-2400 / 3254-2401",
    "cidadeUf": "São Luís do Quitunde-AL",
    "email": "saoluizdoquitunde@tjal.jus.br",
    "juizPresidentePadrao": "Dr. RAFAEL WANDERLEY DE SIQUEIRA ARAUJO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-0-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "1ª Vara - Cível de São Miguel dos Campos",
    "local": "Fórum Dr. Antônio de Moura Castro",
    "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3551-9383",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "vsmc1@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Renata Malafaia Vianna",
    "juizCargoPadrao": "Juiz de Direito (Designado)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-1-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "2ª Vara - Cível de São Miguel dos Campos",
    "local": "Fórum Dr. Antônio de Moura Castro",
    "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3551-9384",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "2vsaomiguelcampos@tjal.jus.br",
    "juizPresidentePadrao": "Dr. RAUL CABUS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-2-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "3ª Vara - Cível de São Miguel dos Campos",
    "local": "Fórum Dr. Antônio de Moura Castro",
    "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3551-9385",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "3vsaomiguelcampos@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Renata Malafaia Vianna",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-3-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "4ª Vara - Criminal de São Miguel dos Campos",
    "local": "Fórum Dr. Antônio de Moura Castro",
    "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3551-9386",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "4vsaomiguelcampos@tjal.jus.br",
    "juizPresidentePadrao": "Dr. ALLYSSON JORGE LIRA DE AMORIM",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-4-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "CEJUSC - Centro Judiciário de Solução de Conflitos e Cidadania de São Miguel dos Campos",
    "local": "Fórum Dr. Antônio de Moura Castro",
    "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3551-9387",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "2vsaomiguelcampos@tjal.jus.br",
    "juizPresidentePadrao": "Dr. RAUL CABUS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-5-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "Central de São Miguel dos Campos",
    "local": "Fórum Dr. Antônio de Moura Castro",
    "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "2vsaomiguelcampos@tjal.jus.br",
    "juizPresidentePadrao": "Dr. RAUL CABUS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-6-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "Distribuição de São Miguel dos Campos",
    "local": "Fórum Dr. Antônio de Moura Castro",
    "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3551-9376",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "2vsaomiguelcampos@tjal.jus.br",
    "juizPresidentePadrao": "Dr. RAUL CABUS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-7-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de São Miguel dos Campos",
    "local": "Juizado",
    "endereco": "Rua Coronel Francisco Cavalcante, nº 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3551-9382",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "2vsaomiguelcampos@tjal.jus.br",
    "juizPresidentePadrao": "Dr. RAUL CABUS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-48-8-são-miguel-dos-",
    "comarca": "São Miguel dos Campos",
    "vara": "Superintendência do Foro de São Miguel dos Campos",
    "local": "Fórum Dr. Antônio de Moura Castro",
    "endereco": "Rua Cel. Francisco Cavalcante, 51, Centro",
    "cep": "57240-000",
    "telefone": "(82) 3211-0200",
    "cidadeUf": "São Miguel dos Campos-AL",
    "email": "2vsaomiguelcampos@tjal.jus.br",
    "juizPresidentePadrao": "Dr. RAUL CABUS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-54-0-são-sebastião",
    "comarca": "São Sebastião",
    "vara": "Vara do Único Ofício de São Sebastião",
    "local": "Fórum da Comarca de São Sebastião",
    "endereco": "RUA 07 DE SETEMBRO, S/N - EPP, Centro",
    "cep": "57275-000",
    "telefone": "(82) 3482-9584 / 3482-9585",
    "cidadeUf": "São Sebastião-AL",
    "email": "saosebastiao@tjal.jus.br",
    "juizPresidentePadrao": "Dr. BRUNA DE LEAO FIGUEIREDO CARDOSO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-63-0-taquarana",
    "comarca": "Taquarana",
    "vara": "Vara de Único Ofício de Taquarana",
    "local": "Forum Juiz Odilon Raimundo Maciel Marques Luz",
    "endereco": "LOTEAMENTO RES. ALTO DAS COLINAS, 83, Pai João",
    "cep": "57325-000",
    "telefone": "(82) 3482-9594 / 3482-9595",
    "cidadeUf": "Taquarana-AL",
    "email": "vuotaquarana@tjal.jus.br",
    "juizPresidentePadrao": "Dr. NATHALYA ATAIDE FERNANDES",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-56-0-teotônio-vilela",
    "comarca": "Teotônio Vilela",
    "vara": "Vara do Único Ofício de Teotônio Vilela",
    "local": "Fórum da Comarca de Teotônio Vilela",
    "endereco": "Rua Teófilo Pereira, 555, Centro",
    "cep": "57265-000",
    "telefone": "(82) 3551-9388/3551-9389",
    "cidadeUf": "Teotônio Vilela-AL",
    "email": "teotoniovilela@tjal.jus.br",
    "juizPresidentePadrao": "Dr. RAFAEL MAIA CORREA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-57-0-traipu",
    "comarca": "Traipu",
    "vara": "Vara do Único Ofício de Traipu",
    "local": "Fórum da comarca de Traipu/AL",
    "endereco": "Ed. Des. Gerson Omena Bezerra - Rua 22, s/n, Conjunto Habitacional Antônio Medeiros Neto, Centro",
    "cep": "57370-000",
    "telefone": "(82) 3482-9582 / 3482-9583",
    "cidadeUf": "Traipu-AL",
    "email": "traipu@tjal.jus.br",
    "juizPresidentePadrao": "Dr. JONATHAN PABLO ARAÚJO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-58-0-união-dos-palma",
    "comarca": "União dos Palmares",
    "vara": "1ª Vara de União dos Palmares",
    "local": "Fórum Dr. José César Sobrinho",
    "endereco": "Av. Padre Donald, s/n, Cohab Velha",
    "cep": "57800-000",
    "telefone": "(82) 3281-2260",
    "cidadeUf": "União dos Palmares-AL",
    "email": "vara1uniao@tjal.jus.br",
    "juizPresidentePadrao": "Dr. DOUGLAS BECKHAUSER DE FREITAS",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-58-1-união-dos-palma",
    "comarca": "União dos Palmares",
    "vara": "2ª Vara de União dos Palmares",
    "local": "Fórum Dr. José César Sobrinho",
    "endereco": "Av. Padre Donald, s/n, Cohab Velha",
    "cep": "57800-000",
    "telefone": "(82) 3281-1866",
    "cidadeUf": "União dos Palmares-AL",
    "email": "vara2uniao@tjal.jus.br",
    "juizPresidentePadrao": "Dr. VINICIUS AUGUSTO DE SOUZA ARAUJO",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-58-2-união-dos-palma",
    "comarca": "União dos Palmares",
    "vara": "3ª Vara Criminal de União dos Palmares",
    "local": "Fórum Dr. José César Sobrinho",
    "endereco": "Av. Padre Donald, s/n, Cohab Velha",
    "cep": "57800-000",
    "telefone": "(82) 3281-2250",
    "cidadeUf": "União dos Palmares-AL",
    "email": "3varauniaopalmares@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Lisandro Suassuna De Oliveira",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-58-3-união-dos-palma",
    "comarca": "União dos Palmares",
    "vara": "Cartório de Distribuição de União dos Palmares",
    "local": "Fórum Dr. José César Sobrinho",
    "endereco": "Av. Padre Donald, s/n, Cohab Velha",
    "cep": "57800-000",
    "telefone": "(82) 3281-2250",
    "cidadeUf": "União dos Palmares-AL",
    "email": "jeccuniaopalmares@tjal.jus.br",
    "juizPresidentePadrao": "Dr. LIGIA MONT ALVERNE JUCA SEABRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-58-4-união-dos-palma",
    "comarca": "União dos Palmares",
    "vara": "Juizado Especial Cível e Criminal e de Violência Doméstica e Familiar contra a Mulher de União dos Palmares",
    "local": "Juizado",
    "endereco": "BR-104, 45, Nao informado",
    "cep": "57800-000",
    "telefone": "(82)  3254 – 2412 / 3254 – 2414",
    "cidadeUf": "União dos Palmares-AL",
    "email": "jeccuniaopalmares@tjal.jus.br",
    "juizPresidentePadrao": "Dr. LIGIA MONT ALVERNE JUCA SEABRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-58-5-união-dos-palma",
    "comarca": "União dos Palmares",
    "vara": "NPMAs ( Núcleo de Penas e Medidas Alternativas) de União dos Palmares",
    "local": "Fórum Dr. José César Sobrinho",
    "endereco": "Av. Padre Donald, s/n, Cohab Velha",
    "cep": "57800-000",
    "telefone": "(82) 3000-0000",
    "cidadeUf": "União dos Palmares-AL",
    "email": "jeccuniaopalmares@tjal.jus.br",
    "juizPresidentePadrao": "Dr. LIGIA MONT ALVERNE JUCA SEABRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-58-6-união-dos-palma",
    "comarca": "União dos Palmares",
    "vara": "Turma Recursal da 6ª Região de União dos Palmares",
    "local": "Fórum Dr. José César Sobrinho",
    "endereco": "Distrito Industrial Floriano Rosa, BR 104 , Km 36, Nao informado",
    "cep": "57800-000",
    "telefone": "(82) 99122-4271",
    "cidadeUf": "União dos Palmares-AL",
    "email": "jeccuniaopalmares@tjal.jus.br",
    "juizPresidentePadrao": "Dr. LIGIA MONT ALVERNE JUCA SEABRA",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-59-0-viçosa",
    "comarca": "Viçosa",
    "vara": "Vara do Único Ofício de Viçosa",
    "local": "Fórum Des. Oscar Tenório",
    "endereco": "Rua Francisco Bahia, 10, Centro",
    "cep": "57700-000",
    "telefone": "(82) 3254-2421 / 3254-2422",
    "cidadeUf": "Viçosa-AL",
    "email": "vicosa@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Juliana Batistela Guimarães de Alencar",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  },
  {
    "id": "tjal-3-0-água-branca",
    "comarca": "Água Branca",
    "vara": "Vara do Único Ofício de Água Branca",
    "local": "Fórum Miguel Arcanjo de Cerqueira Torres",
    "endereco": "R. Barão de Água Branca, 1-403, Centro",
    "cep": "57490-000",
    "telefone": "(82) 3429-9280 / 3429-9281",
    "cidadeUf": "Água Branca-AL",
    "email": "aguabranca@tjal.jus.br",
    "juizPresidentePadrao": "Dr. Marcos Vinicius Linhares Constantino da Silva",
    "juizCargoPadrao": "Juiz de Direito (Titular)",
    "competenciaJuri": true
  }
];

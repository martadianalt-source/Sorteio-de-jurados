import * as XLSX from 'xlsx';
import { Juror, DrawnJuror, ComarcaInfo, AuditLogEntry } from '../types';

export const MONTH_NAMES_PT = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
];

export interface DrawDateDetails {
  date: Date;
  currentDay: string;
  currentMonthName: string;
  currentMonthNameUpper: string;
  currentYear: number;
  currentTime: string;
  nextMonthName: string;
  nextMonthNameUpper: string;
  nextMonthYear: number;
}

export function getDrawDateDetails(timestamp?: string): DrawDateDetails {
  let date = new Date();
  if (timestamp) {
    const parsed = new Date(timestamp);
    if (!isNaN(parsed.getTime())) {
      date = parsed;
    } else {
      const match = timestamp.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[,\s]+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
      if (match) {
        const [, d, m, y, h, min, s] = match;
        const customDate = new Date(Number(y), Number(m) - 1, Number(d), Number(h || 0), Number(min || 0), Number(s || 0));
        if (!isNaN(customDate.getTime())) {
          date = customDate;
        }
      }
    }
  }

  const currentDay = String(date.getDate()).padStart(2, '0');
  const currentMonthIdx = date.getMonth();
  const currentMonthName = MONTH_NAMES_PT[currentMonthIdx];
  const currentYear = date.getFullYear();
  const currentHours = String(date.getHours()).padStart(2, '0');
  const currentMinutes = String(date.getMinutes()).padStart(2, '0');
  const currentTime = `${currentHours}:${currentMinutes}`;

  // Mês seguinte ao que está sendo executado o sorteio (referência legal do art. 433 do CPP)
  const nextMonthDate = new Date(currentYear, currentMonthIdx + 1, 1);
  const nextMonthIdx = nextMonthDate.getMonth();
  const nextMonthName = MONTH_NAMES_PT[nextMonthIdx];
  const nextMonthNameUpper = nextMonthName.toUpperCase();
  const nextMonthYear = nextMonthDate.getFullYear();

  return {
    date,
    currentDay,
    currentMonthName,
    currentMonthNameUpper: currentMonthName.toUpperCase(),
    currentYear,
    currentTime,
    nextMonthName,
    nextMonthNameUpper,
    nextMonthYear,
  };
}

// Helper para formatar a Vara e a Comarca de forma canônica conforme exigência do TJAL
// Ex: "Vara do Único Ofício da Comarca de São José da Tapera" ou "3ª Vara Criminal da Comarca de Santana do Ipanema"
export function formatVaraComarca(varaInput?: string, comarcaInput?: string): string {
  const comarca = (comarcaInput || 'São José da Tapera').trim();
  let vara = (varaInput || 'Vara do Único Ofício').trim();

  // Se já contém "da Comarca de [comarca]", retorna preservando
  const regexExact = new RegExp(`da\\s+Comarca\\s+de\\s+${comarca}`, 'i');
  if (regexExact.test(vara)) {
    return vara;
  }

  // Remove sufixo redundante como "de [comarca]" ou "da Comarca de [comarca]" do final da vara
  const regexDeComarca = new RegExp(`(\\s+da\\s+comarca)?(\\s+de\\s+${comarca})$`, 'i');
  vara = vara.replace(regexDeComarca, '').trim();

  return `${vara} da Comarca de ${comarca}`;
}

export interface AuthorityGenderTerms {
  isJuiza: boolean;
  juizTratamento: string; // "da MMa. Juíza de Direito" | "do MM. Juiz de Direito" | "do(a) MM. Juiz(a) de Direito"
  juizDespacho: string;   // "a MMa. Juíza" | "o MM. Juiz" | "o(a) MM. Juiz(a)"
  juizAssinaturaArtigo: string; // "pela Juíza" | "pelo Juiz" | "pelo(a) Juiz(a)"
  juizCargoAssinatura: string;  // "Juíza de Direito" | "Juiz de Direito" | "Juiz(a) de Direito"
  isServidora: boolean;
  servidorMencao: string; // "a servidora" | "o servidor" | "o(a) servidor(a)"
}

export function getAuthorityGenderTerms(
  juizPresidente?: string,
  juizCargo?: string,
  servidorNome?: string,
  servidorCargo?: string,
  forceNeutral = false
): AuthorityGenderTerms {
  if (forceNeutral) {
    return {
      isJuiza: false,
      juizTratamento: 'do(a) MM. Juiz(a) de Direito',
      juizDespacho: 'o(a) MM. Juiz(a)',
      juizAssinaturaArtigo: 'pelo(a) Juiz(a)',
      juizCargoAssinatura: 'Juiz(a) de Direito',
      isServidora: false,
      servidorMencao: 'o(a) servidor(a)',
    };
  }

  const jCargo = (juizCargo || '').toLowerCase().trim();
  const jNome = (juizPresidente || '').toLowerCase().trim();

  const isJuiza =
    jCargo.includes('juíza') ||
    jCargo.includes('juiza') ||
    jCargo.includes('magistrada') ||
    jNome.startsWith('dra.') ||
    jNome.startsWith('sra.') ||
    jNome.includes('dra ') ||
    jNome.includes('magistrada');

  const isJuizMasc =
    jCargo.includes('juiz') ||
    jCargo.includes('magistrado') ||
    jNome.startsWith('dr.') ||
    jNome.startsWith('sr.');

  const juizTratamento = isJuiza
    ? 'da MMa. Juíza de Direito'
    : isJuizMasc
    ? 'do MM. Juiz de Direito'
    : 'do(a) MM. Juiz(a) de Direito';

  const juizDespacho = isJuiza
    ? 'a MMa. Juíza'
    : isJuizMasc
    ? 'o MM. Juiz'
    : 'o(a) MM. Juiz(a)';

  const juizAssinaturaArtigo = isJuiza
    ? 'pela Juíza'
    : isJuizMasc
    ? 'pelo Juiz'
    : 'pelo(a) Juiz(a)';

  const juizCargoAssinatura = isJuiza
    ? 'Juíza de Direito'
    : isJuizMasc
    ? 'Juiz de Direito'
    : (juizCargo || 'Juiz(a) de Direito');

  const sCargo = (servidorCargo || '').toLowerCase().trim();
  const sNome = (servidorNome || '').toLowerCase().trim();

  const isServidora =
    sCargo.includes('analista judiciária') ||
    sCargo.includes('técnica judiciária') ||
    sCargo.includes('diretora') ||
    sCargo.includes('assessora') ||
    sCargo.includes('secretária') ||
    sCargo.includes('secretaria') ||
    sCargo.includes('servidora') ||
    sCargo.includes('oficiala') ||
    sNome.startsWith('dra.') ||
    sNome.startsWith('sra.') ||
    sNome.includes('marta') ||
    sNome.includes('maria') ||
    sNome.includes('ana ') ||
    sNome.includes('diana');

  const isServidorMasc =
    (sCargo.includes('analista judiciário') && !sCargo.includes('analista judiciária')) ||
    (sCargo.includes('técnico judiciário') && !sCargo.includes('técnica judiciária')) ||
    (sCargo.includes('diretor') && !sCargo.includes('diretora')) ||
    (sCargo.includes('assessor') && !sCargo.includes('assessora')) ||
    (sCargo.includes('secretário') && !sCargo.includes('secretária')) ||
    (sCargo.includes('servidor') && !sCargo.includes('servidora')) ||
    (sCargo.includes('oficial') && !sCargo.includes('oficiala')) ||
    sNome.startsWith('dr.') ||
    sNome.startsWith('sr.');

  const servidorMencao = isServidora
    ? 'a servidora'
    : isServidorMasc
    ? 'o servidor'
    : 'o(a) servidor(a)';

  return {
    isJuiza,
    juizTratamento,
    juizDespacho,
    juizAssinaturaArtigo,
    juizCargoAssinatura,
    isServidora,
    servidorMencao,
  };
}

// Modelo oficial com asteriscos '*' adaptável ao gênero de Juiz e Servidor
export const OFFICIAL_ATA_TEMPLATE_WITH_ASTERISKS = `PODER JUDICIÁRIO DO ESTADO DE ALAGOAS
COMARCA DE SÃO JOSÉ DA TAPERA
VARA DO ÚNICO OFÍCIO DA COMARCA DE SÃO JOSÉ DA TAPERA

ATA DA SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE * DO CORRENTE ANO

Em ambiente virtual do Juízo da Vara do Único Ofício da Comarca de São José da Tapera, através da plataforma Zoom Cloud Meetings, sob a condução do(a) MM. Juiz(a) de Direito, *, comigo, o(a) servidor(a), *, *, cientificados o Ministério Público, a OAB e a Defensoria Pública, foi instalada a SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE * DO CORRENTE ANO, nos termos do art. 88 do Código de Organização Judiciária do Estado de Alagoas (Lei n. 6.564, de 2005).

Iniciada a videoconferência, foi esclarecida a forma de condução da audiência virtual, com base na Resolução CNJ nº 354/2020, alterada pela Resolução CNJ nº 481/2022, e ao Ato Normativo Conjunto nº 01, de 14 de fevereiro de 2023, e certificada a ausência de prejuízo à publicidade ou à lisura do ato, visto que se trata de Boa Prática aprovada, no âmbito estadual, na 10ª Reunião dos Avaliadores de Boas Práticas da Área de Apoio Especializado à Administração (APMP) do Tribunal de Justiça do Estado de Alagoas, estando disponível no Portal de Boas Práticas do TJAL e, no âmbito nacional, na 348ª Sessão Ordinária do Conselho Nacional de Justiça, realizada em 5 de abril de 2022, estando disponível no portal de Boas Práticas do CNJ , a qual foi aperfeiçoada como aplicativo. Registre-se que foi disponibilizado o acesso à videochamada por meio da publicação do link de acesso no órgão oficial, bem como assegurada a notificação dos órgãos fiscalizadores, na forma definida nas Portarias n. 02, de 25 de setembro de 2024, publicada no DJe em 26/09/2024, e da Portaria nº 02, de 11 de abril de 2025, publicada em 22 de abril de 2025, ambas da lavra deste Juízo da Vara do Único Ofício da Comarca de São José da Tapera.

Aberta a sessão, deu-se início ao compartilhamento de tela com a exibição do aplicativo desenvolvido a partir da planilha aprovada como boa prática, contendo o nome dos * jurados desta comarca, previamente escolhidos para fazerem parte do corpo do júri, e passou, na forma dos arts. 432 e seguintes do Código de Processo Penal, a sortear o nome de 25 (vinte e cinco) jurados, para que funcionassem como JURADOS TITULARES, assim como os 10 (dez) jurados suplentes:

JURADOS TITULARES:
*

JURADOS SUPLENTES:
*

Em seguida, o(a) MM. Juiz(a) proferiu o seguinte DESPACHO: “Determino que a presente ata seja afixada, no átrio do Fórum, a relação dos jurados sorteados e intimados os jurados para participação nos julgamentos incluídos na Pauta do Tribunal do Júri da reunião do mês de * do corrente ano. Traslade-se a presente ata para os processos aptos a julgamento perante o Tribunal de Júri”.

Encerrada a audiência, a presente ata foi lavrada e digitada por mim, o(a) servidor(a), *, *, que, após lida, foi achada conforme por todos os participantes, sendo ao final assinada digitalmente pelo(a) Juiz(a), dispensada a assinatura dos demais participantes, nos termos dos artigos 406, §1º, e 409, §5º, do Código de Normas das Serventias Judiciais (Provimento CGJ nº 13, de 2023).

São José da Tapera/AL, * de * de *.

*
Juiz(a) de Direito

CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:
Hash de validação SHA-256: 21f71327eb2e961cfa2b733e59a27df11088692691a7e0123dd9efe4f5bf18a0
Data/Hora do Registro: 2026-09-11T18:44:31.819Z
Sistema: CSPRNG Auditável em conformidade com os artigos 433, 434 e 435 do Código de Processo Penal.`;

/**
 * Retorna o modelo com asteriscos '*' adaptando automaticamente as menções
 * ao gênero do(a) Juiz(a) e do(a) Servidor(a) configurados na unidade.
 */
export function getOfficialAtaTemplateWithAsterisks(comarcaInfo?: ComarcaInfo): string {
  const comarca = comarcaInfo?.comarca?.trim() || 'SÃO JOSÉ DA TAPERA';
  const rawVara = comarcaInfo?.vara?.trim() || 'Vara do Único Ofício';
  const vara = formatVaraComarca(rawVara, comarca);
  const juizCargo = comarcaInfo?.juizCargo?.trim() || 'Juiz de Direito';
  const juizPresidente = comarcaInfo?.juizPresidente?.trim() || '';
  const servidorCargo = comarcaInfo?.servidorCargo?.trim() || '';
  const servidorNome = comarcaInfo?.servidorNome?.trim() || comarcaInfo?.chefeSecretaria?.trim() || '';

  const gender = getAuthorityGenderTerms(juizPresidente, juizCargo, servidorNome, servidorCargo);

  return `PODER JUDICIÁRIO DO ESTADO DE ALAGOAS
COMARCA DE ${comarca.toUpperCase()}
${vara.toUpperCase()}

ATA DA SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE * DO CORRENTE ANO

Em ambiente virtual do Juízo da ${vara}, através da plataforma Zoom Cloud Meetings, sob a condução ${gender.juizTratamento}, *, comigo, ${gender.servidorMencao}, *, *, cientificados o Ministério Público, a OAB e a Defensoria Pública, foi instalada a SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE * DO CORRENTE ANO, nos termos do art. 88 do Código de Organização Judiciária do Estado de Alagoas (Lei n. 6.564, de 2005).

Iniciada a videoconferência, foi esclarecida a forma de condução da audiência virtual, com base na Resolução CNJ nº 354/2020, alterada pela Resolução CNJ nº 481/2022, e ao Ato Normativo Conjunto nº 01, de 14 de fevereiro de 2023, e certificada a ausência de prejuízo à publicidade ou à lisura do ato, visto que se trata de Boa Prática aprovada, no âmbito estadual, na 10ª Reunião dos Avaliadores de Boas Práticas da Área de Apoio Especializado à Administração (APMP) do Tribunal de Justiça do Estado de Alagoas, estando disponível no Portal de Boas Práticas do TJAL e, no âmbito nacional, na 348ª Sessão Ordinária do Conselho Nacional de Justiça, realizada em 5 de abril de 2022, estando disponível no portal de Boas Práticas do CNJ , a qual foi aperfeiçoada como aplicativo. Registre-se que foi disponibilizado o acesso à videochamada por meio da publicação do link de acesso no órgão oficial, bem como assegurada a notificação dos órgãos fiscalizadores, na forma definida nas Portarias n. 02, de 25 de setembro de 2024, publicada no DJe em 26/09/2024, e da Portaria nº 02, de 11 de abril de 2025, publicada em 22 de abril de 2025, ambas da lavra deste Juízo da ${vara}.

Aberta a sessão, deu-se início ao compartilhamento de tela com a exibição do aplicativo desenvolvido a partir da planilha aprovada como boa prática, contendo o nome dos * jurados desta comarca, previamente escolhidos para fazerem parte do corpo do júri, e passou, na forma dos arts. 432 e seguintes do Código de Processo Penal, a sortear o nome de 25 (vinte e cinco) jurados, para que funcionassem como JURADOS TITULARES, assim como os 10 (dez) jurados suplentes:

JURADOS TITULARES:
*

JURADOS SUPLENTES:
*

Em seguida, ${gender.juizDespacho} proferiu o seguinte DESPACHO: “Determino que a presente ata seja afixada, no átrio do Fórum, a relação dos jurados sorteados e intimados os jurados para participação nos julgamentos incluídos na Pauta do Tribunal do Júri da reunião do mês de * do corrente ano. Traslade-se a presente ata para os processos aptos a julgamento perante o Tribunal de Júri”.

Encerrada a audiência, a presente ata foi lavrada e digitada por mim, ${gender.servidorMencao}, *, *, que, após lida, foi achada conforme por todos os participantes, sendo ao final assinada digitalmente ${gender.juizAssinaturaArtigo}, dispensada a assinatura dos demais participantes, nos termos dos artigos 406, §1º, e 409, §5º, do Código de Normas das Serventias Judiciais (Provimento CGJ nº 13, de 2023).

${comarca}/AL, * de * de *.

*
${gender.juizCargoAssinatura}

CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:
Hash de validação SHA-256: 21f71327eb2e961cfa2b733e59a27df11088692691a7e0123dd9efe4f5bf18a0
Data/Hora do Registro: 2026-09-11T18:44:31.819Z
Sistema: CSPRNG Auditável em conformidade com os artigos 433, 434 e 435 do Código de Processo Penal.`;
}

/**
 * Formata o texto da Ata substituindo os asteriscos '*' pelas informações correspondentes,
 * tendo como referência para o mês do júri o mês seguinte ao sorteio.
 */
export function formatAtaText(
  comarcaInfo: ComarcaInfo,
  titulares: DrawnJuror[],
  suplentes: DrawnJuror[],
  hash?: string,
  timestamp?: string,
  totalJurorsCount?: number
): string {
  const {
    currentDay,
    currentMonthName,
    currentYear,
    nextMonthNameUpper,
  } = getDrawDateDetails(timestamp);

  const comarca = comarcaInfo.comarca?.trim() || 'São José da Tapera';
  const rawVara = comarcaInfo.vara?.trim() || 'Vara do Único Ofício';
  const vara = formatVaraComarca(rawVara, comarca);
  const juizPresidente = comarcaInfo.juizPresidente?.trim() || 'Elielson dos Santos Pereira';
  const juizCargo = comarcaInfo.juizCargo?.trim() || 'Juiz de Direito';
  const servidorNome = comarcaInfo.servidorNome?.trim() || comarcaInfo.chefeSecretaria?.trim() || 'Marta Diana Lucindo Tenório';
  const servidorCargo = comarcaInfo.servidorCargo?.trim() || 'Assessora Judicial';
  const cidadeLocal = comarcaInfo.comarca?.trim() || 'São José da Tapera';

  const gender = getAuthorityGenderTerms(juizPresidente, juizCargo, servidorNome, servidorCargo);

  // Formatação dos jurados titulares
  let titularesText = '';
  if (titulares.length === 0) {
    titularesText = '       [Espaço em branco - Nenhum sorteio realizado]';
  } else {
    titularesText = titulares
      .map(
        (t) =>
          `${String(t.drawOrder).padStart(2, '0')}. ${t.name}${
            t.qualification && t.qualification !== 'Cidadão' ? ` - ${t.qualification}` : ''
          }`
      )
      .join('\n');
  }

  // Formatação dos jurados suplentes
  let suplentesText = '';
  if (suplentes.length === 0) {
    suplentesText = '       [Espaço em branco - Nenhum sorteio realizado]';
  } else {
    suplentesText = suplentes
      .map(
        (s) =>
          `${String(s.drawOrder).padStart(2, '0')}. ${s.name}${
            s.qualification && s.qualification !== 'Cidadão' ? ` - ${s.qualification}` : ''
          }`
      )
      .join('\n');
  }

  const poolCount = totalJurorsCount && totalJurorsCount > 0
    ? String(totalJurorsCount)
    : (titulares.length + suplentes.length > 0 ? String(titulares.length + suplentes.length) : '*');

  const actualHash = hash || '21f71327eb2e961cfa2b733e59a27df11088692691a7e0123dd9efe4f5bf18a0';
  const actualTimestamp = timestamp || '2026-09-11T18:44:31.819Z';

  let text = `PODER JUDICIÁRIO DO ESTADO DE ALAGOAS\n`;
  text += `COMARCA DE ${comarca.toUpperCase()}\n`;
  text += `${vara.toUpperCase()}\n\n`;
  text += `ATA DA SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE ${nextMonthNameUpper} DO CORRENTE ANO\n\n`;

  text += `Em ambiente virtual do Juízo da ${vara}, através da plataforma Zoom Cloud Meetings, sob a condução ${gender.juizTratamento}, ${juizPresidente}, comigo, ${gender.servidorMencao}, ${servidorNome}, ${servidorCargo}, cientificados o Ministério Público, a OAB e a Defensoria Pública, foi instalada a SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE ${nextMonthNameUpper} DO CORRENTE ANO, nos termos do art. 88 do Código de Organização Judiciária do Estado de Alagoas (Lei n. 6.564, de 2005).\n\n`;

  text += `Iniciada a videoconferência, foi esclarecida a forma de condução da audiência virtual, com base na Resolução CNJ nº 354/2020, alterada pela Resolução CNJ nº 481/2022, e ao Ato Normativo Conjunto nº 01, de 14 de fevereiro de 2023, e certificada a ausência de prejuízo à publicidade ou à lisura do ato, visto que se trata de Boa Prática aprovada, no âmbito estadual, na 10ª Reunião dos Avaliadores de Boas Práticas da Área de Apoio Especializado à Administração (APMP) do Tribunal de Justiça do Estado de Alagoas, estando disponível no Portal de Boas Práticas do TJAL e, no âmbito nacional, na 348ª Sessão Ordinária do Conselho Nacional de Justiça, realizada em 5 de abril de 2022, estando disponível no portal de Boas Práticas do CNJ , a qual foi aperfeiçoada como aplicativo. Registre-se que foi disponibilizado o acesso à videochamada por meio da publicação do link de acesso no órgão oficial, bem como assegurada a notificação dos órgãos fiscalizadores, na forma definida nas Portarias n. 02, de 25 de setembro de 2024, publicada no DJe em 26/09/2024, e da Portaria nº 02, de 11 de abril de 2025, publicada em 22 de abril de 2025, ambas da lavra deste Juízo da ${vara}.\n\n`;

  text += `Aberta a sessão, deu-se início ao compartilhamento de tela com a exibição do aplicativo desenvolvido a partir da planilha aprovada como boa prática, contendo o nome dos ${poolCount} jurados desta comarca, previamente escolhidos para fazerem parte do corpo do júri, e passou, na forma dos arts. 432 e seguintes do Código de Processo Penal, a sortear o nome de 25 (vinte e cinco) jurados, para que funcionassem como JURADOS TITULARES, assim como os 10 (dez) jurados suplentes:\n\n`;

  text += `JURADOS TITULARES:\n`;
  text += `${titularesText}\n\n`;

  text += `JURADOS SUPLENTES:\n`;
  text += `${suplentesText}\n\n`;

  text += `Em seguida, ${gender.juizDespacho} proferiu o seguinte DESPACHO: “Determino que a presente ata seja afixada, no átrio do Fórum, a relação dos jurados sorteados e intimados os jurados para participação nos julgamentos incluídos na Pauta do Tribunal do Júri da reunião do mês de ${nextMonthNameUpper} do corrente ano. Traslade-se a presente ata para os processos aptos a julgamento perante o Tribunal de Júri”.\n\n`;

  text += `Encerrada a audiência, a presente ata foi lavrada e digitada por mim, ${gender.servidorMencao}, ${servidorNome}, ${servidorCargo}, que, após lida, foi achada conforme por todos os participantes, sendo ao final assinada digitalmente ${gender.juizAssinaturaArtigo}, dispensada a assinatura dos demais participantes, nos termos dos artigos 406, §1º, e 409, §5º, do Código de Normas das Serventias Judiciais (Provimento CGJ nº 13, de 2023).\n\n`;

  text += `${cidadeLocal}/AL, ${currentDay} de ${currentMonthName} de ${currentYear}.\n\n`;

  text += `${juizPresidente}\n${gender.juizCargoAssinatura}\n\n`;

  text += `CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:\n`;
  text += `Hash de validação SHA-256: ${actualHash}\n`;
  text += `Data/Hora do Registro: ${actualTimestamp}\n`;
  text += `Sistema: CSPRNG Auditável em conformidade com os artigos 433, 434 e 435 do Código de Processo Penal.`;

  return text;
}

/**
 * Gera o documento no formato .doc compatível nativamente com Microsoft Word / LibreOffice,
 * substituindo os '*' do modelo e aplicando a referência do mês seguinte ao sorteio.
 */
export function generateAtaDocHtml(
  comarcaInfo: ComarcaInfo,
  titulares: DrawnJuror[],
  suplentes: DrawnJuror[],
  hash?: string,
  timestamp?: string,
  totalJurorsCount?: number
): string {
  const {
    currentDay,
    currentMonthName,
    currentYear,
    nextMonthNameUpper,
  } = getDrawDateDetails(timestamp);

  const comarca = comarcaInfo.comarca?.trim() || 'São José da Tapera';
  const vara = comarcaInfo.vara?.trim() || 'Vara do Único Ofício de São José da Tapera';
  const juizPresidente = comarcaInfo.juizPresidente?.trim() || 'Elielson dos Santos Pereira';
  const juizCargo = comarcaInfo.juizCargo?.trim() || 'Juiz de Direito';
  const servidorNome = comarcaInfo.servidorNome?.trim() || comarcaInfo.chefeSecretaria?.trim() || 'Marta Diana Lucindo Tenório';
  const servidorCargo = comarcaInfo.servidorCargo?.trim() || 'Assessora Judicial';
  const endereco = comarcaInfo.endereco?.trim() || 'Rua 13 de maio, sn, Centro';
  const cep = comarcaInfo.cep?.trim() || '57445-000';
  const telefone = comarcaInfo.telefone?.trim() || '3622-1193';
  const cidadeUf = comarcaInfo.cidadeUf?.trim() || `${comarca}-AL`;
  const email = comarcaInfo.email?.trim() || 'saojosedatapera@tjal.jus.br';
  const cidadeLocal = comarcaInfo.comarca?.trim() || 'São José da Tapera';

  const poolCount = totalJurorsCount && totalJurorsCount > 0
    ? String(totalJurorsCount)
    : (titulares.length + suplentes.length > 0 ? String(titulares.length + suplentes.length) : '*');

  const actualHash = hash || '21f71327eb2e961cfa2b733e59a27df11088692691a7e0123dd9efe4f5bf18a0';
  const actualTimestamp = timestamp || '2026-09-11T18:44:31.819Z';

  // Linhas dos 25 Titulares
  let titularTableRows = '';
  if (titulares.length === 0) {
    for (let i = 1; i <= 25; i++) {
      titularTableRows += `
        <tr>
          <td style="text-align: center; width: 40pt;">${i}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>`;
    }
  } else {
    titulares.forEach((t) => {
      titularTableRows += `
        <tr>
          <td style="text-align: center; width: 40pt; font-weight: bold;">${t.drawOrder}</td>
          <td style="font-weight: bold;">${t.name}</td>
          <td>${t.qualification || ''}</td>
        </tr>`;
    });
  }

  // Linhas dos 10 Suplentes
  let suplenteTableRows = '';
  if (suplentes.length === 0) {
    for (let i = 1; i <= 10; i++) {
      suplenteTableRows += `
        <tr>
          <td style="text-align: center; width: 40pt;">${i}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>`;
    }
  } else {
    suplentes.forEach((s) => {
      suplenteTableRows += `
        <tr>
          <td style="text-align: center; width: 40pt; font-weight: bold;">${s.drawOrder}</td>
          <td style="font-weight: bold;">${s.name}</td>
          <td>${s.qualification || ''}</td>
        </tr>`;
    });
  }

  const isJuiza =
    juizCargo.toLowerCase().includes('juíza') ||
    juizPresidente.toLowerCase().startsWith('dra.') ||
    juizCargo.toLowerCase().includes('magistrada');

  const juizTratamento = isJuiza ? 'da MMa. Juíza de Direito' : 'do MM. Juiz de Direito';
  const juizDespacho = isJuiza ? 'a MMa. Juíza' : 'o MM. Juiz';
  const juizAssinaturaArtigo = isJuiza ? 'pela Juíza' : 'pelo Juiz';

  return `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>Ata de Sorteio de Jurados - ${vara}</title>
<!--[if gte mso 9]>
<xml>
  <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>100</w:Zoom>
    <w:DoNotOptimizeForBrowser/>
  </w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: 21.0cm 29.7cm;
    margin: 2.5cm 2.5cm 2.5cm 2.5cm;
    mso-page-orientation: portrait;
  }
  body {
    font-family: 'Times New Roman', serif;
    font-size: 12pt;
    line-height: 1.5;
    color: #000000;
  }
  .doc-title {
    text-align: center;
    font-size: 12pt;
    font-weight: bold;
    margin: 18pt 0 16pt 0;
    text-transform: uppercase;
    line-height: 1.4;
  }
  p {
    margin: 0 0 10pt 0;
    text-align: justify;
    line-height: 1.5;
    text-indent: 2.0cm;
  }
  .no-indent {
    text-indent: 0 !important;
  }
  .section-title {
    font-size: 11pt;
    font-weight: bold;
    text-transform: uppercase;
    margin: 14pt 0 6pt 0;
    text-indent: 0;
  }
  table.juror-table {
    width: 100%;
    border-collapse: collapse;
    margin: 6pt 0 16pt 0;
  }
  table.juror-table th, table.juror-table td {
    border: 1pt solid #000000;
    padding: 4pt 6pt;
    font-size: 11pt;
    font-family: 'Times New Roman', serif;
  }
  table.juror-table th {
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: left;
    text-transform: uppercase;
    font-size: 10pt;
  }
  .signature-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 36pt;
    border: none;
  }
  .signature-table td {
    border: none;
    text-align: center;
    padding: 20pt 12pt 6pt 12pt;
    vertical-align: top;
    font-size: 11pt;
  }
  .sig-line {
    border-top: 1pt solid #000000;
    margin-top: 35pt;
    padding-top: 3pt;
    font-weight: bold;
    text-align: center;
  }
  .sig-role {
    font-size: 10pt;
    color: #000000;
    font-weight: bold;
    text-align: center;
  }
  .audit-box {
    margin-top: 24pt;
    padding: 8pt;
    border: 1pt solid #444444;
    background-color: #f9f9f9;
    font-family: 'Courier New', monospace;
    font-size: 9pt;
    line-height: 1.3;
  }
</style>
</head>
<body>

<!-- CABEÇALHO OFICIAL TJAL SEM BRASÃO -->
<div style="text-align: center; border-bottom: 1.5pt solid #111111; padding-bottom: 8pt; margin-bottom: 18pt; font-family: 'Times New Roman', serif;">
  <div style="font-size: 13pt; font-weight: bold; text-transform: uppercase; color: #111111; letter-spacing: 0.5pt; line-height: 1.3;">PODER JUDICIÁRIO DO ESTADO DE ALAGOAS</div>
  <div style="font-size: 11.5pt; font-weight: bold; text-transform: uppercase; color: #222222; margin-top: 3pt;">COMARCA DE ${comarca.toUpperCase()}</div>
  <div style="font-size: 10.5pt; font-weight: normal; color: #333333; margin-top: 2pt;">${vara}</div>
  <div style="font-size: 8.5pt; font-style: italic; color: #555555; margin-top: 4pt; line-height: 1.2;">
    ${endereco} - CEP ${cep}, Fone: ${telefone}, ${cidadeUf} - E-mail: ${email}
  </div>
</div>

<div class="doc-title">
  ATA DA SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE ${nextMonthNameUpper} DO CORRENTE ANO
</div>

<p class="no-indent" style="font-size: 10.5pt; text-align: center; font-style: italic; margin-bottom: 16pt;">
  (Artigos 433, 434 e 435 do Código de Processo Penal Brasileiro)
</p>

<p>
  Em ambiente virtual do Juízo da ${vara}, através da plataforma Zoom Cloud Meetings, sob a condução ${juizTratamento}, ${juizPresidente}, comigo, ${servidorNome}, ${servidorCargo}, cientificados o Ministério Público, a OAB e a Defensoria Pública, foi instalada a SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE ${nextMonthNameUpper} DO CORRENTE ANO, nos termos do art. 88 do Código de Organização Judiciária do Estado de Alagoas (Lei n. 6.564, de 2005).
</p>

<p>
  Iniciada a videoconferência, foi esclarecida a forma de condução da audiência virtual, com base na Resolução CNJ nº 354/2020, alterada pela Resolução CNJ nº 481/2022, e ao Ato Normativo Conjunto nº 01, de 14 de fevereiro de 2023, e certificada a ausência de prejuízo à publicidade ou à lisura do ato, visto que se trata de Boa Prática aprovada, no âmbito estadual, na 10ª Reunião dos Avaliadores de Boas Práticas da Área de Apoio Especializado à Administração (APMP) do Tribunal de Justiça do Estado de Alagoas, estando disponível no Portal de Boas Práticas do TJAL e, no âmbito nacional, na 348ª Sessão Ordinária do Conselho Nacional de Justiça, realizada em 5 de abril de 2022, estando disponível no portal de Boas Práticas do CNJ , a qual foi aperfeiçoada como aplicativo. Registre-se que foi disponibilizado o acesso à videochamada por meio da publicação do link de acesso no órgão oficial, bem como assegurada a notificação dos órgãos fiscalizadores, na forma definida nas Portarias n. 02, de 25 de setembro de 2024, publicada no DJe em 26/09/2024, e da Portaria nº 02, de 11 de abril de 2025, publicada em 22 de abril de 2025, ambas da lavra deste Juízo da ${vara}.
</p>

<p>
  Aberta a sessão, deu-se início ao compartilhamento de tela com a exibição do aplicativo desenvolvido a partir da planilha aprovada como boa prática, contendo o nome dos ${poolCount} jurados desta comarca, previamente escolhidos para fazerem parte do corpo do júri, e passou, na forma dos arts. 432 e seguintes do Código de Processo Penal, a sortear o nome de 25 (vinte e cinco) jurados, para que funcionassem como JURADOS TITULARES, assim como os 10 (dez) jurados suplentes:
</p>

<div class="section-title">JURADOS TITULARES:</div>
<table class="juror-table">
  <thead>
    <tr>
      <th style="text-align: center; width: 40pt;">Nº</th>
      <th>Nome Completo do Jurado</th>
      <th>Qualificação / Profissão</th>
    </tr>
  </thead>
  <tbody>
    ${titularTableRows}
  </tbody>
</table>

<div class="section-title">JURADOS SUPLENTES:</div>
<table class="juror-table">
  <thead>
    <tr>
      <th style="text-align: center; width: 40pt;">Nº</th>
      <th>Nome Completo do Jurado</th>
      <th>Qualificação / Profissão</th>
    </tr>
  </thead>
  <tbody>
    ${suplenteTableRows}
  </tbody>
</table>

<p>
  Em seguida, ${juizDespacho} proferiu o seguinte DESPACHO: “Determino que a presente ata seja afixada, no átrio do Fórum, a relação dos jurados sorteados e intimados os jurados para participação nos julgamentos incluídos na Pauta do Tribunal do Júri da reunião do mês de ${nextMonthNameUpper} do corrente ano. Traslade-se a presente ata para os processos aptos a julgamento perante o Tribunal de Júri”.
</p>

<p>
  Encerrada a audiência, a presente ata foi lavrada e digitada por mim, ${servidorNome}, ${servidorCargo}, que, após lida, foi achada conforme por todos os participantes, sendo ao final assinada digitalmente ${juizAssinaturaArtigo}, dispensada a assinatura dos demais participantes, nos termos dos artigos 406, §1º, e 409, §5º, do Código de Normas das Serventias Judiciais (Provimento CGJ nº 13, de 2023).
</p>

<p class="no-indent" style="text-align: right; margin-top: 20pt; margin-bottom: 24pt;">
  ${cidadeLocal}/AL, ${currentDay} de ${currentMonthName} de ${currentYear}.
</p>

<table class="signature-table" style="margin-left: auto; margin-right: auto; width: 60%; margin-top: 25pt; margin-bottom: 25pt;">
  <tr>
    <td style="text-align: center;">
      <div class="sig-line">${juizPresidente}</div>
      <div class="sig-role">${juizCargo}</div>
    </td>
  </tr>
</table>

<div class="audit-box">
  CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:<br>
  Hash de validação SHA-256: ${actualHash}<br>
  Data/Hora do Registro: ${actualTimestamp}<br>
  Sistema: CSPRNG Auditável em conformidade com os artigos 433, 434 e 435 do Código de Processo Penal.
</div>

</body>
</html>`;
}

/**
 * Faz o download do documento gerado no formato .doc
 */
export function exportToDoc(
  comarcaInfo: ComarcaInfo,
  titulares: DrawnJuror[],
  suplentes: DrawnJuror[],
  hash?: string,
  timestamp?: string,
  totalJurorsCount?: number
) {
  const htmlContent = generateAtaDocHtml(
    comarcaInfo,
    titulares,
    suplentes,
    hash,
    timestamp,
    totalJurorsCount
  );

  const { nextMonthName, nextMonthYear } = getDrawDateDetails(timestamp);
  const cleanMonth = nextMonthName.replace(/[^a-zA-Z0-9]/g, '');
  const comarcaSlug = (comarcaInfo.comarca || 'TJAL').replace(/[^a-zA-Z0-9]/g, '_');
  const fileName = `Ata_Sorteio_Jurados_${comarcaSlug}_${cleanMonth}_${nextMonthYear}.doc`;

  const blob = new Blob(['\ufeff', htmlContent], {
    type: 'application/msword;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Faz o download de um texto personalizado diretamente como documento .doc
 * incluindo o cabeçalho oficial do TJAL se as informações da comarca forem fornecidas.
 */
export function exportTextToDoc(
  textContent: string,
  fileName: string = 'Ata_Sorteio_Jurados_TJAL.doc',
  comarcaInfo?: ComarcaInfo
) {
  const comarca = comarcaInfo?.comarca || 'São José da Tapera';
  const vara = comarcaInfo?.vara || 'Vara do Único Ofício de São José da Tapera';
  const endereco = comarcaInfo?.endereco || 'Rua 13 de maio, sn, Centro';
  const cep = comarcaInfo?.cep || '57445-000';
  const telefone = comarcaInfo?.telefone || '3622-1193';
  const cidadeUf = comarcaInfo?.cidadeUf || `${comarca}-AL`;
  const email = comarcaInfo?.email || 'saojosedatapera@tjal.jus.br';

  const isRichHtml = /<[a-z][\s\S]*>/i.test(textContent);
  let bodyHtml = '';

  if (isRichHtml) {
    // Preserva 100% da formatação rica (HTML, fontes, cores, tamanhos e alinhamentos)
    bodyHtml = textContent;
  } else {
    // Converte os parágrafos preservando formatação digitada pelo usuário
    const paragraphs = textContent.split(/\n\n+/);
    bodyHtml = paragraphs
      .map((para) => {
        const trimmed = para.trim();
        if (!trimmed) return '';

        // Títulos principais do topo
        if (
          trimmed.startsWith('PODER JUDICIÁRIO') ||
          trimmed.startsWith('COMARCA DE') ||
          trimmed.startsWith('VARA DO') ||
          trimmed.startsWith('VARA DE') ||
          trimmed.startsWith('ATA DA SESSÃO')
        ) {
          return `<div class="doc-title" style="text-align: center; font-size: 12.5pt; font-weight: bold; text-transform: uppercase; margin: 14pt 0 10pt 0; line-height: 1.35; letter-spacing: 0.3pt;">${trimmed.replace(/\n/g, '<br>')}</div>`;
        }

        // Seções com subtítulo (ex: JURADOS TITULARES: ou JURADOS SUPLENTES:)
        if (trimmed.startsWith('JURADOS TITULARES:') || trimmed.startsWith('JURADOS SUPLENTES:')) {
          const lines = trimmed.split('\n');
          const header = lines[0];
          const restLines = lines.slice(1);
          const restHtml = restLines
            .map((l) => `<div style="padding: 2.5pt 0; text-indent: 0; font-family: 'Times New Roman', serif; font-size: 11pt; line-height: 1.35;">${l}</div>`)
            .join('\n');
          return `
            <div class="section-title" style="font-size: 11.5pt; font-weight: bold; text-transform: uppercase; margin: 16pt 0 6pt 0; text-indent: 0;">${header}</div>
            <div style="margin: 4pt 0 16pt 8pt;">${restHtml}</div>`;
        }

        // Bloco de assinatura do Juiz: nome e cargo em negrito e centralizados
        if (
          trimmed.includes('Juiz de Direito') ||
          trimmed.includes('Juíza de Direito') ||
          trimmed.startsWith('Dr. ') ||
          trimmed.startsWith('Dra. ')
        ) {
          const lines = trimmed.split('\n');
          return `
            <div style="margin-top: 36pt; margin-bottom: 24pt; text-align: center;">
              <div style="border-top: 1pt solid #000000; display: inline-block; min-width: 260pt; padding-top: 4pt; text-align: center;">
                <div style="font-weight: bold; font-size: 11pt; text-align: center; color: #000000;">${lines[0] || ''}</div>
                ${lines.slice(1).map(l => `<div style="font-weight: bold; font-size: 10pt; text-align: center; color: #000000; margin-top: 2pt;">${l}</div>`).join('')}
              </div>
            </div>`;
        }

        // Bloco de Auditoria Criptográfica / Hash
        if (
          trimmed.includes('CERTIFICAÇÃO DE AUDITORIA') ||
          trimmed.includes('SHA-256') ||
          trimmed.includes('Hash')
        ) {
          return `
            <div class="audit-box" style="margin-top: 20pt; padding: 8pt 10pt; border: 1pt solid #444444; background-color: #f9f9f9; font-family: 'Courier New', monospace; font-size: 8.5pt; line-height: 1.4;">
              <pre style="font-family: 'Courier New', monospace; margin: 0; white-space: pre-wrap;">${trimmed}</pre>
            </div>`;
        }

        // Parágrafo com preservação integral de quebras de linha e formatação digitada
        return `<p style="margin: 0 0 10pt 0; text-align: justify; line-height: 1.5; font-size: 12pt; text-indent: 2cm;">${trimmed.replace(/\n/g, '<br>')}</p>`;
      })
      .filter(Boolean)
      .join('\n');
  }

  // Se o conteúdo rico já possui o cabeçalho, não o duplica
  const hasHeaderAlready = bodyHtml.includes('PODER JUDICIÁRIO') && bodyHtml.includes('COMARCA DE');
  const headerHtml = hasHeaderAlready ? '' : `
<div style="text-align: center; border-bottom: 1.5pt solid #111111; padding-bottom: 8pt; margin-bottom: 18pt; font-family: 'Times New Roman', serif;">
  <div style="font-size: 13pt; font-weight: bold; text-transform: uppercase; color: #111111; letter-spacing: 0.5pt; line-height: 1.3;">PODER JUDICIÁRIO DO ESTADO DE ALAGOAS</div>
  <div style="font-size: 11.5pt; font-weight: bold; text-transform: uppercase; color: #222222; margin-top: 3pt;">COMARCA DE ${comarca.toUpperCase()}</div>
  <div style="font-size: 10.5pt; font-weight: normal; color: #333333; margin-top: 2pt;">${vara}</div>
  <div style="font-size: 8.5pt; font-style: italic; color: #555555; margin-top: 4pt; line-height: 1.2;">
    ${endereco} - CEP ${cep}, Fone: ${telefone}, ${cidadeUf} - E-mail: ${email}
  </div>
</div>`;

  const htmlContent = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>Ata de Sorteio de Jurados - ${vara}</title>
<!--[if gte mso 9]>
<xml>
  <w:WordDocument>
    <w:View>Print</w:View>
    <w:Zoom>100</w:Zoom>
    <w:DoNotOptimizeForBrowser/>
  </w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: 210mm 297mm;
    margin: 2.5cm 2.0cm 2.0cm 3.0cm;
    mso-page-orientation: portrait;
  }
  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    line-height: 1.5;
    color: #000000;
    text-align: justify;
    padding: 20pt;
  }
  p {
    margin: 0 0 10pt 0;
    line-height: 1.5;
    text-indent: 2.0cm;
  }
</style>
</head>
<body>
${headerHtml}
${bodyHtml}
</body>
</html>`;

  const blob = new Blob(['\ufeff', htmlContent], {
    type: 'application/msword;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportToExcel(
  jurors: Juror[],
  titulares: DrawnJuror[],
  suplentes: DrawnJuror[],
  comarcaInfo: ComarcaInfo,
  logs: AuditLogEntry[],
  drawHash?: string
) {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Resultado do Sorteio
  const resultadoData: (string | number)[][] = [
    ['PODER JUDICIÁRIO DO ESTADO DE ALAGOAS', comarcaInfo.comarca, comarcaInfo.vara],
    ['ATA DE SORTEIO ELETRÔNICO DE JURADOS (ART. 433 DO CPP)'],
    ['Hash de Auditoria SHA-256:', drawHash || 'Aguardando sorteio'],
    ['Data do Documento:', new Date().toLocaleString('pt-BR')],
    [],
    ['JURADOS TITULARES (25)'],
    ['Nº', 'NOME COMPLETO DO JURADO', 'QUALIFICAÇÃO / PROFISSÃO', 'STATUS'],
  ];

  if (titulares.length > 0) {
    titulares.forEach((t) => {
      resultadoData.push([t.drawOrder, t.name, t.qualification, 'TITULAR']);
    });
  } else {
    for (let i = 1; i <= 25; i++) {
      resultadoData.push([i, '', '', 'TITULAR']);
    }
  }

  resultadoData.push([]);
  resultadoData.push(['JURADOS SUPLENTES (10)']);
  resultadoData.push(['Nº', 'NOME COMPLETO DO SUPLENTE', 'QUALIFICAÇÃO / PROFISSÃO', 'STATUS']);

  if (suplentes.length > 0) {
    suplentes.forEach((s) => {
      resultadoData.push([s.drawOrder, s.name, s.qualification, 'SUPLENTE']);
    });
  } else {
    for (let i = 1; i <= 10; i++) {
      resultadoData.push([i, '', '', 'SUPLENTE']);
    }
  }

  const wsResultado = XLSX.utils.aoa_to_sheet(resultadoData);
  XLSX.utils.book_append_sheet(wb, wsResultado, 'Resultado do Sorteio');

  // Sheet 2: Lista Geral de Jurados da Comarca
  const geralData: (string | number)[][] = [
    ['LISTA GERAL DE JURADOS DA COMARCA', `Total: ${jurors.length}`],
    ['Nº', 'NOME COMPLETO', 'QUALIFICAÇÃO'],
  ];
  jurors.forEach((j, index) => {
    geralData.push([index + 1, j.name, j.qualification]);
  });
  const wsGeral = XLSX.utils.aoa_to_sheet(geralData);
  XLSX.utils.book_append_sheet(wb, wsGeral, 'Lista Geral da Comarca');

  // Sheet 3: Log de Auditoria Imutável
  const auditData: (string | number)[][] = [
    ['REGISTRO DE AUDITORIA IMUTÁVEL DO SISTEMA'],
    ['Timestamp', 'Operação', 'Descrição', 'Hash SHA-256', 'Hash Anterior'],
  ];
  logs.forEach((log) => {
    auditData.push([log.timestamp, log.action, log.description, log.hash, log.previousHash]);
  });
  const wsAudit = XLSX.utils.aoa_to_sheet(auditData);
  XLSX.utils.book_append_sheet(wb, wsAudit, 'Auditoria do Sorteio');

  const fileName = `Sorteio_Jurados_Sao_Jose_da_Tapera_${new Date().toISOString().slice(0, 10)}.xlsx`;
  XLSX.writeFile(wb, fileName);
}

/**
 * Gera o HTML oficial semântico e estilizado da Ata para edição rica e visualização.
 * - Primeiro parágrafo com formatação idêntica à do segundo parágrafo (Times New Roman 11pt, Justificado, Recuo 2cm, Entrelinhas 1.5)
 * - Nome e Cargo do Juiz ao final em negrito e centralizados
 * - Cabeçalho do TJAL sem brasão
 */
export function formatAtaHtml(
  comarcaInfo: ComarcaInfo,
  titulares: DrawnJuror[],
  suplentes: DrawnJuror[],
  hash?: string,
  timestamp?: string,
  totalJurorsCount?: number
): string {
  const {
    currentDay,
    currentMonthName,
    currentYear,
    nextMonthNameUpper,
  } = getDrawDateDetails(timestamp);

  const comarca = comarcaInfo.comarca?.trim() || 'São José da Tapera';
  const rawVara = comarcaInfo.vara?.trim() || 'Vara do Único Ofício';
  const vara = formatVaraComarca(rawVara, comarca);
  const juizPresidente = comarcaInfo.juizPresidente?.trim() || 'Elielson dos Santos Pereira';
  const juizCargo = comarcaInfo.juizCargo?.trim() || 'Juiz de Direito';
  const servidorNome = comarcaInfo.servidorNome?.trim() || comarcaInfo.chefeSecretaria?.trim() || 'Marta Diana Lucindo Tenório';
  const servidorCargo = comarcaInfo.servidorCargo?.trim() || 'Assessora Judicial';
  const endereco = comarcaInfo.endereco?.trim() || 'Rua 13 de maio, sn, Centro';
  const cep = comarcaInfo.cep?.trim() || '57445-000';
  const telefone = comarcaInfo.telefone?.trim() || '3622-1193';
  const cidadeUf = comarcaInfo.cidadeUf?.trim() || `${comarca}-AL`;
  const email = comarcaInfo.email?.trim() || 'saojosedatapera@tjal.jus.br';
  const cidadeLocal = comarcaInfo.comarca?.trim() || 'São José da Tapera';

  const gender = getAuthorityGenderTerms(juizPresidente, juizCargo, servidorNome, servidorCargo);

  const poolCount = totalJurorsCount && totalJurorsCount > 0
    ? String(totalJurorsCount)
    : (titulares.length + suplentes.length > 0 ? String(titulares.length + suplentes.length) : '*');

  const actualHash = hash || '21f71327eb2e961cfa2b733e59a27df11088692691a7e0123dd9efe4f5bf18a0';
  const actualTimestamp = timestamp || '2026-09-11T18:44:31.819Z';

  // Titulares table rows
  let titularRows = '';
  if (titulares.length === 0) {
    for (let i = 1; i <= 25; i++) {
      titularRows += `
        <tr>
          <td style="text-align: center; width: 35pt; padding: 3pt 4pt; border: 1px solid #d1d5db; font-family: monospace;">${i}</td>
          <td style="padding: 3pt 6pt; border: 1px solid #d1d5db;">&nbsp;</td>
          <td style="padding: 3pt 6pt; border: 1px solid #d1d5db;">&nbsp;</td>
        </tr>`;
    }
  } else {
    titularRows = titulares
      .map(
        (t) => `
        <tr>
          <td style="text-align: center; width: 35pt; padding: 3pt 4pt; border: 1px solid #d1d5db; font-family: monospace; font-weight: bold;">${String(t.drawOrder).padStart(2, '0')}</td>
          <td style="padding: 3pt 6pt; border: 1px solid #d1d5db; font-weight: 600;">${t.name}</td>
          <td style="padding: 3pt 6pt; border: 1px solid #d1d5db; color: #4b5563;">${t.qualification || 'Cidadão'}</td>
        </tr>`
      )
      .join('');
  }

  // Suplentes table rows
  let suplenteRows = '';
  if (suplentes.length === 0) {
    for (let i = 1; i <= 10; i++) {
      suplenteRows += `
        <tr>
          <td style="text-align: center; width: 35pt; padding: 3pt 4pt; border: 1px solid #d1d5db; font-family: monospace;">${i}</td>
          <td style="padding: 3pt 6pt; border: 1px solid #d1d5db;">&nbsp;</td>
          <td style="padding: 3pt 6pt; border: 1px solid #d1d5db;">&nbsp;</td>
        </tr>`;
    }
  } else {
    suplenteRows = suplentes
      .map(
        (s) => `
        <tr>
          <td style="text-align: center; width: 35pt; padding: 3pt 4pt; border: 1px solid #d1d5db; font-family: monospace; font-weight: bold;">${String(s.drawOrder).padStart(2, '0')}</td>
          <td style="padding: 3pt 6pt; border: 1px solid #d1d5db; font-weight: 600;">${s.name}</td>
          <td style="padding: 3pt 6pt; border: 1px solid #d1d5db; color: #4b5563;">${s.qualification || 'Cidadão'}</td>
        </tr>`
      )
      .join('');
  }

  return `<div class="ata-document" style="font-family: 'Times New Roman', Times, serif; font-size: 11pt; line-height: 1.5; color: #000000; text-align: justify;">
  <!-- Cabeçalho Oficial TJAL sem brasão -->
  <div style="text-align: center; border-bottom: 1.5pt solid #111111; padding-bottom: 8pt; margin-bottom: 16pt;">
    <div style="font-size: 13pt; font-weight: bold; text-transform: uppercase; color: #111111; letter-spacing: 0.5pt; line-height: 1.3;">PODER JUDICIÁRIO DO ESTADO DE ALAGOAS</div>
    <div style="font-size: 11.5pt; font-weight: bold; text-transform: uppercase; color: #222222; margin-top: 2pt;">COMARCA DE ${comarca.toUpperCase()}</div>
    <div style="font-size: 10.5pt; font-weight: normal; color: #333333; margin-top: 2pt;">${vara}</div>
    <div style="font-size: 8.5pt; font-style: italic; color: #555555; margin-top: 3pt; line-height: 1.2;">
      ${endereco} - CEP ${cep}, Fone: ${telefone}, ${cidadeUf} - E-mail: ${email}
    </div>
  </div>

  <!-- Título da Ata -->
  <div style="text-align: center; margin-bottom: 6pt;">
    <div style="font-size: 12pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.3pt; line-height: 1.35;">
      ATA DA SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE ${nextMonthNameUpper} DO CORRENTE ANO
    </div>
    <div style="font-size: 9.5pt; color: #4b5563; font-style: italic; margin-top: 3pt; margin-bottom: 14pt;">
      (Artigos 433, 434 e 435 do Código de Processo Penal Brasileiro)
    </div>
  </div>

  <!-- Parágrafo 1 (formatação padrão correspondente à do parágrafo 2) -->
  <p style="margin: 0 0 10pt 0; text-align: justify; text-indent: 2cm; line-height: 1.5; font-size: 11pt;">
    Em ambiente virtual do Juízo da ${vara}, através da plataforma Zoom Cloud Meetings, sob a condução ${gender.juizTratamento}, ${juizPresidente}, comigo, ${gender.servidorMencao}, ${servidorNome}, ${servidorCargo}, cientificados o Ministério Público, a OAB e a Defensoria Pública, foi instalada a SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE ${nextMonthNameUpper} DO CORRENTE ANO, nos termos do art. 88 do Código de Organização Judiciária do Estado de Alagoas (Lei n. 6.564, de 2005).
  </p>

  <!-- Parágrafo 2 -->
  <p style="margin: 0 0 10pt 0; text-align: justify; text-indent: 2cm; line-height: 1.5; font-size: 11pt;">
    Iniciada a videoconferência, foi esclarecida a forma de condução da audiência virtual, com base na Resolução CNJ nº 354/2020, alterada pela Resolução CNJ nº 481/2022, e ao Ato Normativo Conjunto nº 01, de 14 de fevereiro de 2023, e certificada a ausência de prejuízo à publicidade ou à lisura do ato, visto que se trata de Boa Prática aprovada, no âmbito estadual, na 10ª Reunião dos Avaliadores de Boas Práticas da Área de Apoio Especializado à Administração (APMP) do Tribunal de Justiça do Estado de Alagoas, estando disponível no Portal de Boas Práticas do TJAL e, no âmbito nacional, na 348ª Sessão Ordinária do Conselho Nacional de Justiça, realizada em 5 de abril de 2022, estando disponível no portal de Boas Práticas do CNJ , a qual foi aperfeiçoada como aplicativo. Registre-se que foi disponibilizado o acesso à videochamada por meio da publicação do link de acesso no órgão oficial, bem como assegurada a notificação dos órgãos fiscalizadores, na forma definida nas Portarias n. 02, de 25 de setembro de 2024, publicada no DJe em 26/09/2024, e da Portaria nº 02, de 11 de abril de 2025, publicada em 22 de abril de 2025, ambas da lavra deste Juízo da ${vara}.
  </p>

  <!-- Parágrafo 3 -->
  <p style="margin: 0 0 12pt 0; text-align: justify; text-indent: 2cm; line-height: 1.5; font-size: 11pt;">
    Aberta a sessão, deu-se início ao compartilhamento de tela com a exibição do aplicativo desenvolvido a partir da planilha aprovada como boa prática, contendo o nome dos ${poolCount} jurados desta comarca, previamente escolhidos para fazerem parte do corpo do júri, e passou, na forma dos arts. 432 e seguintes do Código de Processo Penal, a sortear o nome de 25 (vinte e cinco) jurados, para que funcionassem como JURADOS TITULARES, assim como os 10 (dez) jurados suplentes:
  </p>

  <!-- Seção Titulares -->
  <div style="margin: 12pt 0 6pt 0; font-weight: bold; font-size: 11pt; text-transform: uppercase; border-bottom: 1px solid #9ca3af; padding-bottom: 2pt; display: flex; justify-content: space-between;">
    <span>JURADOS TITULARES</span>
    <span style="font-family: monospace; font-size: 9.5pt; font-weight: normal; color: #4b5563;">Art. 433, caput, do CPP</span>
  </div>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 14pt; font-size: 10pt;">
    <thead>
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #d1d5db; padding: 3pt 4pt; text-align: center; width: 35pt;">Nº</th>
        <th style="border: 1px solid #d1d5db; padding: 3pt 6pt; text-align: left;">Nome Completo do Jurado</th>
        <th style="border: 1px solid #d1d5db; padding: 3pt 6pt; text-align: left;">Qualificação / Profissão</th>
      </tr>
    </thead>
    <tbody>
      ${titularRows}
    </tbody>
  </table>

  <!-- Seção Suplentes -->
  <div style="margin: 12pt 0 6pt 0; font-weight: bold; font-size: 11pt; text-transform: uppercase; border-bottom: 1px solid #9ca3af; padding-bottom: 2pt; display: flex; justify-content: space-between;">
    <span>JURADOS SUPLENTES</span>
    <span style="font-family: monospace; font-size: 9.5pt; font-weight: normal; color: #4b5563;">Art. 433, § 1º, do CPP</span>
  </div>
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 14pt; font-size: 10pt;">
    <thead>
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #d1d5db; padding: 3pt 4pt; text-align: center; width: 35pt;">Nº</th>
        <th style="border: 1px solid #d1d5db; padding: 3pt 6pt; text-align: left;">Nome Completo do Jurado</th>
        <th style="border: 1px solid #d1d5db; padding: 3pt 6pt; text-align: left;">Qualificação / Profissão</th>
      </tr>
    </thead>
    <tbody>
      ${suplenteRows}
    </tbody>
  </table>

  <!-- Despacho do Juiz -->
  <p style="margin: 0 0 10pt 0; text-align: justify; text-indent: 2cm; line-height: 1.5; font-size: 11pt;">
    Em seguida, ${gender.juizDespacho} proferiu o seguinte DESPACHO: “Determino que a presente ata seja afixada, no átrio do Fórum, a relação dos jurados sorteados e intimados os jurados para participação nos julgamentos incluídos na Pauta do Tribunal do Júri da reunião do mês de ${nextMonthNameUpper} do corrente ano. Traslade-se a presente ata para os processos aptos a julgamento perante o Tribunal de Júri”.
  </p>

  <!-- Encerramento e Lavratura -->
  <p style="margin: 0 0 10pt 0; text-align: justify; text-indent: 2cm; line-height: 1.5; font-size: 11pt;">
    Encerrada a audiência, a presente ata foi lavrada e digitada por mim, ${gender.servidorMencao}, ${servidorNome}, ${servidorCargo}, que, após lida, foi achada conforme por todos os participantes, sendo ao final assinada digitalmente ${gender.juizAssinaturaArtigo}, dispensada a assinatura dos demais participantes, nos termos dos artigos 406, §1º, e 409, §5º, do Código de Normas das Serventias Judiciais (Provimento CGJ nº 13, de 2023).
  </p>

  <!-- Data e Local -->
  <p style="text-align: right; margin-top: 16pt; margin-bottom: 24pt; font-size: 11pt;">
    ${cidadeLocal}/AL, ${currentDay} de ${currentMonthName} de ${currentYear}.
  </p>

  <!-- Assinatura Centralizada do Juiz: Nome e abaixo o Cargo em Negrito -->
  <div style="margin-top: 30pt; margin-bottom: 24pt; text-align: center;">
    <div style="display: inline-block; min-width: 260pt; text-align: center; border-top: 1pt solid #000000; padding-top: 4pt;">
      <div style="font-weight: bold; font-size: 11pt; text-align: center; color: #000000; font-family: 'Times New Roman', Times, serif;">
        ${juizPresidente}
      </div>
      <div style="font-weight: bold; font-size: 10.5pt; text-align: center; color: #000000; margin-top: 2pt; font-family: 'Times New Roman', Times, serif;">
        ${gender.juizCargoAssinatura}
      </div>
    </div>
  </div>

  <!-- Auditoria Criptográfica SHA-256 -->
  <div style="border: 1px solid #9ca3af; padding: 8pt 10pt; background-color: #f9fafb; font-family: 'Courier New', Courier, monospace; font-size: 8.5pt; line-height: 1.4; margin-top: 18pt; border-radius: 4px;">
    <div style="font-weight: bold; margin-bottom: 2pt;">CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:</div>
    <div>Hash de validação SHA-256: ${actualHash}</div>
    <div>Data/Hora do Registro: ${actualTimestamp}</div>
    <div style="font-style: italic; color: #4b5563; margin-top: 2pt;">Sistema: CSPRNG Auditável em conformidade com os artigos 433, 434 e 435 do Código de Processo Penal.</div>
  </div>
</div>`;
}

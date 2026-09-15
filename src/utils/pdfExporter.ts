import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ComarcaInfo, DrawnJuror } from '../types';
import { getDrawDateDetails, formatVaraComarca, getAuthorityGenderTerms } from './exporter';
import { AtaDocumentStructure, AtaJurorEntry } from './ataDocument';

/**
 * Renderiza um parágrafo narrativo oficial com:
 * 1. Recuo na primeira linha (indent forense, padrão 12mm)
 * 2. Alinhamento JUSTIFICADO com precisão milimétrica em todas as linhas intermediárias
 * 3. Alinhamento natural à esquerda na última linha (convenção canônica da tipografia judicial)
 * 4. Quebra de linha rigorosamente calculada de acordo com as margens reais da página
 * 5. Controle seguro de quebra de página por linha
 */
function renderJustifiedParagraph(
  doc: jsPDF,
  text: string,
  marginLeft: number,
  contentWidth: number,
  paraIndent: number,
  lineSpacing: number,
  getY: () => number,
  setY: (val: number) => void,
  checkPageBreak: (neededHeight: number) => boolean | void
): void {
  const trimmed = text.trim();
  if (!trimmed) return;

  const words = trimmed.split(/\s+/);
  if (words.length === 0) return;

  const firstLineWidth = contentWidth - paraIndent;
  const otherLineWidth = contentWidth;

  const lines: { text: string; isFirst: boolean }[] = [];
  let currentWords: string[] = [];
  let isFirst = true;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const testWords = [...currentWords, word];
    const testStr = testWords.join(' ');
    const maxW = isFirst ? firstLineWidth : otherLineWidth;

    if (doc.getTextWidth(testStr) <= maxW) {
      currentWords = testWords;
    } else {
      if (currentWords.length > 0) {
        lines.push({ text: currentWords.join(' '), isFirst });
        isFirst = false;
      }
      currentWords = [word];
    }
  }
  if (currentWords.length > 0) {
    lines.push({ text: currentWords.join(' '), isFirst });
  }

  for (let idx = 0; idx < lines.length; idx++) {
    checkPageBreak(lineSpacing + 1);
    const line = lines[idx];
    const isLast = idx === lines.length - 1;
    const startX = line.isFirst ? marginLeft + paraIndent : marginLeft;
    const targetW = line.isFirst ? firstLineWidth : otherLineWidth;

    const wordsInLine = line.text.split(' ');
    const curY = getY();

    if (!isLast && wordsInLine.length > 1) {
      // Justifica perfeitamente entre as margens esquerda e direita usando array [linha, ''] no jsPDF
      doc.text([line.text, ''], startX, curY, { align: 'justify', maxWidth: targetW });
    } else {
      // Última linha do parágrafo: alinhamento natural à esquerda
      doc.text(line.text, startX, curY);
    }
    setY(curY + lineSpacing);
  }

  // Espaçamento entre parágrafos
  setY(getY() + 2.5);
}

/**
 * Utilitário profissional para geração de PDF oficial da Ata de Sorteio de Jurados
 * em conformidade com os artigos 433, 434 e 435 do Código de Processo Penal Brasileiro (CPP),
 * Resoluções do CNJ nº 354/2020 e 481/2022 e Provimento CGJ nº 13/2023.
 */
export function exportToPdf(
  comarcaInfo: ComarcaInfo,
  titulares: DrawnJuror[],
  suplentes: DrawnJuror[],
  hash?: string,
  timestamp?: string,
  totalJurorsCount?: number
) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const {
    currentDay,
    currentMonthName,
    currentYear,
    nextMonthName,
    nextMonthNameUpper,
    nextMonthYear,
  } = getDrawDateDetails(timestamp);

  const comarca = comarcaInfo.comarca?.trim() || 'São José da Tapera';
  const vara = formatVaraComarca(comarcaInfo.vara, comarcaInfo.comarca);
  const juizPresidente = comarcaInfo.juizPresidente?.trim() || 'Dr. ELIELSON DOS SANTOS PEREIRA';
  const juizCargo = comarcaInfo.juizCargo?.trim() || 'Juiz de Direito';
  const servidorNome =
    comarcaInfo.servidorNome?.trim() ||
    comarcaInfo.chefeSecretaria?.trim() ||
    'Marta Diana Lucindo Tenório, M98240';
  const servidorCargo = comarcaInfo.servidorCargo?.trim() || 'Assessora Judicial';
  const endereco = comarcaInfo.endereco?.trim() || 'Rua 13 de maio, sn, Centro';
  const cep = comarcaInfo.cep?.trim() || '57445-000';
  const telefone = comarcaInfo.telefone?.trim() || '3622-1193';
  const cidadeUf = comarcaInfo.cidadeUf?.trim() || `${comarca}-AL`;
  const email = comarcaInfo.email?.trim() || 'saojosedatapera@tjal.jus.br';
  const cidadeLocal = comarcaInfo.comarca?.trim() || 'São José da Tapera';

  const gender = getAuthorityGenderTerms(juizPresidente, juizCargo, servidorNome, servidorCargo);

  const poolCount =
    totalJurorsCount && totalJurorsCount > 0
      ? String(totalJurorsCount)
      : titulares.length + suplentes.length > 0
      ? String(titulares.length + suplentes.length)
      : '150';

  const actualHash = hash || '21f71327eb2e961cfa2b733e59a27df11088692691a7e0123dd9efe4f5bf18a0';
  const actualTimestamp = timestamp || '2026-09-11T18:44:31.819Z';

  const pageWidth = 210;
  const pageHeight = 297;
  const marginLeft = 20;
  const marginRight = 20;
  const marginTop = 14;
  const marginBottom = 20;
  const contentWidth = pageWidth - marginLeft - marginRight;

  let y = marginTop;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
      return true;
    }
    return false;
  };

  // --- CABEÇALHO OFICIAL DO TJAL SEM BRASÃO ---
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.text('PODER JUDICIÁRIO DO ESTADO DE ALAGOAS', pageWidth / 2, y, { align: 'center' });
  y += 5.5;
  doc.setFontSize(11);
  doc.text(`COMARCA DE ${comarca.toUpperCase()}`, pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.text(vara, pageWidth / 2, y, { align: 'center' });
  y += 4.5;
  doc.setFont('times', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(70, 70, 70);
  doc.text(
    `${endereco} - CEP ${cep}, Fone: ${telefone}, ${cidadeUf} - E-mail: ${email}`,
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  doc.setTextColor(0, 0, 0);
  y += 3.5;

  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.6);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 7;

  // --- TÍTULO DA ATA ---
  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  const titleText = `ATA DA SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE ${nextMonthNameUpper} DO CORRENTE ANO`;
  const titleLines = doc.splitTextToSize(titleText, contentWidth);
  doc.text(titleLines, pageWidth / 2, y, { align: 'center' });
  y += titleLines.length * 4.5 + 4;

  // --- TEXTO INTRODUTÓRIO ---
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  const paraIndent = 12;
  const lineSpacing = 4.3;

  const p1 = `Em ambiente virtual do Juízo da ${vara}, através da plataforma Zoom Cloud Meetings, sob a condução ${gender.juizTratamento}, ${juizPresidente}, comigo, ${gender.servidorMencao}, ${servidorNome}, ${servidorCargo}, cientificados o Ministério Público, a OAB e a Defensoria Pública, foi instalada a SESSÃO DE SORTEIO DE JURADOS PARA A REUNIÃO PERIÓDICA DO MÊS DE ${nextMonthNameUpper} DO CORRENTE ANO, nos termos do art. 88 do Código de Organização Judiciária do Estado de Alagoas (Lei n. 6.564, de 2005).`;
  renderJustifiedParagraph(doc, p1, marginLeft, contentWidth, paraIndent, lineSpacing, () => y, (val) => { y = val; }, checkPageBreak);

  const p2 = `Iniciada a videoconferência, foi esclarecida a forma de condução da audiência virtual, com base na Resolução CNJ nº 354/2020, alterada pela Resolução CNJ nº 481/2022, e ao Ato Normativo Conjunto nº 01, de 14 de fevereiro de 2023, e certificada a ausência de prejuízo à publicidade ou à lisura do ato, visto que se trata de Boa Prática aprovada, no âmbito estadual, na 10ª Reunião dos Avaliadores de Boas Práticas da Área de Apoio Especializado à Administração (APMP) do Tribunal de Justiça do Estado de Alagoas, estando disponível no Portal de Boas Práticas do TJAL e, no âmbito nacional, na 348ª Sessão Ordinária do Conselho Nacional de Justiça, realizada em 5 de abril de 2022, estando disponível no portal de Boas Práticas do CNJ , a qual foi aperfeiçoada como aplicativo. Registre-se que foi disponibilizado o acesso à videochamada por meio da publicação do link de acesso no órgão oficial, bem como assegurada a notificação dos órgãos fiscalizadores, na forma definida nas Portarias n. 02, de 25 de setembro de 2024, publicada no DJe em 26/09/2024, e da Portaria nº 02, de 11 de abril de 2025, publicada em 22 de abril de 2025, ambas da lavra deste Juízo da ${vara}.`;
  renderJustifiedParagraph(doc, p2, marginLeft, contentWidth, paraIndent, lineSpacing, () => y, (val) => { y = val; }, checkPageBreak);

  const p3 = `Aberta a sessão, deu-se início ao compartilhamento de tela com a exibição do aplicativo desenvolvido a partir da planilha aprovada como boa prática, contendo o nome dos ${poolCount} jurados desta comarca, previamente escolhidos para fazerem parte do corpo do júri, e passou, na forma dos arts. 432 e seguintes do Código de Processo Penal, a sortear o nome de 25 (vinte e cinco) jurados, para que funcionassem como JURADOS TITULARES, assim como os 10 (dez) jurados suplentes:`;
  renderJustifiedParagraph(doc, p3, marginLeft, contentWidth, paraIndent, lineSpacing, () => y, (val) => { y = val; }, checkPageBreak);
  y += 2;

  // --- TABELA DE TITULARES (25) ---
  const renderTable = (
    title: string,
    legalRef: string,
    list: DrawnJuror[],
    expectedCount: number
  ) => {
    checkPageBreak(20);
    doc.setFont('times', 'bold');
    doc.setFontSize(9.5);
    doc.text(title, marginLeft, y);
    doc.setFont('times', 'italic');
    doc.setFontSize(8);
    doc.text(legalRef, pageWidth - marginRight, y, { align: 'right' });
    y += 3.5;

    // Header da tabela
    const colNumW = 12;
    const colNameW = 95;
    const colQualW = contentWidth - colNumW - colNameW;

    doc.setFillColor(240, 240, 240);
    doc.rect(marginLeft, y, contentWidth, 5, 'F');
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.2);
    doc.rect(marginLeft, y, contentWidth, 5, 'S');

    doc.setFont('times', 'bold');
    doc.setFontSize(8);
    doc.text('Nº', marginLeft + colNumW / 2, y + 3.5, { align: 'center' });
    doc.text('NOME COMPLETO DO JURADO', marginLeft + colNumW + 2, y + 3.5);
    doc.text('QUALIFICAÇÃO / PROFISSÃO', marginLeft + colNumW + colNameW + 2, y + 3.5);
    y += 5;

    doc.setFont('times', 'normal');
    doc.setFontSize(8);

    const countToRender = list.length > 0 ? list.length : expectedCount;
    for (let i = 0; i < countToRender; i++) {
      checkPageBreak(5);
      const juror = list[i];
      const num = juror ? String(juror.drawOrder).padStart(2, '0') : String(i + 1).padStart(2, '0');
      const name = juror ? juror.name : '—';
      const qual = juror ? juror.qualification || 'Cidadão' : '—';

      if (i % 2 === 1) {
        doc.setFillColor(248, 248, 248);
        doc.rect(marginLeft, y, contentWidth, 4.5, 'F');
      }
      doc.setDrawColor(220, 220, 220);
      doc.line(marginLeft, y + 4.5, marginLeft + contentWidth, y + 4.5);

      doc.setFont('times', juror ? 'bold' : 'normal');
      doc.text(num, marginLeft + colNumW / 2, y + 3.2, { align: 'center' });
      doc.setFont('times', 'normal');

      const nameTruncated = doc.splitTextToSize(name, colNameW - 3)[0] || name;
      const qualTruncated = doc.splitTextToSize(qual, colQualW - 3)[0] || qual;

      doc.text(nameTruncated, marginLeft + colNumW + 2, y + 3.2);
      doc.text(qualTruncated, marginLeft + colNumW + colNameW + 2, y + 3.2);
      y += 4.5;
    }
    y += 4;
  };

  renderTable('JURADOS TITULARES', 'Art. 433, caput, do Código de Processo Penal', titulares, 25);
  renderTable('JURADOS SUPLENTES', 'Art. 433, § 1º, do Código de Processo Penal', suplentes, 10);

  // --- DESPACHO DO JUIZ ---
  const despacho = `Em seguida, ${gender.juizDespacho} proferiu o seguinte DESPACHO: “Determino que a presente ata seja afixada, no átrio do Fórum, a relação dos jurados sorteados e intimados os jurados para participação nos julgamentos incluídos na Pauta do Tribunal do Júri da reunião do mês de ${nextMonthNameUpper} do corrente ano. Traslade-se a presente ata para os processos aptos a julgamento perante o Tribunal de Júri”.`;
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  renderJustifiedParagraph(doc, despacho, marginLeft, contentWidth, paraIndent, lineSpacing, () => y, (val) => { y = val; }, checkPageBreak);
  y += 1.5;

  // --- CERTIDÃO DO SERVIDOR ---
  const certidao = `Encerrada a audiência, a presente ata foi lavrada e digitada por mim, ${gender.servidorMencao}, ${servidorNome}, ${servidorCargo}, que, após lida, foi achada conforme por todos os participantes, sendo ao final assinada digitalmente ${gender.juizAssinaturaArtigo}, dispensada a assinatura dos demais participantes, nos termos dos artigos 406, §1º, e 409, §5º, do Código de Normas das Serventias Judiciais (Provimento CGJ nº 13, de 2023).`;
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  renderJustifiedParagraph(doc, certidao, marginLeft, contentWidth, paraIndent, lineSpacing, () => y, (val) => { y = val; }, checkPageBreak);
  y += 2.5;

  // --- LOCAL E DATA ---
  const dateText = `${cidadeLocal}/AL, ${currentDay} de ${currentMonthName} de ${currentYear}.`;
  checkPageBreak(8);
  doc.setFont('times', 'bold');
  doc.text(dateText, pageWidth - marginRight, y, { align: 'right' });
  y += 12;

  // --- ASSINATURA EXCLUSIVA DO JUIZ ---
  checkPageBreak(25);
  doc.setDrawColor(40, 40, 40);
  doc.setLineWidth(0.5);
  const sigLineW = 90;
  const sigX = (pageWidth - sigLineW) / 2;
  doc.line(sigX, y, sigX + sigLineW, y);
  y += 4.5;
  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  doc.text(juizPresidente, pageWidth / 2, y, { align: 'center' });
  y += 4.5;
  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.text(gender.juizCargoAssinatura, pageWidth / 2, y, { align: 'center' });
  y += 8;

  // --- CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA ---
  const auditInnerWidth = contentWidth - 6;
  doc.setFont('times', 'italic');
  doc.setFontSize(6.8);
  const sistemaLines = doc.splitTextToSize(
    'Sistema: CSPRNG Auditável em conformidade com os artigos 433, 434 e 435 do Código de Processo Penal.',
    auditInnerWidth
  );
  const totalAuditLines = 1 + 1 + 1 + sistemaLines.length;
  const auditBoxHeight = 5 + totalAuditLines * 3.5 + 2;

  checkPageBreak(auditBoxHeight + 5);
  doc.setDrawColor(160, 160, 160);
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(marginLeft, y, contentWidth, auditBoxHeight, 1.5, 1.5, 'FD');

  let curAuditY = y + 4;
  doc.setFont('times', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(30, 30, 30);
  doc.text('CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:', marginLeft + 3, curAuditY);
  curAuditY += 3.8;

  doc.setFont('courier', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(50, 50, 50);
  doc.text(`Hash de validação SHA-256: ${actualHash}`, marginLeft + 3, curAuditY);
  curAuditY += 3.5;
  doc.text(`Data/Hora do Registro: ${actualTimestamp}`, marginLeft + 3, curAuditY);
  curAuditY += 3.5;

  doc.setFont('times', 'italic');
  doc.setFontSize(6.8);
  doc.setTextColor(70, 70, 70);
  for (const sLine of sistemaLines) {
    doc.text(sLine, marginLeft + 3, curAuditY);
    curAuditY += 3.5;
  }
  doc.setTextColor(0, 0, 0);
  y += auditBoxHeight + 4;

  // --- RODAPÉ COM PAGINAÇÃO EM TODAS AS PÁGINAS ---
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(marginLeft, pageHeight - 12, pageWidth - marginRight, pageHeight - 12);

    doc.setFont('times', 'normal');
    doc.setFontSize(7.5);
    doc.text(
      `Comarca de ${comarca}/AL • ${vara} • Ata de Sorteio de Jurados`,
      marginLeft,
      pageHeight - 8
    );
    doc.text(`Página ${p} de ${totalPages}`, pageWidth - marginRight, pageHeight - 8, {
      align: 'right',
    });
  }

  // Nome do arquivo para download
  const cleanMonth = nextMonthName.replace(/[^a-zA-Z0-9]/g, '');
  const comarcaSlug = (comarca || 'TJAL').replace(/[^a-zA-Z0-9]/g, '_');
  const fileName = `Ata_Sorteio_Jurados_${comarcaSlug}_${cleanMonth}_${nextMonthYear}.pdf`;
  doc.save(fileName);
}

/**
 * Exporta texto arbitrário (ex: editado pelo usuário na aba "Editar Ata") para PDF
 * garantindo fidelidade ao texto customizado e formatação tabelada perfeita para os jurados.
 */
export function exportCustomTextToPdf(text: string, fileName?: string, comarcaInfo?: ComarcaInfo) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginLeft = 20;
  const marginRight = 20;
  const marginTop = 18;
  const marginBottom = 20;
  const contentWidth = pageWidth - marginLeft - marginRight;

  let y = marginTop;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
      return true;
    }
    return false;
  };

  // Se informações da comarca forem fornecidas, renderiza o cabeçalho oficial do TJAL
  const comarca = comarcaInfo?.comarca?.trim() || 'São José da Tapera';
  const vara = formatVaraComarca(comarcaInfo?.vara, comarcaInfo?.comarca);
  const endereco = comarcaInfo?.endereco?.trim() || 'Rua 13 de maio, sn, Centro';
  const cep = comarcaInfo?.cep?.trim() || '57445-000';
  const telefone = comarcaInfo?.telefone?.trim() || '3622-1193';
  const cidadeUf = comarcaInfo?.cidadeUf?.trim() || `${comarca}-AL`;
  const email = comarcaInfo?.email?.trim() || 'saojosedatapera@tjal.jus.br';

  // --- CABEÇALHO OFICIAL DO TJAL SEM BRASÃO ---
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.text('PODER JUDICIÁRIO DO ESTADO DE ALAGOAS', pageWidth / 2, y, { align: 'center' });
  y += 5.5;
  doc.setFontSize(11);
  doc.text(`COMARCA DE ${comarca.toUpperCase()}`, pageWidth / 2, y, { align: 'center' });
  y += 5;
  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.text(vara, pageWidth / 2, y, { align: 'center' });
  y += 4.5;
  doc.setFont('times', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(70, 70, 70);
  doc.text(
    `${endereco} - CEP ${cep}, Fone: ${telefone}, ${cidadeUf} - E-mail: ${email}`,
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  doc.setTextColor(0, 0, 0);
  y += 3.5;
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.6);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 7;

  // Processa o texto parágrafo a parágrafo com fidelidade total e sem desconfiguração de dados
  const paragraphs = text.split(/\n\n+/);

  paragraphs.forEach((para) => {
    const trimmed = para.trim();
    if (!trimmed) return;

    // 1. Títulos principais centralizados
    if (
      trimmed.startsWith('PODER JUDICIÁRIO') ||
      trimmed.startsWith('COMARCA DE') ||
      trimmed.startsWith('VARA DO') ||
      trimmed.startsWith('VARA DE') ||
      trimmed.startsWith('ATA DA SESSÃO') ||
      trimmed.startsWith('(Artigos 433')
    ) {
      y += 2;
      checkPageBreak(12);
      doc.setFont('times', 'bold');
      doc.setFontSize(10.5);
      const wrapped = doc.splitTextToSize(trimmed, contentWidth);
      doc.text(wrapped, pageWidth / 2, y, { align: 'center' });
      y += wrapped.length * 4.5 + 3;
      return;
    }

    // 2. Seções de Jurados Titulares e Suplentes
    if (trimmed.startsWith('JURADOS TITULARES:') || trimmed.startsWith('JURADOS SUPLENTES:')) {
      const lines = trimmed.split('\n');
      const header = lines[0];
      const jurorLines = lines.slice(1);
      const isSuplente = header.includes('SUPLENTES');

      y += 3;
      checkPageBreak(12);
      doc.setFont('times', 'bold');
      doc.setFontSize(10);
      doc.text(`${header} ${isSuplente ? '(Art. 433, § 1º, do CPP)' : '(Art. 433 do CPP)'}`, marginLeft, y);
      y += 5.5;

      jurorLines.forEach((jLine, index) => {
        const tLine = jLine.trim();
        if (!tLine) return;
        checkPageBreak(5.5);

        // Fundo zebrado sutil
        if (index % 2 === 1) {
          doc.setFillColor(248, 248, 248);
          doc.rect(marginLeft, y - 3.5, contentWidth, 5, 'F');
        }

        const match = tLine.match(/^(\d{1,2})[\.\-\)\s]+([^-\n]+?)(?:\s*-\s*([^\n]+))?$/);
        if (match) {
          doc.setFont('courier', 'bold');
          doc.setFontSize(8.5);
          doc.text(match[1], marginLeft + 3, y);

          doc.setFont('times', 'bold');
          doc.setFontSize(8.5);
          const nameLines = doc.splitTextToSize(match[2].trim(), 82);
          doc.text(nameLines[0] || '', marginLeft + 14, y);

          doc.setFont('times', 'normal');
          doc.setFontSize(8);
          const qualLines = doc.splitTextToSize(match[3]?.trim() || 'Cidadão', 68);
          doc.text(qualLines[0] || '', marginLeft + 98, y);
        } else {
          doc.setFont('times', 'normal');
          doc.setFontSize(8.5);
          const lineWrapped = doc.splitTextToSize(tLine, contentWidth - 6);
          doc.text(lineWrapped, marginLeft + 3, y);
        }

        doc.setDrawColor(225, 225, 225);
        doc.setLineWidth(0.2);
        doc.line(marginLeft, y + 1.5, pageWidth - marginRight, y + 1.5);
        y += 5;
      });

      y += 3;
      return;
    }

    // 3. Assinatura das Autoridades
    if (
      trimmed.includes('Juiz de Direito') ||
      trimmed.includes('Juíza de Direito') ||
      trimmed.startsWith('Dr. ') ||
      trimmed.startsWith('Dra. ')
    ) {
      y += 8;
      checkPageBreak(25);
      doc.setDrawColor(40, 40, 40);
      doc.setLineWidth(0.5);
      const sigLineW = 90;
      const sigX = (pageWidth - sigLineW) / 2;
      doc.line(sigX, y, sigX + sigLineW, y);
      y += 4.5;
      const sigLines = trimmed.split('\n');
      doc.setFont('times', 'bold');
      doc.setFontSize(10.5);
      doc.text(sigLines[0] || '', pageWidth / 2, y, { align: 'center' });
      if (sigLines[1]) {
        y += 4.5;
        doc.setFont('times', 'bold');
        doc.setFontSize(9.5);
        doc.text(sigLines[1], pageWidth / 2, y, { align: 'center' });
      }
      y += 6;
      return;
    }

    // 4. Bloco de Auditoria Criptográfica / Hash
    if (
      trimmed.includes('CERTIFICAÇÃO DE AUDITORIA') ||
      trimmed.includes('SHA-256') ||
      trimmed.includes('Hash')
    ) {
      y += 4;
      checkPageBreak(20);
      doc.setFont('courier', 'normal');
      doc.setFontSize(7.5);
      const wrapped = doc.splitTextToSize(trimmed, contentWidth - 6);
      const boxHeight = wrapped.length * 3.5 + 4;
      doc.setFillColor(248, 248, 248);
      doc.rect(marginLeft, y - 2, contentWidth, boxHeight, 'F');
      doc.setDrawColor(180, 180, 180);
      doc.setLineWidth(0.3);
      doc.rect(marginLeft, y - 2, contentWidth, boxHeight, 'S');
      doc.text(wrapped, marginLeft + 3, y + 2);
      y += boxHeight + 4;
      return;
    }

    // 5. Parágrafo judicial padrão narrativo
    doc.setFont('times', 'normal');
    doc.setFontSize(9.5);
    renderJustifiedParagraph(
      doc,
      trimmed,
      marginLeft,
      contentWidth,
      12,
      4.3,
      () => y,
      (val) => {
        y = val;
      },
      checkPageBreak
    );
  });

  // Numeração de páginas e rodapé oficial
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(marginLeft, pageHeight - 12, pageWidth - marginRight, pageHeight - 12);

    doc.setFont('times', 'normal');
    doc.setFontSize(7.5);
    doc.text(
      `Comarca de ${comarca} • ${vara} • Ata de Sorteio de Jurados`,
      marginLeft,
      pageHeight - 8
    );
    doc.text(`Página ${p} de ${totalPages}`, pageWidth - marginRight, pageHeight - 8, {
      align: 'right',
    });
  }

  const finalName = fileName || `Ata_Sorteio_Jurados_${comarca.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
  doc.save(finalName);
}

/**
 * Exporta o documento exatamente como exibido na "Visualização Oficial" para PDF,
 * garantindo fidelidade visual total (mesma tipografia, formatação de tabelas, cabeçalhos,
 * assinaturas e auditoria criptográfica).
 */
export async function exportOfficialViewToPdf(
  target: HTMLElement | string,
  fileName?: string
): Promise<void> {
  const el = typeof target === 'string' ? document.getElementById(target) : target;
  if (!el) {
    throw new Error(`Elemento de visualização oficial não encontrado: ${target}`);
  }

  const finalFileName = fileName || 'Ata_Sorteio_Jurados.pdf';

  // Container temporário limpo com proporção A4 (largura de 794px = 210mm a 96dpi)
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '794px';
  container.style.maxWidth = '794px';
  container.style.backgroundColor = '#ffffff';
  container.style.color = '#111827';
  container.style.boxSizing = 'border-box';
  container.style.padding = '32px 40px';
  container.style.zIndex = '-9999';
  container.style.opacity = '0.01';
  container.style.pointerEvents = 'none';

  const clone = el.cloneNode(true) as HTMLElement;
  clone.id = 'printable-court-document-pdf-clone';
  clone.style.boxShadow = 'none';
  clone.style.border = 'none';
  clone.style.margin = '0';
  clone.style.padding = '0';
  clone.style.width = '100%';
  clone.style.maxWidth = '100%';
  clone.style.backgroundColor = '#ffffff';
  clone.style.display = 'block';

  container.appendChild(clone);
  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 794,
    });

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = 210;
    const pdfHeight = 297;
    const marginMm = 8;
    const contentWidthMm = pdfWidth - marginMm * 2;
    const contentHeightMm = pdfHeight - marginMm * 2;

    const pageCanvasHeight = (canvas.width * contentHeightMm) / contentWidthMm;
    let renderedHeight = 0;
    let pageIndex = 0;

    while (renderedHeight < canvas.height) {
      if (pageIndex > 0) {
        pdf.addPage();
      }

      const currentSliceHeight = Math.min(pageCanvasHeight, canvas.height - renderedHeight);

      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = canvas.width;
      pageCanvas.height = pageCanvasHeight;
      const ctx = pageCanvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        ctx.drawImage(
          canvas,
          0,
          renderedHeight,
          canvas.width,
          currentSliceHeight,
          0,
          0,
          canvas.width,
          currentSliceHeight
        );

        const imgData = pageCanvas.toDataURL('image/jpeg', 0.96);
        pdf.addImage(
          imgData,
          'JPEG',
          marginMm,
          marginMm,
          contentWidthMm,
          contentHeightMm,
          undefined,
          'FAST'
        );
      }

      renderedHeight += pageCanvasHeight;
      pageIndex++;
    }

    pdf.save(finalFileName);
  } finally {
    document.body.removeChild(container);
  }
}

/**
 * Gera PDF vetorial direto e canônico a partir da Única Fonte Estrutural de Verdade (AtaDocumentStructure).
 * Garante fidelidade visual absoluta:
 * 1. Cabeçalho desenhado uma única vez no topo.
 * 2. Título desenhado em bloco independente.
 * 3. Parágrafo 1 desenhado com a exata mesma formatação, recuo e justificação dos demais parágrafos.
 * 4. Nenhuma herança indevida de negrito, centralização ou uppercase no corpo.
 * 5. Numeração de páginas oficial.
 */
export function exportAtaDocumentToDirectPdf(
  ataDoc: AtaDocumentStructure,
  fileName?: string
): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginLeft = 20;
  const marginRight = 20;
  const marginTop = 14;
  const marginBottom = 20;
  const contentWidth = pageWidth - marginLeft - marginRight;

  let y = marginTop;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
      return true;
    }
    return false;
  };

  // 1. CABEÇALHO INSTITUCIONAL OFICIAL (ÚNICO)
  doc.setFont('times', 'bold');
  doc.setFontSize(12);
  doc.text(ataDoc.header.tribunal, pageWidth / 2, y, { align: 'center' });
  y += 5.5;

  doc.setFontSize(11);
  doc.text(ataDoc.header.comarca, pageWidth / 2, y, { align: 'center' });
  y += 5;

  doc.setFont('times', 'normal');
  doc.setFontSize(10);
  doc.text(ataDoc.header.vara, pageWidth / 2, y, { align: 'center' });
  y += 4.5;

  doc.setFont('times', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(70, 70, 70);
  doc.text(
    `${ataDoc.header.endereco} - CEP ${ataDoc.header.cep}, Fone: ${ataDoc.header.telefone}, ${ataDoc.header.cidadeUf} - E-mail: ${ataDoc.header.email}`,
    pageWidth / 2,
    y,
    { align: 'center' }
  );
  doc.setTextColor(0, 0, 0);
  y += 3.5;

  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.6);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 7;

  // 2. TÍTULO DA ATA (ÚNICO)
  doc.setFont('times', 'bold');
  doc.setFontSize(10.5);
  const titleLines = doc.splitTextToSize(ataDoc.title.mainTitle, contentWidth);
  doc.text(titleLines, pageWidth / 2, y, { align: 'center' });
  y += titleLines.length * 4.5 + 2;

  if (ataDoc.title.legalSubtitle) {
    doc.setFont('times', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text(ataDoc.title.legalSubtitle, pageWidth / 2, y, { align: 'center' });
    doc.setTextColor(0, 0, 0);
    y += 5;
  } else {
    y += 3;
  }

  // 3. CORPO: PARÁGRAFOS NARRATIVOS (TODOS COM A MESMA REGRA: TIMES NORMAL, 9.5PT, JUSTIFICADO, INDENTAÇÃO 12MM)
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  const paraIndent = 12;
  const lineSpacing = 4.3;

  ataDoc.body.introParagraphs.forEach((para) => {
    renderJustifiedParagraph(
      doc,
      para,
      marginLeft,
      contentWidth,
      paraIndent,
      lineSpacing,
      () => y,
      (val) => {
        y = val;
      },
      checkPageBreak
    );
  });

  // 4. JURADOS TITULARES (25)
  const drawJurorTable = (
    sectionTitle: string,
    legalRef: string,
    jurors: AtaJurorEntry[]
  ) => {
    checkPageBreak(25);
    doc.setFont('times', 'bold');
    doc.setFontSize(9.5);
    doc.text(sectionTitle, marginLeft, y);
    doc.setFont('times', 'normal');
    doc.setFontSize(8);
    doc.text(legalRef, pageWidth - marginRight, y, { align: 'right' });
    y += 3.5;

    // Cabeçalho da Tabela
    const colOrderWidth = 10;
    const colQualWidth = 55;
    const colNameWidth = contentWidth - colOrderWidth - colQualWidth;

    doc.setFillColor(242, 242, 242);
    doc.rect(marginLeft, y, contentWidth, 5, 'F');
    doc.setDrawColor(50, 50, 50);
    doc.setLineWidth(0.3);
    doc.rect(marginLeft, y, contentWidth, 5, 'S');

    doc.setFont('times', 'bold');
    doc.setFontSize(8);
    doc.text('Nº', marginLeft + colOrderWidth / 2, y + 3.5, { align: 'center' });
    doc.text('Nome Completo do Jurado', marginLeft + colOrderWidth + 2, y + 3.5);
    doc.text('Qualificação / Profissão', marginLeft + colOrderWidth + colNameWidth + 2, y + 3.5);
    y += 5;

    // Linhas dos jurados
    jurors.forEach((juror, idx) => {
      checkPageBreak(5);
      if (idx % 2 === 1) {
        doc.setFillColor(249, 249, 249);
        doc.rect(marginLeft, y, contentWidth, 4.6, 'F');
      }
      doc.setDrawColor(210, 210, 210);
      doc.setLineWidth(0.2);
      doc.rect(marginLeft, y, contentWidth, 4.6, 'S');

      doc.setFont('times', 'normal');
      doc.setFontSize(8);
      doc.text(String(juror.drawOrder).padStart(2, '0'), marginLeft + colOrderWidth / 2, y + 3.2, { align: 'center' });
      doc.setFont('times', 'bold');
      doc.text(juror.name, marginLeft + colOrderWidth + 2, y + 3.2);
      doc.setFont('times', 'normal');
      doc.text(juror.qualification || 'Cidadão', marginLeft + colOrderWidth + colNameWidth + 2, y + 3.2);

      y += 4.6;
    });
    y += 4;
  };

  drawJurorTable('JURADOS TITULARES', 'Art. 433, caput, do CPP', ataDoc.body.titulares);
  drawJurorTable('JURADOS SUPLENTES', 'Art. 433, § 1º, do CPP', ataDoc.body.suplentes);

  // 5. DESPACHO JUDICIAL
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  renderJustifiedParagraph(
    doc,
    ataDoc.body.despachoText,
    marginLeft,
    contentWidth,
    paraIndent,
    lineSpacing,
    () => y,
    (val) => {
      y = val;
    },
    checkPageBreak
  );
  y += 1.5;

  // 6. CERTIDÃO DA SERVENTIA
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  renderJustifiedParagraph(
    doc,
    ataDoc.body.certidaoText,
    marginLeft,
    contentWidth,
    paraIndent,
    lineSpacing,
    () => y,
    (val) => {
      y = val;
    },
    checkPageBreak
  );
  y += 2.5;

  // 7. DATA E LOCAL
  checkPageBreak(12);
  doc.setFont('times', 'normal');
  doc.setFontSize(9.5);
  doc.text(`${ataDoc.dateLocation.cidadeUf}, ${ataDoc.dateLocation.formattedDate}.`, pageWidth - marginRight, y, {
    align: 'right',
  });
  y += 12;

  // 8. ASSINATURA DA AUTORIDADE
  checkPageBreak(25);
  const sigWidth = 80;
  const sigX = (pageWidth - sigWidth) / 2;
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.4);
  doc.line(sigX, y, sigX + sigWidth, y);
  y += 4;

  doc.setFont('times', 'bold');
  doc.setFontSize(9.5);
  doc.text(ataDoc.signature.nome, pageWidth / 2, y, { align: 'center' });
  y += 4;

  doc.setFont('times', 'normal');
  doc.setFontSize(8.5);
  doc.text(ataDoc.signature.cargo, pageWidth / 2, y, { align: 'center' });
  y += 8;

  // 9. AUDITORIA CRIPTOGRÁFICA
  const auditInnerWidth = contentWidth - 6;
  doc.setFont('times', 'italic');
  doc.setFontSize(7.2);
  const sistemaLines: string[] = doc.splitTextToSize(
    `Sistema: ${ataDoc.audit.sistema}`,
    auditInnerWidth
  );

  const hashLine = `Hash SHA-256: ${ataDoc.audit.hash}`;
  const registroLine = `Data/Hora do Registro: ${ataDoc.audit.timestamp}`;

  const totalAuditLines = 1 + 1 + 1 + sistemaLines.length;
  const auditBoxHeight = 5 + totalAuditLines * 3.6 + 2;

  checkPageBreak(auditBoxHeight + 4);
  doc.setDrawColor(180, 180, 180);
  doc.setFillColor(249, 250, 251);
  doc.roundedRect(marginLeft, y, contentWidth, auditBoxHeight, 1.2, 1.2, 'FD');

  let curAuditY = y + 4;
  doc.setFont('times', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(30, 30, 30);
  doc.text('CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA E INTEGRIDADE:', marginLeft + 3, curAuditY);
  curAuditY += 3.8;

  doc.setFont('courier', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(50, 50, 50);
  doc.text(hashLine, marginLeft + 3, curAuditY);
  curAuditY += 3.6;
  doc.text(registroLine, marginLeft + 3, curAuditY);
  curAuditY += 3.6;

  doc.setFont('times', 'italic');
  doc.setFontSize(7.2);
  doc.setTextColor(70, 70, 70);
  for (const sLine of sistemaLines) {
    doc.text(sLine, marginLeft + 3, curAuditY);
    curAuditY += 3.6;
  }
  doc.setTextColor(0, 0, 0);
  y += auditBoxHeight + 4;

  // 10. PAGINAÇÃO OFICIAL NO RODAPÉ
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(marginLeft, pageHeight - 12, pageWidth - marginRight, pageHeight - 12);

    doc.setFont('times', 'normal');
    doc.setFontSize(7.5);
    doc.text(
      `${ataDoc.header.comarca} • ${ataDoc.header.vara} • Ata de Sorteio`,
      marginLeft,
      pageHeight - 8
    );
    doc.text(`Página ${p} de ${totalPages}`, pageWidth - marginRight, pageHeight - 8, {
      align: 'right',
    });
  }

  const name = fileName || `Ata_Sorteio_${ataDoc.header.comarca.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
  doc.save(name);
}


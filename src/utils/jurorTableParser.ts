/**
 * Utilitário de análise e formatação para tabelas de jurados em textos personalizados de Atas.
 * Garante que a tabela com nomes e qualificações dos jurados nunca fique desconfigurada,
 * mesmo após edições livres do usuário.
 */

export interface ParsedJurorRow {
  number: string;
  name: string;
  qualification: string;
}

/**
 * Identifica se uma linha individual representa um jurado numerado.
 * Suporta formatos:
 * "01. FULANO DE TAL - Professor"
 * "1. SICRANO SILVA – Agricultor"
 * "01 - BELTRANO SOUZA (Comerciante)"
 * "Nº 01. NOME COMPLETO"
 */
export function parseJurorLine(line: string): ParsedJurorRow | null {
  const trimmed = line.trim();
  if (!trimmed) return null;

  // Ignora linhas que são claramente títulos ou certificações
  if (
    trimmed.startsWith('PODER JUDICIÁRIO') ||
    trimmed.startsWith('COMARCA DE') ||
    trimmed.startsWith('VARA DO') ||
    trimmed.startsWith('ATA DA SESSÃO') ||
    trimmed.startsWith('CERTIFICAÇÃO') ||
    trimmed.startsWith('Hash de validação')
  ) {
    return null;
  }

  const match = trimmed.match(/^(?:Nº\s*)?(\d{1,2})[\.\-\)]\s*(.+)$/i);
  if (!match) return null;

  const number = match[1].padStart(2, '0');
  const rest = match[2].trim();

  // Separador de travessão: "Nome - Qualificação" ou "Nome – Qualificação"
  const dashMatch = rest.match(/^(.+?)\s+[\-\–\—]\s+(.+)$/);
  if (dashMatch) {
    return {
      number,
      name: dashMatch[1].trim(),
      qualification: dashMatch[2].trim() || 'Cidadão',
    };
  }

  // Separador de parênteses: "Nome (Qualificação)"
  const parenMatch = rest.match(/^(.+?)\s*\((.+?)\)$/);
  if (parenMatch) {
    return {
      number,
      name: parenMatch[1].trim(),
      qualification: parenMatch[2].trim() || 'Cidadão',
    };
  }

  return {
    number,
    name: rest,
    qualification: 'Cidadão',
  };
}

export type CustomAtaBlockType =
  | 'doc_title'
  | 'section_header'
  | 'juror_table'
  | 'judge_signature'
  | 'audit_box'
  | 'paragraph';

export interface CustomAtaBlock {
  type: CustomAtaBlockType;
  title?: string;
  text?: string;
  jurors?: ParsedJurorRow[];
}

/**
 * Converte o texto completo da ata editada em blocos semânticos e estruturados,
 * identificando listas de jurados e convertendo-as automaticamente em tabelas perfeitas.
 */
export function parseCustomAtaBlocks(fullText: string): CustomAtaBlock[] {
  if (!fullText) return [];

  // Divide o texto por parágrafos duplos ou quebras de bloco
  const rawParagraphs = fullText.split(/\n\s*\n/);
  const blocks: CustomAtaBlock[] = [];

  for (const rawP of rawParagraphs) {
    const trimmed = rawP.trim();
    if (!trimmed) continue;

    // Cabeçalhos que já estão no cabeçalho gráfico oficial
    if (
      trimmed.startsWith('PODER JUDICIÁRIO') ||
      trimmed.startsWith('COMARCA DE') ||
      trimmed.startsWith('VARA DO')
    ) {
      continue;
    }

    // Título Principal da Ata
    if (trimmed.startsWith('ATA DA SESSÃO DE SORTEIO')) {
      blocks.push({
        type: 'doc_title',
        text: trimmed,
      });
      continue;
    }

    // Assinatura do Juiz
    if (
      trimmed.startsWith('Dr. ') ||
      trimmed.startsWith('Dra. ') ||
      trimmed.includes('Juiz de Direito') ||
      trimmed.includes('Juíza de Direito')
    ) {
      blocks.push({
        type: 'judge_signature',
        text: trimmed,
      });
      continue;
    }

    // Caixa de auditoria SHA-256
    if (trimmed.startsWith('CERTIFICAÇÃO DE AUDITORIA CRIPTOGRÁFICA')) {
      blocks.push({
        type: 'audit_box',
        text: trimmed,
      });
      continue;
    }

    // Verifica se contém jurados titulares ou suplentes
    const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);
    let sectionTitle = '';
    const jurorRows: ParsedJurorRow[] = [];
    const nonJurorLines: string[] = [];

    for (const line of lines) {
      if (line.startsWith('JURADOS TITULARES:')) {
        sectionTitle = 'JURADOS TITULARES';
        continue;
      }
      if (line.startsWith('JURADOS SUPLENTES:')) {
        sectionTitle = 'JURADOS SUPLENTES';
        continue;
      }

      const parsed = parseJurorLine(line);
      if (parsed) {
        jurorRows.push(parsed);
      } else {
        nonJurorLines.push(line);
      }
    }

    // Se encontramos jurados (pelo menos 1 linha numerada)
    if (jurorRows.length > 0) {
      // Se houver texto prévio antes dos jurados
      if (nonJurorLines.length > 0 && !sectionTitle) {
        blocks.push({
          type: 'paragraph',
          text: nonJurorLines.join('\n'),
        });
      }

      // Adiciona o cabeçalho da seção se houver
      if (sectionTitle) {
        blocks.push({
          type: 'section_header',
          title: sectionTitle,
        });
      }

      // Adiciona o bloco de tabela de jurados
      blocks.push({
        type: 'juror_table',
        title: sectionTitle,
        jurors: jurorRows,
      });
      continue;
    }

    // Caso seja apenas o título da seção isolado
    if (trimmed === 'JURADOS TITULARES:' || trimmed === 'JURADOS SUPLENTES:') {
      blocks.push({
        type: 'section_header',
        title: trimmed.replace(':', ''),
      });
      continue;
    }

    // Parágrafo textual comum
    blocks.push({
      type: 'paragraph',
      text: trimmed,
    });
  }

  return blocks;
}

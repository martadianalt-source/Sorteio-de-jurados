import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  Undo,
  Redo,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  List,
  ListOrdered,
  Highlighter,
  Palette,
  Eraser,
  Minus,
  Check,
  RotateCcw,
  Sparkles,
  ChevronDown
} from 'lucide-react';

interface RichTextEditorProps {
  initialHtml: string;
  onChange: (html: string) => void;
  onSave?: () => void;
  onReset?: () => void;
}

const FONT_FAMILIES = [
  { label: 'Times New Roman (Padrão)', value: "'Times New Roman', Times, serif" },
  { label: 'Arial', value: "Arial, Helvetica, sans-serif" },
  { label: 'Georgia', value: "Georgia, serif" },
  { label: 'Garamond', value: "Garamond, serif" },
  { label: 'Calibri', value: "Calibri, sans-serif" },
  { label: 'Courier New', value: "'Courier New', Courier, monospace" },
];

const FONT_SIZES = [
  { label: '8 pt', size: '1', cssSize: '8pt' },
  { label: '9 pt', size: '2', cssSize: '9pt' },
  { label: '10 pt', size: '2', cssSize: '10pt' },
  { label: '11 pt (Padrão)', size: '3', cssSize: '11pt' },
  { label: '12 pt', size: '3', cssSize: '12pt' },
  { label: '14 pt', size: '4', cssSize: '14pt' },
  { label: '16 pt', size: '5', cssSize: '16pt' },
  { label: '18 pt', size: '5', cssSize: '18pt' },
  { label: '24 pt', size: '6', cssSize: '24pt' },
];

const TEXT_COLORS = [
  { label: 'Preto', color: '#000000' },
  { label: 'Grafite Escuro', color: '#333333' },
  { label: 'Azul Judiciário', color: '#002b66' },
  { label: 'Azul Escuro', color: '#1e3a8a' },
  { label: 'Vermelho Escuro', color: '#991b1b' },
  { label: 'Verde Floresta', color: '#065f46' },
  { label: 'Roxo Imperial', color: '#581c87' },
  { label: 'Marrom', color: '#78350f' },
];

const HIGHLIGHT_COLORS = [
  { label: 'Sem destaque', color: 'transparent' },
  { label: 'Amarelo suave', color: '#fef08a' },
  { label: 'Verde suave', color: '#bbf7d0' },
  { label: 'Azul suave', color: '#bfdbfe' },
  { label: 'Rosa suave', color: '#fbcfe8' },
  { label: 'Laranja suave', color: '#fed7aa' },
];

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  initialHtml,
  onChange,
  onSave,
  onReset,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeFont, setActiveFont] = useState<string>("'Times New Roman', Times, serif");
  const [activeSize, setActiveSize] = useState<string>('11pt');
  const [activeLineHeight, setActiveLineHeight] = useState<string>('1.5');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Carrega conteúdo inicial se estiver vazio
  useEffect(() => {
    if (editorRef.current && initialHtml) {
      if (editorRef.current.innerHTML !== initialHtml) {
        editorRef.current.innerHTML = initialHtml;
      }
    }
  }, [initialHtml]);

  // Executa comandos de edição no documento
  const executeCommand = (command: string, value: string | undefined = undefined) => {
    if (!editorRef.current) return;
    editorRef.current.focus();
    document.execCommand(command, false, value);
    handleContentChange();
  };

  const handleContentChange = useCallback(() => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    onChange(html);
  }, [onChange]);

  // Aplica Família de Fonte
  const applyFontFamily = (font: string) => {
    setActiveFont(font);
    executeCommand('fontName', font);
  };

  // Aplica Tamanho de Fonte selecionando o elemento ou aplicando CSS
  const applyFontSize = (sizeItem: typeof FONT_SIZES[0]) => {
    setActiveSize(sizeItem.cssSize);
    if (!editorRef.current) return;
    editorRef.current.focus();

    const selection = window.getSelection();
    if (selection && !selection.isCollapsed && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.fontSize = sizeItem.cssSize;
      span.appendChild(range.extractContents());
      range.insertNode(span);
      selection.removeAllRanges();
      const newRange = document.createRange();
      newRange.selectNodeContents(span);
      selection.addRange(newRange);
      handleContentChange();
    } else {
      executeCommand('fontSize', sizeItem.size);
    }
  };

  // Aplica Cor do Texto
  const applyTextColor = (color: string) => {
    executeCommand('foreColor', color);
    setShowColorPicker(false);
  };

  // Aplica Marca-texto
  const applyHighlight = (color: string) => {
    executeCommand('hiliteColor', color);
    setShowHighlightPicker(false);
  };

  // Aplica Espaçamento entre Linhas
  const applyLineHeight = (lh: string) => {
    setActiveLineHeight(lh);
    if (!editorRef.current) return;
    editorRef.current.focus();

    const selection = window.getSelection();
    if (selection && selection.anchorNode) {
      let node: Node | null = selection.anchorNode;
      while (node && node !== editorRef.current && node.nodeName !== 'P' && node.nodeName !== 'DIV') {
        node = node.parentNode;
      }
      if (node && (node.nodeName === 'P' || node.nodeName === 'DIV')) {
        (node as HTMLElement).style.lineHeight = lh;
        handleContentChange();
        return;
      }
    }

    // Fallback: se nenhum parágrafo específico foi selecionado, aplica ao editor inteiro ou parágrafos
    const paras = editorRef.current.querySelectorAll('p, div');
    paras.forEach((p) => {
      (p as HTMLElement).style.lineHeight = lh;
    });
    handleContentChange();
  };

  // Pré-definição rápida de Parágrafo Judicial (Times New Roman 11pt, Justificado, Recuo 2cm, Entrelinhas 1.5)
  const applyJudicialParagraphPreset = () => {
    if (!editorRef.current) return;
    editorRef.current.focus();

    const selection = window.getSelection();
    if (selection && selection.anchorNode) {
      let node: Node | null = selection.anchorNode;
      while (node && node !== editorRef.current && node.nodeName !== 'P' && node.nodeName !== 'DIV') {
        node = node.parentNode;
      }
      if (node && (node.nodeName === 'P' || node.nodeName === 'DIV')) {
        const el = node as HTMLElement;
        el.style.fontFamily = "'Times New Roman', Times, serif";
        el.style.fontSize = '11pt';
        el.style.textAlign = 'justify';
        el.style.textIndent = '2cm';
        el.style.lineHeight = '1.5';
        el.style.margin = '0 0 10pt 0';
        handleContentChange();
        return;
      }
    }
    executeCommand('justifyFull');
  };

  // Pré-definição rápida de Assinatura Centralizada (Nome e Cargo em Negrito Centralizados)
  const applySignaturePreset = () => {
    if (!editorRef.current) return;
    editorRef.current.focus();

    const selection = window.getSelection();
    if (selection && selection.anchorNode) {
      let node: Node | null = selection.anchorNode;
      while (node && node !== editorRef.current && node.nodeName !== 'P' && node.nodeName !== 'DIV') {
        node = node.parentNode;
      }
      if (node && (node.nodeName === 'P' || node.nodeName === 'DIV')) {
        const el = node as HTMLElement;
        el.style.textAlign = 'center';
        el.style.fontWeight = 'bold';
        el.style.textIndent = '0';
        el.style.lineHeight = '1.3';
        handleContentChange();
        return;
      }
    }
    executeCommand('justifyCenter');
    executeCommand('bold');
  };

  const handleManualSave = () => {
    if (onSave) {
      onSave();
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    }
  };

  return (
    <div className="flex flex-col h-full bg-neutral-100 rounded-lg border border-neutral-300 shadow-sm overflow-hidden">
      {/* Barra de Ferramentas Estilo Google Docs */}
      <div className="bg-white border-b border-neutral-200 px-3 py-2 flex flex-wrap items-center gap-1 sm:gap-1.5 shadow-2xs z-10 select-none">
        {/* Desfazer / Refazer */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5 space-x-0.5">
          <button
            type="button"
            onClick={() => executeCommand('undo')}
            title="Desfazer (Ctrl+Z)"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('redo')}
            title="Refazer (Ctrl+Y)"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <Redo className="w-4 h-4" />
          </button>
        </div>

        {/* Família de Fonte */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5">
          <select
            value={activeFont}
            onChange={(e) => applyFontFamily(e.target.value)}
            title="Fonte"
            className="text-xs h-7 px-2 border border-neutral-200 rounded bg-white hover:border-neutral-400 focus:outline-none focus:border-neutral-700 cursor-pointer font-medium text-neutral-800"
          >
            {FONT_FAMILIES.map((f) => (
              <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>
                {f.label}
              </option>
            ))}
          </select>
        </div>

        {/* Tamanho da Fonte */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5">
          <select
            value={activeSize}
            onChange={(e) => {
              const found = FONT_SIZES.find((s) => s.cssSize === e.target.value);
              if (found) applyFontSize(found);
            }}
            title="Tamanho da Fonte"
            className="text-xs h-7 px-1.5 border border-neutral-200 rounded bg-white hover:border-neutral-400 focus:outline-none focus:border-neutral-700 cursor-pointer font-medium text-neutral-800"
          >
            {FONT_SIZES.map((s) => (
              <option key={s.cssSize} value={s.cssSize}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Estilos: Negrito, Itálico, Sublinhado, Tachado */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5 space-x-0.5">
          <button
            type="button"
            onClick={() => executeCommand('bold')}
            title="Negrito (Ctrl+B)"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-800 font-bold transition-colors cursor-pointer"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('italic')}
            title="Itálico (Ctrl+I)"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-800 italic transition-colors cursor-pointer"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('underline')}
            title="Sublinhado (Ctrl+U)"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-800 underline transition-colors cursor-pointer"
          >
            <Underline className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('strikeThrough')}
            title="Tachado"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
          >
            <Strikethrough className="w-4 h-4" />
          </button>
        </div>

        {/* Cor do Texto e Realce */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5 space-x-1 relative">
          {/* Cor do Texto */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowColorPicker(!showColorPicker);
                setShowHighlightPicker(false);
              }}
              title="Cor do Texto"
              className="p-1.5 rounded hover:bg-neutral-100 text-neutral-800 flex items-center gap-0.5 transition-colors cursor-pointer"
            >
              <Palette className="w-4 h-4" />
              <ChevronDown className="w-3 h-3 text-neutral-500" />
            </button>
            {showColorPicker && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-neutral-300 rounded shadow-lg p-2 z-50 w-44">
                <div className="text-[10px] font-bold text-neutral-500 uppercase mb-1">Cor do Texto</div>
                <div className="grid grid-cols-4 gap-1.5 mb-2">
                  {TEXT_COLORS.map((tc) => (
                    <button
                      key={tc.color}
                      type="button"
                      onClick={() => applyTextColor(tc.color)}
                      title={tc.label}
                      className="w-7 h-7 rounded border border-neutral-300 hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: tc.color }}
                    />
                  ))}
                </div>
                <div className="pt-1.5 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-[10px] text-neutral-600">Personalizada:</span>
                  <input
                    type="color"
                    onChange={(e) => applyTextColor(e.target.value)}
                    className="w-6 h-6 p-0 border border-neutral-300 rounded cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Marca-texto / Realce */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowHighlightPicker(!showHighlightPicker);
                setShowColorPicker(false);
              }}
              title="Cor de Destaque / Marca-texto"
              className="p-1.5 rounded hover:bg-neutral-100 text-neutral-800 flex items-center gap-0.5 transition-colors cursor-pointer"
            >
              <Highlighter className="w-4 h-4" />
              <ChevronDown className="w-3 h-3 text-neutral-500" />
            </button>
            {showHighlightPicker && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-neutral-300 rounded shadow-lg p-2 z-50 w-40">
                <div className="text-[10px] font-bold text-neutral-500 uppercase mb-1">Marca-texto</div>
                <div className="grid grid-cols-3 gap-1.5">
                  {HIGHLIGHT_COLORS.map((hc) => (
                    <button
                      key={hc.label}
                      type="button"
                      onClick={() => applyHighlight(hc.color)}
                      title={hc.label}
                      className="h-6 rounded border border-neutral-300 text-[10px] font-medium hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
                      style={{ backgroundColor: hc.color === 'transparent' ? '#ffffff' : hc.color }}
                    >
                      {hc.color === 'transparent' ? '✕' : ''}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Alinhamento de Parágrafo */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5 space-x-0.5">
          <button
            type="button"
            onClick={() => executeCommand('justifyLeft')}
            title="Alinhar à Esquerda"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('justifyCenter')}
            title="Centralizar"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('justifyRight')}
            title="Alinhar à Direita"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <AlignRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('justifyFull')}
            title="Justificar (Padrão Judicial)"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-900 bg-neutral-100 transition-colors cursor-pointer"
          >
            <AlignJustify className="w-4 h-4" />
          </button>
        </div>

        {/* Espaçamento entre Linhas (Line-Height) */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5">
          <select
            value={activeLineHeight}
            onChange={(e) => applyLineHeight(e.target.value)}
            title="Espaçamento entre linhas"
            className="text-xs h-7 px-1.5 border border-neutral-200 rounded bg-white hover:border-neutral-400 focus:outline-none focus:border-neutral-700 cursor-pointer text-neutral-800"
          >
            <option value="1.0">1.0 (Simples)</option>
            <option value="1.15">1.15</option>
            <option value="1.5">1.5 (Padrão Ata)</option>
            <option value="2.0">2.0 (Duplo)</option>
          </select>
        </div>

        {/* Recuo e Listas */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5 space-x-0.5">
          <button
            type="button"
            onClick={() => executeCommand('outdent')}
            title="Diminuir Recuo"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <Outdent className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('indent')}
            title="Aumentar Recuo (Tab)"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <Indent className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('insertUnorderedList')}
            title="Lista com Marcadores"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('insertOrderedList')}
            title="Lista Numerada"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
        </div>

        {/* Formatos Rápidos Judiciais */}
        <div className="flex items-center border-r border-neutral-200 pr-1.5 mr-0.5 space-x-1">
          <button
            type="button"
            onClick={applyJudicialParagraphPreset}
            title="Formatar Parágrafo Judicial (Justificado, Recuo 2cm, Times 11pt, Entrelinhas 1.5)"
            className="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded text-[11px] font-medium flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Sparkles className="w-3 h-3 text-amber-700" />
            <span>Parágrafo Judicial</span>
          </button>

          <button
            type="button"
            onClick={applySignaturePreset}
            title="Formatar Assinatura do Juiz (Nome e Cargo em Negrito Centralizados)"
            className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 rounded text-[11px] font-medium flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Assinatura em Negrito</span>
          </button>
        </div>

        {/* Limpar Formatação e Linha Divisória */}
        <div className="flex items-center space-x-0.5">
          <button
            type="button"
            onClick={() => executeCommand('removeFormat')}
            title="Limpar Formatação"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <Eraser className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => executeCommand('insertHorizontalRule')}
            title="Inserir Linha Divisória"
            className="p-1.5 rounded hover:bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Botão de Salvar Rápido na Barra */}
        {onSave && (
          <div className="ml-auto flex items-center gap-1.5">
            {onReset && (
              <button
                type="button"
                onClick={onReset}
                title="Restaurar Versão Padrão do Sistema"
                className="px-2.5 py-1 text-xs text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded border border-neutral-300 transition-colors cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Restaurar Padrão</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleManualSave}
              className={`px-3 py-1 text-xs font-semibold rounded flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                savedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-900 hover:bg-neutral-800 text-white'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{savedSuccess ? 'Salvo no Documento!' : 'Salvar Alterações'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Área da Folha do Documento (Visualização A4 com Margens Oficiais) */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center bg-neutral-200/80">
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={handleContentChange}
          onBlur={handleContentChange}
          className="bg-white text-neutral-950 p-8 sm:p-14 shadow-lg border border-neutral-300 w-full max-w-[820px] min-h-[1050px] outline-none transition-all"
          style={{
            fontFamily: "'Times New Roman', Times, serif",
            fontSize: '11pt',
            lineHeight: 1.5,
            color: '#000000',
            textAlign: 'justify',
          }}
        />
      </div>

      {/* Barra de Status Inferior */}
      <div className="bg-neutral-50 border-t border-neutral-200 px-4 py-2 text-[11px] text-neutral-500 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span>
            Edição Rica ativa: use os seletores acima para alterar tamanhos, cores, fontes, recuos e parágrafos.
          </span>
          <span className="hidden md:inline text-neutral-400">•</span>
          <span className="hidden md:inline text-neutral-600">
            Atalhos suportados: <strong>Ctrl+B</strong> (Negrito), <strong>Ctrl+I</strong> (Itálico), <strong>Ctrl+U</strong> (Sublinhado), <strong>Ctrl+Z</strong> (Desfazer)
          </span>
        </div>
        <div className="text-emerald-700 font-medium flex items-center gap-1">
          <Check className="w-3 h-3" />
          <span>Formatação preservada integralmente para exportação</span>
        </div>
      </div>
    </div>
  );
};

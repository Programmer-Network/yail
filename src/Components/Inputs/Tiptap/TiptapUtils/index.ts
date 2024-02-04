import { Editor } from "@tiptap/react";

class TiptapUtils {
  constructor() {}

  isEmptySelection(editor: Editor): boolean {
    return editor.state.selection.empty;
  }

  setEmptyContent() {
    return JSON.stringify({
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: []
        }
      ]
    });
  }

  hasSelection(editor: Editor): boolean {
    return editor.state.selection.from !== editor.state.selection.to;
  }

  startsWithCharAtCursor(editor: Editor, char: string): boolean {
    const { doc, selection } = editor.state;

    const parent = doc.resolve(selection.from).parent;
    if (!parent || !parent.firstChild) {
      return false;
    }

    return parent.firstChild.textContent.startsWith(char);
  }

  isCursorAtStartOfEmptyLine(editor: Editor): boolean {
    const { doc, selection } = editor.state;

    if (this.hasSelection(editor)) {
      return false;
    }

    const parent = doc.resolve(selection.from).parent;
    if (parent.content.size !== 0) {
      return false;
    }

    const isCursorAtStart = selection.from === selection.$from.start();
    return isCursorAtStart;
  }
}

export const tiptapUtils = new TiptapUtils();

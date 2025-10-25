import { Editor } from "@tiptap/react";

class TiptapUtils {
  public static isEmptySelection(editor: Editor): boolean {
    return editor.state.selection.empty;
  }

  public static setEmptyContent() {
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

  public static hasSelection(editor: Editor): boolean {
    return editor.state.selection.from !== editor.state.selection.to;
  }

  public static startsWithCharAtCursor(editor: Editor, char: string): boolean {
    const { doc, selection } = editor.state;

    const parent = doc.resolve(selection.from).parent;
    if (!parent || !parent.firstChild) {
      return false;
    }

    return parent.firstChild.textContent.startsWith(char);
  }

  public static isCursorAtStartOfEmptyLine(editor: Editor): boolean {
    const { doc, selection } = editor.state;

    if (editor.state.selection.from !== editor.state.selection.to) {
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

export { TiptapUtils };

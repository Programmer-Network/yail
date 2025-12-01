import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { CustomTaskItemNodeView } from "./CustomTaskItem";
import { ICustomTaskItemOptions } from "./CustomTaskItem.types";

export const CustomTaskItemExtension = Node.create<ICustomTaskItemOptions>({
  name: "taskItem",

  addOptions() {
    return {
      nested: true,
      HTMLAttributes: {}
    };
  },

  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },

  defining: true,

  addAttributes() {
    return {
      checked: {
        default: false,
        keepOnSplit: false,
        parseHTML: (element: HTMLElement) =>
          element.getAttribute("data-checked") === "true",
        renderHTML: (attributes: Record<string, unknown>) => ({
          "data-checked": attributes["checked"] === true
        })
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: `li[data-type="taskItem"]`
      }
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      "li",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": "taskItem",
        "data-checked": node.attrs["checked"] === true
      }),
      0
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(CustomTaskItemNodeView);
  },

  addKeyboardShortcuts() {
    const shortcuts: Record<string, () => boolean> = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };

    if (!this.options.nested) {
      return shortcuts;
    }

    return {
      ...shortcuts,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    };
  },

  addInputRules() {
    return [];
  }
});

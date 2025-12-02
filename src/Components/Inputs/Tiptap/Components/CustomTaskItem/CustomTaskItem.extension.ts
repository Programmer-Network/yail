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
    const handleEnter = (): boolean => {
      const { state } = this.editor;
      const { selection } = state;
      const { $from, empty } = selection;

      if (!empty) {
        return this.editor.commands.splitListItem(this.name);
      }

      // Find the task item we're in
      let taskItemDepth: number | null = null;
      let taskListDepth: number | null = null;

      for (let depth = $from.depth; depth > 0; depth--) {
        const node = $from.node(depth);
        if (node.type.name === this.name && taskItemDepth === null) {
          taskItemDepth = depth;
        }
        if (node.type.name === "taskList") {
          taskListDepth = depth;
          break;
        }
      }

      if (taskItemDepth === null || taskListDepth === null) {
        return this.editor.commands.splitListItem(this.name);
      }

      // Check if the paragraph inside task item is empty
      const paragraph = $from.parent;
      const isEmptyParagraph =
        paragraph.type.name === "paragraph" && paragraph.content.size === 0;

      if (!isEmptyParagraph) {
        return this.editor.commands.splitListItem(this.name);
      }

      // Check if we're in a nested task list
      const isNested = taskListDepth > 1;

      if (isNested) {
        // If nested, lift the item (unindent)
        return this.editor.commands.liftListItem(this.name);
      }

      // At top level with empty item - exit the task list
      const taskListNode = $from.node(taskListDepth);
      const taskItemIndex = $from.index(taskListDepth);
      const isLastItem = taskItemIndex === taskListNode.childCount - 1;

      if (isLastItem) {
        // Delete the empty task item and create a paragraph after the list
        const endOfTaskList = $from.after(taskListDepth);
        const taskItemStart = $from.before(taskItemDepth);
        const taskItemEnd = $from.after(taskItemDepth);

        return this.editor
          .chain()
          .command(({ tr }) => {
            tr.delete(taskItemStart, taskItemEnd);
            return true;
          })
          .insertContentAt(endOfTaskList - (taskItemEnd - taskItemStart), {
            type: "paragraph"
          })
          .focus()
          .run();
      }

      // Not the last item - just split normally
      return this.editor.commands.splitListItem(this.name);
    };

    const shortcuts: Record<string, () => boolean> = {
      Enter: handleEnter,
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

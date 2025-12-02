import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import classNames from "classnames";

import {
  CalloutType,
  ICalloutAttrs,
  getCalloutConfig,
  isValidCalloutType
} from "./Callout.types";
import { CalloutNodeView } from "./CalloutNodeView";

export interface CalloutOptions {
  HTMLAttributes: Record<string, string>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    callout: {
      /**
       * Insert a callout block at the current position
       */
      setCallout: (attrs?: Partial<ICalloutAttrs>) => ReturnType;
      /**
       * Toggle a callout block
       */
      toggleCallout: (attrs?: Partial<ICalloutAttrs>) => ReturnType;
      /**
       * Remove the callout block (unwrap content)
       */
      unsetCallout: () => ReturnType;
      /**
       * Update the callout type
       */
      updateCalloutType: (type: CalloutType) => ReturnType;
    };
  }
}

export const CalloutExtension = Node.create<CalloutOptions>({
  name: "callout",

  group: "block",

  content: "block+",

  defining: true,

  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  addAttributes() {
    return {
      type: {
        default: CalloutType.NOTE,
        parseHTML: (element: HTMLElement) => {
          const type = element.getAttribute("data-callout-type");

          return isValidCalloutType(type || "") ? type : CalloutType.NOTE;
        },
        renderHTML: (attributes: Record<string, unknown>) => ({
          "data-callout-type": attributes["type"] as string
        })
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="callout"]',
        contentElement: ".callout-content"
      }
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    const type = isValidCalloutType(node.attrs["type"])
      ? node.attrs["type"]
      : CalloutType.NOTE;

    const config = getCalloutConfig(type);

    return [
      "div",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": "callout",
        class: classNames(
          "callout-wrapper",
          "yl:my-4",
          "yl:w-full",
          "yl:rounded-r-md",
          "yl:border-l-4",
          "yl:p-4",
          config.borderColor,
          config.backgroundColor
        )
      }),
      [
        "div",
        {
          class: classNames(
            "callout-header",
            "yl:mb-2",
            "yl:flex",
            "yl:items-center",
            "yl:gap-2",
            "yl:font-semibold",
            "yl:uppercase",
            config.headerColor
          ),
          contenteditable: "false"
        },
        ["span", { class: "callout-symbol" }, config.symbol],
        ["span", { class: "callout-label" }, config.label]
      ],
      [
        "div",
        { class: "callout-content yl:prose yl:prose-sm yl:max-w-none" },
        0
      ]
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(CalloutNodeView);
  },

  addCommands() {
    return {
      setCallout:
        (attrs?: Partial<ICalloutAttrs>) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: { type: attrs?.type || CalloutType.NOTE },
            content: [{ type: "paragraph" }]
          });
        },

      toggleCallout:
        (attrs?: Partial<ICalloutAttrs>) =>
        ({ commands, state }) => {
          const { selection } = state;
          const { $from } = selection;

          let insideCallout = false;
          for (let depth = $from.depth; depth > 0; depth--) {
            if ($from.node(depth).type.name === this.name) {
              insideCallout = true;
              break;
            }
          }

          if (insideCallout) {
            return commands.unsetCallout();
          }

          return commands.setCallout(attrs);
        },

      unsetCallout:
        () =>
        ({ commands, state }) => {
          const { selection } = state;
          const { $from } = selection;

          // Find the callout node
          let calloutPos: number | null = null;
          let calloutNode = null;

          for (let depth = $from.depth; depth > 0; depth--) {
            const node = $from.node(depth);
            if (node.type.name === this.name) {
              calloutPos = $from.before(depth);
              calloutNode = node;
              break;
            }
          }

          if (calloutPos === null || !calloutNode) {
            return false;
          }

          // Lift the content out of the callout
          return commands.lift(this.name);
        },

      updateCalloutType:
        (type: CalloutType) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, { type });
        }
    };
  },

  addKeyboardShortcuts() {
    return {
      // Allow exiting the callout with Enter at the end of an empty paragraph
      Enter: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;

        if (!empty) {
          return false;
        }

        // Check if we're in a callout
        let calloutDepth: number | null = null;
        for (let depth = $from.depth; depth > 0; depth--) {
          if ($from.node(depth).type.name === this.name) {
            calloutDepth = depth;
            break;
          }
        }

        if (calloutDepth === null) {
          return false;
        }

        // Check if the current paragraph is empty and is the last child
        const calloutNode = $from.node(calloutDepth);
        const currentParagraph = $from.parent;

        if (
          currentParagraph.type.name === "paragraph" &&
          currentParagraph.content.size === 0 &&
          $from.index(calloutDepth) === calloutNode.childCount - 1
        ) {
          // Exit the callout by creating a new paragraph after it
          const endOfCallout = $from.after(calloutDepth);

          return editor
            .chain()
            .command(({ tr }) => {
              // Delete the empty paragraph
              const paragraphStart = $from.before($from.depth);
              const paragraphEnd = $from.after($from.depth);
              tr.delete(paragraphStart, paragraphEnd);
              return true;
            })
            .insertContentAt(endOfCallout - 2, { type: "paragraph" })
            .focus()
            .run();
        }

        return false;
      },
      // ArrowDown at the end of the last paragraph exits the callout
      ArrowDown: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;

        if (!empty) {
          return false;
        }

        // Check if we're in a callout
        let calloutDepth: number | null = null;
        for (let depth = $from.depth; depth > 0; depth--) {
          if ($from.node(depth).type.name === this.name) {
            calloutDepth = depth;
            break;
          }
        }

        if (calloutDepth === null) {
          return false;
        }

        const calloutNode = $from.node(calloutDepth);
        const currentParagraph = $from.parent;

        // Check if cursor is at the end of the last child paragraph
        const isLastChild =
          $from.index(calloutDepth) === calloutNode.childCount - 1;

        const isAtEndOfParagraph =
          $from.parentOffset === currentParagraph.content.size;

        if (isLastChild && isAtEndOfParagraph) {
          // Exit the callout by moving cursor after it or creating a paragraph
          const endOfCallout = $from.after(calloutDepth);

          // Check if there's content after the callout
          if (endOfCallout < state.doc.content.size) {
            // Move cursor to the next node
            return editor.commands.setTextSelection(endOfCallout + 1);
          }

          // No content after - insert a paragraph and focus it
          return editor
            .chain()
            .insertContentAt(endOfCallout, { type: "paragraph" })
            .setTextSelection(endOfCallout + 1)
            .run();
        }

        return false;
      },
      // Backspace at the start of a callout should unwrap it
      Backspace: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;

        if (!empty) {
          return false;
        }

        // Check if we're at the very start of a callout's first paragraph
        let calloutDepth: number | null = null;
        for (let depth = $from.depth; depth > 0; depth--) {
          if ($from.node(depth).type.name === this.name) {
            calloutDepth = depth;
            break;
          }
        }

        if (calloutDepth === null) {
          return false;
        }

        // Check if cursor is at the start of the first child
        if ($from.index(calloutDepth) === 0 && $from.parentOffset === 0) {
          return editor.commands.lift(this.name);
        }

        return false;
      }
    };
  }
});

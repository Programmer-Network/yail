import { Mark, mergeAttributes } from "@tiptap/core";

import { TEXT_COLOR_CLASSES } from "./ColorDropdown.constants";

export interface TextColorOptions {
  HTMLAttributes: Record<string, string>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    textColor: {
      /**
       * Set a text color mark
       */
      setTextColor: (colorId: string) => ReturnType;
      /**
       * Unset a text color mark
       */
      unsetTextColor: () => ReturnType;
    };
  }
}

export const TextColorExtension = Mark.create<TextColorOptions>({
  name: "textColor",

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: element => element.getAttribute("data-color"),
        renderHTML: attributes => {
          if (!attributes["color"]) {
            return {};
          }

          const colorClass = TEXT_COLOR_CLASSES[attributes["color"]];

          return {
            "data-color": attributes["color"],
            class: colorClass || ""
          };
        }
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "span[data-color]"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0
    ];
  },

  addCommands() {
    return {
      setTextColor:
        colorId =>
        ({ commands }) => {
          return commands.setMark(this.name, { color: colorId });
        },
      unsetTextColor:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        }
    };
  }
});

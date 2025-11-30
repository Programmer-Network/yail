import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { AnnotationNodeView } from "./AnnotationNodeView";
import {
  DEFAULT_ANNOTATION_COLOR,
  DEFAULT_STROKE_WIDTH,
  IRoughAnnotationAttrs,
  RoughAnnotationType
} from "./RoughAnnotation.types";

export interface RoughAnnotationOptions {
  HTMLAttributes: Record<string, string>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    roughAnnotation: {
      /**
       * Set a rough annotation on the current selection
       */
      setRoughAnnotation: (attrs: Partial<IRoughAnnotationAttrs>) => ReturnType;
      /**
       * Remove the rough annotation from the current selection
       */
      unsetRoughAnnotation: () => ReturnType;
      /**
       * Toggle a rough annotation on the current selection
       */
      toggleRoughAnnotation: (
        attrs: Partial<IRoughAnnotationAttrs>
      ) => ReturnType;
    };
  }
}

export const RoughAnnotationExtension = Node.create<RoughAnnotationOptions>({
  name: "roughAnnotation",

  group: "inline",

  inline: true,

  content: "text*",

  atom: false,

  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },

  addAttributes() {
    return {
      type: {
        default: "bracket" as RoughAnnotationType,
        parseHTML: (element: HTMLElement) =>
          (element.getAttribute("data-type") as RoughAnnotationType) ||
          "bracket",
        renderHTML: (attributes: Record<string, unknown>) => ({
          "data-type": attributes["type"] as string
        })
      },
      color: {
        default: DEFAULT_ANNOTATION_COLOR,
        parseHTML: (element: HTMLElement) =>
          element.getAttribute("data-color") || DEFAULT_ANNOTATION_COLOR,
        renderHTML: (attributes: Record<string, unknown>) => ({
          "data-color": attributes["color"] as string
        })
      },
      label: {
        default: null,
        parseHTML: (element: HTMLElement) =>
          element.getAttribute("data-label") || null,
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes["label"]) {
            return {};
          }
          return {
            "data-label": attributes["label"] as string
          };
        }
      },
      strokeWidth: {
        default: DEFAULT_STROKE_WIDTH,
        parseHTML: (element: HTMLElement) =>
          parseInt(element.getAttribute("data-stroke-width") || "2", 10),
        renderHTML: (attributes: Record<string, unknown>) => ({
          "data-stroke-width": String(attributes["strokeWidth"])
        })
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "rough-annotation"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "rough-annotation",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(AnnotationNodeView);
  },

  addCommands() {
    return {
      setRoughAnnotation:
        (attrs: Partial<IRoughAnnotationAttrs>) =>
        ({ commands, state }) => {
          const { from, to, empty } = state.selection;

          // If selection is empty, do nothing
          if (empty) {
            return false;
          }

          // Get the selected text
          const selectedText = state.doc.textBetween(from, to);

          if (!selectedText) {
            return false;
          }

          // Delete the selected content and insert our node
          return commands.insertContentAt(
            { from, to },
            {
              type: this.name,
              attrs: {
                type: attrs.type || "bracket",
                color: attrs.color || DEFAULT_ANNOTATION_COLOR,
                label: attrs.label || null,
                strokeWidth: attrs.strokeWidth || DEFAULT_STROKE_WIDTH
              },
              content: [
                {
                  type: "text",
                  text: selectedText
                }
              ]
            }
          );
        },

      unsetRoughAnnotation:
        () =>
        ({ commands, state }) => {
          const { from, to } = state.selection;

          // Find roughAnnotation nodes in selection and lift their content
          let foundAnnotation = false;
          state.doc.nodesBetween(from, to, (node, pos) => {
            if (node.type.name === this.name) {
              foundAnnotation = true;
              const textContent = node.textContent;
              commands.insertContentAt(
                { from: pos, to: pos + node.nodeSize },
                {
                  type: "text",
                  text: textContent
                }
              );
            }
          });

          return foundAnnotation;
        },

      toggleRoughAnnotation:
        (attrs: Partial<IRoughAnnotationAttrs>) =>
        ({ commands, state }) => {
          const { from, to } = state.selection;

          // Check if selection contains our node
          let hasAnnotation = false;
          state.doc.nodesBetween(from, to, node => {
            if (node.type.name === this.name) {
              hasAnnotation = true;
            }
          });

          if (hasAnnotation) {
            return commands.unsetRoughAnnotation();
          }

          return commands.setRoughAnnotation(attrs);
        }
    };
  }
});

import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import { IResizableImageOptions, ImageAlignment } from "./ResizableImage.types";
import { ResizableImageNodeView } from "./ResizableImageNodeView";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    resizableImage: {
      /**
       * Set image with resizable capabilities
       */
      setResizableImage: (options: {
        src: string;
        alt?: string;
        title?: string;
        width?: number | null;
        height?: number | null;
      }) => ReturnType;
      /**
       * Set image alignment
       */
      setImageAlignment: (alignment: ImageAlignment) => ReturnType;
    };
  }
}

export const ResizableImageExtension = Node.create<IResizableImageOptions>({
  name: "image",

  group: "block",

  draggable: true,

  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
      allowBase64: true
    };
  },

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("src"),
        renderHTML: (attributes: Record<string, unknown>) => ({
          src: attributes["src"] as string
        })
      },
      alt: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("alt"),
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes["alt"]) return {};
          return { alt: attributes["alt"] as string };
        }
      },
      title: {
        default: null,
        parseHTML: (element: HTMLElement) => element.getAttribute("title"),
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes["title"]) return {};
          return { title: attributes["title"] as string };
        }
      },
      width: {
        default: null,
        parseHTML: (element: HTMLElement) => {
          const width = element.getAttribute("width");
          return width ? parseInt(width, 10) : null;
        },
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes["width"]) return {};
          return { width: String(attributes["width"]) };
        }
      },
      height: {
        default: null,
        parseHTML: (element: HTMLElement) => {
          const height = element.getAttribute("height");
          return height ? parseInt(height, 10) : null;
        },
        renderHTML: (attributes: Record<string, unknown>) => {
          if (!attributes["height"]) return {};
          return { height: String(attributes["height"]) };
        }
      },
      "data-align": {
        default: "center",
        parseHTML: (element: HTMLElement) =>
          element.getAttribute("data-align") || "center",
        renderHTML: (attributes: Record<string, unknown>) => ({
          "data-align": attributes["data-align"] as string
        })
      }
    };
  },

  parseHTML() {
    return [
      {
        tag: "img[src]"
      }
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ResizableImageNodeView);
  },

  addCommands() {
    return {
      setResizableImage:
        options =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options
          });
        },

      setImageAlignment:
        (alignment: ImageAlignment) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, {
            "data-align": alignment
          });
        }
    };
  },

  addInputRules() {
    return [];
  }
});

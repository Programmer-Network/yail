import { EditorOptions } from "@tiptap/core";

import getExtensions from "./extensions";
import { IEditorConfig } from "./types";

export const editorConfig = (args: IEditorConfig): Partial<EditorOptions> => {
  const { toolbarItems, editorContent, placeholder, suggestions } = args;

  const config = {
    editorProps: {
      attributes: {
        class: "mx-auto mt-6 focus:outline-none text-primary-text-color"
      }
    },
    extensions: getExtensions({
      toolbarItems,
      placeholder,
      suggestions
    }),
    content: editorContent
  };

  return config;
};

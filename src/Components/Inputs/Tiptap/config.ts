import { EditorOptions } from "@tiptap/core";

import getExtensions from "./extensions";
import { IEditorConfig } from "./types";

export const editorConfig = (args: IEditorConfig): Partial<EditorOptions> => {
  const { toolbarItems, editorContent, placeholder, suggestions } = args;

  const config = {
    editorProps: {
      attributes: {
        class: "yl:mx-auto yl:mt-6 yl:focus:outline-hidden yl:text-text"
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

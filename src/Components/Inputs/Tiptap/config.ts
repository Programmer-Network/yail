import { EditorOptions } from "@tiptap/core";

import getExtensions from "./extensions";
import { IEditorConfig } from "./types";

export const editorConfig = (args: IEditorConfig): Partial<EditorOptions> => {
  const { toolbarItems, editorContent, placeholder, suggestions, autoFocus } =
    args;

  const config: Partial<EditorOptions> = {
    autofocus: autoFocus,
    editorProps: {
      attributes: {
        class: "mx-auto focus:outline-hidden text-text"
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

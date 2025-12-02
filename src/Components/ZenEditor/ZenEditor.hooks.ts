import { useCallback, useEffect, useRef } from "react";

import { TiptapRef } from "../Inputs/Tiptap/Tiptap.types";
import {
  IUseZenEditorKeyboardProps,
  IUseZenEditorRefProps,
  IUseZenEditorRefReturn
} from "./ZenEditor.types";

export const useZenEditorKeyboard = ({
  propertiesDrawer,
  primaryAction
}: IUseZenEditorKeyboardProps): void => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const isMeta = event.metaKey || event.ctrlKey;

      if (isMeta && event.shiftKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        propertiesDrawer.onToggle();
        return;
      }

      if (isMeta && event.key.toLowerCase() === "s") {
        event.preventDefault();
        primaryAction.onClick();
      }
    },
    [propertiesDrawer, primaryAction]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export const useZenEditorRef = ({
  externalEditorRef
}: IUseZenEditorRefProps): IUseZenEditorRefReturn => {
  const internalEditorRef = useRef<TiptapRef | null>(null);
  const editorRef = externalEditorRef || internalEditorRef;

  return { editorRef };
};

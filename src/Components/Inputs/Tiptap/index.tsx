import { Editor } from "@tiptap/core";
import { EditorContent, useEditor } from "@tiptap/react";
import { useMobile } from "Hooks/useMediaQuery";
import classNames from "classnames";
import { TextSelection } from "prosemirror-state";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState
} from "react";

import InputError from "../Common/InputError";
import InputHeader from "../Common/InputHeader";
import TiptapActions from "./Components/Actions";
import { Toolbar } from "./Components/Toolbar";
import { editorConfig } from "./config";
import "./tiptap.css";
import { TiptapProps, TiptapRef } from "./types";

const Tiptap: ForwardRefRenderFunction<TiptapRef, TiptapProps> = (
  {
    editorContent,
    onUpdate,
    actions,
    onTransaction,
    onSelectionUpdate,
    onSetImage,
    placeholder,
    suggestions,
    toolbarItems,
    error = null,
    label,
    hint,
    required
  },
  ref
) => {
  const [editorRef, setEditorRef] = useState<Editor | null>(null);
  const isMobile = useMobile();
  const [textSelected, setTextSelected] = useState<string>("");

  const useEditorConfig = editorConfig({
    toolbarItems,
    editorContent,
    suggestions,
    placeholder
  });

  const image = {
    isExtensionEnabled: !!useEditorConfig?.extensions?.some(
      ({ name }) => name === "image"
    ),
    onSetImage
  };

  const link = {
    isExtensionEnabled: !!useEditorConfig?.extensions?.some(({ name }) => {
      return name === "link";
    })
  };

  if (!image.isExtensionEnabled && typeof onSetImage === "function") {
    console.error(`"onSetImage" prop passed but image extension not found`);
    throw new Error("Image extension not registered in Tiptap editor.");
  }

  if (onTransaction) {
    useEditorConfig.onTransaction = onTransaction;
  }

  if (onUpdate) {
    useEditorConfig.onUpdate = onUpdate;
  }

  if (onSelectionUpdate) {
    useEditorConfig.onSelectionUpdate = onSelectionUpdate;
  }

  const editor = useEditor(useEditorConfig);

  useImperativeHandle(ref, () => {
    return {
      clearContent: () => {
        editorRef?.commands.clearContent(true);
      },

      getContents() {
        return editorRef?.getHTML();
      },

      setContent: (content: string) => {
        editorRef?.commands.setContent(content);
      },

      setFocus() {
        editorRef?.commands.focus("end");
      }
    };
  }, [editorRef]);

  useEffect(() => {
    if (textSelected !== "clicked-outside" || !editor) {
      return;
    }

    const { tr: transaction } = editor.state;
    const endPos = transaction.doc.content.size;
    transaction.setSelection(TextSelection.create(transaction.doc, endPos));
    editor.view.dispatch(transaction);
    setTextSelected("");
  }, [textSelected, isMobile, editor]);

  if (!editorRef && editor) {
    setEditorRef(editor);
  }

  if (!editor) {
    return null;
  }

  const hasToolbar = toolbarItems && toolbarItems?.length > 0;

  return (
    <div
      className={classNames("yl:relative", {
        "yl:mb-8": error
      })}
    >
      {label && <InputHeader label={label} hint={hint} required={required} />}
      {hasToolbar && (
        <Toolbar
          editor={editor}
          toolbarItems={toolbarItems}
          image={image}
          link={link}
        />
      )}
      <div className='yl:flex yl:flex-col'>
        <div
          className={classNames(
            "yl:relative yl:break-words yl:rounded-bl-md yl:rounded-br-md yl:border-2 yl:border-border/40 yl:px-4 yl:pb-2 yl:pt-2",
            {
              "yl:border-t-0!": hasToolbar
            }
          )}
        >
          <EditorContent editor={editor} />
          {actions &&
            typeof actions?.onAction === "function" &&
            actions.buttons?.length && (
              <TiptapActions actions={actions} isEditorEmpty={editor.isEmpty} />
            )}
        </div>
        {error && <InputError error={error} />}
      </div>
    </div>
  );
};

Tiptap.displayName = "Tiptap";

export default forwardRef(Tiptap);

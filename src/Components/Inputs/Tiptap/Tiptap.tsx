import { EditorContent, useEditor } from "@tiptap/react";
import classNames from "classnames";
import { TextSelection } from "prosemirror-state";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState
} from "react";

import { useMobile } from "../../../Hooks/useMediaQuery";
import { InputError } from "../Common/InputError";
import { InputHeader } from "../Common/InputHeader";
import TiptapActions from "./Components/Actions";
import { Toolbar } from "./Components/Toolbar";
import "./Tiptap.css";
import { editorConfig } from "./config";
import { TiptapProps, TiptapRef } from "./types";

const Tiptap: ForwardRefRenderFunction<TiptapRef, TiptapProps> = (
  {
    autoFocus = true,
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
    required,
    onImageUploadError
  },
  ref
) => {
  const isMobile = useMobile();
  const [textSelected, setTextSelected] = useState<string>("");

  const useEditorConfig = editorConfig({
    toolbarItems,
    editorContent,
    suggestions,
    placeholder,
    autoFocus
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

  useImperativeHandle(
    ref,
    () => ({
      clearContent: () => {
        if (!editor) {
          return;
        }

        editor.commands.clearContent(true);
      },
      getContents: () => editor?.getHTML() ?? "",
      setContent: (content: string) => {
        if (!editor) {
          return;
        }

        editor.commands.setContent(content);
      },
      setFocus: () => {
        if (!editor) {
          return;
        }

        editor.commands.focus("end");
      }
    }),
    [editor]
  );

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

  if (!editor) {
    return null;
  }

  const hasToolbar = toolbarItems && toolbarItems?.length > 0;

  return (
    <div
      className={classNames("relative", {
        "mb-8": error
      })}
    >
      {label && <InputHeader label={label} hint={hint} required={required} />}
      {hasToolbar && (
        <Toolbar
          editor={editor}
          toolbarItems={toolbarItems}
          image={image}
          link={link}
          onImageUploadError={onImageUploadError}
        />
      )}
      <div className='flex flex-col'>
        <div
          className={classNames("relative wrap-break-word", {
            "border-t-0!": hasToolbar
          })}
        ></div>
        <div
          className='border-border/40 relative rounded-br-md rounded-bl-md border-2 border-t-0'
          onClick={() => editor.commands.focus()}
        >
          <EditorContent editor={editor} className='p-4' />
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

const TiptapForwardRef = forwardRef(Tiptap);

export { TiptapForwardRef as Tiptap };

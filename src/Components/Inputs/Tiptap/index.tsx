import { Editor } from "@tiptap/core";
import { EditorContent, useEditor } from "@tiptap/react";
import { useMobile } from "Hooks/useMediaQuery";
import classNames from "classnames";
import { TextSelection } from "prosemirror-state";
import {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState
} from "react";

import InputError from "../Common/InputError";
import InputHeader from "../Common/InputHeader";
import { Toolbar } from "./Components/Toolbar";
import { editorConfig } from "./config";
import "./tiptap.css";
import { TiptapProps } from "./types";

const Tiptap: FC<TiptapProps> = forwardRef(
  (
    {
      editorContent,
      onUpdate = () => {},
      onTransaction = () => {},
      onSelectionUpdate = () => {},
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

    const editor = useEditor({
      ...editorConfig({
        toolbarItems,
        editorContent,
        suggestions,
        placeholder
      }),
      onTransaction,
      onUpdate,
      onSelectionUpdate
    });

    useImperativeHandle(
      ref,
      () => {
        if (!editorRef) {
          return null;
        }

        return {
          clearContent: () => {
            editorRef.commands.clearContent(true);
          },

          getContents() {
            return editorRef.getHTML();
          },

          setContent: (content: string) => {
            editorRef.commands.setContent(content);
          },

          setFocus() {
            editorRef.commands.focus("end");
          }
        };
      },
      [editorRef]
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

    if (!editorRef && editor) {
      setEditorRef(editor);
    }

    if (!editor) {
      return null;
    }

    return (
      <div
        className={classNames("relative", {
          "mb-8": error
        })}
      >
        {label && <InputHeader label={label} hint={hint} required={required} />}
        <div className='border-2 border-primary p-4'>
          <Toolbar editor={editor} toolbarItems={toolbarItems} />
          <EditorContent editor={editor} />
        </div>
        {error && <InputError error={error} className='absolute bottom-[-5]' />}
      </div>
    );
  }
);

Tiptap.displayName = "Tiptap";

export default Tiptap;

import { Editor } from "@tiptap/core";
import { RefObject, useRef, useState } from "react";

import Tiptap from ".";
import TiptapToHTML from "./TiptapToHTML";
import { TIPTAP_TOOLBAR_ITEMS } from "./constants";
import { TiptapRef } from "./types";

export default {
  title: "Rich Text Editing / Tiptap",
  parameters: {
    layout: "centered"
  },
  component: Tiptap
};

export const Default = () => {
  const [editorState, setEditorState] = useState<string>("");
  const tiptapRef = useRef<TiptapRef>();

  const suggestions = {
    trigger: "#",
    items: () =>
      Promise.resolve([
        {
          label: "Bar Label",
          value: "bar"
        },
        {
          label: "Baz Label",
          value: "baz"
        }
      ])
  };

  const toolbarItems = [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    TIPTAP_TOOLBAR_ITEMS.HEADING_3,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.LINK,
    TIPTAP_TOOLBAR_ITEMS.IMAGE,
    TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
    TIPTAP_TOOLBAR_ITEMS.LIST_ITEM,
    TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.CODE,
    TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
    TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
    TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK
  ];

  const converter = new TiptapToHTML(toolbarItems, suggestions);

  const onEditorStateChange = ({ editor }: { editor: Editor }) => {
    setEditorState(
      converter.generateSanitizedHTML(JSON.stringify(editor.getJSON()))
    );
  };

  return (
    <div className='w-full md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        label='Content'
        suggestions={suggestions}
        toolbarItems={toolbarItems}
        onSetImage={(base64: string) => {
          return new Promise<void>(resolve => {
            console.log("🚀 ─── base64:", base64);
            resolve();
          });
        }}
        onTransaction={({ editor }) => {
          onEditorStateChange({ editor });
        }}
        required={true}
      />

      <div
        className='mt-8 break-all text-indigo-500'
        dangerouslySetInnerHTML={{ __html: editorState }}
      ></div>
    </div>
  );
};

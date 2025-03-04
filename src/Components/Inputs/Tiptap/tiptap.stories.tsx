import { Editor } from "@tiptap/core";
import { RefObject, useRef, useState } from "react";

import Tiptap from ".";
import TiptapToHTML from "./TiptapToHTML";
import { TIPTAP_TOOLBAR_ITEMS } from "./constants";
import { TiptapActionsEnum, TiptapRef } from "./types";

export default {
  title: "Rich Text Editing / Tiptap",
  parameters: {
    layout: "centered"
  },
  component: Tiptap
};

export const Default = () => {
  const [editorState, setEditorState] = useState<string>("");
  const tiptapRef = useRef<TiptapRef>(null);

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
    <div className='yl:w-full yl:md:w-[768px]'>
      <Tiptap
        ref={tiptapRef as RefObject<TiptapRef>}
        label='Content'
        suggestions={suggestions}
        toolbarItems={toolbarItems}
        actions={{
          buttons: [TiptapActionsEnum.CANCEL, TiptapActionsEnum.CONFIRM],
          onAction: actionType => alert(actionType),
          isConfirming: false
        }}
        onSetImage={() => {
          return new Promise<void>(resolve => {
            resolve();
          });
        }}
        onTransaction={({ editor }) => {
          onEditorStateChange({ editor });
        }}
        required={true}
      />

      <div
        className='yl:mt-8 yl:break-words text-indigo-500'
        dangerouslySetInnerHTML={{ __html: editorState }}
      ></div>
    </div>
  );
};

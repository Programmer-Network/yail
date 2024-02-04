import { Editor } from "@tiptap/core";
import { useState } from "react";

import Tiptap from ".";
import TiptapToHTML from "./TiptapToHTML";
import { TIPTAP_TOOLBAR_ITEMS } from "./constants";

export default {
  title: "Rich Text Editing / Tiptap",
  parameters: {
    layout: "centered"
  },
  component: Tiptap
};

export const Default = () => {
  const [editorState, setEditorState] = useState<string>("");

  const suggestions = {
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
      ]),
    mentionTriggerCharacter: "#"
  };

  const toolbarItems = [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.HEADING_1,
    TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.LINK
  ];

  const converter = new TiptapToHTML(toolbarItems, suggestions);

  const onEditorStateChange = ({ editor }: { editor: Editor }) => {
    setEditorState(
      converter.generateSanitizedHTML(JSON.stringify(editor.getJSON()))
    );
  };

  return (
    <div className='w-[768px]'>
      <Tiptap
        label='Content'
        suggestions={suggestions}
        toolbarItems={toolbarItems}
        onTransaction={({ editor }) => {
          onEditorStateChange({ editor });
        }}
        required={true}
      />

      <div
        className='text-indigo-500'
        dangerouslySetInnerHTML={{ __html: editorState }}
      ></div>
    </div>
  );
};

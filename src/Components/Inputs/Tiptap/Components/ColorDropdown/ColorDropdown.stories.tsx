import { useEditor } from "@tiptap/react";

import { TIPTAP_TOOLBAR_ITEMS } from "../../Tiptap.constants";
import { editorConfig } from "../../Tiptap.editorConfig";
import { ColorDropdown } from "./ColorDropdown";

export default {
  title: "Rich Text Editing / Tiptap / ColorDropdown",
  component: ColorDropdown
};

const ColorDropdownWrapper = () => {
  const config = editorConfig({
    toolbarItems: [
      TIPTAP_TOOLBAR_ITEMS.BOLD,
      TIPTAP_TOOLBAR_ITEMS.ITALIC,
      TIPTAP_TOOLBAR_ITEMS.COLOR
    ],
    editorContent: "<p>Select some text and pick a color</p>",
    placeholder: "Start typing..."
  });

  const editor = useEditor(config);

  if (!editor) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className='yl:flex yl:flex-col yl:gap-4'>
      <div className='yl:rounded yl:border yl:border-border/40 yl:p-2'>
        <ColorDropdown editor={editor} />
      </div>
      <div className='yl:text-sm yl:text-text/60'>
        Click the dropdown to see available text colors
      </div>
    </div>
  );
};

export const Default = () => <ColorDropdownWrapper />;

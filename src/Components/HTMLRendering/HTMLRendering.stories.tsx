import { TiptapToHTML } from "../Inputs";
import { TIPTAP_TOOLBAR_ITEMS } from "../Inputs/Tiptap/Tiptap.constants";
import { TiptapControls } from "../Inputs/Tiptap/Tiptap.types";
import HTMLRendering from "./HTMLRendering";
import { getDocument } from "./HTMLRendering.utils";

const toolbar = [
  TIPTAP_TOOLBAR_ITEMS.BOLD,
  TIPTAP_TOOLBAR_ITEMS.HEADING_1,
  TIPTAP_TOOLBAR_ITEMS.HEADING_2,
  TIPTAP_TOOLBAR_ITEMS.HEADING_3,
  TIPTAP_TOOLBAR_ITEMS.HEADING_3,
  TIPTAP_TOOLBAR_ITEMS.HEADING_4,
  TIPTAP_TOOLBAR_ITEMS.HEADING_5,
  TIPTAP_TOOLBAR_ITEMS.HEADING_6,
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
] as TiptapControls;

export default {
  title: "HTML Rendering/HTMLRendering",
  component: HTMLRendering
};

export const Default = () => {
  const converter = new TiptapToHTML(toolbar);

  return (
    <div className='yl:mx-auto yl:my-6 yl:w-full yl:px-4 yl:pb-16 yl:text-lg yl:leading-loose yl:sm:max-w-5xl yl:md:max-w-4xl yl:md:py-0 yl:lg:max-w-5xl yl:lg:px-8'>
      <HTMLRendering html={converter.generateSanitizedHTML(getDocument())} />
    </div>
  );
};

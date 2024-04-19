export const TIPTAP_TOOLBAR_ITEMS = {
  BOLD: "BOLD",
  ITALIC: "ITALIC",
  STRIKE_THROUGH: "STRIKE_THROUGH",
  CODE: "CODE",
  PARAGRAPH: "PARAGRAPH",
  HEADING_1: "HEADING_1",
  HEADING_2: "HEADING_2",
  HEADING_3: "HEADING_3",
  HEADING_4: "HEADING_4",
  HEADING_5: "HEADING_5",
  HEADING_6: "HEADING_6",
  UNORDERED_LIST: "UNORDERED_LIST",
  ORDERED_LIST: "ORDERED_LIST",
  LIST_ITEM: "LIST_ITEM",
  CODE_BLOCK: "CODE_BLOCK",
  BLOCK_QUOTE: "BLOCK_QUOTE",
  YOUTUBE: "YOUTUBE",
  LINK: "LINK",
  IMAGE: "IMAGE",
  TEXT_STYLE: "TEXT_STYLE",
  COLOR: "COLOR",
  MENTION: "MENTION",
  STRIKE: "STRIKE"
} as const;

export const toolbarItemToClassName = {
  [TIPTAP_TOOLBAR_ITEMS.HEADING_1]: {
    tagName: "h1",
    classes:
      "yl-text-3xl sm:yl-text-4xl md:yl-text-5xl yl-my-4 yl-text-primary yl-break-words yl-overflow-hidden yl-font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_2]: {
    tagName: "h2",
    classes:
      "yl-text-2xl sm:yl-text-3xl md:yl-text-4xl yl-my-4 yl-text-primary yl-break-words yl-overflow-hidden yl-font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_3]: {
    tagName: "h3",
    classes:
      "yl-text-xl sm:yl-text-2xl md:yl-text-3xl yl-my-4 yl-text-primary yl-break-words yl-overflow-hidden yl-font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_4]: {
    tagName: "h4",
    classes:
      "text-lg sm:yl-text-xl md:yl-text-2xl yl-my-4 yl-text-primary yl-break-words yl-overflow-hidden yl-font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_5]: {
    tagName: "h5",
    classes:
      "yl-text-md sm:yl-text-lg md:yl-text-xl yl-my-4 yl-text-primary yl-break-words yl-overflow-hidden yl-font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_6]: {
    tagName: "h6",
    classes:
      "yl-text-sm sm:yl-text-md md:yl-text-lg yl-my-4 yl-text-primary yl-break-words yl-overflow-hidden yl-font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST]: {
    tagName: "ul",
    classes:
      "yl-list-disc yl-my-4 yl-text-primary-text-color marker:yl-text-primary marker:yl-text-xl yl-pl-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST]: {
    tagName: "ol",
    classes:
      "yl-list-decimal yl-my-4 yl-text-primary-text-color marker:yl-text-primary marker:yl-text-xl yl-pl-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.YOUTUBE]: {
    tagName: null,
    classes: "yl-aspect-video yl-h-full yl-w-full yl-py-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: {
    tagName: "img",
    classes:
      "yl-mx-auto yl-block yl-p-2 yl-border yl-border-primary-background-color"
  },
  [TIPTAP_TOOLBAR_ITEMS.PARAGRAPH]: {
    tagName: "p",
    classes:
      "yl-my-4 yl-text-primary-text-color yl-break-words yl-overflow-hidden"
  },
  [TIPTAP_TOOLBAR_ITEMS.LINK]: {
    tagName: "a",
    classes: "yl-underline yl-text-primary yl-cursor-pointer yl-font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.MENTION]: {
    tagName: null,
    classes: "yl-text-primary yl-cursor-pointer yl-font-bold"
  }
};

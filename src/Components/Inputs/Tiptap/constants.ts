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
    classes: "text-6xl my-4 text-primary wordbreak"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_2]: {
    tagName: "h2",
    classes: "text-5xl my-4 text-primary wordbreak"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_3]: {
    tagName: "h3",
    classes: "text-4xl my-4 text-primary wordbreak"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_4]: {
    tagName: "h4",
    classes: "text-3xl my-4 text-primary wordbreak"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_5]: {
    tagName: "h5",
    classes: "text-2xl my-4 text-primary wordbreak"
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_6]: {
    tagName: "h6",
    classes: "text-xl my-4 text-primary wordbreak"
  },
  [TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST]: {
    tagName: "ul",
    classes: "list-disc my-4 text-primary-text-color"
  },
  [TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST]: {
    tagName: "ol",
    classes: "list-decimal my-4 text-primary-text-color"
  },
  [TIPTAP_TOOLBAR_ITEMS.YOUTUBE]: {
    tagName: null,
    classes: "mx-auto block p-2 border border-primary-background-color"
  },
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: {
    tagName: "img",
    classes: "mx-auto block p-2 border border-primary-background-color"
  },
  [TIPTAP_TOOLBAR_ITEMS.PARAGRAPH]: {
    tagName: "p",
    classes: "my-4 text-primary-text-color"
  },
  [TIPTAP_TOOLBAR_ITEMS.LINK]: {
    tagName: "a",
    classes: "underline text-primary cursor-pointer font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.MENTION]: {
    tagName: null,
    classes: "text-primary cursor-pointer font-bold"
  }
};

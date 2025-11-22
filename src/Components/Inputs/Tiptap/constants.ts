import classNames from "classnames";

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
  STRIKE: "STRIKE",
  TABLE: "TABLE",
  TABLE_ADD_ROW_BEFORE: "TABLE_ADD_ROW_BEFORE",
  TABLE_ADD_ROW_AFTER: "TABLE_ADD_ROW_AFTER",
  TABLE_DELETE_ROW: "TABLE_DELETE_ROW",
  TABLE_ADD_COLUMN_BEFORE: "TABLE_ADD_COLUMN_BEFORE",
  TABLE_ADD_COLUMN_AFTER: "TABLE_ADD_COLUMN_AFTER",
  TABLE_DELETE_COLUMN: "TABLE_DELETE_COLUMN",
  TABLE_DELETE_TABLE: "TABLE_DELETE_TABLE",
  TABLE_MERGE_CELLS: "TABLE_MERGE_CELLS",
  TABLE_SPLIT_CELL: "TABLE_SPLIT_CELL"
} as const;

export const typograyClassNames = {
  h1: (className?: string) =>
    classNames(
      "text-3xl sm:text-4xl md:text-5xl text-text break-words font-bold",
      className
    ),
  h2: (className?: string) =>
    classNames(
      "text-2xl sm:text-3xl md:text-4xl text-text break-words font-bold",
      className
    ),
  h3: (className?: string) =>
    classNames(
      "text-xl sm:text-2xl md:text-3xl text-text break-words font-bold",
      className
    ),
  h4: (className?: string) =>
    classNames(
      "text-lg sm:text-xl md:text-2xl text-text break-words font-bold",
      className
    ),
  h5: (className?: string) =>
    classNames(
      "text-md sm:text-lg md:text-xl text-text break-words font-bold",
      className
    ),
  h6: (className?: string) =>
    classNames(
      "text-sm sm:text-md md:text-lg text-text break-words font-bold",
      className
    ),
  p: (className?: string) =>
    classNames("text-text break-words overflow-hidden", className),
  a: (className?: string) =>
    classNames(
      "break-all hover:text-stroke text-primary hover:underline hover:opacity-80 active:opacity-50 cursor-pointer",
      className
    ),
  ul: (className?: string) =>
    classNames(
      "list-disc text-text marker:text-primary marker:text-xl pl-4",
      className
    ),
  ol: (className?: string) =>
    classNames(
      "list-decimal text-text marker:text-primary marker:text-xl pl-4",
      className
    )
};

export const toolbarItemToClassName = {
  [TIPTAP_TOOLBAR_ITEMS.HEADING_1]: {
    tagName: "h1",
    classes: typograyClassNames.h1("my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_2]: {
    tagName: "h2",
    classes: typograyClassNames.h2("my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_3]: {
    tagName: "h3",
    classes: typograyClassNames.h3("my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_4]: {
    tagName: "h4",
    classes: typograyClassNames.h4("my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_5]: {
    tagName: "h5",
    classes: typograyClassNames.h5("my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_6]: {
    tagName: "h6",
    classes: typograyClassNames.h6("my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.PARAGRAPH]: {
    tagName: "p",
    classes: typograyClassNames.p("my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.LINK]: {
    tagName: "a",
    classes: "underline text-primary cursor-pointer font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST]: {
    tagName: "ul",
    classes: "list-disc text-text marker:text-text marker:text-xl pl-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST]: {
    tagName: "ol",
    classes: "list-decimal text-text marker:text-text marker:text-xl pl-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.YOUTUBE]: {
    tagName: null,
    classes: "aspect-video h-full w-full py-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: {
    tagName: "img",
    classes:
      "mx-auto block p-2 border-2 border-border my-4 rounded-md shadow-md"
  },
  [TIPTAP_TOOLBAR_ITEMS.MENTION]: {
    tagName: "span",
    classes: "text-primary cursor-pointer font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.TABLE]: {
    tagName: "table",
    classes: "border-collapse w-full my-4"
  }
};

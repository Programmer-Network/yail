import classNames from "classnames";

import { ToolbarGroupId } from "./types";

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
  TABLE_SPLIT_CELL: "TABLE_SPLIT_CELL",
  TASK_LIST: "TASK_LIST",
  TASK_ITEM: "TASK_ITEM",
  HIGHLIGHT: "HIGHLIGHT",
  CHARACTER_COUNT: "CHARACTER_COUNT",
  ROUGH_ANNOTATION: "ROUGH_ANNOTATION",
  IMAGE_ALIGN_LEFT: "IMAGE_ALIGN_LEFT",
  IMAGE_ALIGN_CENTER: "IMAGE_ALIGN_CENTER",
  IMAGE_ALIGN_RIGHT: "IMAGE_ALIGN_RIGHT"
} as const;

export const typograyClassNames = {
  h1: (className?: string) =>
    classNames(
      "yl:text-3xl yl:sm:text-4xl yl:md:text-5xl yl:leading-tight yl:text-text yl:break-words yl:font-bold",
      className
    ),
  h2: (className?: string) =>
    classNames(
      "yl:text-2xl yl:sm:text-3xl yl:md:text-4xl yl:leading-tight yl:text-text yl:break-words yl:font-bold",
      className
    ),
  h3: (className?: string) =>
    classNames(
      "yl:text-xl yl:sm:text-2xl yl:md:text-3xl yl:leading-snug yl:text-text yl:break-words yl:font-bold",
      className
    ),
  h4: (className?: string) =>
    classNames(
      "yl:text-lg yl:sm:text-xl yl:md:text-2xl yl:leading-snug yl:text-text yl:break-words yl:font-bold",
      className
    ),
  h5: (className?: string) =>
    classNames(
      "yl:text-base yl:sm:text-lg yl:md:text-xl yl:leading-normal yl:text-text yl:break-words yl:font-bold",
      className
    ),
  h6: (className?: string) =>
    classNames(
      "yl:text-base yl:sm:text-base yl:md:text-lg yl:leading-normal yl:text-text yl:break-words yl:font-bold",
      className
    ),
  p: (className?: string) =>
    classNames(
      "yl:text-base yl:md:text-lg yl:leading-relaxed yl:text-text yl:break-words yl:overflow-hidden",
      className
    ),
  a: (className?: string) =>
    classNames(
      "yl:break-all yl:hover:text-stroke yl:text-primary yl:hover:underline yl:hover:opacity-80 yl:active:opacity-50 yl:cursor-pointer",
      className
    ),
  ul: (className?: string) =>
    classNames(
      "yl:list-disc yl:text-text yl:pl-6 yl:ml-2 yl:my-2 marker:text-primary",
      className
    ),
  ol: (className?: string) =>
    classNames(
      "yl:list-decimal yl:text-text yl:pl-6 yl:ml-2 yl:my-2 marker:text-primary",
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
    classes: "yl:underline yl:text-primary yl:cursor-pointer yl:font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST]: {
    tagName: "ul",
    classes: typograyClassNames.ul()
  },
  [TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST]: {
    tagName: "ol",
    classes: typograyClassNames.ol()
  },
  [TIPTAP_TOOLBAR_ITEMS.YOUTUBE]: {
    tagName: null,
    classes: "yl:aspect-video yl:h-full yl:w-full yl:py-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: {
    tagName: "img",
    classes: "yl:block yl:my-4 yl:rounded-md"
  },
  [TIPTAP_TOOLBAR_ITEMS.MENTION]: {
    tagName: "span",
    classes: "yl:text-primary yl:cursor-pointer yl:font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.TABLE]: {
    tagName: "table",
    classes: "yl:border-collapse yl:w-full yl:my-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.TASK_LIST]: {
    tagName: "ul",
    classes: "yl:list-none yl:pl-0 yl:my-2"
  },
  [TIPTAP_TOOLBAR_ITEMS.TASK_ITEM]: {
    tagName: "li",
    classes: "yl:flex yl:items-start yl:gap-2"
  },
  [TIPTAP_TOOLBAR_ITEMS.HIGHLIGHT]: {
    tagName: "mark",
    classes: ""
  },
  [TIPTAP_TOOLBAR_ITEMS.ROUGH_ANNOTATION]: {
    tagName: "rough-annotation",
    classes: "yl:inline-block yl:relative"
  }
};

/**
 * Icon mapping from legacy Icon* names to standardized Outline icons
 * Used for consistent icon styling across the toolbar
 */
export const TOOLBAR_ICON_MAP: Record<string, string> = {
  // Text Formatting - use Outline versions
  IconBold: "BoldOutline",
  IconItalic: "ItalicOutline",
  IconStrikethrough: "StrikethroughOutline",
  IconCode: "CodeOutline",

  // Lists - use Outline versions
  IconListUl: "ListUnorderedOutline",
  IconListOl: "ListOrderedOutline",

  // Block Elements
  IconQuote: "QuoteOutline",

  // Insert Elements - use Outline versions
  IconLink: "LinkOutline",
  IconImage: "ImageOutline",
  IconAddYoutube: "YoutubeOutline",

  // Keep custom icons (no outline versions available)
  IconH1: "IconH1",
  IconH2: "IconH2",
  IconH3: "IconH3",
  IconH4: "IconH4",
  IconH5: "IconH5",
  IconH6: "IconH6",
  IconText: "ParagraphOutline",
  IconCodeBlock: "IconCodeBlock",
  IconHighlight: "IconHighlight",
  IconCheck: "IconCheck",
  IconPencilSquare: "IconPencilSquare"
};

/**
 * Toolbar items grouped by functionality
 */
export const TOOLBAR_GROUPS = {
  [ToolbarGroupId.TYPOGRAPHY]: [
    TIPTAP_TOOLBAR_ITEMS.HEADING_1,
    TIPTAP_TOOLBAR_ITEMS.HEADING_2,
    TIPTAP_TOOLBAR_ITEMS.HEADING_3,
    TIPTAP_TOOLBAR_ITEMS.HEADING_4,
    TIPTAP_TOOLBAR_ITEMS.HEADING_5,
    TIPTAP_TOOLBAR_ITEMS.HEADING_6,
    TIPTAP_TOOLBAR_ITEMS.PARAGRAPH
  ],
  [ToolbarGroupId.TEXT_FORMATTING]: [
    TIPTAP_TOOLBAR_ITEMS.BOLD,
    TIPTAP_TOOLBAR_ITEMS.ITALIC,
    TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
    TIPTAP_TOOLBAR_ITEMS.CODE,
    TIPTAP_TOOLBAR_ITEMS.HIGHLIGHT
  ],
  [ToolbarGroupId.LISTS]: [
    TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
    TIPTAP_TOOLBAR_ITEMS.TASK_LIST
  ],
  [ToolbarGroupId.BLOCK_ELEMENTS]: [
    TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
    TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK
  ],
  [ToolbarGroupId.INSERT]: [
    TIPTAP_TOOLBAR_ITEMS.LINK,
    TIPTAP_TOOLBAR_ITEMS.IMAGE,
    TIPTAP_TOOLBAR_ITEMS.YOUTUBE,
    TIPTAP_TOOLBAR_ITEMS.TABLE
  ],
  [ToolbarGroupId.ANNOTATIONS]: [TIPTAP_TOOLBAR_ITEMS.ROUGH_ANNOTATION]
} as const;

/**
 * Items that should appear in the bubble toolbar (text formatting on selection)
 */
export const BUBBLE_TOOLBAR_ITEMS = [
  TIPTAP_TOOLBAR_ITEMS.BOLD,
  TIPTAP_TOOLBAR_ITEMS.ITALIC,
  TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH,
  TIPTAP_TOOLBAR_ITEMS.CODE,
  TIPTAP_TOOLBAR_ITEMS.HIGHLIGHT,
  TIPTAP_TOOLBAR_ITEMS.LINK,
  TIPTAP_TOOLBAR_ITEMS.ROUGH_ANNOTATION
] as const;

/**
 * Standard icon size for toolbar - all icons should appear this size visually
 */
export const TOOLBAR_ICON_SIZE = "yl:w-4 yl:h-4";

/**
 * Individual icon size overrides - tuned per icon library for visual consistency
 * All sizes are calibrated to appear roughly the same visual size in the toolbar
 */
export const TOOLBAR_ICON_SIZES: Record<string, string> = {
  // Dropdown chevron - smaller
  DownSmallOutline: "yl:w-3 yl:h-3",

  // Custom Icon* icons from our library - need slightly larger container
  // because they have more padding/whitespace baked in
  IconH1: "yl:w-5 yl:h-5",
  IconH2: "yl:w-5 yl:h-5",
  IconH3: "yl:w-5 yl:h-5",
  IconH4: "yl:w-5 yl:h-5",
  IconH5: "yl:w-5 yl:h-5",
  IconH6: "yl:w-5 yl:h-5",
  IconCodeBlock: "yl:w-5 yl:h-5",
  IconHighlight: "yl:w-5 yl:h-5",
  IconCheck: "yl:w-5 yl:h-5",
  IconPencilSquare: "yl:w-5 yl:h-5"
};

export const getIconSize = (iconName: string): string => {
  return TOOLBAR_ICON_SIZES[iconName] || TOOLBAR_ICON_SIZE;
};

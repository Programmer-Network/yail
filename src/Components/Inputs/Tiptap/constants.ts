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
  STRIKE: "STRIKE"
} as const;

export const typograyClassNames = {
  h1: (className?: string) =>
    classNames(
      "yl:text-3xl yl:sm:text-4xl yl:md:text-5xl yl:text-text yl:break-words yl:overflow-hidden yl:font-bold",
      className
    ),
  h2: (className?: string) =>
    classNames(
      "yl:text-2xl yl:sm:text-3xl yl:md:text-4xl yl:text-text yl:break-words yl:overflow-hidden yl:font-bold",
      className
    ),
  h3: (className?: string) =>
    classNames(
      "yl:text-xl yl:sm:text-2xl yl:md:text-3xl yl:text-text yl:break-words yl:overflow-hidden yl:font-bold",
      className
    ),
  h4: (className?: string) =>
    classNames(
      "text-lg yl:sm:text-xl yl:md:text-2xl yl:text-text yl:break-words yl:overflow-hidden yl:font-bold",
      className
    ),
  h5: (className?: string) =>
    classNames(
      "yl:text-md yl:sm:text-lg yl:md:text-xl yl:text-text yl:break-words yl:overflow-hidden yl:font-bold",
      className
    ),
  h6: (className?: string) =>
    classNames(
      "yl:text-sm yl:sm:text-md yl:md:text-lg yl:text-text yl:break-words yl:overflow-hidden yl:font-bold",
      className
    ),
  p: (className?: string) =>
    classNames("yl:text-text yl:break-words yl:overflow-hidden", className),
  a: (className?: string) =>
    classNames(
      "yl:break-all yl:hover:text-stroke yl:text-primary yl:hover:underline yl:hover:opacity-80 yl:active:opacity-50",
      className
    ),
  ul: (className?: string) =>
    classNames(
      "yl:list-disc yl:text-text yl:marker:text-primary yl:marker:text-xl yl:pl-4",
      className
    ),
  ol: (className?: string) =>
    classNames(
      "yl:list-decimal yl:text-text yl:marker:text-primary yl:marker:text-xl yl:pl-4",
      className
    )
};

export const toolbarItemToClassName = {
  [TIPTAP_TOOLBAR_ITEMS.HEADING_1]: {
    tagName: "h1",
    classes: typograyClassNames.h1("yl:my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_2]: {
    tagName: "h2",
    classes: typograyClassNames.h2("yl:my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_3]: {
    tagName: "h3",
    classes: typograyClassNames.h3("yl:my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_4]: {
    tagName: "h4",
    classes: typograyClassNames.h4("yl:my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_5]: {
    tagName: "h5",
    classes: typograyClassNames.h5("yl:my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.HEADING_6]: {
    tagName: "h6",
    classes: typograyClassNames.h6("yl:my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.PARAGRAPH]: {
    tagName: "p",
    classes: typograyClassNames.p("yl:my-4")
  },
  [TIPTAP_TOOLBAR_ITEMS.LINK]: {
    tagName: "a",
    classes: "yl:underline yl:text-primary yl:cursor-pointer yl:font-bold"
  },
  [TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST]: {
    tagName: "ul",
    classes:
      "yl:list-disc yl:text-text yl:marker:text-text yl:marker:text-xl yl:pl-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST]: {
    tagName: "ol",
    classes:
      "yl:list-decimal yl:text-text yl:marker:text-text yl:marker:text-xl yl:pl-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.YOUTUBE]: {
    tagName: null,
    classes: "yl:aspect-video yl:h-full yl:w-full yl:py-4"
  },
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: {
    tagName: "img",
    classes: "yl:mx-auto yl:block yl:p-2 yl:border yl:border-background"
  },
  [TIPTAP_TOOLBAR_ITEMS.MENTION]: {
    tagName: "span",
    classes: "yl:text-primary yl:cursor-pointer yl:font-bold"
  }
};

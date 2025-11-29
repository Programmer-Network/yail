import { TIPTAP_TOOLBAR_ITEMS } from "../constants";
import { TiptapControls } from "../types";

const tiptapToSanitizeHtmlTags: Record<string, string[]> = {
  [TIPTAP_TOOLBAR_ITEMS.BOLD]: ["strong"],
  [TIPTAP_TOOLBAR_ITEMS.ITALIC]: ["em"],
  [TIPTAP_TOOLBAR_ITEMS.CODE]: ["code"],
  [TIPTAP_TOOLBAR_ITEMS.LINK]: ["a"],
  [TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST]: ["ol"],
  [TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST]: ["ul"],
  [TIPTAP_TOOLBAR_ITEMS.IMAGE]: ["img"],
  [TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK]: ["pre", "code"],
  [TIPTAP_TOOLBAR_ITEMS.LIST_ITEM]: ["li"],
  [TIPTAP_TOOLBAR_ITEMS.HEADING_1]: ["h1"],
  [TIPTAP_TOOLBAR_ITEMS.HEADING_2]: ["h2"],
  [TIPTAP_TOOLBAR_ITEMS.HEADING_3]: ["h3"],
  [TIPTAP_TOOLBAR_ITEMS.HEADING_4]: ["h4"],
  [TIPTAP_TOOLBAR_ITEMS.HEADING_5]: ["h5"],
  [TIPTAP_TOOLBAR_ITEMS.HEADING_6]: ["h6"],
  [TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE]: ["blockquote"],
  [TIPTAP_TOOLBAR_ITEMS.YOUTUBE]: ["iframe"],
  [TIPTAP_TOOLBAR_ITEMS.STRIKE_THROUGH]: ["s"],
  [TIPTAP_TOOLBAR_ITEMS.TABLE]: ["table", "thead", "tbody", "tr", "th", "td"],
  [TIPTAP_TOOLBAR_ITEMS.TASK_LIST]: ["ul", "li", "label", "input"],
  [TIPTAP_TOOLBAR_ITEMS.TASK_ITEM]: ["li", "label", "input"],
  [TIPTAP_TOOLBAR_ITEMS.HIGHLIGHT]: ["mark"],
  [TIPTAP_TOOLBAR_ITEMS.ROUGH_ANNOTATION]: ["rough-annotation"]
};

export const getAllowedTags = (data: TiptapControls) => {
  if (!data) {
    return [];
  }

  try {
    return data.reduce((acc, control) => {
      if (!tiptapToSanitizeHtmlTags[control]) {
        return acc;
      }

      return [...acc, ...tiptapToSanitizeHtmlTags[control]];
    }, [] as string[]);
  } catch {
    return [];
  }
};

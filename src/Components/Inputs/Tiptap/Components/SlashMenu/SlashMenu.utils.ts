import { TIPTAP_TOOLBAR_ITEMS } from "../../Tiptap.constants";
import { Extensions } from "../../Tiptap.types";
import { SLASH_MENU_ITEMS } from "./SlashMenu.constants";
import { ISlashMenuItemWithCommand, SlashMenuGroup } from "./SlashMenu.types";

/**
 * Items that are valid for the slash menu (not marks that require selection)
 */
const SLASH_MENU_VALID_ITEMS: Set<string> = new Set([
  // Typography
  TIPTAP_TOOLBAR_ITEMS.HEADING_1,
  TIPTAP_TOOLBAR_ITEMS.HEADING_2,
  TIPTAP_TOOLBAR_ITEMS.HEADING_3,
  TIPTAP_TOOLBAR_ITEMS.HEADING_4,
  TIPTAP_TOOLBAR_ITEMS.HEADING_5,
  TIPTAP_TOOLBAR_ITEMS.HEADING_6,
  TIPTAP_TOOLBAR_ITEMS.PARAGRAPH,
  // Lists
  TIPTAP_TOOLBAR_ITEMS.UNORDERED_LIST,
  TIPTAP_TOOLBAR_ITEMS.ORDERED_LIST,
  TIPTAP_TOOLBAR_ITEMS.TASK_LIST,
  // Blocks
  TIPTAP_TOOLBAR_ITEMS.CODE_BLOCK,
  TIPTAP_TOOLBAR_ITEMS.BLOCK_QUOTE,
  // Insert
  TIPTAP_TOOLBAR_ITEMS.IMAGE,
  TIPTAP_TOOLBAR_ITEMS.TABLE,
  // Callouts
  TIPTAP_TOOLBAR_ITEMS.CALLOUT
]);

/**
 * Filters slash menu items based on enabled toolbar items
 * @param toolbarItems - The enabled toolbar items from props
 * @returns Filtered slash menu items
 */
export const getAvailableSlashMenuItems = (
  toolbarItems?: Extensions[]
): ISlashMenuItemWithCommand[] => {
  // If no toolbar items specified, return all valid slash menu items
  if (!toolbarItems || toolbarItems.length === 0) {
    return SLASH_MENU_ITEMS;
  }

  // Filter to only include items that are both in toolbar items and valid for slash menu
  return SLASH_MENU_ITEMS.filter(
    item =>
      toolbarItems.includes(item.id) && SLASH_MENU_VALID_ITEMS.has(item.id)
  );
};

/**
 * Filters menu items based on search query
 * @param items - The available menu items
 * @param query - The search query (text after /)
 * @returns Filtered items matching the query
 */
export const filterSlashMenuItems = (
  items: ISlashMenuItemWithCommand[],
  query: string
): ISlashMenuItemWithCommand[] => {
  if (!query || query.trim() === "") {
    return items;
  }

  const normalizedQuery = query.toLowerCase().trim();

  return items.filter(item => {
    // Check if query matches label
    if (item.label.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    // Check if query matches any keyword
    if (item.keywords.some(keyword => keyword.includes(normalizedQuery))) {
      return true;
    }

    // Check if query matches description
    if (item.description?.toLowerCase().includes(normalizedQuery)) {
      return true;
    }

    return false;
  });
};

/**
 * Groups items by their group for rendering
 * @param items - The menu items to group
 * @returns Map of group to items
 */
export const groupSlashMenuItems = (
  items: ISlashMenuItemWithCommand[]
): Map<SlashMenuGroup, ISlashMenuItemWithCommand[]> => {
  const grouped = new Map<SlashMenuGroup, ISlashMenuItemWithCommand[]>();

  items.forEach(item => {
    const existing = grouped.get(item.group) || [];
    existing.push(item);
    grouped.set(item.group, existing);
  });

  return grouped;
};

/**
 * Checks if slash menu should be enabled based on toolbar items
 * @param toolbarItems - The enabled toolbar items from props
 * @returns True if at least one slash menu compatible item is enabled
 */
export const isSlashMenuEnabled = (toolbarItems?: Extensions[]): boolean => {
  if (!toolbarItems || toolbarItems.length === 0) {
    return true; // Enable by default when no restrictions
  }

  return toolbarItems.some(item => SLASH_MENU_VALID_ITEMS.has(item));
};

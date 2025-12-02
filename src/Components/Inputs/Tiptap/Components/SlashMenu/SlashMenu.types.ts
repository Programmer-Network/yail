import { Editor, Range } from "@tiptap/core";
import { SuggestionKeyDownProps } from "@tiptap/suggestion";

import { Extensions } from "../../Tiptap.types";

/**
 * Represents a single item in the slash menu
 */
export interface ISlashMenuItem {
  /** Unique identifier matching TIPTAP_TOOLBAR_ITEMS */
  id: Extensions;
  /** Display label shown in the menu */
  label: string;
  /** Optional description text shown below the label */
  description?: string;
  /** Icon name from the Icon component */
  icon: string;
  /** Keywords for filtering (searched along with label) */
  keywords: string[];
  /** Group this item belongs to for visual organization */
  group: SlashMenuGroup;
}

/**
 * Groups for organizing slash menu items
 */
export enum SlashMenuGroup {
  TYPOGRAPHY = "typography",
  LISTS = "lists",
  BLOCKS = "blocks",
  INSERT = "insert",
  CALLOUTS = "callouts"
}

/**
 * Props passed to the SlashMenuList component by the suggestion plugin
 */
export interface ISlashMenuListProps {
  /** The Tiptap editor instance */
  editor: Editor;
  /** Filtered menu items based on user query */
  items: ISlashMenuItemWithCommand[];
  /** Function to execute when an item is selected */
  command: (item: ISlashMenuItemWithCommand) => void;
  /** The current search query (text after /) */
  query: string;
}

/**
 * Ref handle for the SlashMenuList component
 */
export interface ISlashMenuListHandle {
  onKeyDown: (props: SuggestionKeyDownProps) => boolean;
}

/**
 * Configuration options for the slash menu extension
 */
export interface ISlashMenuExtensionOptions {
  /** Available toolbar items to filter slash menu by */
  toolbarItems?: Extensions[];
  /** Callback when image is selected from slash menu */
  onImageSelect?: () => void;
}

/**
 * Command context passed when executing a slash menu item
 */
export interface ISlashMenuCommandContext {
  editor: Editor;
  range: Range;
  props: ISlashMenuItem;
}

/**
 * Function signature for slash menu item commands
 */
export type SlashMenuCommandFn = (context: ISlashMenuCommandContext) => void;

/**
 * Submenu item for nested menus
 */
export interface ISlashMenuSubmenuItem {
  id: string;
  label: string;
  icon: string;
  command: SlashMenuCommandFn;
}

/**
 * Extended menu item with command function
 */
export interface ISlashMenuItemWithCommand extends ISlashMenuItem {
  /** Command to execute when this item is selected (not used if submenu is present) */
  command: SlashMenuCommandFn;
  /** Optional submenu items for nested selection */
  submenu?: ISlashMenuSubmenuItem[];
}

/**
 * Grouped items for rendering in the slash menu
 */
export interface IRenderGroup {
  group: SlashMenuGroup;
  items: Array<{ item: ISlashMenuItemWithCommand; flatIdx: number }>;
}

/**
 * Return type for useSlashMenuList hook
 */
export interface IUseSlashMenuListReturn {
  selectedIndex: number;
  submenuIndex: number | null;
  activeSubmenu: ISlashMenuSubmenuItem[] | null;
  menuRef: React.RefObject<HTMLDivElement | null>;
  renderGroups: IRenderGroup[];
  isEmpty: boolean;
  handleUpArrow: () => void;
  handleDownArrow: () => void;
  handleEnter: () => void;
  handleEscape: () => void;
  handleRightArrow: () => void;
  handleLeftArrow: () => void;
  handleItemClick: (index: number) => void;
  handleItemMouseEnter: (index: number) => void;
  handleSubmenuItemClick: (index: number) => void;
  handleSubmenuItemMouseEnter: (index: number) => void;
  createItemRef: (flatIdx: number) => (el: HTMLButtonElement | null) => void;
}

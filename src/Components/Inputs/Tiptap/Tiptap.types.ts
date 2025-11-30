import { Editor, EditorEvents, Extension, Mark, Node } from "@tiptap/react";
import { SuggestionOptions } from "@tiptap/suggestion";
import { FC, MouseEventHandler } from "react";

import { TIPTAP_TOOLBAR_ITEMS } from "./Tiptap.constants";

export type TiptapToolbarMode = "full" | "minimal" | "bubble" | "hybrid";

export type TiptapVariant = "default" | "zen";

export interface TiptapSuggestionOptions {
  items: Partial<SuggestionOptions>["items"];
  trigger?: string;
}

export interface ITiptapActions {
  onAction: (action: TiptapActionsEnum) => void;
  isConfirming?: boolean;
  buttons: TiptapActionsEnum[];
}

export interface TiptapProps {
  autoFocus?: boolean;
  editorContent?: string;
  value?: string;
  onUpdate?: (props: EditorEvents["update"]) => void;
  onAction?: (action: TiptapActionsEnum) => void;
  actionButtons?: TiptapActionsEnum[];
  actions?: ITiptapActions;
  onSelectionUpdate?: (props: EditorEvents["selectionUpdate"]) => void;
  onTransaction?: (props: EditorEvents["transaction"]) => void;
  onSetImage?: (base64Image: string) => Promise<void>;
  suggestions?: TiptapSuggestionOptions;
  placeholder?: string;
  toolbarItems?: TiptapControls;
  toolbarMode?: TiptapToolbarMode;
  /** Visual style variant. "zen" removes borders for distraction-free writing */
  variant?: TiptapVariant;
  /** Offset for sticky toolbar (e.g., to account for a fixed header). CSS value like "48px" or "3rem" */
  stickyOffset?: string;
  error?: string;
  label?: string;
  hint?: string;
  required?: boolean;
  isCreating?: boolean;
  isUpdating?: boolean;
  onImageUploadError?: (error: string) => void;
}

export type ToolbarMode = "static" | "floating";

export interface TiptapToolbarProps {
  image: {
    onSetImage?: (base64Image: string) => Promise<void>;
    isExtensionEnabled: boolean;
  };
  link: {
    isExtensionEnabled: boolean;
  };
  editor: Editor;
  toolbarItems?: TiptapControls;
  isCreating?: boolean;
  isUpdating?: boolean;
  onImageUploadError?: (error: string) => void;
  /** Offset for sticky toolbar (e.g., "48px" to account for a fixed header) */
  stickyOffset?: string;
  /** Visual style variant. "zen" removes borders */
  variant?: TiptapVariant;
  /** Toolbar rendering mode - "static" for sticky, "floating" for bubble menu */
  mode?: ToolbarMode;
}

export interface TiptapRef {
  clearContent: () => void;
  getContents: () => string | undefined;
  setContent: (content: string) => void;
  setFocus: () => void;
}

export enum TiptapControlsType {
  TIPTAP_CONTROLS = "TIPTAP_CONTROLS"
}

export type Extensions = keyof typeof TIPTAP_TOOLBAR_ITEMS;

export type TiptapControls = Extensions[];

export interface IToolbarIcons {
  editor: Editor;
}

export interface IToolbarIconsReturn {
  id: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  isActive?: boolean;
  iconName?: string;
  className?: string;
  Icon?: FC;
  isDisabled?: () => boolean;
  description?: string;
}

export interface IEditorConfig {
  autoFocus?: boolean;
  editorContent?: string;
  onUpdate?: (props: EditorEvents["update"]) => void;
  onSelectionUpdate?: (props: EditorEvents["selectionUpdate"]) => void;
  onTransaction?: (props: EditorEvents["transaction"]) => void;
  suggestions?: TiptapSuggestionOptions;
  trigger?: string;
  placeholder?: string;
  toolbarItems?: TiptapControls;
}

export interface IGetExtensions {
  toolbarItems?: TiptapControls;
  placeholder?: string;
  suggestions?: TiptapSuggestionOptions;
}

export type IExtensionsMap = {
  [K in Extensions]?: Node | Mark | Extension;
};

export interface IMentionProps {
  items: { label: string; value: string }[];
  command: (props: { id: string; label: string }) => void;
}

export interface MentionHandle {
  onKeyDown: ({ event }: { event: KeyboardEvent }) => boolean;
}

export enum TiptapActionsEnum {
  CONFIRM = "CONFIRM",
  CANCEL = "CANCEL"
}

// Toolbar Group Types
export enum ToolbarGroupId {
  TYPOGRAPHY = "typography",
  TEXT_FORMATTING = "text-formatting",
  LISTS = "lists",
  BLOCK_ELEMENTS = "block-elements",
  INSERT = "insert",
  ANNOTATIONS = "annotations",
  CONTEXTUAL = "contextual"
}

// TiptapDropdown Types
export interface ITiptapDropdownItem {
  id: string;
  label: string;
  icon?: string;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  dividerAfter?: boolean;
  shortcut?: string;
}

export interface ITiptapDropdownProps {
  triggerIcon: string;
  triggerLabel?: string;
  items: ITiptapDropdownItem[];
  isActive?: boolean;
  disabled?: boolean;
  showActiveIndicator?: boolean;
  tooltipText?: string;
  placement?: "bottom-start" | "bottom-end" | "bottom";
}

// ToolbarButton Types
export interface IToolbarButtonProps {
  icon: string;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
  tooltipText?: string;
}

// ToolbarGroup Types
export interface IToolbarGroupProps {
  children: React.ReactNode;
  showSeparator?: boolean;
}

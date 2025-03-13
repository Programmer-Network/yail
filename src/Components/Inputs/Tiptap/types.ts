import { Editor, EditorEvents, Extension, Mark, Node } from "@tiptap/react";
import { SuggestionOptions } from "@tiptap/suggestion";
import { FC, MouseEventHandler } from "react";

import { IconName } from "Components/Icons/types";

import { TIPTAP_TOOLBAR_ITEMS } from "./constants";

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
  editorContent?: string;
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
  error?: string;
  label?: string;
  hint?: string;
  required?: boolean;
  isCreating?: boolean;
  isUpdating?: boolean;
}

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
  iconName?: IconName;
  className?: string;
  Icon?: FC;
  isDisabled?: () => boolean;
  description?: string;
}

export interface IEditorConfig {
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
  [K in Extensions]: Node | Mark | Extension;
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

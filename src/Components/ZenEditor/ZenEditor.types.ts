import { Editor, EditorEvents } from "@tiptap/react";
import { ReactNode, RefObject } from "react";

import {
  TiptapControls,
  TiptapRef,
  TiptapSuggestionOptions
} from "../Inputs/Tiptap/Tiptap.types";
import { IZenBreadcrumbItem } from "./ZenHeader";
import { IZenAction } from "./ZenPropertiesDrawer";

// Re-export for convenience
export type { IZenBreadcrumbItem } from "./ZenHeader";
export type { IZenAction } from "./ZenPropertiesDrawer";

export interface IZenEditorPropertiesDrawer {
  isOpen: boolean;
  onToggle: () => void;
  title?: string;
  children: ReactNode;
}

export interface IZenEditorStatusBar {
  primaryAction: IZenAction;
  secondaryAction?: IZenAction;
  propertiesButtonText: string;
  propertiesButtonIcon: string;
}

export interface IZenEditorHeader {
  onBack?: () => void;
  breadcrumbs: IZenBreadcrumbItem[];
}

export interface IZenEditorProps {
  value: string;
  onUpdate: (props: EditorEvents["update"]) => void;
  toolbarItems?: TiptapControls;
  placeholder?: string;
  editorRef?: RefObject<TiptapRef | null>;
  suggestions?: TiptapSuggestionOptions;
  onSetImage?: (base64Image: string) => Promise<void>;
  onImageUploadError?: (error: string) => void;
  propertiesDrawer: IZenEditorPropertiesDrawer;
  statusBar: IZenEditorStatusBar;
  header?: IZenEditorHeader;
  className?: string;
  contentClassName?: string;
  autoFocus?: boolean;
}

export interface IZenEditorRef {
  clearContent: () => void;
  getContents: () => string | undefined;
  setContent: (content: string) => void;
  setFocus: () => void;
  getEditor: () => Editor | null;
}

// Hook types
export interface IUseZenEditorKeyboardProps {
  propertiesDrawer: IZenEditorPropertiesDrawer;
  primaryAction: IZenAction;
}

export interface IUseZenEditorRefProps {
  externalEditorRef?: RefObject<TiptapRef | null>;
}

export interface IUseZenEditorRefReturn {
  editorRef: RefObject<TiptapRef | null>;
}

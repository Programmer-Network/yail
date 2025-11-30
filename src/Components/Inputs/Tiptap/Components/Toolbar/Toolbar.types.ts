import { Editor } from "@tiptap/core";
import { MouseEvent, ReactNode, RefObject } from "react";

import { TiptapControls, TiptapToolbarProps } from "../../types";

// Toolbar Wrapper types
export interface IToolbarWrapperProps {
  mode: "static" | "floating";
  editor: TiptapToolbarProps["editor"];
  children: ReactNode;
  className: string;
  style?: React.CSSProperties;
}

// useToolbar hook types
export interface IUseToolbarProps {
  editor: Editor;
  toolbarItems?: TiptapControls;
  image: {
    onSetImage?: (base64Image: string) => Promise<void>;
    isExtensionEnabled: boolean;
  };
  link: {
    isExtensionEnabled: boolean;
  };
  onImageUploadError?: (error: string) => void;
}

export interface ILinkInputPosition {
  x: number;
  y: number;
}

// Toolbar icons types
export interface IToolbarIconsProps {
  editor: Editor;
}

export interface IToolbarIconReturn {
  id: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  iconName?: string;
  isDisabled?: () => boolean;
  description?: string;
}

// Modal input ref type
export interface IModalInputRef {
  ref: RefObject<HTMLDivElement>;
}

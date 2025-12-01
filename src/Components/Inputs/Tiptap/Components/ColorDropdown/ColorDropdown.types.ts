import { Editor } from "@tiptap/react";
import { RefObject } from "react";

export interface IColorOption {
  id: string;
  label: string;
  color: string | null;
}

export interface IColorDropdownProps {
  editor: Editor;
}

export interface IUseColorDropdownProps {
  editor: Editor;
}

export interface IUseColorDropdownReturn {
  isOpen: boolean;
  dropdownRef: RefObject<HTMLDivElement | null>;
  currentColor: string | null;
  handleToggle: () => void;
  handleColorSelect: (color: string | null) => void;
  handleResetColor: () => void;
}

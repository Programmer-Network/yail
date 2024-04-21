import { OptionsGeneric } from "@popperjs/core";
import { PopperOffsetsModifier } from "@popperjs/core/lib/modifiers/popperOffsets";
import { MouseEvent, ReactNode } from "react";

export interface IDropdownListItem {
  icon?: ReactNode;
  value?: string;
  onClick?: (e: MouseEvent, value: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

export interface IDropdownProps {
  children?: React.ReactNode;
  buttonContent: React.ReactNode;
  buttonClassName?: string;
  dropdownClassName?: string;
  popperOptions?: Partial<OptionsGeneric<PopperOffsetsModifier>>;
  options?: {
    icon?: React.ReactNode;
    value: string;
    onClick?: (e: MouseEvent, value: string) => void;
  }[];
}

export interface IDefaultDropdownProps {
  setIsOpen: (isOpen: boolean) => void;
  options: {
    icon?: ReactNode;
    value: string;
    onClick?: (e: MouseEvent, value: string) => void;
  }[];
}

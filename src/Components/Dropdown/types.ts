import { OptionsGeneric } from "@popperjs/core";
import { PopperOffsetsModifier } from "@popperjs/core/lib/modifiers/popperOffsets";
import { MouseEvent } from "react";
import { Placement } from "tippy.js";

import { IconName } from "Components/Icons/types";

export interface IDropdownListItem {
  icon?: {
    iconName: IconName;
    className?: string;
    dataTestId?: string;
  };
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
  placement?: Placement;
  options?: {
    icon?: {
      iconName: IconName;
      className?: string;
      dataTestId?: string;
    };
    value: string;
    onClick?: (e: MouseEvent, value: string) => void;
  }[];
}

export interface IDefaultDropdownProps {
  setIsOpen: (isOpen: boolean) => void;
  options: {
    icon?: {
      iconName: IconName;
      className?: string;
      dataTestId?: string;
    };
    value: string;
    onClick?: (e: MouseEvent, value: string) => void;
  }[];
}

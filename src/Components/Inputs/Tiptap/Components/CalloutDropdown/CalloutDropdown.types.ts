import { Editor } from "@tiptap/react";
import { RefObject } from "react";

import { CalloutType } from "../Callout";

export interface ICalloutOption {
  id: CalloutType;
  label: string;
  icon: string;
  borderColor: string;
}

export interface ICalloutDropdownProps {
  editor: Editor;
}

export interface IUseCalloutDropdownProps {
  editor: Editor;
}

export interface IUseCalloutDropdownReturn {
  isOpen: boolean;
  dropdownRef: RefObject<HTMLDivElement | null>;
  handleToggle: () => void;
  handleCalloutSelect: (type: CalloutType) => void;
}

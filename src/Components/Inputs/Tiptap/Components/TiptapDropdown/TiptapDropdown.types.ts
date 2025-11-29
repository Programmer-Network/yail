import { MouseEvent } from "react";

export interface ITiptapDropdownItem {
  id: string;
  label: string;
  icon?: string;
  onClick: (e: MouseEvent) => void;
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

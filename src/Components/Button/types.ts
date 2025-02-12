import { ReactNode } from "react";

import { IconName } from "Components/Icons/types";

export interface IButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  variant?: "filled" | "outlined" | "text";
  icon?: {
    iconName?: IconName;
    iconClassName?: string;
    iconPosition?: "left" | "right";
  };
}

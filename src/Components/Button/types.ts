import { ReactNode } from "react";

export enum ButtonVariantEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ERROR = "error"
}

export interface IButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  outlined?: boolean;
  icon?: {
    iconName?: string;
    iconClassName?: string;
    iconPosition?: "left" | "right" | "center";
  };
  variant?: ButtonVariantEnum;
}

export interface IGetButtonClassesArgs {
  variant: ButtonVariantEnum;
  disabled: boolean;
  outlined: boolean;
  isLoading: boolean;
  className?: string;
  isIconOnly?: boolean;
}

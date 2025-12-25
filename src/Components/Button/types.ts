import { ReactNode } from "react";

export enum ButtonVariantEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning"
}

export enum ButtonSizeEnum {
  SM = "sm",
  MD = "md",
  LG = "lg"
}

export interface IButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  outlined?: boolean;
  ghost?: boolean;
  fullWidth?: boolean;
  icon?: {
    iconName?: string;
    iconClassName?: string;
    iconPosition?: "left" | "right" | "center";
    iconGapClassName?: string;
  };
  variant?: ButtonVariantEnum;
  size?: ButtonSizeEnum;
}

export interface IGetButtonClassesArgs {
  variant: ButtonVariantEnum;
  disabled: boolean;
  outlined: boolean;
  isLoading: boolean;
  className?: string;
  isIconOnly?: boolean;
  size?: ButtonSizeEnum;
  ghost?: boolean;
  fullWidth?: boolean;
}

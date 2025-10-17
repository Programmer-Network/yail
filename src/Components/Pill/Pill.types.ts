import { ReactNode } from "react";

export enum PillVariant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INDIGO = "indigo",
  PURPLE = "purple",
  PINK = "pink"
}

export enum PillSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large"
}

export interface IPillProps {
  children: ReactNode;
  variant: PillVariant;
  size: PillSize;
  clickable?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}

import { ReactNode } from "react";

export type PillVariant =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "indigo"
  | "purple"
  | "pink";

export type PillSize = "small" | "medium" | "large";

export interface IPillProps {
  children: ReactNode;
  variant?: PillVariant;
  size?: PillSize;
  clickable?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}

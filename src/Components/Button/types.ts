import { ReactNode } from "react";

export interface IButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  outlined?: boolean;
}

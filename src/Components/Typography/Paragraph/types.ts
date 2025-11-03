import { MouseEvent, ReactNode } from "react";

export interface IParagraphProps {
  id?: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLParagraphElement>) => void;
  ariaLabel?: string;
}

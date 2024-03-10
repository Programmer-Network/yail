import { MouseEvent, ReactNode } from "react";

export interface IParagraphProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLParagraphElement>) => void;
}

import { MouseEvent, ReactNode } from "react";

export interface IH1Props {
  id?: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
  ariaLabel?: string;
}

import { MouseEvent, ReactNode } from "react";

export interface IH4Props {
  id?: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
  ariaLabel?: string;
}

import { MouseEvent, ReactNode } from "react";

export interface IH2Props {
  id?: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
  ariaLabel?: string;
}

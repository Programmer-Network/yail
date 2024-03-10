import { MouseEvent, ReactNode } from "react";

export interface IH2Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}

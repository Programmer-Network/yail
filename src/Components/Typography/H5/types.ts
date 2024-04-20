import { MouseEvent, ReactNode } from "react";

export interface IH5Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}

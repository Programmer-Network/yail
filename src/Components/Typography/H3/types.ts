import { MouseEvent, ReactNode } from "react";

export interface IH3Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}

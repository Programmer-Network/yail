import { MouseEvent, ReactNode } from "react";

export interface IH1Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}

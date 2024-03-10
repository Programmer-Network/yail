import { MouseEvent, ReactNode } from "react";

export interface IH4Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}

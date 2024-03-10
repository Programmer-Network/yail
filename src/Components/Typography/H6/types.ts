import { MouseEvent, ReactNode } from "react";

export interface IH6Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}

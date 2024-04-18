import { MouseEvent, ReactNode } from "react";

import { ITypographyMargin } from "../common";

export interface IH2Props extends ITypographyMargin {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}

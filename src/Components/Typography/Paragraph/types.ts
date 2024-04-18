import { MouseEvent, ReactNode } from "react";

import { ITypographyMargin } from "../common";

export interface IParagraphProps extends ITypographyMargin {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLParagraphElement>) => void;
}

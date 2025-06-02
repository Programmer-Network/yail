import { MouseEvent } from "react";

export interface IIconProps {
  iconName: string;
  className?: string;
  onClick?: (e: MouseEvent<SVGElement>) => void;
  dataTestId?: string;
}

import { ReactNode } from "react";

import { IIconProps } from "../Icon/types";

export interface IElevatedCardProps {
  title: string;
  description?: string;
  icon?: IIconProps;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  dataTestId?: string;
}

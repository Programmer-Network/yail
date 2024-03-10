import { MouseEvent } from "react";

import { IconName } from "Components/Icons/types";

export interface IIconProps {
  iconName: IconName;
  className?: string;
  onClick?: (e: MouseEvent<SVGElement>) => void;
}

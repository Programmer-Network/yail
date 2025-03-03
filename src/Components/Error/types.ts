import { FC } from "react";

import { IIconProps } from "Components/Icon/types";

export interface IErrorProps {
  error: string;
  title: string;
  description?: string;
  backToText?: string;
  className?: string;
  onBackToClick?: () => void;
  Icon?: FC<IIconProps>;
  IconProps?: IIconProps;
  onIconClick?: () => void;
}

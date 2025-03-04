import { IIconProps } from "Components/Icon/types";

export interface IErrorProps {
  error: string;
  title: string;
  description?: string;
  backToText?: string;
  className?: string;
  onBackToClick?: () => void;
  IconProps?: IIconProps;
  onIconClick?: () => void;
}

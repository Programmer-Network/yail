import { IIconProps } from "../Icon/types";

export interface ICTAProps {
  IconComponent?: IIconProps;
  ButtonIconComponent?: IIconProps;
  iconClassName?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  onClick?: () => void;
}

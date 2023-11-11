import { ComponentType, SVGProps } from "react";

export interface ICTAProps {
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  ButtonIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  onClick?: () => void;
}

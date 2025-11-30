import { ReactNode, RefObject } from "react";

export interface IZenAction {
  label: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export interface IZenPropertiesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  primaryAction: IZenAction;
  secondaryAction?: IZenAction;
}

export interface IUseDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface IUseDrawerReturn {
  drawerRef: RefObject<HTMLDivElement | null>;
}

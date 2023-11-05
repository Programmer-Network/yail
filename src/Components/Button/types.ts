import { ReactNode } from 'react';

export interface IButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  outlined?: boolean;
  spinnerColor?: string;
}

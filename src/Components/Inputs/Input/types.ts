import { FocusEvent, InputHTMLAttributes } from "react";

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  value: string;
  label?: string;
  type?: string;
  min?: number;
  max?: number;
  children?: React.ReactNode;
  minDate?: string;
  hint?: string;
  className?: string;
  disabled?: boolean;
  error?: string | string[] | Record<string, string>;
  required?: boolean;
  inputWrapperClassName?: string;
  onChange?: (value: Record<string, string>) => void;
  onBlur?: (value: FocusEvent<HTMLInputElement, Element>) => void;
}

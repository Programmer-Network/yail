import { FocusEvent } from "react";

export interface ITextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: Record<string, string>) => void;
  onBlur?: (value: FocusEvent<HTMLTextAreaElement, Element>) => void;
  error?: string;
  rows?: number;
  className?: string;
  inputWrapperClassName?: string;
  max?: number;
  min?: number;
  required?: boolean;
}

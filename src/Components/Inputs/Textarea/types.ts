export interface ITextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: Record<string, string>) => void;
  error?: string;
  rows?: number;
  className?: string;
  inputWrapperClassName?: string;
}

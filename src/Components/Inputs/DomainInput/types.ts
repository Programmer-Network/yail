export interface IDomainInputProps {
  domain: string;
  name: string;
  value: string;
  hint?: string;
  className?: string;
  type?: string;
  max?: number;
  error?: string;
  disabled?: boolean;
  onChange: (e: Record<string, string>) => void;
  inputWrapperClassName?: string;
  domainClassName?: string;
}

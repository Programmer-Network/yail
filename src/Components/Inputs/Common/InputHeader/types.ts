export interface InputHeaderProps {
  name?: string;
  value?: string | number | Date;
  max?: number;
  label?: string;
  hint?: string | React.ReactNode;
  type?: string;
  required?: boolean;
}

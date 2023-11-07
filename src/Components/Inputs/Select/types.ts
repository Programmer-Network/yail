import { PropsValue } from "react-select";

export interface ISelectProps {
  name: string;
  type?: string;
  required?: boolean;
  value: string | string[];
  defaultValue?: PropsValue<{ value: string; label: string } | undefined>;
  error?: string;
  hint?: string;
  label?: string;
  max?: number;
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange: (e: Record<string, string> | Record<string, string[]>) => void;
  options: { value: string; label: string }[];
  inputWrapperClassName?: string;
}

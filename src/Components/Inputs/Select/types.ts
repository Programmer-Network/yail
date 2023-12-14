import { PropsValue } from "react-select";

export type Option = {
  value: string;
  label: string;
};

export interface ISelectProps {
  name: string;
  type?: string;
  required?: boolean;
  value: PropsValue<Option | undefined> | string | string[];
  defaultValue?: PropsValue<Option | undefined>;
  error?: string;
  hint?: string;
  label?: string;
  max?: number;
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange: (option: Record<string, string[] | string>) => void;
  options: Option[];
  inputWrapperClassName?: string;
}

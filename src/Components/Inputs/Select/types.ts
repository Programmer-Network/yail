import { PropsValue } from "react-select";

export type Option = {
  value: string | number;
  label: string;
};

export interface ISelectProps {
  name: string;
  type?: string;
  required?: boolean;
  value: PropsValue<Option | undefined> | string | string[] | number | number[];
  defaultValue?: PropsValue<Option | undefined>;
  error?: string;
  hint?: string;
  label?: string;
  max?: number;
  isMulti?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  onChange: (
    option: Record<string, string[] | string | number[] | number>
  ) => void;
  onBlur?: () => void;
  options: Option[];
  inputWrapperClassName?: string;
  placeholder?: string;
}

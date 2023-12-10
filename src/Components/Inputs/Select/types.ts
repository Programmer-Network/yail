import { MultiValue, PropsValue, SingleValue } from "react-select";

export type Option = {
  value: string;
  label: string;
};

export interface ISelectProps {
  name: string;
  type?: string;
  required?: boolean;
  value: PropsValue<Option | undefined>;
  defaultValue?: PropsValue<Option | undefined>;
  error?: string;
  hint?: string;
  label?: string;
  max?: number;
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange: (
    option: Record<
      string,
      MultiValue<Option | undefined> | SingleValue<Option | undefined>
    >
  ) => void;
  options: Option[];
  inputWrapperClassName?: string;
}

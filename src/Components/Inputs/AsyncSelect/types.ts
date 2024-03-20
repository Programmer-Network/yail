import { GroupBase, OptionsOrGroups } from "react-select";

import { Option } from "../Select/types";

export interface GroupType extends GroupBase<Option> {
  label: string;
  options: Option[];
}

export type Response<Option, Group extends GroupBase<Option>, Additional> = {
  options: OptionsOrGroups<Option, Group>;
  hasMore?: boolean;
  additional?: Additional;
};

export interface IAsyncSelectProps<IsMulti extends boolean = false> {
  name: string;
  type?: string;
  value: IsMulti extends true ? Option[] : Option;
  defaultValue?: IsMulti extends true ? Option[] : Option | null;
  error?: string | string[] | Record<string, string>;
  hint?: string;
  label?: string;
  max?: number;
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange: (value: Record<string, Option | Option[]>) => void;
  loadOptions: (
    inputValue: string
  ) => Promise<Response<Option, GroupBase<Option>, unknown>>;
  inputWrapperClassName?: string;
  required?: boolean;
  optionLabel?: string;
  optionValue?: string;
}

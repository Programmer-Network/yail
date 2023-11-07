import { GroupBase, OptionProps, OptionsOrGroups } from "react-select";

interface OptionType extends OptionProps {
  label: string;
  value: string;
}

interface GroupType extends GroupBase<OptionType> {
  label: string;
  options: OptionType[];
}

type Response<OptionType, Group extends GroupBase<OptionType>, Additional> = {
  options: OptionsOrGroups<OptionType, Group>;
  hasMore?: boolean;
  additional?: Additional;
};

export interface IAsyncSelectProps<IsMulti extends boolean = false> {
  name: string;
  type?: string;
  value: IsMulti extends true ? OptionType[] : OptionType | null;
  defaultValue?: IsMulti extends true ? OptionType[] : OptionType | null;
  error?: string | string[] | Record<string, string>;
  hint?: string;
  label?: string;
  max?: number;
  isMulti?: IsMulti;
  isSearchable?: boolean;
  onChange: (
    value: IsMulti extends true ? OptionType[] : OptionType | null
  ) => void;
  options: IsMulti extends true ? GroupType[] : OptionType[];
  inputWrapperClassName?: string;
  required?: boolean;
  optionLabel?: string;
  optionValue?: string;
  loadOptions: (
    inputValue: string
  ) => Response<OptionType, GroupBase<OptionType>, unknown>;
}

import { ReactNode } from "react";

import { ViewType } from "../ViewToggle/types";

export interface IFiltersProps {
  additional?: ReactNode | ReactNode[];
  className?: string;
  search: {
    value: string;
    onChange: (value: string) => void;
  };
  tags: {
    selected: string[];
    onChange: (
      option: Record<string, string[] | string | number[] | number>
    ) => void;
    options: { value: string; label: string }[];
    showOutside: boolean;
  };
  view: {
    value: ViewType;
    onChange: (view: ViewType) => void;
  };
  sorting: {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
  };
}

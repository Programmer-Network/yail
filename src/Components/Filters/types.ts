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
    onChange: (options: string[]) => void;
    options: { value: string; label: string }[];
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

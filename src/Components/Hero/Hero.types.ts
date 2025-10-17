import { ReactNode } from "react";

import { IPillProps } from "Components/Pill/Pill.types";

export interface IHeroProps {
  coverImage?: string;
  title?: ReactNode;
  description?: ReactNode;
  pills?: IPillProps[];
  actions?: ReactNode[];
  children?: ReactNode;
  className?: string;
}

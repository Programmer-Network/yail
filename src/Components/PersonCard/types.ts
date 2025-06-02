import { ReactNode } from "react";
import { NavLinkProps } from "react-router-dom";

import { PillVariant } from "../Core/Pill";

export interface ITag {
  id?: string | number;
  name: string;
  url?: string;
  description?: string;
}

export interface ISocialProfiles {
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  mastodon?: string;
  youtube?: string;
  codewars?: string;
  leetcode?: string;
  stackoverflow?: string;
  gitlab?: string;
  patreon?: string;
  hackernews?: string;
  reddit?: string;
  hackerrank?: string;
  exercism?: string;
  [key: string]: string | undefined;
}

export interface IBadge {
  text: string;
  variant?: PillVariant;
}

export interface IPerson {
  id?: string | number;
  name?: string;
  username?: string;
  email?: string;
  avatar?: string;
  about?: string;
  tags?: ITag[];
  socialProfiles?: ISocialProfiles;
  badge?: IBadge;
  role?: string;
  location?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IPersonAction {
  label: string;
  onClick: (person: IPerson, e: React.MouseEvent) => void;
  variant?: "primary" | "danger" | "outlined" | "success";
  iconName?: string;
  show?: boolean;
  disabled?: boolean;
}

export type PersonCardVariant = "card" | "table";
export type PersonCardSize = "small" | "medium" | "large";

export interface IPersonCardProps {
  person: IPerson;
  variant?: PersonCardVariant;
  size?: PersonCardSize;
  onClick?: (person: IPerson, e: React.MouseEvent) => void;
  onPersonClick?: (person: IPerson, e: React.MouseEvent) => void;
  onTagClick?: (tag: ITag, e: React.MouseEvent) => void;
  actions?: IPersonAction[];
  showTags?: boolean;
  showSocialLinks?: boolean;
  maxTags?: number;
  maxDescriptionLines?: number;
  className?: string;
  NavLink?: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children?: ReactNode;
  [key: string]: any; // for additional HTML attributes
}

export interface IPersonCardSkeletonProps {
  size?: PersonCardSize;
  className?: string;
  showTags?: boolean;
  showSocialLinks?: boolean;
  about?: boolean;
}

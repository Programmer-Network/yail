import { NavLinkProps } from "react-router-dom";

import { PillSize, PillVariant } from "../Pill/Pill.types";

export interface ICardTag {
  name: string;
  url: string;
}

export interface IAuthorProps {
  name: string;
  url?: string;
  avatarUrl?: string;
}

export interface IImageProps {
  src: string;
  alt: string;
  aspectRatio?: "16:9" | "4:3" | "1:1" | "3:2" | "auto";
  lazy?: boolean;
}

export interface IPill {
  title: string;
  variant?: PillVariant;
  className?: string;
  size?: PillSize;
  clickable?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export interface ICardData {
  title: string;
  titleUrl: string;
  description: string;
  date?: string;
  author?: IAuthorProps;
  tags?: ICardTag[];
  pills?: IPill[];
  image?: IImageProps;
  isRead?: boolean;
  isFeatured?: boolean;
}

export interface ICardAction {
  label: string;
  onClick: (e: React.MouseEvent) => void;
  variant?: "primary" | "danger" | "outlined";
  icon?: React.ReactNode;
  show?: boolean; // for conditional rendering
}

export interface ICard {
  data: ICardData;
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  className?: string;
  variant?: "default" | "compact" | "featured";
  isLoading?: boolean;
  maxVisibleTags?: number;
  maxTitleLines?: number;
  maxDescriptionLines?: number;
  showBookmark?: boolean;
  isBookmarked?: boolean;
  showShare?: boolean;
  onCardClick?: (data: ICardData) => void;
  onAuthorClick?: (author: IAuthorProps) => void;
  onTagClick?: (tag: ICardTag) => void;
  onImageClick?: () => void;
  onBookmark?: (data: ICardData) => void;
  onShare?: (data: ICardData) => void;
  actions?: ICardAction[];
  footerActions?: ICardAction[];
}

export interface ICardSkeletonProps {
  className?: string;
  variant?: "default" | "compact" | "featured";
  showImage?: boolean;
}

import { NavLinkProps } from "react-router-dom";

export interface ITag {
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

export interface ICardData {
  title: string;
  titleUrl: string;
  description: string;
  date?: string;
  author?: IAuthorProps;
  tags?: ITag[];
  image?: IImageProps;
  isRead?: boolean;
  isFeatured?: boolean;
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
  showShare?: boolean;
  onCardClick?: (data: ICardData) => void;
  onAuthorClick?: (author: IAuthorProps) => void;
  onTagClick?: (tag: ITag) => void;
  onImageClick?: () => void;
  onBookmark?: (data: ICardData) => void;
  onShare?: (data: ICardData) => void;
}

export interface ICardSkeletonProps {
  className?: string;
  variant?: "default" | "compact" | "featured";
  showImage?: boolean;
}

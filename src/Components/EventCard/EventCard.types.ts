import { NavLinkProps } from "react-router-dom";

import { PillSize, PillVariant } from "../Pill/Pill.types";

export interface IEventCardData {
  title: string;
  titleUrl: string;
  description: string;
  date?: string;
  author?: {
    name: string;
    url?: string;
    avatarUrl?: string;
  };
  tags?: Array<{
    name: string;
    url: string;
  }>;
  pills?: Array<{
    title: string;
    variant?: PillVariant;
    className?: string;
    size?: PillSize;
    clickable?: boolean;
    onClick?: (e: React.MouseEvent) => void;
  }>;
  image?: {
    src: string;
    alt: string;
    aspectRatio?: "16:9" | "4:3" | "1:1" | "3:2" | "auto";
    lazy?: boolean;
  };
  isRead?: boolean;
  isFeatured?: boolean;

  dateAndTime: Date | string;
  timezone: string;
  eventType: "meetup" | "hackathon" | "workshop" | "live-stream";
  locationType: "hybrid" | "onsite" | "remote";
  location?: string;
  eventUrl?: string;
  spots: number;
  spotsRemaining: number;
  duration: number;
  status: "draft" | "published" | "cancelled" | "completed";
  attendeesCount?: number;
  attendees?: Array<{
    id: number;
    name: string;
    avatarUrl?: string;
  }>;
}

export interface IEventCard {
  data: IEventCardData;
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
  onCardClick?: (data: IEventCardData) => void;
  onAuthorClick?: (author: IEventCardData["author"]) => void;
  onTagClick?: (tag: { name: string; url: string }) => void;
  onImageClick?: () => void;
  onBookmark?: (data: IEventCardData) => void;
  onShare?: (data: IEventCardData) => void;
  onRegister?: (data: IEventCardData) => void;
  actions?: Array<{
    label: string;
    onClick: (e: React.MouseEvent) => void;
    variant?: "primary" | "danger" | "outlined";
    icon?: React.ReactNode;
    show?: boolean;
  }>;
  footerActions?: Array<{
    label: string;
    onClick: (e: React.MouseEvent) => void;
    variant?: "primary" | "danger" | "outlined";
    icon?: React.ReactNode;
    show?: boolean;
  }>;
}

export interface IEventCardSkeletonProps {
  className?: string;
  variant?: "default" | "compact" | "featured";
  showImage?: boolean;
}

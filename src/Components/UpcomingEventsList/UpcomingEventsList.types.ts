import { NavLinkProps } from "react-router-dom";

import { IUpcomingEventCardData } from "../UpcomingEventCard";

export interface IUpcomingEventsList {
  events: IUpcomingEventCardData[];
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  title?: string;
  isLoading?: boolean;
  emptyMessage?: string;
  maxEvents?: number;
  className?: string;
  onEventClick?: (data: IUpcomingEventCardData) => void;
  onViewAllClick?: () => void;
  viewAllUrl?: string;
}

export interface IUpcomingEventsListSkeletonProps {
  className?: string;
  count?: number;
}

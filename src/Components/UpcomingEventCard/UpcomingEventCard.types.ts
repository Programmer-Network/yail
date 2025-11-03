import { NavLinkProps } from "react-router-dom";

export interface IUpcomingEventCardData {
  title: string;
  eventURL: string;
  dateAndTime: Date | string;
  summary: string;
  location?: string;
  locationType?: "hybrid" | "onsite" | "remote";
}

export interface IUpcomingEventCard {
  data: IUpcomingEventCardData;
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  className?: string;
  isLoading?: boolean;
  onCardClick?: (data: IUpcomingEventCardData) => void;
}

export interface IUpcomingEventCardSkeletonProps {
  className?: string;
}

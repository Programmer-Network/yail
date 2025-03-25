import { NavLinkProps } from "react-router-dom";

export interface ICardData {
  title: string;
  titleUrl: string;
  description: string;
  date?: string;
  author?: string;
  authorUrl?: string;
  avatarUrl?: string;
  tags?: {
    name: string;
    url: string;
  }[];
  image?: string;
}

export interface ICard {
  data: ICardData;
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  className?: string;
}

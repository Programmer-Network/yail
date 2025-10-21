import { NavLinkProps } from "react-router-dom";

import { ICardData } from "../Card/types";

export interface ICardsProps {
  cards: ICardData[];
  NavLink: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  columns: number;
  className?: string;
  cardClassName?: string;
}

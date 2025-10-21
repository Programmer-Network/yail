import classNames from "classnames";
import { FC } from "react";

import Card from "../Card";
import { ICardsProps } from "./types";

const Cards: FC<ICardsProps> = ({
  className,
  cardClassName,
  cards,
  columns,
  NavLink
}) => {
  return (
    <div
      data-testid='cards'
      className={classNames("yl:grid yl:grid-cols-1", className, {
        "yl:md:grid-cols-1": columns === 1,
        "yl:md:grid-cols-2": columns === 2,
        "yl:md:grid-cols-3": columns === 3,
        "yl:md:grid-cols-4": columns === 4,
        "yl:md:grid-cols-5": columns === 5,
        "yl:md:grid-cols-6": columns === 6,
        "yl:md:grid-cols-7": columns === 7,
        "yl:md:grid-cols-8": columns === 8,
        "yl:md:grid-cols-9": columns === 9,
        "yl:md:grid-cols-10": columns === 10,
        "yl:md:grid-cols-11": columns === 11,
        "yl:md:grid-cols-12": columns === 12
      })}
    >
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            data={card}
            NavLink={NavLink}
            className={cardClassName}
          />
        );
      })}
    </div>
  );
};

export default Cards;

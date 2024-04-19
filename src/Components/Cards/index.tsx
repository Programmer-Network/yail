import classNames from "classnames";
import { FC } from "react";

import Card from "Components/Card";

import { ICardsProps } from "./types";

const Cards: FC<ICardsProps> = ({ className, cards, columns, NavLink }) => {
  return (
    <div
      data-testid='cards'
      className={classNames("yl-grid yl-grid-cols-1", className, {
        "md:yl-grid-cols-1": columns === 1,
        "md:yl-grid-cols-2": columns === 2,
        "md:yl-grid-cols-3": columns === 3,
        "md:yl-grid-cols-4": columns === 4,
        "md:yl-grid-cols-5": columns === 5,
        "md:yl-grid-cols-6": columns === 6,
        "md:yl-grid-cols-7": columns === 7,
        "md:yl-grid-cols-8": columns === 8,
        "md:yl-grid-cols-9": columns === 9,
        "md:yl-grid-cols-10": columns === 10,
        "md:yl-grid-cols-11": columns === 11,
        "md:yl-grid-cols-12": columns === 12
      })}
    >
      {cards.map((card, index) => {
        return <Card key={index} data={card} NavLink={NavLink} />;
      })}
    </div>
  );
};

export default Cards;

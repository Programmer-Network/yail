import classNames from "classnames";
import { FC } from "react";

import Card from "Components/Card";
import { ICardData } from "Components/Card/types";

const Cards: FC<{
  cards: ICardData[];
  columns: number;
  className?: string;
}> = ({ className, cards, columns }) => {
  return (
    <div
      data-testid='cards'
      className={classNames("grid", className, {
        "grid-cols-1": columns === 1,
        "grid-cols-2": columns === 2,
        "grid-cols-3": columns === 3,
        "grid-cols-4": columns === 4,
        "grid-cols-5": columns === 5,
        "grid-cols-6": columns === 6,
        "grid-cols-7": columns === 7,
        "grid-cols-8": columns === 8,
        "grid-cols-9": columns === 9,
        "grid-cols-10": columns === 10,
        "grid-cols-11": columns === 11,
        "grid-cols-12": columns === 12
      })}
    >
      {cards.map((card, index) => {
        return <Card key={index} data={card} />;
      })}
    </div>
  );
};

export default Cards;

import { FC } from "react";

import Badge from "../../Badge";
import { IBadge } from "../types";

interface ICardBadges {
  badges?: IBadge[];
}

const CardBadges: FC<ICardBadges> = ({ badges }) => {
  if (!badges || badges.length === 0) {
    return null;
  }

  return (
    <div className='yl:flex yl:items-center yl:gap-2 yl:flex-wrap yl:mt-3 yl:mb-1'>
      {badges.map((badge, index) => (
        <Badge
          key={`${badge.title}-${index}`}
          title={badge.title}
          variant={badge.variant}
          className={badge.className}
        />
      ))}
    </div>
  );
};

export default CardBadges;

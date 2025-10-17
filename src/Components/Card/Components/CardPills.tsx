import { FC } from "react";

import Pill, { PillSize, PillVariant } from "../../Core/Pill";
import { IPill } from "../types";

interface ICardPills {
  pills?: IPill[];
}

const CardPills: FC<ICardPills> = ({ pills }) => {
  if (!pills || pills.length === 0) {
    return null;
  }

  return (
    <div className='yl:flex yl:items-center yl:gap-2 yl:flex-wrap yl:mt-3 yl:mb-1'>
      {pills.map((pill, index) => (
        <Pill
          key={`${pill.title}-${index}`}
          variant={pill.variant || PillVariant.PRIMARY}
          size={pill.size || PillSize.MEDIUM}
          className={pill.className}
          clickable={pill.clickable}
          onClick={pill.onClick}
        >
          {pill.title}
        </Pill>
      ))}
    </div>
  );
};

export default CardPills;

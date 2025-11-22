import { FC } from "react";

import { Pill } from "../../Pill";
import { PillSize, PillVariant } from "../../Pill/Pill.types";
import { IPill } from "../types";

interface ICardPills {
  pills?: IPill[];
}

const CardPills: FC<ICardPills> = ({ pills }) => {
  if (!pills || pills.length === 0) {
    return null;
  }

  return (
    <div className='yl:mt-3 yl:mb-1 yl:flex yl:flex-wrap yl:items-center yl:gap-2'>
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

export { CardPills };

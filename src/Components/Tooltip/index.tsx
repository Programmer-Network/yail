import { FC } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { ITooltipProps } from "./types";

const Tooltip: FC<ITooltipProps> = ({ text, children, id, place = "top" }) => {
  if (!text) {
    return children;
  }

  return (
    <div>
      <div data-tooltip-id={id}>{children}</div>
      <ReactTooltip
        id={id}
        place={place}
        content={text as string}
        noArrow
        opacity={1}
        className='border-2 border-primary-text-color/40 !bg-primary-background-color !text-primary-text-color z-50'
      />
    </div>
  );
};

export default Tooltip;

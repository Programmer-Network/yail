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
        content={text}
        className='border border-primary-text-color/40 !bg-transparent !text-primary-text-color'
      />
    </div>
  );
};

export * from "./types";
export default Tooltip;

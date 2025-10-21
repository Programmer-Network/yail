import classNames from "classnames";
import { FC } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { ITooltipProps } from "./types";

const Tooltip: FC<ITooltipProps> = ({
  text,
  children,
  id,
  place = "top",
  delayShow = 0,
  childrenClassName,
  className
}) => {
  if (!text) {
    return children;
  }

  return (
    <div>
      <div
        data-tooltip-id={id}
        data-tooltip-delay-show={delayShow}
        className={classNames(childrenClassName)}
      >
        {children}
      </div>
      <ReactTooltip
        id={id}
        place={place}
        content={text as string}
        noArrow
        opacity={1}
        className={classNames(
          "!border-2 !border-primary !bg-background !text-text !z-50 !shadow-md shadow-border",
          className
        )}
      />
    </div>
  );
};

export default Tooltip;

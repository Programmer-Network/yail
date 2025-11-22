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

  const getText = () => {
    if (typeof text === "string") {
      return text;
    }

    return text.toString();
  };

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
        content={getText()}
        noArrow
        opacity={1}
        className={classNames(
          "yl:border-primary! yl:bg-background! yl:text-text! yl:shadow-border yl:z-50! yl:border-2! yl:shadow-md!",
          className
        )}
      />
    </div>
  );
};

export { Tooltip };

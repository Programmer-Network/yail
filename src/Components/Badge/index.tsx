import classNames from "classnames";
import { FC } from "react";

import { IBadgeProps } from "./types";

const Badge: FC<IBadgeProps> = ({ title, className }) => {
  return (
    <span
      className={classNames(
        "yl-rounded yl-border yl-border-primary-text-color yl-px-1 yl-pb-[2px] yl-pt-[1px] yl-text-[10px] yl-text-primary-text-color",
        className
      )}
    >
      {title}
    </span>
  );
};

export default Badge;

import classNames from "classnames";
import { FC } from "react";

import { IBadgeProps } from "./types";

const Badge: FC<IBadgeProps> = ({ title, className }) => {
  return (
    <span
      className={classNames(
        "rounded border border-primary-text-color px-1 pb-[2px] pt-[1px] text-[10px] text-primary-text-color",
        className
      )}
    >
      {title}
    </span>
  );
};

export default Badge;

import classNames from "classnames";
import { FC } from "react";

import { BadgeVariantEnum, IBadgeProps } from "./types";

const Badge: FC<IBadgeProps> = ({ title, className, variant }) => {
  const variants = {
    [BadgeVariantEnum.FILLED]: "yl:bg-primary",
    [BadgeVariantEnum.OUTLINE]: "yl:bg-transparent"
  };

  const baseClassNames =
    "yl:rounded yl:border yl:border-border yl:px-[3px] yl:py-[1px] yl:text-[10px] yl:text-inherit";

  const variantClassNames = variant ? variants[variant] : "";

  return (
    <span className={classNames(baseClassNames, variantClassNames, className)}>
      {title}
    </span>
  );
};

export default Badge;

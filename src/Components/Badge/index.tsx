import classNames from "classnames";
import { FC } from "react";

import { BadgeVariantEnum, IBadgeProps } from "./types";

const Badge: FC<IBadgeProps> = ({ title, className, variant }) => {
  const variants = {
    [BadgeVariantEnum.PRIMARY]: "yl:bg-primary",
    [BadgeVariantEnum.SECONDARY]: "yl:bg-secondary",
    [BadgeVariantEnum.SUCCESS]: "yl:bg-success",
    [BadgeVariantEnum.WARNING]: "yl:bg-warning",
    [BadgeVariantEnum.ERROR]: "yl:bg-error",
    [BadgeVariantEnum.BETA]: "yl:bg-violet-500",
    [BadgeVariantEnum.NEW]: "yl:bg-blue-500"
  };

  const baseClassNames =
    "yl:rounded yl:border yl:border-border yl:px-2 yl:py-1 yl:text-[10px]";

  return (
    <span
      className={classNames(
        baseClassNames,
        {
          [variants[variant]]: variant
        },
        className
      )}
    >
      {title}
    </span>
  );
};

export default Badge;

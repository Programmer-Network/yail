import classNames from "classnames";
import { FC } from "react";

import { BadgeVariantEnum, IBadgeProps } from "./types";

const Badge: FC<IBadgeProps> = ({ title, className, variant }) => {
  const variants = {
    [BadgeVariantEnum.FILLED]:
      "yl:bg-primary yl:text-background yl:border-2 yl:border-background/50",
    [BadgeVariantEnum.OUTLINE]:
      "yl:bg-transparent yl:border-primary yl:text-primary yl:border-2 yl:border-primary/50"
  };

  const baseClassNames = "yl:rounded yl:px-2 yl:py-1 yl:text-sm yl:font-medium";

  const variantClassNames = variant ? variants[variant] : "";

  return (
    <span className={classNames(baseClassNames, variantClassNames, className)}>
      {title}
    </span>
  );
};

export default Badge;

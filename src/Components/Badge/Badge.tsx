import classNames from "classnames";
import { FC } from "react";

import { BadgeVariantEnum, IBadgeProps } from "./types";

const Badge: FC<IBadgeProps> = ({ title, className, variant, onClick }) => {
  const variants = {
    [BadgeVariantEnum.FILLED]:
      "yl:bg-primary yl:text-background yl:border yl:border-background/80",
    [BadgeVariantEnum.OUTLINE]:
      "yl:bg-transparent yl:border-primary yl:text-primary yl:border yl:border-primary/80"
  };

  const baseClassNames = "yl:rounded yl:px-2 yl:py-1 yl:text-sm yl:font-medium";

  const variantClassNames = variant ? variants[variant] : "";

  const onClickCSSClass = onClick ? "yl:cursor-pointer" : "yl:cursor-default";

  return (
    <span
      className={classNames(
        baseClassNames,
        variantClassNames,
        className,
        onClickCSSClass
      )}
      onClick={onClick}
    >
      {title}
    </span>
  );
};

export { Badge };

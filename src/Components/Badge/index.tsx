import classNames from "classnames";
import { FC } from "react";

import { BadgeVariantEnum, IBadgeProps } from "./types";

const Badge: FC<IBadgeProps> = ({ title, className, variant, onClick }) => {
  const variants = {
    [BadgeVariantEnum.FILLED]:
      "bg-primary text-background border-2 border-background/80",
    [BadgeVariantEnum.OUTLINE]:
      "bg-transparent border-primary text-primary border-2 border-primary/80"
  };

  const baseClassNames = "rounded px-2 py-1 text-sm font-medium";

  const variantClassNames = variant ? variants[variant] : "";

  const onClickCSSClass = onClick ? "cursor-pointer" : "cursor-default";

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

export default Badge;

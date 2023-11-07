import classNames from "classnames";
import { FC } from "react";

interface IBadgeProps {
  title: string;
  className?: string;
}

const Badge: FC<IBadgeProps> = ({ title, className }) => {
  return (
    <span
      className={classNames(
        "relative top-[-2px] rounded border border-primary-text-color px-1 pb-[2px] pt-[1px] text-[10px] text-primary-text-color",
        className
      )}
    >
      {title}
    </span>
  );
};

export default Badge;

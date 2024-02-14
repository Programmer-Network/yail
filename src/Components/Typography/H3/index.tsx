import classNames from "classnames";
import { FC, MouseEvent, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H3: FC<{
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}> = ({ children, className, onClick }) => {
  return (
    <h3
      className={classNames(
        "text-xs md:text-2xl",
        headingCommonStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </h3>
  );
};

export default H3;

import classNames from "classnames";
import { FC, MouseEvent, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H1: FC<{
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}> = ({ children, className, onClick }) => {
  return (
    <h1
      className={classNames(
        "text-2xl md:text-4xl",
        headingCommonStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </h1>
  );
};

export default H1;

import classNames from "classnames";
import { FC, MouseEvent, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H2: FC<{
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}> = ({ children, className, onClick }) => {
  return (
    <h2
      className={classNames("text-3xl", headingCommonStyles, className)}
      onClick={onClick}
    >
      {children}
    </h2>
  );
};

export default H2;

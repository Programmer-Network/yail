import classNames from "classnames";
import { FC, MouseEvent, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H6: FC<{
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}> = ({ children, className, onClick }) => {
  return (
    <h6
      className={classNames("text-xs", headingCommonStyles, className)}
      onClick={onClick}
    >
      {children}
    </h6>
  );
};

export default H6;

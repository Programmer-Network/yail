import classNames from "classnames";
import { FC, MouseEvent, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H5: FC<{
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}> = ({ children, className, onClick }) => {
  return (
    <h5
      className={classNames("text-sm", headingCommonStyles, className)}
      onClick={onClick}
    >
      {children}
    </h5>
  );
};

export default H5;

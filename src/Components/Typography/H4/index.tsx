import classNames from "classnames";
import { FC, MouseEvent, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H4: FC<{
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLHeadingElement>) => void;
}> = ({ children, className, onClick }) => {
  return (
    <h4
      className={classNames("text-lg", headingCommonStyles, className)}
      onClick={onClick}
    >
      {children}
    </h4>
  );
};

export default H4;

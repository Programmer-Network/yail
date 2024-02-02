import classNames from "classnames";
import { FC, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H1: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <h1 className={classNames("text-4xl", headingCommonStyles, className)}>
      {children}
    </h1>
  );
};

export default H1;

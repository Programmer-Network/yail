import classNames from "classnames";
import { FC, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H2: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <h2 className={classNames("text-5xl", headingCommonStyles, className)}>
      {children}
    </h2>
  );
};

export default H2;

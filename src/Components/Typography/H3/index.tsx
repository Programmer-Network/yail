import classNames from "classnames";
import { FC, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H3: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <h3 className={classNames("text-4xl", headingCommonStyles, className)}>
      {children}
    </h3>
  );
};

export default H3;

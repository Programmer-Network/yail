import classNames from "classnames";
import { FC, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H5: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <h5 className={classNames("text-2xl", headingCommonStyles, className)}>
      {children}
    </h5>
  );
};

export default H5;

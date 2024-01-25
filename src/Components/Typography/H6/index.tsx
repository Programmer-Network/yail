import classNames from "classnames";
import { FC, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H6: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <h6 className={classNames("text-xl", headingCommonStyles, className)}>
      {children}
    </h6>
  );
};

export default H6;

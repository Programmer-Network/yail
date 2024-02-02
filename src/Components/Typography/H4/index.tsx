import classNames from "classnames";
import { FC, ReactNode } from "react";

import { headingCommonStyles } from "../utils";

const H4: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <h4 className={classNames("text-lg", headingCommonStyles, className)}>
      {children}
    </h4>
  );
};

export default H4;

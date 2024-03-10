import classNames from "classnames";
import { FC } from "react";

import { headingCommonStyles } from "../utils";
import { IH2Props } from "./types";

const H2: FC<IH2Props> = ({ children, className, onClick }) => {
  return (
    <h2
      className={classNames(
        "text-lg md:text-3xl",
        headingCommonStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </h2>
  );
};

export default H2;

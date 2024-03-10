import classNames from "classnames";
import { FC } from "react";

import { headingCommonStyles } from "../utils";
import { IH3Props } from "./types";

const H3: FC<IH3Props> = ({ children, className, onClick }) => {
  return (
    <h3
      className={classNames(
        "text-xs md:text-2xl",
        headingCommonStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </h3>
  );
};

export * from "./types";
export default H3;

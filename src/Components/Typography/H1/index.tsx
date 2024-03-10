import classNames from "classnames";
import { FC } from "react";

import { headingCommonStyles } from "../utils";
import { IH1Props } from "./types";

const H1: FC<IH1Props> = ({ children, className, onClick }) => {
  return (
    <h1
      className={classNames(
        "text-2xl md:text-4xl",
        headingCommonStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </h1>
  );
};

export * from "./types";
export default H1;

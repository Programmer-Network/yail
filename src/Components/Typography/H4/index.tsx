import classNames from "classnames";
import { FC } from "react";

import { headingCommonStyles } from "../utils";
import { IH4Props } from "./types";

const H4: FC<IH4Props> = ({ children, className, onClick }) => {
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

import classNames from "classnames";
import { FC } from "react";

import { headingCommonStyles } from "../utils";
import { IH6Props } from "./types";

const H6: FC<IH6Props> = ({ children, className, onClick }) => {
  return (
    <h6
      className={classNames("text-xs", headingCommonStyles, className)}
      onClick={onClick}
    >
      {children}
    </h6>
  );
};

export default H6;

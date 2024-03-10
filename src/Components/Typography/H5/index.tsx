import classNames from "classnames";
import { FC } from "react";

import { headingCommonStyles } from "../utils";
import { IH5Props } from "./types";

const H5: FC<IH5Props> = ({ children, className, onClick }) => {
  return (
    <h5
      className={classNames("text-sm", headingCommonStyles, className)}
      onClick={onClick}
    >
      {children}
    </h5>
  );
};

export default H5;

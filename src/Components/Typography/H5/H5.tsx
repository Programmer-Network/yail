import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IH5Props } from "./types";

const H5: FC<IH5Props> = ({ children, className, onClick }) => {
  return (
    <h5
      className={classNames(typograyClassNames.h5(className))}
      onClick={onClick}
    >
      {children}
    </h5>
  );
};

export default H5;

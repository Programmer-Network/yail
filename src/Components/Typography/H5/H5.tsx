import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IH5Props } from "./types";

const H5: FC<IH5Props> = ({ id, children, className, onClick, ariaLabel }) => {
  return (
    <h5
      id={id}
      className={classNames(typograyClassNames.h5(className))}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </h5>
  );
};

export default H5;

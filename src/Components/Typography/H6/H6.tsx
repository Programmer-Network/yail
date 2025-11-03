import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IH6Props } from "./types";

const H6: FC<IH6Props> = ({ id, children, className, onClick, ariaLabel }) => {
  return (
    <h6
      id={id}
      className={classNames(typograyClassNames.h6(className))}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </h6>
  );
};

export default H6;

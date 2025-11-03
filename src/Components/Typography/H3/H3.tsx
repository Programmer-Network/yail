import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IH3Props } from "./types";

const H3: FC<IH3Props> = ({ id, children, className, onClick, ariaLabel }) => {
  return (
    <h3
      id={id}
      className={classNames(typograyClassNames.h3(className))}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </h3>
  );
};

export default H3;

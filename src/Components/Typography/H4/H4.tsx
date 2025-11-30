import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/Tiptap.constants";
import { IH4Props } from "./types";

const H4: FC<IH4Props> = ({ id, children, className, onClick, ariaLabel }) => {
  return (
    <h4
      id={id}
      className={classNames(typograyClassNames.h4(className))}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </h4>
  );
};

export default H4;

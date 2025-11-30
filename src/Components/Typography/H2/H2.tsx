import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/Tiptap.constants";
import { IH2Props } from "./types";

const H2: FC<IH2Props> = ({ id, children, className, onClick, ariaLabel }) => {
  return (
    <h2
      id={id}
      className={classNames(typograyClassNames.h2(className))}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </h2>
  );
};

export default H2;

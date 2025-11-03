import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IH1Props } from "./types";

const H1: FC<IH1Props> = ({ id, children, className, onClick, ariaLabel }) => {
  return (
    <h1
      id={id}
      className={classNames(typograyClassNames.h1(className))}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </h1>
  );
};

export default H1;

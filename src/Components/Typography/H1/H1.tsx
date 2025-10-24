import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IH1Props } from "./types";

const H1: FC<IH1Props> = ({ children, className, onClick }) => {
  return (
    <h1
      className={classNames(typograyClassNames.h1(className))}
      onClick={onClick}
    >
      {children}
    </h1>
  );
};

export default H1;

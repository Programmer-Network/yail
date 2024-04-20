import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "Components/Inputs/Tiptap/constants";

import { IH4Props } from "./types";

const H4: FC<IH4Props> = ({ children, className, onClick }) => {
  return (
    <h4
      className={classNames(typograyClassNames.h4(className))}
      onClick={onClick}
    >
      {children}
    </h4>
  );
};

export default H4;

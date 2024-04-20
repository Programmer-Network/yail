import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "Components/Inputs/Tiptap/constants";

import { IH6Props } from "./types";

const H6: FC<IH6Props> = ({ children, className, onClick }) => {
  return (
    <h6
      className={classNames(typograyClassNames.h6(className))}
      onClick={onClick}
    >
      {children}
    </h6>
  );
};

export default H6;

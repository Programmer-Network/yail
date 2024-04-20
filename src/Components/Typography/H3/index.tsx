import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "Components/Inputs/Tiptap/constants";

import { IH3Props } from "./types";

const H3: FC<IH3Props> = ({ children, className, onClick }) => {
  return (
    <h3
      className={classNames(typograyClassNames.h3(className))}
      onClick={onClick}
    >
      {children}
    </h3>
  );
};

export default H3;

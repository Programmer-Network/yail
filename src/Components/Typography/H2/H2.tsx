import classNames from "classnames";
import { FC } from "react";

import { typograyClassNames } from "../../Inputs/Tiptap/constants";
import { IH2Props } from "./types";

const H2: FC<IH2Props> = ({ children, className, onClick }) => {
  return (
    <h2
      className={classNames(typograyClassNames.h2(className))}
      onClick={onClick}
    >
      {children}
    </h2>
  );
};

export default H2;

import classNames from "classnames";
import { FC } from "react";

import { IDescriptionProps } from "./types";

const Description: FC<IDescriptionProps> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        "break-all text-primary-text-color md:text-2xl",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Description;

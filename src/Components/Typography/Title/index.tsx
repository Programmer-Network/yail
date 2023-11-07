import classNames from "classnames";
import { FC } from "react";

import { ITitleProps } from "./types";

const Title: FC<ITitleProps> = ({ children, className }) => {
  return (
    <h1
      className={classNames(
        "cursor-pointer break-all text-xl text-primary md:text-3xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;

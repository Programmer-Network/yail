import classNames from "classnames";
import { FC } from "react";

import { IInputErrorProps } from "./types";

const InputError: FC<IInputErrorProps> = (
  { error, className } = {
    error: "",
    className: ""
  }
) => {
  const baseClassName =
    "yl-text-rose-500 peer-invalid:yl-visible yl-my-1 yl-block";

  if (Array.isArray(error)) {
    return error.map((e, i) => {
      return (
        <span key={i} className={classNames(baseClassName, className)}>
          {e}
        </span>
      );
    });
  }

  if (typeof error === "object") {
    return Object.keys(error).map((e, i) => {
      return (
        <span key={i} className={classNames(baseClassName, className)}>
          {error[e]}
        </span>
      );
    });
  }

  return <span className={classNames(baseClassName, className)}>{error}</span>;
};

export default InputError;

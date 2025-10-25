import classNames from "classnames";
import { FC } from "react";

import { IInputErrorProps } from "./types";

const InputError: FC<IInputErrorProps> = (
  { error, className } = {
    error: "",
    className: ""
  }
) => {
  const baseClassName = "text-error peer-invalid:visible my-1 block";

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

export { InputError };

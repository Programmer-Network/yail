import classNames from "classnames";
import { FC } from "react";

import { IInputErrorProps } from "./types";

const InputError: FC<IInputErrorProps> = ({ error, className }) => {
  if (Array.isArray(error)) {
    return error.map((e, i) => {
      return (
        <span
          key={i}
          className={classNames(
            "mt-4 text-sm text-pink-600 peer-invalid:visible",
            className
          )}
        >
          {e}
        </span>
      );
    });
  }

  if (typeof error === "object") {
    return Object.keys(error).map((e, i) => {
      return (
        <span
          key={i}
          className={classNames(
            "mt-4 text-sm text-pink-600 peer-invalid:visible",
            className
          )}
        >
          {error[e]}
        </span>
      );
    });
  }

  return (
    <span
      className={classNames(
        "mt-2 text-sm text-pink-600 peer-invalid:visible",
        className
      )}
    >
      {error}
    </span>
  );
};

InputError.defaultProps = {
  error: "",
  className: ""
};

export default InputError;

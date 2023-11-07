import classNames from "classnames";
import { FC } from "react";

import { IInputErrorProps } from "./types";

const InputError: FC<IInputErrorProps> = ({ error, className }) => {
  if (Array.isArray(error)) {
    return error.map((e, i) => {
      return (
        <p
          key={i}
          className={classNames(
            "mt-4 text-sm text-pink-600 peer-invalid:visible",
            className
          )}
        >
          {e}
        </p>
      );
    });
  }

  if (typeof error === "object") {
    return Object.keys(error).map((e, i) => {
      return (
        <p
          key={i}
          className={classNames(
            "mt-4 text-sm text-pink-600 peer-invalid:visible",
            className
          )}
        >
          {error[e]}
        </p>
      );
    });
  }

  return (
    <p
      className={classNames(
        "mt-2 text-sm text-pink-600 peer-invalid:visible",
        className
      )}
    >
      {error}
    </p>
  );
};

InputError.defaultProps = {
  error: "",
  className: ""
};

export default InputError;

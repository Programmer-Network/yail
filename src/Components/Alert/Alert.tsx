import classNames from "classnames";
import { FC } from "react";

import { AlertProps } from "./types";

export const Alert: FC<AlertProps> = ({ type, children, className }) => {
  return (
    <div
      className={classNames(
        "p-4 shadow-md",
        {
          "border border-green-400 bg-green-300 text-green-700":
            type === "success",
          "border border-red-400 bg-red-300 text-red-700": type === "error",
          "border border-yellow-400 bg-yellow-300 text-yellow-700":
            type === "warning",
          "border border-blue-400 bg-blue-300 text-blue-700": type === "info"
        },
        className
      )}
    >
      {children}
    </div>
  );
};

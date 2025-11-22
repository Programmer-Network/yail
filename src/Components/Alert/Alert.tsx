import classNames from "classnames";
import { FC } from "react";

import { AlertProps } from "./types";

const Alert: FC<AlertProps> = ({ type, children, className }) => {
  return (
    <div className='yl:flex yl:min-h-screen yl:max-w-(--breakpoint-sm) yl:items-center yl:justify-center'>
      <div
        className={classNames("yl:bg-linear-to-r yl:p-px", className, {
          "yl:from-green-400 yl:via-green-500 yl:to-green-900 yl:text-green-500":
            type === "success",
          "yl:via-error yl:text-error yl:from-red-400 yl:to-red-900":
            type === "error",
          "yl:from-yellow-400 yl:via-yellow-500 yl:to-yellow-900 yl:text-yellow-500":
            type === "warning",
          "yl:from-blue-400 yl:via-blue-500 yl:to-blue-900 yl:text-blue-500":
            type === "info"
        })}
      >
        <div className='back yl:bg-background yl:flex yl:h-full yl:w-full yl:items-center yl:justify-center yl:p-4'>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};

export { Alert };

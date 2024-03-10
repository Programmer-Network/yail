import classNames from "classnames";
import { FC } from "react";

import { AlertProps } from "./types";

const Alert: FC<AlertProps> = ({ type, children, className }) => {
  return (
    <div className='flex min-h-screen max-w-screen-sm items-center justify-center'>
      <div
        className={classNames("bg-gradient-to-r p-[1px]", className, {
          "from-green-400 via-green-500 to-green-900 text-green-500":
            type === "success",
          "from-red-400 via-red-500 to-red-900 text-red-500": type === "error",
          "from-yellow-400 via-yellow-500 to-yellow-900 text-yellow-500":
            type === "warning",
          "from-blue-400 via-blue-500 to-blue-900 text-blue-500":
            type === "info"
        })}
      >
        <div className='back flex h-full w-full items-center justify-center bg-primary-background-color p-4'>
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};

export * from "./types";
export default Alert;

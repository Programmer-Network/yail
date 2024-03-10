import classNames from "classnames";
import { FC } from "react";

import { ITextOverLineProps } from "./types";

const TextOverLine: FC<ITextOverLineProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "relative inline-flex w-full items-center justify-center",
        className
      )}
    >
      <hr className='h-[1px] w-64 rounded border-0 bg-primary-text-color' />
      <div className='absolute left-1/2 -translate-x-1/2 bg-primary-background-color px-4 text-primary-text-color'>
        {children}
      </div>
    </div>
  );
};

export * from "./types";
export default TextOverLine;

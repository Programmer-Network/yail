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
      <hr className='bg-background h-[1px] w-64 rounded border-0' />
      <div className='bg-background text-text absolute left-1/2 -translate-x-1/2 rounded-md px-4'>
        {children}
      </div>
    </div>
  );
};

export default TextOverLine;

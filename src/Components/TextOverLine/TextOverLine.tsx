import classNames from "classnames";
import { FC } from "react";

import { ITextOverLineProps } from "./types";

const TextOverLine: FC<ITextOverLineProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "yl:relative yl:inline-flex yl:w-full yl:items-center yl:justify-center",
        className
      )}
    >
      <hr className='yl:bg-background yl:h-px yl:w-64 yl:border-0 yl:rounded' />
      <div className='yl:bg-background yl:text-text yl:absolute yl:left-1/2 yl:-translate-x-1/2 yl:rounded-md yl:px-4'>
        {children}
      </div>
    </div>
  );
};

export { TextOverLine };

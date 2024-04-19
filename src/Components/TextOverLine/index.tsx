import classNames from "classnames";
import { FC } from "react";

import { ITextOverLineProps } from "./types";

const TextOverLine: FC<ITextOverLineProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "yl-relative yl-inline-flex yl-w-full yl-items-center yl-justify-center",
        className
      )}
    >
      <hr className='yl-h-[1px] yl-w-64 yl-rounded yl-border-0 yl-bg-primary-text-color' />
      <div className='yl-absolute yl-left-1/2 -yl-translate-x-1/2 yl-bg-primary-background-color yl-px-4 yl-text-primary-text-color'>
        {children}
      </div>
    </div>
  );
};

export default TextOverLine;

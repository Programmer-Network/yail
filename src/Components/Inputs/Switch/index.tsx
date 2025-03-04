import classNames from "classnames";
import React from "react";

import { ISwitchProps } from "./types";

const Switch: React.FC<ISwitchProps> = ({
  name,
  isChecked,
  onChange,
  label,
  className
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ [name]: event.target.checked });
  };
  return (
    <>
      <label className='yl:flex yl:cursor-pointer yl:select-none yl:items-center'>
        <div className={classNames("yl:relative", className)}>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleChange}
            className='yl:sr-only'
          />
          <div
            className={classNames("yl:block yl:h-8 yl:w-14 yl:rounded-full", {
              "yl:bg-primary": isChecked,
              "yl:bg-text": !isChecked
            })}
          ></div>
          <div
            className={classNames(
              "yl:dot yl:absolute yl:left-1 yl:top-1 yl:h-6 yl:w-6 yl:rounded-full yl:transition yl:bg-background",
              {
                "yl:translate-x-6": isChecked
              }
            )}
          ></div>
        </div>
        {label && (
          <span className='yl:ms-3 yl:text-sm yl:font-medium yl:text-text'>
            {label}
          </span>
        )}
      </label>
    </>
  );
};

export default Switch;

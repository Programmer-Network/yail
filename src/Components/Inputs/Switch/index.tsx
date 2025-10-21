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
      <label className='flex cursor-pointer select-none items-center'>
        <div className={classNames("relative", className)}>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleChange}
            className='sr-only'
          />
          <div
            className={classNames("block h-8 w-14 rounded-full", {
              "bg-primary": isChecked,
              "bg-text": !isChecked
            })}
          ></div>
          <div
            className={classNames(
              "dot absolute left-1 top-1 h-6 w-6 rounded-full transition bg-background",
              {
                "translate-x-6": isChecked
              }
            )}
          ></div>
        </div>
        {label && (
          <span className='ms-3 text-sm font-medium text-text'>{label}</span>
        )}
      </label>
    </>
  );
};

export default Switch;

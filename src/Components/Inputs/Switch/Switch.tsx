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
      <label className='flex cursor-pointer items-center select-none'>
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
              "dot bg-background absolute top-1 left-1 h-6 w-6 rounded-full transition",
              {
                "translate-x-6": isChecked
              }
            )}
          ></div>
        </div>
        {label && (
          <span className='text-text ms-3 text-sm font-medium'>{label}</span>
        )}
      </label>
    </>
  );
};

export { Switch };

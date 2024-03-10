import classNames from "classnames";
import React from "react";

import { ISwitchProps } from "./types";

const Switch: React.FC<ISwitchProps> = ({
  name,
  isChecked,
  onChange,
  label = "Toggle me",
  className
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ [name]: event.target.checked });
  };

  return (
    <label
      className={classNames(
        "inline-flex cursor-pointer items-center",
        className
      )}
    >
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        className='peer sr-only'
      />
      <div className="peer relative h-6 w-11 rounded-full bg-primary-text-color after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full  after:bg-primary-background-color after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full" />
      {label && (
        <span className='ms-3 text-sm font-medium text-primary-text-color'>
          {label}
        </span>
      )}
    </label>
  );
};

export * from "./types";
export default Switch;

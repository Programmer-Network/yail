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
        "yl-inline-flex yl-cursor-pointer yl-items-center",
        className
      )}
    >
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        className='peer sr-only yl-hidden'
      />
      <div className="peer yl-relative yl-h-6 yl-w-12 yl-rounded-full yl-bg-primary-text-color after:yl-absolute after:yl-start-[2px] after:yl-top-[2px] after:yl-h-5 after:yl-w-5 after:yl-rounded-full after:yl-bg-primary-background-color after:yl-transition-all after:yl-content-[''] peer-checked:yl-bg-primary peer-checked:after:yl-translate-x-full rtl:peer-checked:after:-yl-translate-x-full" />
      {label && (
        <span className='yl-ms-3 yl-text-sm yl-font-medium yl-text-primary-text-color'>
          {label}
        </span>
      )}
    </label>
  );
};

export default Switch;

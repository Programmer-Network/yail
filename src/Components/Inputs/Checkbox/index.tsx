import classNames from "classnames";
import { FC } from "react";

import InputError from "../Common/InputError";
import InputHeader from "../Common/InputHeader";
import { ICheckboxProps } from "./types";

const Checkbox: FC<ICheckboxProps> = (
  props = {
    checked: false,
    text: "",
    onChange: () => null
  }
) => {
  const { checked, onChange, text, inputWrapperClassName } = props;
  return (
    <div className={classNames(inputWrapperClassName)}>
      <InputHeader {...props} />
      <div className='form-control items-start'>
        <label className='label yl:flex yl:cursor-pointer yl:items-center yl:gap-2'>
          <div className='yl:relative'>
            <input
              type='checkbox'
              checked={checked}
              className='yl:appearance-none yl:cursor-pointer yl:rounded yl:border-2 yl:border-border yl:h-6 yl:w-6 yl:transition-all yl:duration-200 checked:yl:bg-primary checked:yl:border-primary checked:yl:text-background focus:yl:outline-none focus:yl:ring-2 focus:yl:ring-primary focus:yl:ring-opacity-50 hover:yl:border-primary'
              onChange={onChange}
            />
            {checked && (
              <svg
                className='yl:absolute yl:left-1 yl:top-1 yl:h-4 yl:w-4 yl:text-primary yl:pointer-events-none'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </div>
          {text && (
            <span className='yl:text-primary yl:top-[-2.5px] yl:relative'>
              {text}
            </span>
          )}
        </label>
      </div>
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default Checkbox;

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
        <label className='label flex cursor-pointer items-center gap-2'>
          <div className='relative'>
            <input
              type='checkbox'
              checked={checked}
              className='appearance-none cursor-pointer rounded border-2 border-border h-6 w-6 transition-all duration-200 checked:bg-primary checked:border-primary checked:text-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 hover:border-primary'
              onChange={onChange}
            />
            {checked && (
              <svg
                className='absolute left-1 top-1 h-4 w-4 text-primary pointer-events-none'
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
            <span className='text-primary top-[-2.5px] relative'>{text}</span>
          )}
        </label>
      </div>
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default Checkbox;

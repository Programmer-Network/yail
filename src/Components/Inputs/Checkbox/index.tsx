import classNames from "classnames";
import { FC } from "react";

import InputError from "Components/Inputs/Common/InputError";
import InputHeader from "Components/Inputs/Common/InputHeader";

import { ICheckboxProps } from "./types";

const Checkbox: FC<ICheckboxProps> = props => {
  const { checked, onChange, text, inputWrapperClassName } = props;
  return (
    <div className={classNames(inputWrapperClassName)}>
      <InputHeader {...props} />
      <div className='form-control items-start'>
        <label className='label flex cursor-pointer items-center gap-2'>
          <input
            type='checkbox'
            checked={checked}
            className='checkbox checkbox-primary cursor-pointer rounded-none text-primary focus:outline-primary'
            onChange={onChange}
          />
          {text && (
            <span className='text-sm text-primary-text-color'>{text}</span>
          )}
        </label>
      </div>
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

Checkbox.defaultProps = {
  checked: false,
  text: "",
  onChange: () => null
};

export default Checkbox;

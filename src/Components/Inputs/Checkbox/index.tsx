import classNames from "classnames";
import { FC } from "react";

import InputError from "Components/Inputs/Common/InputError";
import InputHeader from "Components/Inputs/Common/InputHeader";

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
        <label className='label yl-flex yl-cursor-pointer yl-items-center yl-gap-2'>
          <input
            type='checkbox'
            checked={checked}
            className='checkbox checkbox-primary yl-cursor-pointer yl-rounded-none yl-text-primary focus:outline-primary'
            onChange={onChange}
          />
          {text && <span className='yl-text-primary-text-color'>{text}</span>}
        </label>
      </div>
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default Checkbox;

import classNames from "classnames";
import { ChangeEvent, FC, useState } from "react";

import InputError from "Components/Inputs/Common/InputError";
import InputHeader from "Components/Inputs/Common/InputHeader";

import { IDomainInputProps } from "./types";

const DomainInput: FC<IDomainInputProps> = (
  props = {
    domain: "",
    name: "",
    value: "",
    hint: "",
    className: "",
    domainClassName: "",
    inputWrapperClassName: "",
    type: "string",
    max: 0,
    error: "",
    disabled: false,
    onChange: () => null
  }
) => {
  const { domain, name, value, disabled } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div
      className={classNames(
        "group yl-text-primary-text-color",
        props.inputWrapperClassName
      )}
    >
      <InputHeader {...props} />
      <div className='yl-flex yl-w-full'>
        <span
          data-testid='domain'
          className={classNames(
            "yl-min-w-max yl-border-2 yl-border-primary-text-color yl-px-4 yl-py-2 yl-leading-5 yl-tracking-tighter selection:yl-text-primary-text-color yl-rounded-tl-md yl-rounded-bl-md",
            props.domainClassName,
            {
              "group-hover:yl-border-primary": !props.disabled,
              "!yl-border-primary !ring-transparent": isFocused
            }
          )}
        >
          {domain}
        </span>
        <input
          data-testid='input'
          name={name}
          value={value}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={classNames(
            "yl-w-full yl-cursor-pointer yl-border-t-2 yl-border-b-2 yl-border-r-2 yl-border-primary-text-color yl-bg-transparent yl-p-2 transition-colors focus:yl-border-primary focus:yl-outline-none focus:yl-ring-transparent yl-rounded-tr-md yl-rounded-br-md",
            props.className,
            {
              "group-hover:yl-border-primary": !props.disabled,
              "hover:yl-cursor-not-allowed": props.disabled
            }
          )}
          onChange={handleChange}
        />
      </div>
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default DomainInput;

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
        "group yl:text-secondary",
        props.inputWrapperClassName
      )}
    >
      <InputHeader {...props} />
      <div className='yl:flex yl:w-full'>
        <span
          data-testid='domain'
          className={classNames(
            "yl:min-w-max yl:border-2 yl:border-border yl:px-4 yl:py-2 yl:leading-5 yl:tracking-tighter yl:selection:text-secondary yl:rounded-tl-md yl:rounded-bl-md",
            props.domainClassName,
            {
              "yl:group-hover:border-border": !props.disabled,
              "yl:border-border! !ring-3-transparent": isFocused
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
            "yl:w-full yl:cursor-pointer yl:border-t-2 yl:border-b-2 yl:border-r-2 yl:border-border yl:bg-transparent yl:p-2 transition-colors yl:focus:border-border yl:focus:outline-hidden yl:focus:ring-3-transparent yl:rounded-tr-md yl:rounded-br-md",
            props.className,
            {
              "yl:group-hover:border-border": !props.disabled,
              "yl:hover:cursor-not-allowed": props.disabled
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

import classNames from "classnames";
import { ChangeEvent, FC, useState } from "react";

import { InputError } from "../Common/InputError";
import { InputHeader } from "../Common/InputHeader";
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
      className={classNames("group yl:text-text", props.inputWrapperClassName)}
    >
      <InputHeader {...props} />
      <div className='yl:flex yl:w-full'>
        <span
          data-testid='domain'
          className={classNames(
            "yl:border-border selection:text-text yl:min-w-max yl:rounded-tl-md yl:rounded-bl-md yl:border yl:px-4 yl:py-2 yl:leading-5 yl:tracking-tighter",
            props.domainClassName,
            {
              "yl:group-hover:border-border": !props.disabled,
              "yl:border-border! yl:ring-3-transparent!": isFocused
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
            "yl:border-border yl:focus:border-border yl:focus:ring-3-transparent yl:w-full yl:cursor-pointer yl:rounded-tr-md yl:rounded-br-md yl:border-t-2 yl:border-r yl:border-b yl:bg-transparent yl:p-2 yl:transition-colors yl:focus:outline-hidden",
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

export { DomainInput };

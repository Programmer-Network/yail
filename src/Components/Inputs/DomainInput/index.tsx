import classNames from "classnames";
import { ChangeEvent, FC, useState } from "react";

import InputError from "../Common/InputError";
import InputHeader from "../Common/InputHeader";
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
    <div className={classNames("group text-text", props.inputWrapperClassName)}>
      <InputHeader {...props} />
      <div className='flex w-full'>
        <span
          data-testid='domain'
          className={classNames(
            "min-w-max border-2 border-border px-4 py-2 leading-5 tracking-tighter selection:text-text rounded-tl-md rounded-bl-md",
            props.domainClassName,
            {
              "group-hover:border-border": !props.disabled,
              "border-border! !ring-3-transparent": isFocused
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
            "w-full cursor-pointer border-t-2 border-b-2 border-r-2 border-border bg-transparent p-2 transition-colors focus:border-border focus:outline-hidden focus:ring-3-transparent rounded-tr-md rounded-br-md",
            props.className,
            {
              "group-hover:border-border": !props.disabled,
              "hover:cursor-not-allowed": props.disabled
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

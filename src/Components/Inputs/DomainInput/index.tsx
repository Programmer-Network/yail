import classNames from "classnames";
import { ChangeEvent, FC, useState } from "react";

import InputError from "Components/Inputs/Common/InputError";
import InputHeader from "Components/Inputs/Common/InputHeader";

import { IDomainInputProps } from "./types";

const DomainInput: FC<IDomainInputProps> = props => {
  const { domain } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div
      className={classNames(
        "group text-primary-text-color",
        props.inputWrapperClassName
      )}
    >
      <InputHeader {...props} />
      <div className='flex w-full'>
        <span
          data-testid='domain'
          className={classNames(
            "min-w-max border-2 border-r-0 border-primary-text-color px-4 py-2 text-sm uppercase leading-5 tracking-tighter selection:text-primary-text-color",
            props?.domainClassName,
            {
              "group-hover:border-primary": !props.disabled,
              "!border-primary !ring-transparent": isFocused
            }
          )}
        >
          {domain}
        </span>
        <input
          {...props}
          data-testid='input'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={classNames(
            "w-full cursor-pointer border-2 border-primary-text-color bg-transparent p-2 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-transparent",
            props.className,
            {
              "group-hover:border-primary": !props.disabled,
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

DomainInput.defaultProps = {
  domain: "",
  name: "",
  value: "",
  hint: "",
  className: "",
  type: "string",
  max: 0,
  error: "",
  disabled: false,
  onChange: () => null
};

export default DomainInput;

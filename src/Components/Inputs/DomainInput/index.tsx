import classNames from "classnames";
import { ChangeEvent, FC } from "react";

import InputError from "Components/Inputs/Common/InputError";
import InputHeader from "Components/Inputs/Common/InputHeader";

import { IDomainInputProps } from "./types";

const DomainInput: FC<IDomainInputProps> = props => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange({ [e.target.name]: e.target.value });
  };

  const { domain } = props;
  return (
    <div className={classNames(props.inputWrapperClassName)}>
      <InputHeader {...props} />
      <div className='flex w-full'>
        <span
          className={classNames(
            "min-w-max border-2 border-r-0 border-primary-text-color px-4 py-2 text-xs leading-5",
            props?.domainClassName
          )}
        >
          {domain}
        </span>
        <input
          {...props}
          className={classNames(
            "bg-transparent focus:ring-transparent w-full cursor-pointer border-2 border-primary-text-color p-2 text-sm transition-colors hover:border-primary focus:border-primary focus:outline-none",
            props.className,
            {
              "hover:cursor-not-allowed hover:border-primary": props.disabled
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

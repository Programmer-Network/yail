import classNames from "classnames";
import { ChangeEvent, FC, forwardRef } from "react";

import { InputError } from "../Common/InputError";
import { InputHeader } from "../Common/InputHeader";
import { IInputProps } from "./types";

const Input: FC<IInputProps> = forwardRef<HTMLInputElement, IInputProps>(
  function InputForwardRef(props, ref) {
    const {
      name,
      value,
      label,
      type,
      min,
      max,
      children,
      minDate,
      hint,
      className,
      disabled,
      error,
      required,
      inputWrapperClassName,
      onChange,
      ...rest
    } = props;

    const inputHeaderProps = { name, value, min, max, label, hint, required };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!onChange) {
        throw new Error("💣 Input is missing onChange handler 💣");
      }

      if (!e.target.name) {
        throw new Error('💣 Input is missing a "name" prop 💣');
      }

      onChange?.({ [e.target.name]: e.target.value });
    };

    const getMinValue = () => {
      switch (type) {
        case "text":
        case "number":
          return min;
        case "datetime-local":
          return minDate;
        default:
          return undefined;
      }
    };

    return (
      <div className={classNames(inputWrapperClassName)}>
        <InputHeader {...inputHeaderProps} />
        <div className='flex flex-col'>
          <input
            ref={ref}
            {...rest}
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            className={classNames(
              "border-border text-text hover:border-border focus:border-border focus:ring-3-transparent w-full appearance-none rounded-md border-2 bg-transparent p-2 transition-colors focus:outline-hidden",
              className,
              {
                "input-disabled": disabled
              }
            )}
            maxLength={type === "text" ? max : undefined}
            min={getMinValue()}
            max={type !== "text" ? max : undefined}
            disabled={disabled}
          />
          {children && <div className='input-children'>{children}</div>}
          {error && <InputError error={error} />}
        </div>
        {type === "string" &&
          typeof value === "string" &&
          typeof min === "number" &&
          value.length < min && (
            <p className='text-warning mt-2'>
              {min - value.length} characters to go
            </p>
          )}
      </div>
    );
  }
);

export { Input };

import classNames from 'classnames';
import { ChangeEvent, FC, forwardRef } from 'react';
import InputHeader from '../Common/InputHeader';
import InputError from '../Common/InputError';
import { IInputProps } from './types';

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
        throw new Error('💣 Input is missing onChange handler 💣');
      }

      if (!e.target.name) {
        throw new Error('💣 Input is missing a "name" prop 💣');
      }

      onChange?.(e, { [e.target.name]: e.target.value });
    };

    const getMinValue = () => {
      switch (type) {
        case 'text':
        case 'number':
          return min;
        case 'datetime-local':
          return minDate;
        default:
          return undefined;
      }
    };

    return (
      <div className={classNames('input-wrapper', inputWrapperClassName)}>
        <InputHeader {...inputHeaderProps} />
        <div className="relative">
          <input
            ref={ref}
            {...rest}
            name={name}
            value={value}
            type={type}
            onChange={handleChange}
            className={classNames('input-base', className, {
              'input-disabled': disabled,
            })}
            maxLength={type === 'text' ? max : undefined}
            min={getMinValue()}
            max={type !== 'text' ? max : undefined}
            disabled={disabled}
          />
          {children && <div className="input-children">{children}</div>}
        </div>
        {error && <InputError error={error} />}
        {typeof min === 'number' && value.length < min && (
          <p className="text-warning mt-2 text-sm">
            {min - value.length} characters to go
          </p>
        )}
      </div>
    );
  }
);

export default Input;

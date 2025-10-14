import classNames from "classnames";
import { FC } from "react";
import ReactSelect, { MultiValue, SingleValue } from "react-select";

import InputError from "Components/Inputs/Common/InputError";
import InputHeader from "Components/Inputs/Common/InputHeader";

import { styles } from "./styles";
import { ISelectProps, Option } from "./types";

const Select: FC<ISelectProps> = props => {
  const { hint, label, max, defaultValue, isMulti = false, options } = props;

  const handleOnChange = (
    option: MultiValue<Option | undefined> | SingleValue<Option | undefined>
  ): void => {
    if (Array.isArray(option) && isMulti) {
      return props.onChange({ [props.name]: option.map(o => o?.value) });
    }

    return props.onChange({ [props.name]: (option as Option)?.value });
  };

  const getValue = () => {
    if (!props.value) {
      return;
    }

    if (isMulti && Array.isArray(props.value)) {
      const values = props.value.map(value => {
        if (typeof value === "object" && value !== null && "value" in value) {
          return options.find(
            option => option.value === (value as Option)?.value
          );
        } else {
          return options.find(option => option.value === value);
        }
      });

      return values.filter(Boolean).length ? values : undefined;
    }

    return options.find(
      option =>
        option.value === props.value ||
        option.value === (props.value as Option)?.value
    );
  };

  return (
    <div className={classNames(props.inputWrapperClassName)}>
      {max || label || hint ? (
        <InputHeader
          name={props.name}
          type={props.type}
          hint={props.hint}
          label={props.label}
          max={props.max}
          required={props.required}
        />
      ) : null}
      <ReactSelect
        options={options}
        isSearchable={props.isSearchable}
        closeMenuOnSelect={isMulti ? false : true}
        isMulti={isMulti}
        defaultValue={defaultValue}
        value={getValue()}
        styles={styles}
        className='pn-select-container'
        classNamePrefix='pn-select'
        onChange={handleOnChange}
        placeholder={props.placeholder}
      />
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default Select;

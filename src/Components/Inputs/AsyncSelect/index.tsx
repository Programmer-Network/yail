import classNames from "classnames";
import { FC } from "react";
import { OnChangeValue } from "react-select";
import { AsyncPaginate } from "react-select-async-paginate";

import InputError from "Components/Inputs/Common/InputError";
import InputHeader from "Components/Inputs/Common/InputHeader";

import { styles } from "../Select/styles";
import { Option } from "../Select/types";
import { IAsyncSelectProps } from "./types";

const AsyncSelect: FC<IAsyncSelectProps> = props => {
  const onChange = (newValue: OnChangeValue<Option, boolean>) => {
    if (Array.isArray(newValue) && props.isMulti) {
      return props.onChange({ [props.name]: newValue });
    }

    return props.onChange({ [props.name]: newValue as Option });
  };

  return (
    <div className={classNames(props.inputWrapperClassName)}>
      <InputHeader
        name={props.name}
        type={props.type}
        hint={props.hint}
        label={props.label}
        max={props.max}
        required={props.required}
      />
      <AsyncPaginate
        {...props}
        value={props.value}
        isMulti={props.isMulti}
        styles={styles}
        className='pn-select-container'
        classNamePrefix='pn-select'
        onChange={newValue => {
          if (props.isMulti) {
            onChange(newValue as Option[]);
          } else {
            onChange(newValue as Option);
          }
        }}
        debounceTimeout={1000}
        loadOptionsOnMenuOpen={true}
        openMenuOnClick={false}
        loadOptions={props.loadOptions}
      />
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default AsyncSelect;

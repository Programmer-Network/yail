import classNames from "classnames";
import { FC } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import InputError from "Components/Inputs/Common/InputError";
import InputHeader from "Components/Inputs/Common/InputHeader";

import { styles } from "../Select/styles";
import { IAsyncSelectProps } from "./types";

const SelectAsync: FC<IAsyncSelectProps> = props => {
  const onChange = (item: unknown) => {
    console.log("🚀 ─── file: index.tsx:13 ─── onChange ─── item:", item);
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
        value={props.value}
        styles={styles()}
        className='pn-select-container text-sm'
        classNamePrefix='pn-select'
        onChange={onChange}
        debounceTimeout={1000}
        loadOptionsOnMenuOpen={false}
        openMenuOnClick={false}
        loadOptions={props.loadOptions}
      />
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default SelectAsync;

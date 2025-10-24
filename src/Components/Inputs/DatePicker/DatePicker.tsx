import { FC } from "react";
import BaseDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import InputError from "../Common/InputError";
import InputHeader from "../Common/InputHeader";
import "./style.css";
import { IDatePickerProps } from "./types";

const DatePicker: FC<IDatePickerProps> = props => {
  const {
    value = undefined,
    required,
    onChange,
    name,
    showTimeSelect,
    timeFormat = "HH:mm",
    timeCaption = "time",
    timeIntervals = 15,
    dateFormat = "MMMM d, yyyy h:mm aa",
    minDate,
    maxDate,
    error
  } = props;

  const handleChange = (date: Date | null) => {
    if (!onChange) {
      throw new Error(`💣 Input is missing "onChange" handler 💣`);
    }

    if (!name) {
      throw new Error('💣 Input is missing a "name" prop 💣');
    }

    onChange?.({ [name]: date });
  };

  return (
    <div>
      <InputHeader {...props} />
      <BaseDatePicker
        selected={value}
        required={required}
        onChange={handleChange}
        showTimeSelect={showTimeSelect}
        timeFormat={timeFormat}
        timeIntervals={timeIntervals}
        timeCaption={timeCaption}
        dateFormat={dateFormat}
        showPopperArrow={false}
        minDate={minDate}
        maxDate={maxDate}
      />
      {error && <InputError error={error} />}
    </div>
  );
};

export default DatePicker;

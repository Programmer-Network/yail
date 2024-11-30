import { FC } from "react";
import BaseDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import InputHeader from "../Common/InputHeader";
import "./style.css";
import { IDatePickerProps } from "./types";

const DatePicker: FC<IDatePickerProps> = props => {
  const {
    selected = undefined,
    onChange,
    name,
    showTimeSelect,
    timeFormat = "HH:mm",
    timeCaption = "time",
    timeIntervals = 15,
    dateFormat = "MMMM d, yyyy h:mm aa"
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
    <div className='yl-bg-primary-background-color'>
      <InputHeader {...props} />
      <BaseDatePicker
        selected={selected}
        onChange={handleChange}
        showTimeSelect={showTimeSelect}
        timeFormat={timeFormat}
        timeIntervals={timeIntervals}
        timeCaption={timeCaption}
        dateFormat={dateFormat}
        showPopperArrow={false}
      />
    </div>
  );
};

export default DatePicker;

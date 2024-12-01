import { useState } from "react";

import DatePicker from ".";

export default {
  title: "Input/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    onChange: { action: "changed" }
  }
};

export const Default = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      name='datetime'
      value={date}
      showTimeSelect
      timeCaption='Time'
      onChange={input => {
        if (!input.datetime) {
          return;
        }

        setDate(input.datetime);
      }}
    />
  );
};

export const WithMinAndMaxDate = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      name='datetime'
      minDate={new Date()}
      maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
      value={date}
      timeIntervals={60}
      showTimeSelect
      timeCaption='Time'
      onChange={input => {
        if (!input.datetime) {
          return;
        }

        setDate(input.datetime);
      }}
    />
  );
};

export const WithAHeaderAndError = () => {
  const [date, setDate] = useState(new Date());

  return (
    <DatePicker
      name='datetime'
      label='Select a date and time'
      required
      minDate={new Date()}
      maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
      value={date}
      timeIntervals={60}
      showTimeSelect
      timeCaption='Time'
      error='Invalid date and time'
      onChange={input => {
        if (!input.datetime) {
          return;
        }

        setDate(input.datetime);
      }}
    />
  );
};

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
      selected={date}
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

import { useState } from "react";
import { action } from "storybook/actions";

import Checkbox from ".";

export default {
  title: "Input/Checkbox",
  parameters: {
    layout: "centered"
  },
  component: Checkbox,
  argTypes: {
    onChange: { action: "changed" }
  }
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Checkbox
      text='I currently work here'
      checked={isChecked}
      onChange={e => {
        setIsChecked(e.target.checked);
        action("onChange")(e.target.checked);
      }}
    />
  );
};

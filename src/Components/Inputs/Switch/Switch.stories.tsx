import { useState } from "react";

import { Switch } from ".";

export default {
  title: "Input / Switch"
};

export const IsChecked = () => {
  return (
    <Switch
      name='isEnabled'
      label='Lorem ipsum'
      isChecked={true}
      onChange={({ isEnabled }) => console.log(isEnabled)}
    />
  );
};

export const IsNotChecked = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      name='isEnabled'
      label='Lorem ipsum'
      isChecked={isChecked}
      onChange={({ isEnabled }) => setIsChecked(isEnabled ?? false)}
    />
  );
};

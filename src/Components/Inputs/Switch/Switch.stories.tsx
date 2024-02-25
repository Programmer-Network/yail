import { useState } from "react";

import Switch from ".";

export default {
  title: "Input / Switch"
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      isChecked={isChecked}
      onChange={({ isEnabled }) => setIsChecked(isEnabled)}
      name='isEnabled'
    />
  );
};

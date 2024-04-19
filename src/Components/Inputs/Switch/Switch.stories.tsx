import { useState } from "react";

import Switch from ".";

export default {
  title: "Input / Switch"
};

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false);

  console.log("🚀 ─── Default ─── isChecked:", isChecked);

  return (
    <Switch
      isChecked={isChecked}
      onChange={({ isEnabled }) => setIsChecked(isEnabled)}
      name='isEnabled'
    />
  );
};

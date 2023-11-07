import { action } from "@storybook/addon-actions";
import { useEffect, useState } from "react";

import DomainInput from "./";

export default {
  title: "Input/DomainInput",
  component: DomainInput,
  argTypes: {
    onChange: { action: "changed" }
  }
};

export const Default = () => {
  const [input, setInput] = useState<Record<string, string>>({ url: "" });

  useEffect(() => {
    action("onChange")(input.url);
  }, [input.url]);

  return (
    <DomainInput
      domain='https://programmer.network/'
      name='url'
      value={input.url}
      onChange={setInput}
    />
  );
};

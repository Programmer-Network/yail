import { action } from "@storybook/addon-actions";
import { useEffect, useState } from "react";

import DomainInput from ".";

export default {
  title: "Input/DomainInput",
  component: DomainInput,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    onChange: { action: "changed" }
  }
};

export const Default = () => {
  const [input, setInput] = useState<Record<string, string>>({ url: "" });

  useEffect(() => {
    const url = input["url"];
    action("onChange")(url);
  }, [input]);

  return (
    <DomainInput
      domain='programmer.network'
      name='url'
      value={input["url"] ?? ""}
      onChange={setInput}
    />
  );
};

import { action } from "@storybook/addon-actions";
import { useState } from "react";

import Select from ".";
import { ISelectProps } from "./types";

export default {
  title: "Input/Select",
  parameters: {
    layout: "centered"
  },
  component: Select,
  argTypes: {
    onChange: { action: "changed" }
  }
};

export const SingleSelect = (args: ISelectProps) => {
  const [input, setInput] = useState<Record<string, string>>({
    foo: ""
  });

  return (
    <Select
      {...args}
      name='foo'
      value={input.foo}
      onChange={input => {
        action("onChange")(input);
        setInput(input as { foo: string });
      }}
    />
  );
};

SingleSelect.args = {
  name: "single-select",
  onChange: action("onChange"),
  options: [
    { value: "foo", label: "Foo" },
    { value: "bar", label: "Bar" },
    { value: "baz", label: "Baz" }
  ],
  value: "foo"
};

export const MultiSelect = (args: ISelectProps) => {
  const [input, setInput] = useState<Record<string, string[]>>({ foo: [] });

  return (
    <Select
      {...args}
      name='foo'
      value={input.foo}
      onChange={values => {
        action("onChange")(values);
        setInput(values as { foo: string[] });
      }}
    />
  );
};

MultiSelect.args = {
  name: "multi-select",
  isMulti: true,
  options: [
    { value: "foo", label: "Foo" },
    { value: "bar", label: "Bar" },
    { value: "baz", label: "Baz" }
  ]
};

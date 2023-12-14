import { action } from "@storybook/addon-actions";
import { useEffect, useState } from "react";
import { MultiValue, SingleValue } from "react-select";

import Select from ".";
import { ISelectProps, Option } from "./types";

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
  const [input, setInput] = useState<
    Record<
      string,
      MultiValue<Option | undefined> | SingleValue<Option | undefined>
    >
  >({
    foo: {
      value: "foo",
      label: "foo"
    }
  });

  useEffect(() => {
    console.log(input);
  }, [input]);

  return <Select {...args} name='foo' value={input.foo} onChange={setInput} />;
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

export const SingleSelectWithStringValue = (args: ISelectProps) => {
  const [input, setInput] = useState<
    Record<
      string,
      MultiValue<Option | undefined> | SingleValue<Option | undefined | string>
    >
  >({
    foo: "foo"
  });

  useEffect(() => {
    console.log(input);
  }, [input]);

  return <Select {...args} name='foo' value={input.foo} onChange={setInput} />;
};

SingleSelectWithStringValue.args = {
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
  const [input, setInput] = useState<
    Record<
      string,
      MultiValue<Option | undefined> | SingleValue<Option | undefined>
    >
  >({
    foo: [
      { value: "foo", label: "foo" },
      { value: "bar", label: "bar" }
    ]
  });

  useEffect(() => {
    console.log(input);
  }, [input]);

  return <Select {...args} value={input.foo} onChange={setInput} />;
};

MultiSelect.args = {
  name: "foo",
  isMulti: true,
  options: [
    { value: "foo", label: "Foo" },
    { value: "bar", label: "Bar" },
    { value: "baz", label: "Baz" }
  ]
};

export const MultiSelectWithStringArray = (args: ISelectProps) => {
  const [input, setInput] = useState<
    Record<
      string,
      | MultiValue<Option | undefined>
      | SingleValue<Option | undefined | string[]>
    >
  >({
    foo: ["foo", "bar"]
  });

  useEffect(() => {
    console.log(input);
  }, [input]);

  return <Select {...args} value={input.foo} onChange={setInput} />;
};

MultiSelectWithStringArray.args = {
  name: "foo",
  isMulti: true,
  options: [
    { value: "foo", label: "Foo" },
    { value: "bar", label: "Bar" },
    { value: "baz", label: "Baz" }
  ]
};

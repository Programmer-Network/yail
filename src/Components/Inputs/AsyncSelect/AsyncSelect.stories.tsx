import { faker } from "@faker-js/faker";
import { useState } from "react";
import { GroupBase } from "react-select";

import AsyncSelect from ".";
import { Option } from "../Select/types";
import { IAsyncSelectProps, Response } from "./types";

export default {
  title: "Input/AsyncSelect",
  parameters: {
    layout: "centered"
  },
  component: AsyncSelect,
  argTypes: {
    onChange: { action: "changed" }
  }
};

export const MultiSelect = () => {
  const options = Array.from({ length: 50 }, () => {
    const word = faker.word.words();
    return {
      value: word.toLowerCase(),
      label: word
    };
  });

  const [input, setInput] = useState<Option | Option[]>(options[0]!);

  const args: IAsyncSelectProps = {
    name: "example",
    label: "Example",
    required: true,
    onChange: (value: Record<string, Option | Option[]>) => {
      setInput(value["value"] as Option | Option[]);
    },
    loadOptions: async (): Promise<
      Response<Option, GroupBase<Option>, unknown>
    > => {
      return {
        options: options,
        hasMore: false
      };
    },
    isMulti: true,
    value: input as Option[]
  };

  return (
    <div>
      <AsyncSelect {...args} />
      <div>Hello, World!</div>
    </div>
  );
};

export const SingleSelect = () => {
  const options = Array.from({ length: 50 }, () => {
    const word = faker.word.words();
    return {
      value: word.toLowerCase(),
      label: word
    };
  });

  const [input, setInput] = useState<Option | Option[]>(options[0]!);

  const args: IAsyncSelectProps = {
    name: "example",
    label: "Example",
    placeholder: "Select an option",
    noOptionsMessage: () => "No options",
    loadingMessage: () => "Loading...",
    required: true,
    onChange: (value: Record<string, Option | Option[]>) => {
      setInput(value["value"] as Option | Option[]);
    },
    isSearchable: true,
    loadOptions: async (): Promise<
      Response<Option, GroupBase<Option>, unknown>
    > => {
      return {
        options: options,
        hasMore: false
      };
    },
    value: input as Option
  };

  return <AsyncSelect {...args} />;
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import InputError from ".";

const meta = {
  title: "Input/Common/InputError",
  component: InputError,

  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof InputError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorAsString: Story = {
  args: {
    error: "This field is required"
  }
};

export const ErrorAsArray: Story = {
  args: {
    error: ["This field is required", "Max length is 10"]
  }
};

export const ErrorAsObject: Story = {
  args: {
    error: {
      name: "This field is required",
      email: "Invalid email"
    }
  }
};

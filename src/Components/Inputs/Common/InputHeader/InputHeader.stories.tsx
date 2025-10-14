import type { Meta, StoryObj } from "@storybook/react-vite";

import InputHeader from ".";

const meta = {
  title: "Input/Common/InputHeader",
  component: InputHeader,

  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof InputHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Required: Story = {
  args: {
    required: true,
    label: "Comment",
    type: "text"
  }
};

export const MaxLength: Story = {
  args: {
    max: 10,
    value: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    required: true,
    label: "Comment",
    type: "text"
  }
};

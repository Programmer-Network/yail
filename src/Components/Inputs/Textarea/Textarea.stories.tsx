import type { Meta, StoryObj } from "@storybook/react";

import Textrea from ".";

const meta = {
  title: "Input/Textrea",
  component: Textrea,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Textrea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "username",
    label: "Username",
    value: "John Doe",
    onChange: (e: Record<string, string>) => console.log(e),
    required: true
  }
};

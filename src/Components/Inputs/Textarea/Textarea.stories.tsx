import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "./Textarea";

const meta = {
  title: "Input/Textarea",
  component: Textarea,

  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Textarea>;

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

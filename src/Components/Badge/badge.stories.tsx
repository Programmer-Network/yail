import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./";

const meta = {
  title: "Core/Badge",
  component: Badge,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    title: "Badge",
    className: "bg-primary-500"
  }
};

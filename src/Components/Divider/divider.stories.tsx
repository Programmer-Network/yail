import type { Meta, StoryObj } from "@storybook/react";

import Divider from "./";

const meta = {
  title: "Core/Divider",
  component: Divider,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithClassesProperty: Story = {
  args: {
    classes: ["bg-violet-300", "bg-violet-400", "bg-violet-500"]
  }
};

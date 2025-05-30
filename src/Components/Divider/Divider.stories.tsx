import type { Meta, StoryObj } from "@storybook/react-vite";

import Divider from ".";

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
    classes: ["yl:bg-violet-300", "yl:bg-violet-400", "yl:bg-violet-500"]
  }
};

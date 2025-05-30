import type { Meta, StoryObj } from "@storybook/react-vite";

import TextOverLine from ".";

const meta = {
  title: "Core/TextOverLine",
  component: TextOverLine,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof TextOverLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: "Hello World"
  }
};

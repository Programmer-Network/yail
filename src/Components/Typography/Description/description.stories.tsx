import type { Meta, StoryObj } from "@storybook/react";

import Description from "./";

const meta = {
  title: "Typography/Description",
  component: Description,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
  }
};

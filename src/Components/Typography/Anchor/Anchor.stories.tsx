import type { Meta, StoryObj } from "@storybook/react-vite";

import Anchor from ".";

const meta = {
  title: "Typography/Anchor",
  component: Anchor,

  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    target: "_blank",
    href: "https://www.google.com",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec"
  }
};

import type { Meta, StoryObj } from "@storybook/react";

import Avatar from ".";

const meta = {
  title: "Core/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 150
  }
};

export const WithURL: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/2085263?v=4",
    size: 150
  }
};

export const WithClassName: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/2085263?v=4",
    size: 150,
    className: "yl:border-4 yl:border-white"
  }
};

export const WithClassNameBoringAvatars: Story = {
  args: {
    size: 150,
    className: "yl:border-4 yl:border-white"
  }
};

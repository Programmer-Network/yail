import type { Meta, StoryObj } from "@storybook/react-vite";

import Avatar from ".";

const meta = {
  title: "Core/Avatar",
  component: Avatar,
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
    src: "https://images.programmer.network/47d46959-283a-4d0f-4ff3-6a1fa4686b00/public",
    size: 150
  }
};

export const WithClassName: Story = {
  args: {
    src: "https://avatars.githubusercontent.com/u/2085263?v=4",
    size: 150,
    className: "border-4 border-white"
  }
};

export const WithClassNameBoringAvatars: Story = {
  args: {
    size: 150,
    className: "border-4 border-white"
  }
};

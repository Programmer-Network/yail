import type { Meta, StoryObj } from "@storybook/react-vite";

import Stars from ".";

const meta = {
  title: "Core/Stars",
  component: Stars,

  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    name: "stars",
    stars: 5,
    onChange: value => console.log(value)
  }
};

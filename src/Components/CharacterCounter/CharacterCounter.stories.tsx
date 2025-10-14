import type { Meta, StoryObj } from "@storybook/react-vite";

import CharacterCounter from ".";

const meta = {
  title: "Core/CharacterCounter",
  component: CharacterCounter,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof CharacterCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExceededMaxLength: Story = {
  args: {
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    max: 10
  }
};

export const WithinAllowedRange: Story = {
  args: {
    text: "lorem",
    max: 10
  }
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from ".";
import { BadgeVariantEnum } from "./types";

const meta = {
  title: "Core/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(BadgeVariantEnum)
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    title: "Badge",
    variant: BadgeVariantEnum.FILLED
  }
};

export const Outline: Story = {
  args: {
    title: "Badge",
    variant: BadgeVariantEnum.OUTLINE,
    className: "text-secondary"
  }
};

export const Custom: Story = {
  args: {
    title: "Badge",
    className: "text-bg bg-red-500"
  }
};

export const Clickable: Story = {
  args: {
    title: "Badge",
    variant: BadgeVariantEnum.FILLED,
    onClick: () => {
      alert("Badge clicked");
    }
  }
};

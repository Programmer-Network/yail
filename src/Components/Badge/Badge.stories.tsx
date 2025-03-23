import type { Meta, StoryObj } from "@storybook/react";

import Badge from ".";
import { BadgeVariantEnum } from "./types";

const meta = {
  title: "Core/Badge",
  component: Badge,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    title: "Badge",
    variant: BadgeVariantEnum.PRIMARY
  }
};

export const Filled: Story = {
  args: {
    title: "Badge",
    variant: BadgeVariantEnum.PRIMARY
  }
};

export const Beta: Story = {
  args: {
    title: "Beta",
    variant: BadgeVariantEnum.BETA
  }
};

export const New: Story = {
  args: {
    title: "New",
    variant: BadgeVariantEnum.NEW
  }
};

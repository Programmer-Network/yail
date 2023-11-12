import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";
import vitestResults from "../../../test-results.json";

const meta = {
  title: "Core/Button",
  component: Button,
  parameters: {
    layout: "centered",
    vitest: {
      testFile: "Button.test.tsx",
      testResults: vitestResults
    }
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: "Button"
  }
};

export const FilledDisabled: Story = {
  args: {
    children: "Button",
    disabled: true
  }
};

export const FilledSpining: Story = {
  args: {
    children: "Button",
    isLoading: true
  }
};

export const Outlined: Story = {
  args: {
    children: "Button",
    outlined: true
  }
};

export const OutlinedDisabled: Story = {
  args: {
    children: "Button",
    outlined: true,
    disabled: true
  }
};

export const OutlinedSpinning: Story = {
  args: {
    children: "Button",
    outlined: true,
    isLoading: true
  }
};

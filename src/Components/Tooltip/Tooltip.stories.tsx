import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tooltip } from ".";

const meta = {
  title: "Core/Tooltip",
  component: Tooltip,

  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    id: "tooltip",
    place: "top",
    text: "Hi, World",
    children: <div className='text-text'>Hover Me</div>
  }
};

export const Left: Story = {
  args: {
    id: "tooltip",
    place: "left",
    text: "Hi, World",
    children: <div className='text-text'>Hover Me</div>
  }
};

export const Bottom: Story = {
  args: {
    id: "tooltip",
    place: "bottom",
    text: "Hi, World",
    children: <div className='text-text'>Hover Me</div>
  }
};

export const Right: Story = {
  args: {
    id: "tooltip",
    place: "right",
    text: "Hi, World",
    children: <div className='text-text'>Hover Me</div>
  }
};

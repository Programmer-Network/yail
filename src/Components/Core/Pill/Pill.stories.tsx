import type { Meta, StoryObj } from "@storybook/react-vite";

import Pill from "./index";

const meta: Meta<typeof Pill> = {
  title: "Components/Core/Pill",
  component: Pill,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "error",
        "warning",
        "indigo",
        "purple",
        "pink"
      ]
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    clickable: {
      control: { type: "boolean" }
    },
    disabled: {
      control: { type: "boolean" }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    children: "Badge"
  }
};

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary"
  }
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary"
  }
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success"
  }
};

export const Error: Story = {
  args: {
    children: "Error",
    variant: "error"
  }
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning"
  }
};

export const Indigo: Story = {
  args: {
    children: "Indigo",
    variant: "indigo"
  }
};

export const Purple: Story = {
  args: {
    children: "Purple",
    variant: "purple"
  }
};

export const Pink: Story = {
  args: {
    children: "Pink",
    variant: "pink"
  }
};

export const Clickable: Story = {
  args: {
    children: "Clickable",
    variant: "primary",
    clickable: true,
    onClick: () => console.log("Pill clicked!")
  }
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "primary",
    clickable: true,
    disabled: true
  }
};

export const Sizes: Story = {
  render: () => (
    <div className='yl:flex yl:items-center yl:gap-4'>
      <Pill size='small' variant='primary'>
        Small
      </Pill>
      <Pill size='medium' variant='primary'>
        Medium
      </Pill>
      <Pill size='large' variant='primary'>
        Large
      </Pill>
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div className='yl:flex yl:flex-wrap yl:gap-2'>
      <Pill variant='primary'>Primary</Pill>
      <Pill variant='secondary'>Secondary</Pill>
      <Pill variant='success'>Success</Pill>
      <Pill variant='error'>Error</Pill>
      <Pill variant='warning'>Warning</Pill>
      <Pill variant='indigo'>Indigo</Pill>
      <Pill variant='purple'>Purple</Pill>
      <Pill variant='pink'>Pink</Pill>
    </div>
  )
};

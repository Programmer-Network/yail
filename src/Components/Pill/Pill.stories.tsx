import type { Meta, StoryObj } from "@storybook/react-vite";

import { PillSize, PillVariant } from "./Pill.types";
import { Pill } from "./index";

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
    variant: PillVariant.PRIMARY
  }
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: PillVariant.SECONDARY
  }
};

export const Success: Story = {
  args: {
    children: "Success",
    variant: PillVariant.SUCCESS
  }
};

export const Error: Story = {
  args: {
    children: "Error",
    variant: PillVariant.ERROR
  }
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: PillVariant.WARNING
  }
};

export const Indigo: Story = {
  args: {
    children: "Indigo",
    variant: PillVariant.INDIGO
  }
};

export const Purple: Story = {
  args: {
    children: "Purple",
    variant: PillVariant.PURPLE
  }
};

export const Pink: Story = {
  args: {
    children: "Pink",
    variant: PillVariant.PINK
  }
};

export const Clickable: Story = {
  args: {
    children: "Clickable",
    variant: PillVariant.PRIMARY,
    clickable: true,
    onClick: () => console.log("Pill clicked!")
  }
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: PillVariant.PRIMARY,
    clickable: true,
    disabled: true
  }
};

export const Sizes: Story = {
  render: () => (
    <div className='yl:flex yl:items-center yl:gap-4'>
      <Pill size={PillSize.SMALL} variant={PillVariant.PRIMARY}>
        Small
      </Pill>
      <Pill size={PillSize.MEDIUM} variant={PillVariant.PRIMARY}>
        Medium
      </Pill>
      <Pill size={PillSize.LARGE} variant={PillVariant.PRIMARY}>
        Large
      </Pill>
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div className='yl:flex yl:flex-wrap yl:gap-2'>
      <Pill variant={PillVariant.PRIMARY} size={PillSize.MEDIUM}>
        Primary
      </Pill>
      <Pill variant={PillVariant.SECONDARY} size={PillSize.MEDIUM}>
        Secondary
      </Pill>
      <Pill variant={PillVariant.SUCCESS} size={PillSize.MEDIUM}>
        Success
      </Pill>
      <Pill variant={PillVariant.ERROR} size={PillSize.MEDIUM}>
        Error
      </Pill>
      <Pill variant={PillVariant.WARNING} size={PillSize.MEDIUM}>
        Warning
      </Pill>
      <Pill variant={PillVariant.INDIGO} size={PillSize.MEDIUM}>
        Indigo
      </Pill>
      <Pill variant={PillVariant.PURPLE} size={PillSize.MEDIUM}>
        Purple
      </Pill>
      <Pill variant={PillVariant.PINK} size={PillSize.MEDIUM}>
        Pink
      </Pill>
    </div>
  )
};

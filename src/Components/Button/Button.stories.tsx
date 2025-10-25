import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from ".";
import { ButtonVariantEnum } from "./types";

const meta = {
  title: "Core/Button",
  component: Button,
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

export const WithLeftIcon: Story = {
  args: {
    children: "Button",
    outlined: true,
    icon: {
      iconName: "IconBomb",
      iconPosition: "left"
    }
  }
};

export const WithRightIcon: Story = {
  args: {
    children: "Button",
    icon: {
      iconName: "IconBomb",
      iconPosition: "right"
    }
  }
};

export const WithIconClassName: Story = {
  args: {
    children: "Button",
    icon: {
      iconName: "IconBrain",
      iconPosition: "right",
      iconClassName: "text-violet-800 w-5"
    }
  }
};

export const LoadingWithIcon: Story = {
  args: {
    children: "Button",
    outlined: true,
    isLoading: true,
    className: "button--green",
    icon: {
      iconName: "IconBomb",
      iconPosition: "left"
    }
  }
};

export const Secondary: Story = {
  args: {
    children: "Cancel",
    variant: ButtonVariantEnum.SECONDARY
  }
};

export const SecondaryDisabled: Story = {
  args: {
    children: "Cancel",
    variant: ButtonVariantEnum.SECONDARY,
    disabled: true
  }
};

export const SecondaryWithIcon: Story = {
  args: {
    children: "Cancel",
    variant: ButtonVariantEnum.SECONDARY,
    icon: {
      iconName: "IconAddCircle",
      iconPosition: "left"
    }
  }
};

export const SecondaryLoading: Story = {
  args: {
    children: "Cancel",
    variant: ButtonVariantEnum.SECONDARY,
    isLoading: true
  }
};

export const Primary: Story = {
  args: {
    children: "Submit",
    variant: ButtonVariantEnum.PRIMARY
  }
};

export const Error: Story = {
  args: {
    children: "Delete",
    variant: ButtonVariantEnum.ERROR
  }
};

export const ErrorLoading: Story = {
  args: {
    children: "Delete",
    variant: ButtonVariantEnum.ERROR,
    isLoading: true
  }
};

export const ErrorOutlined: Story = {
  args: {
    children: "Delete",
    variant: ButtonVariantEnum.ERROR,
    outlined: true
  }
};

export const ErrorOutlinedDisabled: Story = {
  args: {
    children: "Delete",
    variant: ButtonVariantEnum.ERROR,
    outlined: true,
    disabled: true
  }
};

export const ErrorOutlinedLoading: Story = {
  args: {
    children: "Delete",
    variant: ButtonVariantEnum.ERROR,
    outlined: true,
    isLoading: true
  }
};

export const ErrorOutlinedWithIcon: Story = {
  args: {
    children: "Delete",
    variant: ButtonVariantEnum.ERROR,
    outlined: true,
    icon: {
      iconName: "IconDeleteBin",
      iconPosition: "left"
    }
  }
};

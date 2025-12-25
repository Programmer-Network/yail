import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from ".";
import { ButtonSizeEnum, ButtonVariantEnum } from "./types";

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
      iconClassName: "yl:text-violet-800 yl:w-5"
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

export const IconOnly: Story = {
  args: {
    icon: {
      iconName: "IconBomb",
      iconPosition: "center"
    }
  }
};

export const IconOnlyDisabled: Story = {
  args: {
    icon: {
      iconName: "IconBomb",
      iconPosition: "center"
    },
    disabled: true
  }
};

export const IconOnlyLoading: Story = {
  args: {
    icon: {
      iconName: "IconBomb",
      iconPosition: "center"
    },
    isLoading: true
  }
};

export const IconOnlyOutlined: Story = {
  args: {
    icon: {
      iconName: "IconBomb",
      iconPosition: "center"
    },
    outlined: true
  }
};

export const IconOnlyPrimary: Story = {
  args: {
    icon: {
      iconName: "IconAddCircle",
      iconPosition: "center"
    },
    variant: ButtonVariantEnum.PRIMARY
  }
};

export const IconOnlySecondary: Story = {
  args: {
    icon: {
      iconName: "IconAddCircle",
      iconPosition: "center"
    },
    variant: ButtonVariantEnum.SECONDARY
  }
};

export const IconOnlyError: Story = {
  args: {
    icon: {
      iconName: "IconDeleteBin",
      iconPosition: "center"
    },
    variant: ButtonVariantEnum.ERROR
  }
};

export const IconOnlyErrorOutlined: Story = {
  args: {
    icon: {
      iconName: "IconDeleteBin",
      iconPosition: "center"
    },
    variant: ButtonVariantEnum.ERROR,
    outlined: true
  }
};

// Size Variants
export const SizeSmall: Story = {
  args: {
    children: "Small Button",
    size: ButtonSizeEnum.SM
  }
};

export const SizeMedium: Story = {
  args: {
    children: "Medium Button",
    size: ButtonSizeEnum.MD
  }
};

export const SizeLarge: Story = {
  args: {
    children: "Large Button",
    size: ButtonSizeEnum.LG
  }
};

export const SizeSmallOutlined: Story = {
  args: {
    children: "Small Outlined",
    size: ButtonSizeEnum.SM,
    outlined: true
  }
};

export const SizeLargeOutlined: Story = {
  args: {
    children: "Large Outlined",
    size: ButtonSizeEnum.LG,
    outlined: true
  }
};

export const SizeSmallWithIcon: Story = {
  args: {
    children: "Small",
    size: ButtonSizeEnum.SM,
    icon: {
      iconName: "IconPlus",
      iconPosition: "left"
    }
  }
};

export const SizeLargeWithIcon: Story = {
  args: {
    children: "Large",
    size: ButtonSizeEnum.LG,
    icon: {
      iconName: "IconPlus",
      iconPosition: "left"
    }
  }
};

export const SizeSmallIconOnly: Story = {
  args: {
    size: ButtonSizeEnum.SM,
    icon: {
      iconName: "IconBomb",
      iconPosition: "center"
    }
  }
};

export const SizeLargeIconOnly: Story = {
  args: {
    size: ButtonSizeEnum.LG,
    icon: {
      iconName: "IconBomb",
      iconPosition: "center"
    }
  }
};

// New Variants (SUCCESS, WARNING)
export const Success: Story = {
  args: {
    children: "Mark Complete",
    variant: ButtonVariantEnum.SUCCESS
  }
};

export const SuccessOutlined: Story = {
  args: {
    children: "Mark Complete",
    variant: ButtonVariantEnum.SUCCESS,
    outlined: true
  }
};

export const SuccessWithIcon: Story = {
  args: {
    children: "Approve",
    variant: ButtonVariantEnum.SUCCESS,
    icon: {
      iconName: "IconCheck",
      iconPosition: "left"
    }
  }
};

export const SuccessLoading: Story = {
  args: {
    children: "Processing",
    variant: ButtonVariantEnum.SUCCESS,
    isLoading: true
  }
};

export const SuccessDisabled: Story = {
  args: {
    children: "Mark Complete",
    variant: ButtonVariantEnum.SUCCESS,
    disabled: true
  }
};

export const Warning: Story = {
  args: {
    children: "Archive",
    variant: ButtonVariantEnum.WARNING
  }
};

export const WarningOutlined: Story = {
  args: {
    children: "Archive",
    variant: ButtonVariantEnum.WARNING,
    outlined: true
  }
};

export const WarningWithIcon: Story = {
  args: {
    children: "Suspend",
    variant: ButtonVariantEnum.WARNING,
    icon: {
      iconName: "IconAlertCircle",
      iconPosition: "left"
    }
  }
};

export const WarningLoading: Story = {
  args: {
    children: "Processing",
    variant: ButtonVariantEnum.WARNING,
    isLoading: true
  }
};

export const WarningDisabled: Story = {
  args: {
    children: "Archive",
    variant: ButtonVariantEnum.WARNING,
    disabled: true
  }
};

// Ghost Variant
export const GhostPrimary: Story = {
  args: {
    children: "Ghost Button",
    variant: ButtonVariantEnum.PRIMARY,
    ghost: true
  }
};

export const GhostSecondary: Story = {
  args: {
    children: "Ghost Button",
    variant: ButtonVariantEnum.SECONDARY,
    ghost: true
  }
};

export const GhostError: Story = {
  args: {
    children: "Ghost Button",
    variant: ButtonVariantEnum.ERROR,
    ghost: true
  }
};

export const GhostSuccess: Story = {
  args: {
    children: "Ghost Button",
    variant: ButtonVariantEnum.SUCCESS,
    ghost: true
  }
};

export const GhostWarning: Story = {
  args: {
    children: "Ghost Button",
    variant: ButtonVariantEnum.WARNING,
    ghost: true
  }
};

export const GhostWithIcon: Story = {
  args: {
    children: "View Details",
    variant: ButtonVariantEnum.PRIMARY,
    ghost: true,
    icon: {
      iconName: "IconEye",
      iconPosition: "left"
    }
  }
};

export const GhostDisabled: Story = {
  args: {
    children: "Ghost Button",
    variant: ButtonVariantEnum.PRIMARY,
    ghost: true,
    disabled: true
  }
};

// Full Width
export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true
  }
};

export const FullWidthOutlined: Story = {
  args: {
    children: "Full Width Outlined",
    outlined: true,
    fullWidth: true
  }
};

export const FullWidthSmall: Story = {
  args: {
    children: "Full Width Small",
    size: ButtonSizeEnum.SM,
    fullWidth: true
  }
};

export const FullWidthLarge: Story = {
  args: {
    children: "Full Width Large",
    size: ButtonSizeEnum.LG,
    fullWidth: true
  }
};

// Combinations
export const SmallSuccessGhost: Story = {
  args: {
    children: "Small Success Ghost",
    size: ButtonSizeEnum.SM,
    variant: ButtonVariantEnum.SUCCESS,
    ghost: true
  }
};

export const LargeWarningOutlined: Story = {
  args: {
    children: "Large Warning Outlined",
    size: ButtonSizeEnum.LG,
    variant: ButtonVariantEnum.WARNING,
    outlined: true
  }
};

export const SmallGhostWithIcon: Story = {
  args: {
    children: "Small Ghost",
    size: ButtonSizeEnum.SM,
    variant: ButtonVariantEnum.SECONDARY,
    ghost: true,
    icon: {
      iconName: "IconSettings",
      iconPosition: "left"
    }
  }
};

export const LargeFullWidthSuccess: Story = {
  args: {
    children: "Complete Action",
    size: ButtonSizeEnum.LG,
    variant: ButtonVariantEnum.SUCCESS,
    fullWidth: true,
    icon: {
      iconName: "IconCheck",
      iconPosition: "left"
    }
  }
};

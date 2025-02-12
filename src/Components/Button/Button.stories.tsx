import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["filled", "outlined", "text"],
      description: "The visual style variant of the button",
      defaultValue: "filled",
      table: {
        defaultValue: { summary: "filled" }
      }
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      defaultValue: false
    },
    isLoading: {
      control: "boolean",
      description: "Whether to show a loading spinner",
      defaultValue: false
    },
    icon: {
      description: "Icon configuration object",
      control: "object"
    },
    className: {
      description: "Additional CSS classes to apply",
      control: "text"
    },
    onClick: {
      description: "Click handler function",
      action: "clicked"
    }
  },
  parameters: {
    docs: {
      description: {
        component:
          "A versatile button component supporting different variants, states, and icon configurations."
      }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Filled Variant
export const Filled: Story = {
  args: {
    children: "Button",
    variant: "filled"
  },
  parameters: {
    docs: {
      description: {
        story: "Default filled variant with primary color"
      }
    }
  }
};

export const FilledDisabled: Story = {
  args: {
    children: "Button",
    variant: "filled",
    disabled: true
  }
};

export const FilledLoading: Story = {
  args: {
    children: "Button",
    variant: "filled",
    isLoading: true
  }
};

export const FilledWithLeftIcon: Story = {
  args: {
    children: "Button",
    variant: "filled",
    icon: {
      iconName: "IconBomb",
      iconPosition: "left"
    }
  }
};

export const FilledWithRightIcon: Story = {
  args: {
    children: "Button",
    variant: "filled",
    icon: {
      iconName: "IconBomb",
      iconPosition: "right"
    }
  }
};

// Outlined Variant
export const Outlined: Story = {
  args: {
    children: "Button",
    variant: "outlined"
  },
  parameters: {
    docs: {
      description: {
        story: "Outlined variant with transparent background"
      }
    }
  }
};

export const OutlinedDisabled: Story = {
  args: {
    children: "Button",
    variant: "outlined",
    disabled: true
  }
};

export const OutlinedLoading: Story = {
  args: {
    children: "Button",
    variant: "outlined",
    isLoading: true
  }
};

export const OutlinedWithLeftIcon: Story = {
  args: {
    children: "Button",
    variant: "outlined",
    icon: {
      iconName: "IconBomb",
      iconPosition: "left"
    }
  }
};

export const OutlinedWithRightIcon: Story = {
  args: {
    children: "Button",
    variant: "outlined",
    icon: {
      iconName: "IconBomb",
      iconPosition: "right"
    }
  }
};

// Text Variant
export const Text: Story = {
  args: {
    children: "Button",
    variant: "text"
  },
  parameters: {
    docs: {
      description: {
        story: "Text variant with no background or border"
      }
    }
  }
};

export const TextDisabled: Story = {
  args: {
    children: "Button",
    variant: "text",
    disabled: true
  }
};

export const TextLoading: Story = {
  args: {
    children: "Button",
    variant: "text",
    isLoading: true
  }
};

export const TextWithLeftIcon: Story = {
  args: {
    children: "Button",
    variant: "text",
    icon: {
      iconName: "IconBomb",
      iconPosition: "left"
    }
  }
};

export const TextWithRightIcon: Story = {
  args: {
    children: "Button",
    variant: "text",
    icon: {
      iconName: "IconBomb",
      iconPosition: "right"
    }
  }
};

// Special Variants
export const WithCustomIcon: Story = {
  args: {
    children: "Button",
    icon: {
      iconName: "IconBrain",
      iconPosition: "right",
      iconClassName: "text-violet-800 yl-w-5"
    }
  }
};

export const LoadingWithIcon: Story = {
  args: {
    children: "Button",
    isLoading: true,
    icon: {
      iconName: "IconBomb",
      iconPosition: "left"
    }
  }
};

// Color Variations
export const Red: Story = {
  args: {
    children: "Red Button",
    className: "button--red"
  },
  parameters: {
    docs: {
      description: {
        story: "A red themed button using the button--red class"
      }
    }
  }
};

export const Green: Story = {
  args: {
    children: "Green Button",
    className: "button--green"
  },
  parameters: {
    docs: {
      description: {
        story: "A green themed button using the button--green class"
      }
    }
  }
};

export const Gray: Story = {
  args: {
    children: "Gray Button",
    className: "button--gray"
  },
  parameters: {
    docs: {
      description: {
        story: "A gray themed button using the button--gray class"
      }
    }
  }
};

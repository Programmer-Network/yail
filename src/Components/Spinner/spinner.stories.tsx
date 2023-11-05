import type { Meta, StoryObj } from '@storybook/react';

import Spinner from './';

const meta = {
  title: 'Core/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithClassName: Story = {
  args: {
    className: 'w-24 text-primary',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Input from './';

const meta = {
  title: 'Input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'username',
    label: 'Username',
    type: 'text',
    value: 'John Doe',
    max: 10,
  },
};

import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import Select from './';
import { ISelectProps } from './types';

export default {
  title: 'Input/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export const SingleSelect = (args: ISelectProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <Select
      {...args}
      value={value}
      onChange={(value: string) => {
        action('onChange')(value);
        setValue(value);
      }}
    />
  );
};

SingleSelect.args = {
  name: 'single-select',
  onChange: action('onChange'),
  options: [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
    { value: 'baz', label: 'Baz' },
  ],
  value: 'foo',
};

export const MultiSelect = (args: ISelectProps) => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Select
      {...args}
      value={value}
      onChange={(values: string[]) => {
        action('onChange')(values);
        setValue(values);
      }}
    />
  );
};

MultiSelect.args = {
  name: 'multi-select',
  isMulti: true,
  options: [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
    { value: 'baz', label: 'Baz' },
  ],
};

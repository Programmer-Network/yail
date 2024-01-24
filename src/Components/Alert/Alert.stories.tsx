import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import { useState } from "react";

import { Alert } from ".";

const meta = {
  title: "Core / Alert",
  component: Alert,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Alert>;

export default meta;

export const Success = () => {
  return (
    <Alert type='success'>
      <span className='font-bold'>Lorem ipsum dolor</span> sit amet, consectetur
      adipisicing elit. Doloremque sed numquam iste fugiat odit accusamus culpa,
      recusandae ea nemo quo!
    </Alert>
  );
};

export const Error = () => {
  return (
    <Alert type='error'>
      <span className='font-bold'>Lorem ipsum dolor</span> sit amet, consectetur
      adipisicing elit. Doloremque sed numquam iste fugiat odit accusamus culpa,
      recusandae ea nemo quo!
    </Alert>
  );
};

export const Warning = () => {
  return (
    <Alert type='warning'>
      <span className='font-bold'>Lorem ipsum dolor</span> sit amet, consectetur
      adipisicing elit. Doloremque sed numquam iste fugiat odit accusamus culpa,
      recusandae ea nemo quo!
    </Alert>
  );
};

export const Info = () => {
  return (
    <Alert type='info'>
      <span className='font-bold'>Lorem ipsum dolor</span> sit amet, consectetur
      adipisicing elit. Doloremque sed numquam iste fugiat odit accusamus culpa,
      recusandae ea nemo quo!
    </Alert>
  );
};

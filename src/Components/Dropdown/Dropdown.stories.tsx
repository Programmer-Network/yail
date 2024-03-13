import { Meta, StoryFn } from "@storybook/react";

import { IconShare } from "Components/Icons";

import Dropdown from "./";
import { IDropdownProps } from "./types";

const DropdownStories: Meta<IDropdownProps> = {
  title: "Components/Dropdown",
  parameters: {
    layout: "centered"
  },
  component: Dropdown
};

const Template: StoryFn<IDropdownProps> = args => <Dropdown {...args} />;

export const DefaultDropdown: Meta<IDropdownProps> = Template.bind({});
DefaultDropdown.args = {
  buttonContent: "Click Me",
  options: [
    {
      value: "foo",
      onClick: () => console.log("clicked"),
      icon: <IconShare className='w-4' />
    }
  ]
};

export const WithChildren: Meta<IDropdownProps> = Template.bind({});
WithChildren.args = {
  buttonContent: "Click Me",
  children: (
    <ul className='p-2 text-primary-text-color'>
      <li className='p-2 text-primary-text-color hover:cursor-pointer hover:bg-primary hover:text-primary-background-color'>
        Option 1
      </li>
      <li className='p-2 text-primary-text-color hover:cursor-pointer hover:bg-primary hover:text-primary-background-color'>
        Option 2
      </li>
      <li className='p-2 text-primary-text-color hover:cursor-pointer hover:bg-primary hover:text-primary-background-color'>
        Option 3
      </li>
    </ul>
  )
};

export const WithLongContent: Meta<IDropdownProps> = Template.bind({});
WithLongContent.args = {
  buttonContent: "More Options",
  children: (
    <div className='p-2 text-primary-text-color'>
      <ul>
        <li className='p-2 text-primary-text-color hover:cursor-pointer hover:bg-primary hover:text-primary-background-color'>
          Extended Option 1
        </li>
        <li className='p-2 text-primary-text-color hover:cursor-pointer hover:bg-primary hover:text-primary-background-color'>
          Extended Option 2
        </li>
      </ul>
    </div>
  )
};

export default DropdownStories;

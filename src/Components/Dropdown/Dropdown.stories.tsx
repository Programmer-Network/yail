import { Meta, StoryFn } from "@storybook/react-vite";

import Dropdown from "./";
import { IDropdownProps } from "./types";

const DropdownStories: Meta<IDropdownProps> = {
  title: "Components/Dropdown",
  component: Dropdown
};

const Template: StoryFn<IDropdownProps> = args => <Dropdown {...args} />;

export const DefaultDropdown: Meta<IDropdownProps> = Template.bind({});
DefaultDropdown.args = {
  buttonContent: "Click Me",
  placement: "left",
  options: [
    {
      value: "foo",
      onClick: () => console.log("clicked"),
      icon: {
        iconName: "IconShare",
        className: "w-4"
      }
    }
  ]
};

export const WithChildren: Meta<IDropdownProps> = Template.bind({});
WithChildren.args = {
  buttonContent: "Click Me",
  children: (
    <ul className='text-text p-2'>
      <li className='text-text hover:bg-primary hover:text-background p-2 hover:cursor-pointer'>
        Option 1
      </li>
      <li className='text-text hover:bg-primary hover:text-background p-2 hover:cursor-pointer'>
        Option 2
      </li>
      <li className='text-text hover:bg-primary hover:text-background p-2 hover:cursor-pointer'>
        Option 3
      </li>
    </ul>
  )
};

export const WithLongContent: Meta<IDropdownProps> = Template.bind({});
WithLongContent.args = {
  buttonContent: "More Options",
  children: (
    <div className='text-text p-2'>
      <ul>
        <li className='text-text hover:bg-primary hover:text-background p-2 hover:cursor-pointer'>
          Extended Option 1
        </li>
        <li className='text-text hover:bg-primary hover:text-background p-2 hover:cursor-pointer'>
          Extended Option 2
        </li>
      </ul>
    </div>
  )
};

export default DropdownStories;

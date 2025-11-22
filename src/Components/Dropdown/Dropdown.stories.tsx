import { Meta, StoryFn } from "@storybook/react-vite";

import { Dropdown } from "./";
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
    <ul className='yl:text-text yl:p-2'>
      <li className='yl:text-text yl:hover:bg-primary yl:hover:text-background yl:p-2 yl:hover:cursor-pointer'>
        Option 1
      </li>
      <li className='yl:text-text yl:hover:bg-primary yl:hover:text-background yl:p-2 yl:hover:cursor-pointer'>
        Option 2
      </li>
      <li className='yl:text-text yl:hover:bg-primary yl:hover:text-background yl:p-2 yl:hover:cursor-pointer'>
        Option 3
      </li>
    </ul>
  )
};

export const WithLongContent: Meta<IDropdownProps> = Template.bind({});
WithLongContent.args = {
  buttonContent: "More Options",
  children: (
    <div className='yl:text-text yl:p-2'>
      <ul>
        <li className='yl:text-text yl:hover:bg-primary yl:hover:text-background yl:p-2 yl:hover:cursor-pointer'>
          Extended Option 1
        </li>
        <li className='yl:text-text yl:hover:bg-primary yl:hover:text-background yl:p-2 yl:hover:cursor-pointer'>
          Extended Option 2
        </li>
      </ul>
    </div>
  )
};

export default DropdownStories;

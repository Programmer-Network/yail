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
        className: "yl:w-4"
      }
    }
  ]
};

export const WithChildren: Meta<IDropdownProps> = Template.bind({});
WithChildren.args = {
  buttonContent: "Click Me",
  children: (
    <ul className='yl:p-2 yl:text-text'>
      <li className='yl:p-2 yl:text-text yl:hover:cursor-pointer yl:hover:bg-primary yl:hover:text-background'>
        Option 1
      </li>
      <li className='yl:p-2 yl:text-text yl:hover:cursor-pointer yl:hover:bg-primary yl:hover:text-background'>
        Option 2
      </li>
      <li className='yl:p-2 yl:text-text yl:hover:cursor-pointer yl:hover:bg-primary yl:hover:text-background'>
        Option 3
      </li>
    </ul>
  )
};

export const WithLongContent: Meta<IDropdownProps> = Template.bind({});
WithLongContent.args = {
  buttonContent: "More Options",
  children: (
    <div className='yl:p-2 yl:text-text'>
      <ul>
        <li className='yl:p-2 yl:text-text yl:hover:cursor-pointer yl:hover:bg-primary yl:hover:text-background'>
          Extended Option 1
        </li>
        <li className='yl:p-2 yl:text-text yl:hover:cursor-pointer yl:hover:bg-primary yl:hover:text-background'>
          Extended Option 2
        </li>
      </ul>
    </div>
  )
};

export default DropdownStories;

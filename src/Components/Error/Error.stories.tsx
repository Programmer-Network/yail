import { action } from "@storybook/addon-actions";

import { IconQuestionMark } from "Components/Icons";

import Error from ".";

export default {
  title: "Components/Error",
  component: Error,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export const BasicError = () => (
  <Error
    error='404'
    title='Page Not Found'
    description="The page you are looking for doesn't exist."
  />
);

export const ErrorWithBackButton = () => (
  <Error
    error='403'
    title='Access Denied'
    description='You do not have permission to view this page.'
    backToText='Go Back'
    onBackToClick={() => action("Back to home clicked")()}
  />
);

export const ErrorWithCustomIcon = () => (
  <Error
    error='500'
    title='Server Error'
    description='Oops! Something went wrong on our end.'
    Icon={IconQuestionMark}
    IconProps={{ className: "text-red-500 w-36 text-indigo-500" }}
    onIconClick={() => action("Icon clicked")()}
  />
);

export const FullyCustomizedError = () => (
  <Error
    error='Maintenance'
    title='Under Maintenance'
    description='Our site is currently undergoing scheduled maintenance.'
    backToText='Home'
    onBackToClick={() => action("Back to home clicked")()}
    Icon={IconQuestionMark}
    IconProps={{ className: "text-green-500" }}
    onIconClick={() => action("Icon clicked")()}
    className='bg-gray-100 text-center'
  />
);

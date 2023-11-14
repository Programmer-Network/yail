import { Meta, Story } from "@storybook/react";

import ImageCrop from "./";
import { IImageCropProps } from "./types";

export default {
  title: "Components/ImageCrop",
  component: ImageCrop
} as Meta;

const Template: Story<IImageCropProps> = args => <ImageCrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://raw.githubusercontent.com/Programmer-Network/yail/master/assets/images/logo.png",
  width: 150,
  height: 150,
  unit: "%",
  circularCrop: false,
  x: 50,
  y: 50,
  aspect: 1,
  cropAreaClassName: "custom-crop-area-class"
};

export const CircularCrop = Template.bind({});
CircularCrop.args = {
  ...Default.args,
  circularCrop: true
};

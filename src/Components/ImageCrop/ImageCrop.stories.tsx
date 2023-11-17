import { Meta, Story } from "@storybook/react";

import image from "../../../assets/images/image-crop.png";
import ImageCrop from "./";
import { IImageCropProps } from "./types";

export default {
  title: "Components/ImageCrop",
  component: ImageCrop
} as Meta;

const Template: Story<IImageCropProps> = args => <ImageCrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: image,
  crop: {
    width: 150,
    height: 150,
    unit: "px",
    x: 0,
    y: 0
  },
  circularCrop: false,
  aspect: 1,
  cropAreaClassName: "custom-crop-area-class",
  locked: false,
  setCrop: () => {}
};

export const CircularCrop = Template.bind({});
CircularCrop.args = {
  ...Default.args,
  circularCrop: true,
  locked: false
};

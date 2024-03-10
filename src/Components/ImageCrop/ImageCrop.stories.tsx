import { Meta } from "@storybook/react";
import { useState } from "react";
import { Crop } from "react-image-crop";

import image from "../../../assets/images/image-crop.png";
import ImageCrop from "./";
import { IImageCropProps } from "./types";

const ImageCropStories: Meta<IImageCropProps> = {
  title: "Components/ImageCrop",
  component: ImageCrop
};

export const Default = () => {
  const [crop, setCrop] = useState<Crop>({
    width: 150,
    height: 150,
    unit: "px",
    x: 0,
    y: 0
  });
  return (
    <ImageCrop
      src={image}
      crop={crop}
      circularCrop={false}
      aspect={1}
      locked={false}
      setCrop={setCrop}
    />
  );
};

export default ImageCropStories;

import { Meta } from "@storybook/react";
import { useEffect, useState } from "react";
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
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(image);
        const blob = await response.blob();
        setImageBlob(blob);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className='yl:max-w-[500px]'>
      <ImageCrop
        src={imageBlob}
        crop={crop}
        circularCrop={false}
        aspect={1}
        locked={false}
        setCrop={setCrop}
      />
    </div>
  );
};

export default ImageCropStories;

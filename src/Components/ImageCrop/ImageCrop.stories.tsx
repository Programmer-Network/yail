import { Meta } from "@storybook/react";
import { useEffect, useState } from "react";

import image from "../../../assets/images/image-crop.png";
import ImageCrop from "./";
import { IImageCropProps } from "./types";

const ImageCropStories: Meta<IImageCropProps> = {
  title: "Components/ImageCrop",
  component: ImageCrop
};

export const Default = () => {
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
        circularCrop={false}
        aspect={1}
        locked={false}
      />
    </div>
  );
};

export default ImageCropStories;

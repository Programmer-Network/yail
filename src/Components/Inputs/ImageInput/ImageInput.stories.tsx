import { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";

import { ImageInput } from ".";
import { ImageUtils } from "../../../Utils";
import { ImageCrop } from "../../ImageCrop";
import { IImageInputProps, IOnFileLoadedArgs } from "./types";

const ImageInputStories: Meta<IImageInputProps> = {
  title: "Input/ImageInput",
  component: ImageInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component for selecting an image file. It supports compression and validation. It returns the image as a base64 string and as a blob."
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    onFileLoaded: { action: "File Loaded" },
    onValidationError: { action: "Validation Error" }
  }
};

const Template: StoryFn<IImageInputProps> = args => <ImageInput {...args} />;

export const Default: Meta<IImageInputProps> = Template.bind({});
Default.args = {
  accept: "image/*",
  className: "",
  maxFileSize: 5000000,
  allowedMimeTypes: ["image/jpeg", "image/png"],
  compression: { enabled: false },
  label: "Select an image"
};

export const WithCompression: Meta<IImageInputProps> = Template.bind({});
WithCompression.args = {
  ...Default.args,
  compression: { enabled: true, maxWidth: 800, quality: 0.8 }
};

export const WithError: Meta<IImageInputProps> = Template.bind({});
WithError.args = {
  ...Default.args,
  error: "An error occurred"
};

export const WithImageCrop = () => {
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [croppedImage, setCroppedImage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const args = {
    accept: "image/*",
    className: "",
    maxFileSize: 5000000,
    allowedMimeTypes: ["image/jpeg", "image/png"],
    compression: { enabled: true },
    label: "Select an image",
    onFileLoaded: (file: IOnFileLoadedArgs) => {
      setImageBlob(file.file.blob);
    }
  };

  const handleCropComplete = async (croppedImage: Blob) => {
    const compressedImage = (await ImageUtils.compress(croppedImage as File, {
      maxWidth: 200,
      quality: 0.7
    })) as string;

    setCroppedImage(compressedImage);
  };

  return (
    <div>
      <div className='flex items-start gap-2'>
        {imageBlob && (
          <ImageCrop
            src={imageBlob}
            onComplete={handleCropComplete}
            locked={false}
          />
        )}
        {croppedImage && (
          <div className='relative h-[150px] w-[150px]'>
            <img
              className='absolute h-full w-full bg-left-top object-cover'
              src={croppedImage}
            />
          </div>
        )}
      </div>

      <ImageInput
        {...args}
        onValidationError={({ message }) => setError(message)}
        error={error}
      />
    </div>
  );
};

export default ImageInputStories;

import { FC, useState } from "react";

import { IconUpload } from "Components/Icons";
import ImageInput from "Components/ImageInput";
import {
  IOnFileLoadedArgs,
  TValidationError
} from "Components/ImageInput/types";
import { Paragraph } from "Components/Typography";

const ImageUpload: FC<{
  id?: string;
  label?: string;
  onFileLoaded: (data: IOnFileLoadedArgs) => void;
  onValidationError?: (error: TValidationError) => void;
}> = ({
  id = "dropzone-file",
  onFileLoaded,
  label = "Click to upload",
  onValidationError
}) => {
  const [imageValidationError, setImageValidationError] = useState<string>("");

  return (
    <div className='flex w-full items-center justify-center'>
      <label
        htmlFor={id}
        className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary bg-primary-background-color'
      >
        <div className='flex flex-col items-center justify-center px-24 pb-6 pt-5'>
          <IconUpload className='mb-3 h-10 w-10 text-primary' />
          <Paragraph className='!mb-0'>
            <span className='font-semibold'>{label}</span>
          </Paragraph>
          <Paragraph>PNG, JPG</Paragraph>
        </div>
        <ImageInput
          id={id}
          label='Or select a file'
          maxFileSize={5 * 1024 * 1024}
          allowedMimeTypes={["image/png", "image/jpeg"]}
          className='hidden'
          accept='.png, .jpg'
          onFileLoaded={onFileLoaded}
          onValidationError={error => {
            setImageValidationError(error.message);
            onValidationError?.(error);
          }}
          compression={{ enabled: true }}
          error={imageValidationError}
        />
      </label>
    </div>
  );
};

export default ImageUpload;

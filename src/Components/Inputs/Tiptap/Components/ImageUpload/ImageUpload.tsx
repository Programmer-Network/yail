import { FC, useState } from "react";

import Icon from "../../../../Icon";
import { H4, Paragraph } from "../../../../Typography";
import InputError from "../../../Common/InputError";
import ImageInput from "../../../ImageInput";
import { IOnFileLoadedArgs, TValidationError } from "../../../ImageInput/types";

const ImageUpload: FC<{
  id?: string;
  label?: string;
  onFileLoaded: (data: IOnFileLoadedArgs) => void;
  onValidationError?: (error: TValidationError) => void;
}> = ({ id, onFileLoaded, label = "Click to upload", onValidationError }) => {
  const [imageValidationError, setImageValidationError] = useState<string>("");

  return (
    <div>
      <label
        htmlFor={id}
        className='flex cursor-pointer flex-col items-center justify-center py-12'
      >
        <div className='flex flex-col items-center justify-center'>
          <Icon iconName='IconUpload' className='text-primary mb-2 w-20' />
          <H4 className='text-text! mb-0!'>{label}</H4>
          <Paragraph>png, jpg</Paragraph>
        </div>
        <div className='mt-4 hidden'>
          <ImageInput
            id={id}
            label='Or select a file'
            maxFileSize={5 * 1024 * 1024}
            allowedMimeTypes={["image/png", "image/jpeg"]}
            accept='.png, .jpg'
            onFileLoaded={onFileLoaded}
            onValidationError={error => {
              setImageValidationError(error.message);
              onValidationError?.(error);
            }}
            compression={{ enabled: true }}
            error={imageValidationError}
          />
        </div>

        {imageValidationError && <InputError error={imageValidationError} />}
      </label>
    </div>
  );
};

export default ImageUpload;

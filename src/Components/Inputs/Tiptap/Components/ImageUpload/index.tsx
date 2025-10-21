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
        className='yl:flex yl:cursor-pointer yl:flex-col yl:items-center yl:justify-center yl:py-12'
      >
        <div className='yl:flex yl:flex-col yl:items-center yl:justify-center'>
          <Icon
            iconName='IconUpload'
            className='yl:mb-2 yl:w-20 yl:text-primary'
          />
          <H4 className='yl:mb-0! yl:text-text!'>{label}</H4>
          <Paragraph>png, jpg</Paragraph>
        </div>
        <div className='yl:hidden yl:mt-4'>
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

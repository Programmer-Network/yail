import { ImageUtils } from "Utils";
import classNames from "classnames";
import { FC } from "react";

import { InputError, InputHeader } from "Components/Inputs";

import { IImageInputProps } from "./types";

const ImageInput: FC<IImageInputProps> = ({
  id,
  accept,
  onChange,
  className,
  maxFileSize,
  onFileLoaded,
  allowedMimeTypes,
  onValidationError,
  compression,
  inputWrapperClassName,
  hint,
  label,
  error
}) => {
  const handleSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const [file] = e.target.files;
    const { name: fileName, type: mimeType } = file;
    const { imageValidationError, isValidImage } = await ImageUtils.validate(
      file,
      maxFileSize,
      allowedMimeTypes
    );

    if (!isValidImage) {
      onValidationError?.(imageValidationError);

      onChange({ file: null, error: imageValidationError });
      return;
    }

    onFileLoaded({
      file: { blob: file, fileName, mimeType },
      base64: !compression?.enabled
        ? await readFileAsDataURL(file)
        : await ImageUtils.compress(file, compression),
      fileName,
      mimeType
    });
  };

  const readFileAsDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read file."));
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className={classNames(inputWrapperClassName)}>
      {(hint || label) && <InputHeader hint={hint} label={label} />}
      <label className='flex justify-center'>
        <input
          id={id}
          type='file'
          accept={accept}
          onChange={handleSelect}
          className={classNames(
            "file:mr-5 file:rounded-full file:border-0 file:bg-primary file:px-6 file:py-2 file:text-sm file:font-medium file:text-primary-background-color hover:file:cursor-pointer hover:file:bg-primary hover:file:text-primary-background-color",
            className
          )}
        />
      </label>
      {error && <InputError error={error} className='mt-4 text-center' />}
    </div>
  );
};

export default ImageInput;

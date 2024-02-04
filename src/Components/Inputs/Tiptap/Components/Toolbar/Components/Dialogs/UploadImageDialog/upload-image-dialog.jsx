import { ImageInput } from "@Components/Core/Inputs/ImageInput";
import { IconUpload, Paragraph } from "@programmer_network/yail";

export const UploadImageDialog = ({
  id = "dropzone-file",
  onImageSelected = () => null,
  label = "Click to upload"
}) => {
  return (
    <div className='flex w-full items-center justify-center'>
      <label
        htmlFor={id}
        className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-primary-text-color bg-primary-background-color'
      >
        <div className='flex flex-col items-center justify-center px-24 pb-6 pt-5'>
          <IconUpload className='mb-3 h-10 w-10 text-primary-text-color' />
          <Paragraph>
            <span className='font-semibold'>{label}</span>
          </Paragraph>
          <Paragraph>PNG, JPG</Paragraph>
        </div>
        <ImageInput
          id={id}
          className='hidden'
          type='file'
          accept='.png, .jpg'
          onChange={() => null}
          onFileLoaded={onImageSelected}
          compression={{ enabled: true }}
        />
      </label>
    </div>
  );
};

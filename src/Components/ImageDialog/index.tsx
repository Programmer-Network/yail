/**
 * When an action is triggered, open a dialog with image crop.
 */
import classNames from "classnames";
import { forwardRef, useState } from "react";

import Button from "Components/Button";
import Dialog from "Components/Dialog";
import ImageCrop from "Components/ImageCrop";
import { ICrop } from "Components/ImageCrop/types";
import { ImageInput } from "Components/Inputs";
import {
  IOnFileLoadedArgs,
  TValidationError
} from "Components/Inputs/ImageInput/types";

import { IImageDialogProps } from "./types";

const ImageDialog = forwardRef<HTMLDialogElement, IImageDialogProps>(
  (
    { className, isOpen, onClose, onOpen, onSave, aspect = 1 },
    forwardedRef
  ) => {
    const [validationError, setValidationError] =
      useState<TValidationError | null>(null);
    const [imageInputSelection, setImageInputSelection] =
      useState<IOnFileLoadedArgs | null>(null);
    const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
    const [crop, setCrop] = useState<ICrop>({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      unit: "%" as const
    });

    return (
      <div className='yl-w-full yl-h-full'>
        <Dialog
          shouldCloseOnClickOutside={false}
          ref={forwardedRef}
          className={classNames(className, "yl-w-[500px] yl-overflow-hidden")}
          isOpen={isOpen}
          onClose={onClose}
        >
          <div className='yl-relative yl-w-full yl-overflow-hidden yl-flex yl-items-center yl-justify-center'>
            <ImageCrop
              aspect={aspect}
              src={imageInputSelection?.file.blob ?? null}
              setCrop={setCrop}
              onComplete={blob => {
                setCroppedImage(blob);
              }}
              crop={crop}
            />
          </div>

          <div className='yl-absolute yl-bottom-3 yl-left-3 yl-right-3 yl-top-auto !yl-p-4'>
            <div className='yl-flex yl-gap-2'>
              <Button
                type='button'
                className='yl-flex-1'
                onClick={async () => {
                  try {
                    if (!croppedImage) {
                      return;
                    }

                    await onSave?.(croppedImage);
                    setImageInputSelection(null);
                    setCroppedImage(null);
                    setCrop({
                      x: 0,
                      y: 0,
                      width: 100,
                      height: 100,
                      unit: "%" as const
                    });

                    onClose?.();
                  } catch (error) {
                    console.error(error);
                  }
                }}
                // isLoading={isUploadingImage}
                // disabled={isUploadingImage}
              >
                Set new profile picture
              </Button>
              <Button
                outlined
                type='button'
                onClick={() => {
                  setImageInputSelection(null);
                  setCroppedImage(null);
                  setCrop({
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100,
                    unit: "%" as const
                  });
                  onClose?.();
                }}
                icon={{
                  iconName: "IconClose",
                  iconClassName: "yl-size-6",
                  iconPosition: "right"
                }}
              />
            </div>
          </div>
        </Dialog>

        <ImageInput
          onFileLoaded={data => {
            setValidationError(null);
            setImageInputSelection(data);
            onOpen?.();
          }}
          onValidationError={error => {
            setValidationError(error);
          }}
          error={validationError?.message}
          label='Select an image'
          accept='image/*'
          maxFileSize={1024 * 1024 * 0.5} // 500KB
          allowedMimeTypes={["image/jpeg", "image/png", "image/gif"]}
          compression={{ enabled: true, quality: 0.8 }}
        />
      </div>
    );
  }
);

ImageDialog.displayName = "ImageDialog";

export default ImageDialog;

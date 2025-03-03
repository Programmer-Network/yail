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
    { className, isOpen, onClose, onOpen, onSave, aspect = 1, buttonText },
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
      <div className='yl:w-full yl:h-full'>
        <Dialog
          shouldCloseOnClickOutside={false}
          ref={forwardedRef}
          className={classNames(
            className,
            "yl:w-[500px] yl:overflow-hidden yl:p-2"
          )}
          isOpen={isOpen}
          onClose={onClose}
        >
          {imageInputSelection?.file.blob && (
            <div className=' yl:flex yl:flex-col'>
              <div className='yl:relative yl:w-full yl:overflow-hidden yl:flex yl:items-center yl:justify-center'>
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
              <div className='yl:mt-4'>
                <div className='yl:flex yl:gap-2'>
                  <Button
                    type='button'
                    className='yl:flex-1'
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
                    icon={{
                      iconName: "IconImage",
                      iconClassName: "yl:size-6",
                      iconPosition: "left"
                    }}
                    // isLoading={isUploadingImage}
                    // disabled={isUploadingImage}
                  >
                    {buttonText}
                  </Button>
                  <Button
                    outlined
                    type='button'
                    className='yl:text-secondary yl:fill-secondary yl:border-secondary yl:hover:bg-secondary/5 yl:hover:text-secondary yl:hover:fill-secondary yl:hover:border-secondary'
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
                      iconClassName: "yl:size-5",
                      iconPosition: "left"
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
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
          // maxFileSize={1024 * 1024 * 0.5} // 500KB
          allowedMimeTypes={["image/jpeg", "image/png", "image/gif"]}
          compression={{ enabled: true, quality: 0.8 }}
        />
      </div>
    );
  }
);

ImageDialog.displayName = "ImageDialog";

export default ImageDialog;

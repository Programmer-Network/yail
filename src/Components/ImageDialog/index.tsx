/**
 * When an action is triggered, open a dialog with image crop.
 */
import classNames from "classnames";
import { forwardRef, useState } from "react";

import Button from "Components/Button";
import Dialog from "Components/Dialog";
import ImageCrop from "Components/ImageCrop";
import { ImageInput } from "Components/Inputs";
import {
  IOnFileLoadedArgs,
  TValidationError
} from "Components/Inputs/ImageInput/types";

import ImageUtils from "Utils/Image";

import { IImageDialogProps } from "./types";

const ImageDialog = forwardRef<HTMLDialogElement, IImageDialogProps>(
  (
    {
      className,
      isOpen,
      onClose,
      onOpen,
      onSave,
      cropOptions = {
        aspect: 1,
        circularCrop: false
      },
      buttonText
    },
    forwardedRef
  ) => {
    const [validationError, setValidationError] =
      useState<TValidationError | null>(null);
    const [imageInputSelection, setImageInputSelection] =
      useState<IOnFileLoadedArgs | null>(null);
    const [croppedImage, setCroppedImage] = useState<Blob | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = async () => {
      try {
        if (!croppedImage) {
          return;
        }

        setIsSaving(true);
        await onSave?.({
          blob: croppedImage,
          base64: await ImageUtils.blobToBase64(croppedImage),
          formData: ImageUtils.blobToFormData(
            croppedImage,
            imageInputSelection?.file.fileName ?? "",
            imageInputSelection?.file.mimeType ?? ""
          )
        });

        setImageInputSelection(null);
        setCroppedImage(null);

        onClose?.();
      } catch (error: unknown) {
        onClose?.();
        setValidationError({
          message:
            error instanceof Error ? error.message : "Failed to save image",
          reason: "IMAGE_SAVE_FAILED"
        });
      } finally {
        setIsSaving(false);
      }
    };

    return (
      <div className='yl:w-full yl:h-full'>
        <Dialog
          shouldCloseOnClickOutside={false}
          ref={forwardedRef}
          className={classNames(className)}
          isOpen={isOpen}
          onClose={onClose}
        >
          {imageInputSelection?.file.blob && (
            <div>
              <div className='yl:relative yl:w-full yl:overflow-hidden'>
                <ImageCrop
                  aspect={cropOptions.aspect}
                  circularCrop={cropOptions.circularCrop}
                  src={imageInputSelection?.file.blob ?? null}
                  onComplete={blob => {
                    setCroppedImage(blob);
                  }}
                />
              </div>
              <div className='yl:mt-4'>
                <div className='yl:flex yl:gap-2'>
                  <Button
                    type='button'
                    className='yl:flex-1 yl:cursor-pointer'
                    onClick={handleSave}
                    icon={{
                      iconName: "IconImage",
                      iconClassName: "yl:size-6",
                      iconPosition: "left"
                    }}
                    isLoading={isSaving}
                    disabled={isSaving}
                  >
                    {buttonText}
                  </Button>
                  <Button
                    outlined
                    disabled={isSaving}
                    type='button'
                    className='yl:text-secondary yl:fill-secondary yl:border-secondary yl:hover:bg-secondary/5 yl:hover:text-secondary yl:hover:fill-secondary yl:hover:border-secondary yl:cursor-pointer'
                    onClick={() => {
                      setImageInputSelection(null);
                      setCroppedImage(null);
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

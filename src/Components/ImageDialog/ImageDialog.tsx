/**
 * When an action is triggered, open a dialog with image crop.
 */
import classNames from "classnames";
import { forwardRef, useState } from "react";

import { ImageUtils } from "../../Utils/Image";
import { Button } from "../Button";
import { Dialog } from "../Dialog";
import { ImageCrop } from "../ImageCrop";
import { ImageInput } from "../Inputs";
import {
  IOnFileLoadedArgs,
  TValidationError
} from "../Inputs/ImageInput/types";
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
      buttonText,
      compression = { enabled: true, quality: 0.8 },
      maxFileSize = 1024 * 1024 * 0.5,
      allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"],
      inputLabel = "Select an image"
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
      <div className='h-full w-full'>
        <Dialog
          shouldCloseOnClickOutside={false}
          ref={forwardedRef}
          className={classNames(className)}
          isOpen={isOpen}
          onClose={onClose}
        >
          {imageInputSelection?.file.blob && (
            <div>
              <div className='relative w-full overflow-hidden'>
                <ImageCrop
                  aspect={cropOptions.aspect}
                  circularCrop={cropOptions.circularCrop}
                  src={imageInputSelection?.file.blob ?? null}
                  onComplete={blob => {
                    setCroppedImage(blob);
                  }}
                />
              </div>
              <div className='mt-4'>
                <div className='flex gap-2'>
                  <Button
                    type='button'
                    className='flex-1 cursor-pointer'
                    onClick={handleSave}
                    icon={{
                      iconName: "IconImage",
                      iconClassName: "size-6",
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
                    className='text-secondary fill-secondary border-secondary hover:bg-secondary/5 hover:text-secondary hover:fill-secondary hover:border-secondary cursor-pointer'
                    onClick={() => {
                      setImageInputSelection(null);
                      setCroppedImage(null);
                      onClose?.();
                    }}
                    icon={{
                      iconName: "IconClose",
                      iconClassName: "size-5",
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
          label={inputLabel}
          accept='image/*'
          maxFileSize={maxFileSize}
          allowedMimeTypes={allowedMimeTypes}
          compression={compression}
        />
      </div>
    );
  }
);

ImageDialog.displayName = "ImageDialog";

export { ImageDialog };

import { IDialogProps } from "Components/Dialog/types";

export interface IImageDialogOnSaveArgs {
  blob: Blob;
  base64: string;
  formData: FormData;
}

export interface IImageDialogCropOptions {
  aspect?: number;
  circularCrop?: boolean;
}

export interface IImageDialogProps extends IDialogProps {
  onComplete?: (blob: Blob) => void;
  onSave?: (args: IImageDialogOnSaveArgs) => Promise<unknown>;
  cropOptions?: IImageDialogCropOptions;
  buttonText: string;
}

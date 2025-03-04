import { IDialogProps } from "Components/Dialog/types";

export interface IImageDialogProps extends IDialogProps {
  onComplete?: (blob: Blob) => void;
  onSave?: (blob: Blob) => Promise<unknown>;
  aspect?: number;
  buttonText: string;
}

import { IDialogProps } from "Components/Dialog/types";

export interface IImageDialogProps extends IDialogProps {
  onComplete?: (blob: Blob) => void;
  onSave?: ({
    blob,
    base64
  }: {
    blob: Blob;
    base64: string;
  }) => Promise<unknown>;
  aspect?: number;
  buttonText: string;
}

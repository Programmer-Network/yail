import { Crop } from "react-image-crop";

export type { Crop as ICrop };

export interface IImageCropProps {
  src: Blob | null;
  onComplete?: (blob: Blob) => void;
  onError?: (error: string) => void;
  locked?: boolean;
  circularCrop?: boolean;
  aspect?: number;
  imgCropWrapperClassName?: string;
}

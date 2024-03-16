import { Crop } from "react-image-crop";

export type { Crop as ICrop };

export interface IImageCropProps {
  src: string;
  onComplete?: (file: Blob) => void;
  onError?: (error: string) => void;
  setCrop: (crop: Crop) => void;
  crop: Crop;
  locked?: boolean;
  circularCrop?: boolean;
  aspect?: number;
  imgCropWrapperClassName?: string;
  imgCropClassName?: string;
}

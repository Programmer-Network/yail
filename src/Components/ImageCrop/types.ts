export interface IImageCropProps {
  src: string;
  onComplete?: (file: Blob) => void;
  onError?: (error: string) => void;
  locked?: boolean;
  width: number;
  height: number;
  unit: "px" | "%";
  circularCrop?: boolean;
  aspect?: number;
  cropAreaClassName?: string;
  x: number;
  y: number;
}

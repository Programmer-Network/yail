export interface IImageCropProps {
  src: string;
  setFile: unknown;
  file: unknown;
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

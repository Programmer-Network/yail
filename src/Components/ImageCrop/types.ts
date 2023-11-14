export interface IImageCropProps {
  src: string;
  setFile: any;
  file: any;
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

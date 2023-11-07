export interface IImage {
  id: string;
  url: string;
}

export interface IImageSelectorProps {
  images: IImage[];
  value: IImage;
  onSelected: (image: IImage) => void;
  onDelete: (image: IImage) => Promise<void>;
}

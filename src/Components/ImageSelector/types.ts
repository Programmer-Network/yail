export interface IImage {
  id: number;
  url: string;
}

export interface IImageSelectorProps {
  images: IImage[];
  value: IImage;
  onSelected: (image: IImage) => void;
  onDelete: (image: IImage) => Promise<IImage[]>;
}

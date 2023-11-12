import classNames from "classnames";
import { FC, useEffect, useState } from "react";

import { IconRemoveCircle } from "Components/Icons";
import Spinner from "Components/Spinner";

import { IImage, IImageSelectorProps } from "./types";

const ImageSelector: FC<IImageSelectorProps> = ({
  images,
  value,
  onSelected,
  onDelete
}) => {
  const [selected, setSelected] = useState<IImage>(value || images[0]);
  const [hoveredImage, setHoveredImage] = useState<IImage | null>(null);
  const [itemToDelete, setItemToDelete] = useState<IImage | null>(null);

  useEffect(() => {
    setSelected(value);
  }, [images.length, value]);

  return (
    <div className='grid grid-cols-4 gap-4'>
      {images.map(image => {
        return (
          <div
            onClick={() => {
              setSelected(image);
              onSelected(image);
            }}
            onMouseEnter={() => setHoveredImage(image)}
            onMouseLeave={() => setHoveredImage(null)}
            key={image.id}
            style={{ backgroundImage: `url(${image.url})` }}
            className={classNames(
              "relative aspect-square h-full w-full min-w-[150px] cursor-pointer bg-cover bg-center bg-no-repeat opacity-70",
              {
                "opacity-100": selected.url === image.url,
                "flex items-center justify-center border-rose-500 opacity-50":
                  itemToDelete?.url === image.url
              }
            )}
          >
            {itemToDelete?.url === image.url && (
              <Spinner className='!w-24 text-rose-500' />
            )}

            {!itemToDelete && hoveredImage?.url === image.url && (
              <IconRemoveCircle
                onClick={async e => {
                  try {
                    e.stopPropagation();
                    setItemToDelete(image);
                    await onDelete(image);
                  } catch (error) {
                  } finally {
                    setItemToDelete(null);
                  }
                }}
                className='absolute right-1 top-1 w-4 cursor-pointer text-primary-text-color transition duration-200 ease-in hover:text-rose-700'
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSelector;

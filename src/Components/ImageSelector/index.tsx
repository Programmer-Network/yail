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
              "relative h-full min-h-[150px] w-full bg-cover bg-center bg-no-repeat p-4",
              {
                "border-text border-2 border-dotted":
                  image.url === selected.url,
                "cursor-pointer": image.url !== image.url,
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
                className='absolute right-1 top-1 w-6 cursor-pointer text-rose-500 transition duration-200 ease-in hover:text-rose-700'
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSelector;

import classNames from "classnames";
import { FC, useEffect, useState } from "react";

import Icon from "../Icon";
import Spinner from "../Spinner";
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
            data-testid={`image-${image.id}`}
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
                "!opacity-100": selected.url === image.url,
                "flex items-center justify-center border-rose-500 opacity-50":
                  itemToDelete?.url === image.url
              }
            )}
          >
            {itemToDelete?.url === image.url && (
              <Spinner className='w-24! text-error' />
            )}

            {!itemToDelete && hoveredImage?.url === image.url && (
              <Icon
                iconName='IconRemoveCircle'
                dataTestId={`icon-remove-circle-${image.id}`}
                onClick={async e => {
                  try {
                    e.stopPropagation();
                    setItemToDelete(image);
                    await onDelete(image);
                  } finally {
                    setItemToDelete(null);
                  }
                }}
                className='absolute right-1 top-1 w-4 cursor-pointer text-text transition duration-200 ease-in hover:text-error'
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSelector;

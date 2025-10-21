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
    <div className='yl:grid yl:grid-cols-4 yl:gap-4'>
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
              "yl:relative yl:aspect-square yl:h-full yl:w-full yl:min-w-[150px] yl:cursor-pointer yl:bg-cover yl:bg-center yl:bg-no-repeat opacity-70",
              {
                "!opacity-100": selected.url === image.url,
                "yl:flex yl:items-center yl:justify-center yl:border-rose-500 opacity-50":
                  itemToDelete?.url === image.url
              }
            )}
          >
            {itemToDelete?.url === image.url && (
              <Spinner className='yl:w-24! yl:text-error' />
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
                className='yl:absolute yl:right-1 yl:top-1 yl:w-4 yl:cursor-pointer yl:text-text transition duration-200 ease-in yl:hover:text-error'
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSelector;

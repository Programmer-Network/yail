import classNames from "classnames";
import { FC } from "react";

import { IImageProps } from "./types";
import { getAspectRatioClass } from "./utils";

interface ICardImage extends IImageProps {
  onImageClick?: (e: React.MouseEvent) => void;
  className?: string;
}

const CardImage: FC<ICardImage> = ({
  src,
  alt,
  aspectRatio = "auto",
  lazy = true,
  onImageClick,
  className
}) => {
  const handleImageClick = (e: React.MouseEvent) => {
    if (!onImageClick) {
      return;
    }

    onImageClick(e);
  };

  return (
    <div
      className={classNames(
        "yl:relative yl:overflow-hidden yl:w-full",
        getAspectRatioClass(aspectRatio),
        className
      )}
    >
      <img
        src={src}
        alt={alt || "Card image"}
        loading={lazy ? "lazy" : "eager"}
        onClick={onImageClick ? handleImageClick : undefined}
        className='yl:w-full yl:h-full yl:object-cover'
        style={{ display: "block" }}
      />
    </div>
  );
};

export default CardImage;

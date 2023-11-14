import { useDebounceEffect } from "Hooks/useDebounceEffect";
import { CanvasUtils } from "Utils";
import classNames from "classnames";
import { FC, useRef, useState } from "react";
import ReactCrop, {
  Crop,
  PercentCrop,
  PixelCrop,
  centerCrop,
  makeAspectCrop
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import { IImageCropProps } from "./types";

const ImageCrop: FC<IImageCropProps> = ({
  src,
  onComplete,
  onError,
  width,
  height,
  unit,
  circularCrop,
  locked,
  x,
  y,
  aspect = 1,
  cropAreaClassName
}) => {
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const [crop, setCrop] = useState<Crop>({
    unit,
    width,
    height,
    x,
    y
  });

  const [scale] = useState(1);
  const [rotate] = useState(0);

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!aspect) {
      return;
    }

    const { width: mediaWidth, height: mediaHeight } = e.currentTarget;

    setCrop(
      centerCrop(
        makeAspectCrop(
          {
            unit: "%",
            width: 90
          },
          aspect,
          mediaWidth,
          mediaHeight
        ),
        mediaWidth,
        mediaHeight
      )
    );
  };

  useDebounceEffect(
    () => {
      if (
        !crop?.width ||
        !crop?.height ||
        !imgRef.current ||
        !previewCanvasRef.current
      ) {
        return;
      }

      try {
        CanvasUtils.canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          crop,
          scale,
          rotate
        );
      } catch (error) {
        onError?.((error as Error)?.message || "An error occurred");
      }
    },
    100,
    [crop, scale, rotate]
  );

  const handleChange = (_: PixelCrop, percentCrop: PercentCrop) => {
    setCrop(percentCrop);
  };

  const handleComplete = async (crop: PixelCrop) => {
    if (!imgRef.current) {
      return;
    }

    const { croppedImage, cropError } = await CanvasUtils.getCroppedImg(
      imgRef.current,
      crop
    );

    if (cropError) {
      onError?.(cropError);
      return;
    }

    setCrop({ ...crop, width: crop.width, height: crop.height });
    onComplete?.(croppedImage as Blob);
  };

  return (
    <div>
      {Boolean(src) && (
        <ReactCrop
          locked={locked}
          crop={crop}
          onChange={handleChange}
          onComplete={onComplete ? handleComplete : undefined}
          aspect={aspect}
          keepSelection
          circularCrop={circularCrop}
        >
          <img
            className={classNames(cropAreaClassName)}
            ref={imgRef}
            alt='Crop me'
            src={src}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
    </div>
  );
};

export default ImageCrop;

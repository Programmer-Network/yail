import { CanvasUtils } from "Utils";
import classNames from "classnames";
import { FC, useCallback, useMemo, useRef, useState } from "react";
import ReactCrop, {
  PercentCrop,
  PixelCrop,
  makeAspectCrop
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import { ICrop, IImageCropProps } from "./types";

const ImageCrop: FC<IImageCropProps> = ({
  src,
  onComplete,
  onError,
  circularCrop = false,
  locked = false,
  aspect = undefined,
  imgCropWrapperClassName
}) => {
  const [crop, setCrop] = useState<ICrop | undefined>(undefined);

  const imgRef = useRef(null);
  const imageSrc = useMemo(() => {
    if (!src) {
      return "";
    }

    return URL.createObjectURL(src);
  }, [src]);

  const onImageLoad = async (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!aspect) {
      return;
    }

    const { width: mediaWidth, height: mediaHeight } = e.currentTarget;

    setCrop(
      makeAspectCrop(
        {
          unit: "%" as PercentCrop["unit"],
          width: 50
        },
        aspect,
        mediaWidth,
        mediaHeight
      )
    );
  };

  const handleComplete = useCallback(
    async (crop: PixelCrop) => {
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

      onComplete?.(croppedImage as Blob);
    },
    [onComplete, onError]
  );

  return (
    <div className='yl:w-full yl:h-full yl:flex yl:items-center yl:justify-center'>
      {Boolean(src) && (
        <ReactCrop
          locked={locked}
          crop={crop}
          onChange={setCrop}
          onComplete={handleComplete}
          {...(aspect !== undefined ? { aspect } : {})}
          keepSelection
          circularCrop={circularCrop}
          className='yl:w-full yl:h-full'
        >
          <div
            className={classNames(imgCropWrapperClassName, {
              "yl:relative yl:w-full yl:h-full yl:overflow-hidden yl:flex yl:items-center yl:justify-center":
                !imgCropWrapperClassName
            })}
          >
            <img
              style={{
                objectFit: "cover",
                minWidth: "100%",
                minHeight: "100%"
              }}
              ref={imgRef}
              alt='Crop me'
              src={imageSrc}
              onLoad={onImageLoad}
            />
          </div>
        </ReactCrop>
      )}
    </div>
  );
};

export default ImageCrop;

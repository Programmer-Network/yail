import { Crop } from "react-image-crop";

export default class CanvasUtils {
  public static canvasPreview(
    image: HTMLImageElement,
    canvas: HTMLCanvasElement,
    crop: Crop,
    scale: number = 1,
    rotate: number = 0
  ) {
    const ctx = canvas.getContext("2d");
    const TO_RADIANS = Math.PI / 180;

    if (!ctx) {
      throw new Error("Could not get canvas context.");
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const pixelRatio = window.devicePixelRatio;

    canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = "high";

    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;

    const rotateRads = rotate * TO_RADIANS;
    const centerX = image.naturalWidth / 2;
    const centerY = image.naturalHeight / 2;

    ctx.save();

    ctx.translate(-cropX, -cropY);
    ctx.translate(centerX, centerY);
    ctx.rotate(rotateRads);
    ctx.scale(scale, scale);
    ctx.translate(-centerX, -centerY);
    ctx.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight
    );

    ctx.restore();
  }

  public static getCroppedImg(
    image: HTMLImageElement,
    crop: Crop
  ): Promise<{ croppedImage: Blob | null; cropError: string | null }> {
    const canvas = document.createElement("canvas");
    const pixelRatio = window.devicePixelRatio;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    if (!ctx) {
      return Promise.resolve({
        croppedImage: null,
        cropError: "Could not get canvas context."
      });
    }

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise(resolve => {
      canvas.toBlob(
        blob => {
          if (!blob) {
            return resolve({
              croppedImage: null,
              cropError: "Canvas is empty"
            });
          }

          return resolve({
            croppedImage: blob,
            cropError: null
          });
        },
        "image/jpeg",
        1
      );
    });
  }
}

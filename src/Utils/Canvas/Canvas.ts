import { Crop } from "react-image-crop";

class CanvasUtils {
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

export { CanvasUtils };

import { CompressReturnType, ValidationResult } from "./types";

class ImageUtils {
  public static async validate(
    file: File,
    maxFileSize: number,
    allowedMimeTypes: string[]
  ): Promise<ValidationResult> {
    const mimeType = await ImageUtils.getMimeType(file);
    const isValidImage = allowedMimeTypes.includes(mimeType);
    const { size } = file;

    if (mimeType.split("/")[0] !== "image") {
      return {
        isValidImage: false,
        imageValidationError: {
          reason: "INVALID_FILE_TYPE",
          message: "Only image files are allowed."
        }
      };
    }

    if (maxFileSize && size > maxFileSize) {
      return {
        isValidImage: false,
        imageValidationError: {
          reason: "RESOURCE_SIZE_EXCEEDED",
          message: `Size must not exceed ${maxFileSize / 1000} kilobytes.`
        }
      };
    }

    return isValidImage
      ? { isValidImage: true, imageValidationError: null }
      : {
          isValidImage: false,
          imageValidationError: {
            message: `File type is not allowed. Allowed types: ${allowedMimeTypes.join(", ")}`,
            reason: "INVALID_FILE_TYPE"
          }
        };
  }

  private static async getMimeType(file: File): Promise<string> {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result;
        if (!(result instanceof ArrayBuffer)) {
          resolve("");
          return;
        }

        const bytes = new Uint8Array(result);
        const header = bytes
          .subarray(0, 4)
          .reduce((acc, byte) => acc + byte.toString(16), "");

        switch (header) {
          case "89504e47":
            resolve("image/png");
            break;
          case "ffd8ffe0":
          case "ffd8ffe1":
          case "ffd8ffe2":
            resolve("image/jpeg");
            break;
          default:
            resolve("");
            break;
        }
      };

      reader.readAsArrayBuffer(file);
    });
  }

  public static async compress(
    file: File,
    options: {
      maxWidth?: number;
      quality?: number;
      format?: CompressReturnType;
    } = {}
  ): Promise<string | Blob> {
    const {
      maxWidth = 672,
      quality = 0.9,
      format = CompressReturnType.BASE64
    } = options;

    const image = await ImageUtils.loadImage(file);
    const canvas = document.createElement("canvas");
    const { width, height } = ImageUtils.getScaledDimensions(image, maxWidth);

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Could not get canvas context.");
    }

    ctx.drawImage(image, 0, 0, width, height);

    const base64DataURL = canvas.toDataURL("image/jpeg", quality);

    return format === CompressReturnType.BASE64
      ? base64DataURL
      : ImageUtils.base64ToBlob(base64DataURL, "image/jpeg");
  }

  public static readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error("Failed to read file."));
      reader.readAsDataURL(file);
    });
  }

  public static base64ToBlob = (base64: string, mimeType: string): Blob => {
    const parts = base64.split(",");
    if (parts.length < 2) {
      throw new Error("Invalid base64 string format");
    }

    const base64Data = parts[1] as string;
    const byteCharacters = atob(base64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mimeType });
  };

  private static loadImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => resolve(img);
      img.onerror = () =>
        reject(new Error("There was an error loading the image."));
    });
  }

  private static getScaledDimensions(
    img: HTMLImageElement,
    maxWidth: number
  ): { width: number; height: number } {
    let width = img.width;
    let height = img.height;

    if (width > maxWidth) {
      const scaleFactor = maxWidth / width;
      width = maxWidth;
      height *= scaleFactor;
    }

    return { width, height };
  }
}

export default ImageUtils;

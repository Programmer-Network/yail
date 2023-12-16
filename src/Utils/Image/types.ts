export type ValidationResult =
  | { isValidImage: true; imageValidationError: null }
  | {
      isValidImage: false;
      imageValidationError: { message: string; reason: string };
    };

export enum CompressReturnType {
  BASE64 = "base64",
  BLOB = "blob"
}

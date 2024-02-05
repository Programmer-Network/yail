interface FileData {
  blob: File;
  fileName: string;
  mimeType: string;
}

export interface IOnFileLoadedArgs {
  base64: string;
  fileName: string;
  mimeType: string;
  file: FileData;
}

export type TValidationError = { reason: string; message: string };

export interface IImageInputProps {
  id?: string;
  accept: string;
  className?: string;
  maxFileSize: number;
  onFileLoaded: (data: IOnFileLoadedArgs) => void;
  allowedMimeTypes: string[];
  onValidationError?: (error: TValidationError) => void;
  compression?: { enabled: boolean; maxWidth?: number; quality?: number };
  inputWrapperClassName?: string;
  label?: string;
  error?: string;
}

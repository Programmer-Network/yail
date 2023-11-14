interface FileData {
  blob: File;
  fileName: string;
  mimeType: string;
}

type OnChangeData =
  | { file: FileData; error: null }
  | { file: null; error: { message: string; reason: string } };

export interface IImageInputProps {
  id?: string;
  accept: string;
  onChange: (data: OnChangeData) => void;
  className?: string;
  maxFileSize: number;
  onFileLoaded: (data: {
    base64: string;
    fileName: string;
    mimeType: string;
    file: FileData;
  }) => void;
  allowedMimeTypes: string[];
  onValidationError?: (error: { reason: string; message: string }) => void;
  compression?: { enabled: boolean; maxWidth?: number; quality?: number };
  inputWrapperClassName?: string;
  hint?: string;
  label?: string;
  error?: string;
}

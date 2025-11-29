export type ImageAlignment = "left" | "center" | "right";

export interface IResizableImageAttrs {
  src: string;
  alt?: string;
  title?: string;
  width?: number | string | null;
  height?: number | string | null;
  "data-align"?: ImageAlignment;
}

export interface IResizableImageOptions {
  HTMLAttributes: Record<string, string>;
  allowBase64: boolean;
}

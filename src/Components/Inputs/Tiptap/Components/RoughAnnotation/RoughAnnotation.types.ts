import { ReactNode } from "react";

export type RoughAnnotationType =
  | "underline"
  | "box"
  | "circle"
  | "highlight"
  | "strike-through"
  | "crossed-off"
  | "bracket";

export interface IRoughAnnotationAttrs {
  type: RoughAnnotationType;
  color: string;
  label: string | null;
  strokeWidth: number;
}

export interface IRoughNotationProps {
  type: RoughAnnotationType;
  color?: string;
  strokeWidth?: number;
  padding?: number | [number, number] | [number, number, number, number];
  animationDuration?: number;
  show?: boolean;
  children: ReactNode;
}

export interface IAnnotationNodeViewProps {
  type: RoughAnnotationType;
  color: string;
  label: string | null;
  strokeWidth: number;
}

export interface IAnnotationDropdownProps {
  isOpen: boolean;
  hasExistingAnnotation: boolean;
  onApply: (attrs: IRoughAnnotationAttrs) => void;
  onRemove: () => void;
  onClose: () => void;
}

export const ANNOTATION_TYPE_OPTIONS: {
  value: RoughAnnotationType;
  label: string;
}[] = [
  { value: "bracket", label: "Bracket" },
  { value: "underline", label: "Underline" },
  { value: "box", label: "Box" },
  { value: "circle", label: "Circle" },
  { value: "highlight", label: "Highlight" },
  { value: "strike-through", label: "Strike Through" },
  { value: "crossed-off", label: "Crossed Off" }
];

export const DEFAULT_ANNOTATION_COLOR = "#3b82f6";
export const DEFAULT_STROKE_WIDTH = 2;

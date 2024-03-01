import { ForwardedRef } from "react";

export enum LinkClickTarget {
  Link = "Link",
  UnLink = "UnLink"
}

export interface IModalInputProps {
  position: { x: number; y: number };
  value: string;
  error?: string | null;
  onChange?: (value: Record<string, string | number>) => void;
  ref?: ForwardedRef<HTMLDivElement>;
  children?: React.ReactNode;
}

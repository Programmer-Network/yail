import { ForwardedRef } from "react";

export enum LinkClickTarget {
  Link = "Link",
  UnLink = "UnLink"
}

export interface ILinkInputProps {
  position: { x: number; y: number };
  value: string;
  error?: string | null;
  onChange?: (value: Record<string, string>) => void;
  onClick?: (target: LinkClickTarget) => void;
  ref?: ForwardedRef<HTMLDivElement>;
}

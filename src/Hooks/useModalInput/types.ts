import { MouseEvent, RefObject } from "react";

export type UseLinkInputProps = {
  ref: RefObject<HTMLDivElement>;
};

export type UseLinkInputReturn = {
  modalId: string;
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }) => void;
  openModal: (e: MouseEvent, tiptapControlName: string) => void;
  setModalId: (id: string) => void;
};

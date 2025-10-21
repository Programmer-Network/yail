import { MouseEvent, useState } from "react";

import { useOnClickOutside } from "../useClickOutside";
import { UseLinkInputProps, UseLinkInputReturn } from "./types";

export const useModalInput = ({
  ref
}: UseLinkInputProps): UseLinkInputReturn => {
  const [modalId, setModalId] = useState<string>("");
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useOnClickOutside(ref, () => setModalId(""));

  const openModal = (e: MouseEvent, tiptapControlName: string) => {
    const target = e.target as Element;
    const rect = target.getBoundingClientRect();
    const { left, top } = rect;
    setPosition({ x: left, y: top + 25 });
    setModalId(tiptapControlName);
  };

  return {
    modalId,
    setModalId,
    position,
    setPosition,
    openModal
  };
};

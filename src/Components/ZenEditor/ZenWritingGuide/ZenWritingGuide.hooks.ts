import { useCallback, useState } from "react";

import { IUseZenWritingGuideReturn } from "./ZenWritingGuide.types";

export const useZenWritingGuide = (): IUseZenWritingGuideReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handleOpen,
    handleClose
  };
};

import { useCallback, useEffect, useRef, useState } from "react";

import {
  IUseColorDropdownProps,
  IUseColorDropdownReturn
} from "./ColorDropdown.types";

export const useColorDropdown = ({
  editor
}: IUseColorDropdownProps): IUseColorDropdownReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentColor = editor.getAttributes("textColor")?.["color"] ?? null;

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const dropdown = dropdownRef.current;

      if (dropdown && !dropdown.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleColorSelect = useCallback(
    (colorId: string | null) => {
      if (colorId === null) {
        editor.chain().focus().unsetTextColor().run();
      } else {
        editor.chain().focus().setTextColor(colorId).run();
      }
      setIsOpen(false);
    },
    [editor]
  );

  const handleResetColor = useCallback(() => {
    editor.chain().focus().unsetTextColor().run();
    setIsOpen(false);
  }, [editor]);

  return {
    isOpen,
    dropdownRef,
    currentColor,
    handleToggle,
    handleColorSelect,
    handleResetColor
  };
};

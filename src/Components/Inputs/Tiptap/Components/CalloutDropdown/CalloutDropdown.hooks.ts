import { useCallback, useEffect, useRef, useState } from "react";

import { CalloutType } from "../Callout";
import {
  IUseCalloutDropdownProps,
  IUseCalloutDropdownReturn
} from "./CalloutDropdown.types";

export const useCalloutDropdown = ({
  editor
}: IUseCalloutDropdownProps): IUseCalloutDropdownReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleCalloutSelect = useCallback(
    (type: CalloutType) => {
      editor.chain().focus().setCallout({ type }).run();
      setIsOpen(false);
    },
    [editor]
  );

  return {
    isOpen,
    dropdownRef,
    handleToggle,
    handleCalloutSelect
  };
};

import { createPopper } from "@popperjs/core";
import { useOnClickOutside } from "Hooks/useClickOutside";
import React, { useEffect, useRef, useState } from "react";

import DefaultDropdown from "./DefaultDropdown";

interface DropdownProps {
  children?: React.ReactNode;
  buttonContent: React.ReactNode;
  options?: { icon: React.ReactNode; value: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  buttonContent,
  options
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (buttonRef.current && popperRef.current) {
      createPopper(buttonRef.current, popperRef.current, {
        placement: "auto"
      });
    }
  }, []);

  return (
    <div className='relative text-primary-text-color' ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='border-2 border-primary-text-color px-4 py-2'
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div
          ref={popperRef}
          className='absolute z-10 mt-2 w-56 border border-primary-text-color bg-transparent shadow-lg'
        >
          {children ? children : <DefaultDropdown options={options || []} />}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

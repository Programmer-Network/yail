import { createPopper } from "@popperjs/core";
import React, { useEffect, useRef, useState } from "react";

interface DropdownProps {
  children: React.ReactNode;
  buttonContent: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children, buttonContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current && popperRef.current) {
      createPopper(buttonRef.current, popperRef.current, {
        placement: "auto"
      });
    }
  }, []);

  return (
    <div className='relative text-primary-text-color'>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className='border-2 border-primary-text-color px-4 py-2 text-sm'
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div
          ref={popperRef}
          className='absolute z-10 mt-2 w-56 border border-primary-text-color bg-transparent shadow-lg'
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

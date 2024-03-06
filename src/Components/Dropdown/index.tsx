import { createPopper } from "@popperjs/core";
import { useOnClickOutside } from "Hooks/useClickOutside";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

import DefaultDropdown from "./DefaultDropdown";

interface DropdownProps {
  children?: React.ReactNode;
  buttonContent: React.ReactNode;
  buttonClassName?: string;
  dropdownClassName?: string;
  options?: { icon?: React.ReactNode; value: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({
  children,
  buttonContent,
  buttonClassName,
  dropdownClassName,
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
        className={classNames(buttonClassName)}
      >
        {buttonContent}
      </button>
      {isOpen && (
        <div
          ref={popperRef}
          className={classNames(
            dropdownClassName,
            "absolute z-10 mt-2 w-56 border-2 border-primary-text-color/40 bg-primary-background-color shadow-sm"
          )}
        >
          {children ? children : <DefaultDropdown options={options || []} />}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

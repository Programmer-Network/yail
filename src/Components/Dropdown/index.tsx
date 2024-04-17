import { createPopper } from "@popperjs/core";
import { useOnClickOutside } from "Hooks/useClickOutside";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

import DefaultDropdown from "./DefaultDropdown";
import { IDropdownProps } from "./types";

const Dropdown: React.FC<IDropdownProps> = ({
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
    if (!buttonRef.current || !popperRef.current) {
      return;
    }

    createPopper(buttonRef.current, popperRef.current, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: ["top", "right", "left"]
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: "clippingParents"
          }
        }
      ]
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonRef.current, popperRef.current]);

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
            "absolute z-50 mt-2 w-56 border-2 border-primary-text-color/40 bg-primary-background-color shadow-sm"
          )}
        >
          {children ? (
            children
          ) : (
            <DefaultDropdown options={options || []} setIsOpen={setIsOpen} />
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

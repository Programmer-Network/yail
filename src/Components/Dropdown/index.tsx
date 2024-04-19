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
    <div className='yl-relative yl-text-primary-text-color' ref={dropdownRef}>
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
            "yl-absolute yl-z-50 yl-mt-2 yl-w-56 yl-border-2 yl-border-primary-text-color/40 yl-bg-primary-background-color yl-shadow-md"
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

import { Options, createPopper } from "@popperjs/core";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import DefaultDropdown from "./DefaultDropdown";
import { IDropdownProps } from "./types";

const Dropdown: React.FC<IDropdownProps> = ({
  children,
  buttonContent,
  buttonClassName,
  dropdownClassName,
  options,
  popperOptions,
  placement
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;

      const target = event.target as Node;
      const button = buttonRef.current;
      const dropdown = popperRef.current;

      if (!button?.contains(target) && !dropdown?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (!buttonRef.current || !popperRef.current || !isOpen) {
      return;
    }

    const defaultOptions: Partial<Options> = {
      placement: placement || "bottom-start",
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: window,
            padding: 8
          }
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: ["top-start", "bottom-end", "top-end"]
          }
        },
        {
          name: "offset",
          options: {
            offset: [0, 8]
          }
        }
      ]
    };

    const popper = createPopper(
      buttonRef.current,
      popperRef.current,
      popperOptions || defaultOptions
    );

    return () => {
      popper.destroy();
    };
  }, [isOpen, popperOptions, placement]);

  const renderDropdown = () => {
    if (!isOpen) return null;

    const dropdown = (
      <div
        ref={popperRef}
        className={classNames(
          dropdownClassName,
          "absolute z-50 mt-2 w-56 border-2 border-border/40 bg-background shadow-md"
        )}
      >
        {children ? (
          children
        ) : (
          <DefaultDropdown options={options || []} setIsOpen={setIsOpen} />
        )}
      </div>
    );

    return ReactDOM.createPortal(dropdown, document.body);
  };

  return (
    <div className='relative text-text' ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(buttonClassName)}
      >
        {buttonContent}
      </button>
      {renderDropdown()}
    </div>
  );
};

export default Dropdown;

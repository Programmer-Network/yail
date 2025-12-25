import { createPopper } from "@popperjs/core";
import classNames from "classnames";
import { FC, KeyboardEvent, useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import { Icon } from "../../../../Icon";
import { ITiptapLinkInputProps } from "./TiptapLinkInput.types";

const TiptapLinkInput: FC<ITiptapLinkInputProps> = ({
  isOpen,
  onClose,
  value,
  error,
  onChange,
  onSubmit,
  onUnlink,
  hasExistingLink = false,
  triggerRef,
  anchorPosition
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const popperRef = useRef<HTMLDivElement>(null);

  // Setup Popper positioning (when triggerRef is provided)
  useEffect(() => {
    if (!isOpen || !popperRef.current) {
      return;
    }

    // If we have an anchor position, use fixed positioning
    if (anchorPosition && !triggerRef?.current) {
      popperRef.current.style.position = "fixed";
      popperRef.current.style.left = `${anchorPosition.x}px`;
      popperRef.current.style.top = `${anchorPosition.y + 8}px`;
      return;
    }

    // If we have a trigger ref, use Popper
    if (!triggerRef?.current) {
      // Fallback to center of screen
      popperRef.current.style.position = "fixed";
      popperRef.current.style.left = "50%";
      popperRef.current.style.top = "30%";
      popperRef.current.style.transform = "translateX(-50%)";
      return;
    }

    const popper = createPopper(triggerRef.current, popperRef.current, {
      placement: "bottom-start",
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
    });

    return () => {
      popper.destroy();
    };
  }, [isOpen, triggerRef, anchorPosition]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const trigger = triggerRef?.current;
      const popper = popperRef.current;

      if (!trigger?.contains(target) && !popper?.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose, triggerRef]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSubmit();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [onSubmit, onClose]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const handleSubmitClick = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  const handleUnlinkClick = useCallback(() => {
    onUnlink?.();
  }, [onUnlink]);

  if (!isOpen) {
    return null;
  }

  const inputClasses = classNames(
    "yl:w-64 yl:rounded yl:border yl:bg-background yl:px-3 yl:py-2 yl:text-sm yl:text-text",
    "yl:outline-none yl:transition-colors",
    {
      "yl:border-error": error,
      "yl:border-border/40 yl:focus:border-primary": !error
    }
  );

  const buttonClasses =
    "yl:flex yl:items-center yl:justify-center yl:rounded yl:p-2 yl:transition-colors yl:bg-primary yl:text-background yl:hover:bg-primary/80";

  const unlinkButtonClasses =
    "yl:flex yl:items-center yl:justify-center yl:rounded yl:p-2 yl:transition-colors yl:bg-error/10 yl:text-error yl:hover:bg-error yl:hover:text-background yl:border yl:border-error";

  const content = (
    <div
      ref={popperRef}
      className='yl:bg-background yl:border-border/40 yl:absolute yl:z-50 yl:rounded-lg yl:border yl:p-3 yl:shadow-lg'
    >
      <div className='yl:flex yl:items-center yl:gap-2'>
        <input
          ref={inputRef}
          type='text'
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder='https://example.com'
          className={inputClasses}
        />
        <button
          type='button'
          className={buttonClasses}
          onClick={handleSubmitClick}
          title='Apply link'
        >
          <Icon iconName='LinkOutline' className='yl:w-4 yl:h-4' />
        </button>
        {hasExistingLink && onUnlink && (
          <button
            type='button'
            className={unlinkButtonClasses}
            onClick={handleUnlinkClick}
            title='Remove link'
          >
            <Icon iconName='IconUnlink' className='yl:w-4 yl:h-4' />
          </button>
        )}
      </div>
      {error && <p className='yl:text-error yl:mt-2 yl:text-xs'>{error}</p>}
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
};

TiptapLinkInput.displayName = "TiptapLinkInput";

export { TiptapLinkInput };

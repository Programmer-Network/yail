import classNames from "classnames";
import React, { forwardRef, useEffect, useRef } from "react";

import "./dialog.css";
import { IDialogProps } from "./types";

const Dialog = forwardRef<HTMLDialogElement, IDialogProps>(
  ({ className, isOpen, children, onClose }, forwardedRef) => {
    const internalRef = useRef<HTMLDialogElement>(null);
    const ref = (forwardedRef ||
      internalRef) as React.MutableRefObject<HTMLDialogElement>;

    /**
     * Handle body overflow when dialog is open
     * and reset it when dialog is closed
     */
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }, [isOpen]);

    /**
     * Handle dialog close on click outside
     * and on escape key press
     */
    useEffect(() => {
      const handleDialogClick = (event: MouseEvent) => {
        if (event.target === ref.current) {
          onClose?.();
          ref.current?.close();
        }
      };

      /**
       * Close dialog on escape key press
       */
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose?.();
        }
      };

      const dialogElement = ref.current;
      dialogElement?.addEventListener("click", handleDialogClick);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        dialogElement?.removeEventListener("click", handleDialogClick);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [onClose, ref]);

    useEffect(() => {
      if (isOpen) {
        ref.current?.showModal();
      } else {
        ref.current?.close();
      }
    }, [isOpen, ref]);

    return (
      <dialog
        ref={ref}
        className={classNames(
          "z-50 rounded-lg bg-primary-background-color py-6 shadow-md ring-1 ring-primary-text-color ring-opacity-30 md:w-2/12",
          className
        )}
        onClick={e => e.stopPropagation()}
      >
        <div
          onClick={e => e.stopPropagation()}
          className='flex items-center justify-center py-6 '
        >
          {children}
        </div>
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

export default Dialog;

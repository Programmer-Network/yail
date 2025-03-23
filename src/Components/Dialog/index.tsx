import classNames from "classnames";
import { RefObject, forwardRef, useEffect, useRef } from "react";

import "./dialog.css";
import { IDialogProps } from "./types";

const Dialog = forwardRef<HTMLDialogElement, IDialogProps>(
  (
    { className, isOpen, children, onClose, shouldCloseOnClickOutside = true },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLDialogElement>(null);
    const ref = (forwardedRef || internalRef) as RefObject<HTMLDialogElement>;

    /**
     * Handle body overflow when dialog is open
     * and reset it when dialog is closed
     */
    useEffect(() => {
      if (!shouldCloseOnClickOutside) {
        return;
      }

      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }, [isOpen, shouldCloseOnClickOutside]);

    /**
     * Handle dialog close on click outside
     * and on escape key press
     */
    useEffect(() => {
      const handleDialogClick = (event: MouseEvent) => {
        if (!shouldCloseOnClickOutside) {
          return;
        }

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
    }, [onClose, shouldCloseOnClickOutside, ref]);

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
          "yl:z-50 yl:rounded-lg yl:bg-background yl:shadow-md yl:border yl:border-text/5",
          className
        )}
        onClick={e => e.stopPropagation()}
      >
        <div
          onClick={e => e.stopPropagation()}
          className='yl:flex yl:items-center yl:justify-center'
        >
          {children}
        </div>
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

export default Dialog;

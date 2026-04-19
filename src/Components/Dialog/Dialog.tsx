import classNames from "classnames";
import { Ref, RefObject, useEffect, useRef } from "react";

import "./Dialog.css";
import { IDialogProps } from "./types";

const Dialog = ({
  className,
  isOpen,
  children,
  onClose,
  shouldCloseOnClickOutside = true,
  ref: forwardedRef
}: IDialogProps & { ref?: Ref<HTMLDialogElement> }) => {
  const internalRef = useRef<HTMLDialogElement>(null);
  const ref = (forwardedRef || internalRef) as RefObject<HTMLDialogElement>;

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
        "yl:bg-background yl:border-text/5 yl:z-50 yl:rounded-lg yl:shadow-md yl:border",
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
};

Dialog.displayName = "Dialog";

export { Dialog };

import classNames from "classnames";
import React, { RefObject, forwardRef } from "react";

import Icon from "Components/Icon";

interface IDialogProps {
  className?: string;
  isOpen?: boolean;
  children?: React.ReactNode;
}

/**
 * @url https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 */
function Dialog(props: IDialogProps, ref: React.Ref<HTMLDialogElement>) {
  const { className, isOpen, children } = props;

  return (
    <dialog
      ref={ref}
      open={isOpen}
      className='relative rounded-md bg-transparent p-6'
    >
      <Icon
        iconName='IconClose'
        className='absolute right-0 top-0 z-50 w-6 cursor-pointer fill-primary'
        onClick={() => (ref as RefObject<HTMLDialogElement>)?.current?.close()}
      />
      <div className={classNames(className)}>{children}</div>
    </dialog>
  );
}

export default forwardRef(Dialog);

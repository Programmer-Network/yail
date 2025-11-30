import classNames from "classnames";
import { FC } from "react";
import ReactDOM from "react-dom";

import { Button } from "../../Button";
import { ButtonVariantEnum } from "../../Button/types";
import { Icon } from "../../Icon";
import { DEFAULT_DRAWER_TITLE } from "./ZenPropertiesDrawer.constants";
import { useDrawer } from "./ZenPropertiesDrawer.hooks";
import { IZenPropertiesDrawerProps } from "./ZenPropertiesDrawer.types";

const ZenPropertiesDrawer: FC<IZenPropertiesDrawerProps> = ({
  isOpen,
  onClose,
  title = DEFAULT_DRAWER_TITLE,
  children,
  primaryAction,
  secondaryAction
}) => {
  const { drawerRef } = useDrawer({ isOpen, onClose });

  const backdropClasses = classNames(
    "yl:fixed yl:inset-0 yl:z-40 yl:bg-black/50 yl:transition-opacity yl:duration-300",
    {
      "yl:opacity-100": isOpen,
      "yl:opacity-0 yl:pointer-events-none": !isOpen
    }
  );

  const drawerClasses = classNames(
    "yl:fixed yl:inset-y-0 yl:right-0 yl:z-50 yl:w-full yl:max-w-md",
    "yl:bg-background yl:shadow-xl yl:transition-transform yl:duration-300 yl:ease-in-out",
    "yl:flex yl:flex-col",
    {
      "yl:translate-x-0": isOpen,
      "yl:translate-x-full": !isOpen
    }
  );

  const closeButtonClasses = classNames(
    "yl:text-text/60 yl:hover:text-text yl:hover:bg-border/20",
    "yl:rounded-md yl:p-1.5 yl:transition-colors"
  );

  const drawer = (
    <>
      <div className={backdropClasses} aria-hidden='true' />

      <div
        ref={drawerRef}
        className={drawerClasses}
        role='dialog'
        aria-modal='true'
        aria-labelledby='drawer-title'
      >
        <div className='yl:border-border/30 yl:flex yl:items-center yl:justify-between yl:border-b yl:px-6 yl:py-4'>
          <h2
            id='drawer-title'
            className='yl:text-text yl:text-lg yl:font-semibold'
          >
            {title}
          </h2>
          <button
            type='button'
            onClick={onClose}
            className={closeButtonClasses}
            aria-label='Close drawer'
          >
            <Icon iconName='CloseOutline' className='yl:h-5 yl:w-5' />
          </button>
        </div>

        <div className='yl:flex-1 yl:overflow-y-auto yl:px-6 yl:py-4'>
          {children}
        </div>

        <div className='yl:border-border/30 yl:flex yl:items-center yl:justify-end yl:gap-3 yl:border-t yl:px-6 yl:py-4'>
          {secondaryAction && (
            <Button
              variant={ButtonVariantEnum.SECONDARY}
              onClick={secondaryAction.onClick}
              disabled={secondaryAction.disabled}
              isLoading={secondaryAction.isLoading}
            >
              {secondaryAction.label}
            </Button>
          )}
          <Button
            variant={ButtonVariantEnum.PRIMARY}
            onClick={primaryAction.onClick}
            disabled={primaryAction.disabled}
            isLoading={primaryAction.isLoading}
          >
            {primaryAction.label}
          </Button>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(drawer, document.body);
};

ZenPropertiesDrawer.displayName = "ZenPropertiesDrawer";

export { ZenPropertiesDrawer };

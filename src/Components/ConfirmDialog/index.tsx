import { Button, Dialog, Icon, Paragraph } from "index";
import { forwardRef } from "react";

import { ButtonVariantEnum } from "Components/Button/types";

import { IConfirmDialogProps } from "./ConfirmDialog.types";

const ConfirmDialog = forwardRef<HTMLDialogElement, IConfirmDialogProps>(
  (
    {
      onConfirm,
      isLoading = false,
      title,
      message = "Are you sure you want to proceed?",
      confirmText = "Confirm",
      cancelText = "Cancel",
      iconName,
      variant = "info"
    },
    ref
  ) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "destructive":
          return {
            iconClass: "yl:text-red-500",
            messageClass: "yl:text-red-500",
            icon: iconName || "IconBomb",
            buttonVariant: ButtonVariantEnum.ERROR,
            confirmIcon: "IconBomb"
          };
        default:
          return {
            iconClass: "yl:text-blue-500",
            messageClass: "yl:text-foreground",
            icon: iconName || "IconInfo",
            buttonVariant: ButtonVariantEnum.PRIMARY,
            confirmIcon: "Complete"
          };
      }
    };

    const styles = getVariantStyles();

    const handleCancel = () => {
      if (ref && "current" in ref && ref.current) {
        (ref.current as HTMLDialogElement).close();
      }
    };

    return (
      <Dialog
        ref={ref}
        className='yl:min-w-[460px] yl:bg-background yl:px-6 yl:py-8 yl:max-w-[480px]'
      >
        <div className='yl:flex yl:flex-col yl:gap-6'>
          {(iconName || variant) && (
            <div className='yl:flex yl:items-center yl:justify-center yl:rounded-full'>
              <Icon
                iconName={styles.icon as any}
                className={`yl:h-24 yl:w-24 ${styles.iconClass}`}
              />
            </div>
          )}

          <div className='yl:text-center yl:space-y-3'>
            {title && (
              <h3 className='yl:text-lg yl:font-semibold yl:text-text'>
                {title}
              </h3>
            )}

            <Paragraph className={`${styles.messageClass}`}>
              {message}
            </Paragraph>
          </div>

          <div className='yl:flex yl:gap-3 yl:justify-end'>
            <Button
              variant={ButtonVariantEnum.SECONDARY}
              outlined
              onClick={handleCancel}
              disabled={isLoading}
              className='yl:min-w-[100px]'
              icon={{
                iconName: "Incomplete",
                iconPosition: "left",
                iconClassName: "yl:w-6 yl:h-6"
              }}
            >
              {cancelText}
            </Button>
            <Button
              onClick={onConfirm}
              isLoading={isLoading}
              className='yl:min-w-[100px]'
              variant={styles.buttonVariant}
              icon={{
                iconName: styles.confirmIcon as any,
                iconPosition: "left",
                iconClassName:
                  styles.confirmIcon === "Complete"
                    ? "yl:w-5 yl:h-5"
                    : "yl:w-6 yl:h-6"
              }}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </Dialog>
    );
  }
);

ConfirmDialog.displayName = "ConfirmDialog";

export default ConfirmDialog;
export type {
  ConfirmDialogVariant,
  IConfirmDialogProps
} from "./ConfirmDialog.types";

import { forwardRef } from "react";

import Button from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import Dialog from "../Dialog";
import Icon from "../Icon";
import Paragraph from "../Typography/Paragraph";
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
            iconClass: "text-red-500",
            messageClass: "text-red-500",
            icon: iconName || "IconBomb",
            buttonVariant: ButtonVariantEnum.ERROR,
            confirmIcon: "IconBomb"
          };
        default:
          return {
            iconClass: "text-blue-500",
            messageClass: "text-foreground",
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
        className='bg-background max-w-[480px] min-w-[460px] px-6 py-8'
      >
        <div className='flex flex-col gap-6'>
          {(iconName || variant) && (
            <div className='flex items-center justify-center rounded-full'>
              <Icon
                iconName={styles.icon as any}
                className={`h-24 w-24 ${styles.iconClass}`}
              />
            </div>
          )}

          <div className='space-y-3 text-center'>
            {title && (
              <h3 className='text-text text-lg font-semibold'>{title}</h3>
            )}

            <Paragraph className={`${styles.messageClass}`}>
              {message}
            </Paragraph>
          </div>

          <div className='flex justify-end gap-3'>
            <Button
              variant={ButtonVariantEnum.SECONDARY}
              outlined
              onClick={handleCancel}
              disabled={isLoading}
              className='min-w-[100px]'
              icon={{
                iconName: "Incomplete",
                iconPosition: "left",
                iconClassName: "w-6 h-6"
              }}
            >
              {cancelText}
            </Button>
            <Button
              onClick={onConfirm}
              isLoading={isLoading}
              className='min-w-[100px]'
              variant={styles.buttonVariant}
              icon={{
                iconName: styles.confirmIcon as any,
                iconPosition: "left",
                iconClassName:
                  styles.confirmIcon === "Complete" ? "w-5 h-5" : "w-6 h-6"
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

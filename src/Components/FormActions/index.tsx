import classNames from "classnames";
import { createRef, useState } from "react";

import Button from "Components/Button";
import { ButtonVariantEnum } from "Components/Button/types";
import Dialog from "Components/Dialog";
import Icon from "Components/Icon";
import { H3, Paragraph } from "Components/Typography";

import { IFormActionsProps } from "./types";

const FormActions = ({
  onSave,
  onCancel,
  onDelete,
  saveText = "Save",
  cancelText = "Cancel",
  deleteText = "Delete",
  dialogDeleteText = "This action cannot be undone",
  dialogDeleteTitle = "Confirm Deletion",
  isLoading = false,
  isSaving = false,
  isDeleting = false,
  disabled = false,
  showSave = true,
  showCancel = true,
  showDelete = false,
  saveVariant = "primary",
  className = "",
  size = "medium",
  alignment = "left"
}: IFormActionsProps) => {
  const dialogRef = createRef<HTMLDialogElement>();
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);

  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return {
          gap: "yl:gap-2",
          buttonWidth: "yl:min-w-[80px]"
        };
      case "large":
        return {
          gap: "yl:gap-4",
          buttonWidth: "yl:min-w-[120px]"
        };
      default:
        return {
          gap: "yl:gap-3",
          buttonWidth: "yl:min-w-[100px]"
        };
    }
  };

  const getLayoutClasses = () => {
    const baseClasses = "yl:flex-row";

    switch (alignment) {
      case "center":
        return `yl:flex ${baseClasses} yl:justify-center yl:items-center`;
      case "right":
        return `yl:flex ${baseClasses} yl:justify-end yl:items-center`;
      case "space-between":
        return `yl:flex ${baseClasses} yl:justify-between yl:items-center`;
      default:
        return `yl:flex ${baseClasses} yl:justify-start yl:items-center`;
    }
  };

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!onSave || disabled || isSaveLoading) return;

    try {
      setIsSaveLoading(true);
      await onSave();
    } catch (error) {
      console.error("Save operation failed:", error);
    } finally {
      setIsSaveLoading(false);
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!onCancel || disabled) return;
    onCancel();
  };

  const handleDeleteShow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!dialogRef.current || disabled) return;
    dialogRef.current.showModal();
  };

  const handleDeleteClose = () => {
    if (!dialogRef.current) return;
    dialogRef.current.close();
  };

  const handleDeleteConfirm = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!onDelete || isDeleteLoading) return;

    try {
      setIsDeleteLoading(true);
      await onDelete();
      handleDeleteClose();
    } catch (error) {
      console.error("Delete operation failed:", error);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const isAnyLoading =
    isLoading || isSaving || isSaveLoading || isDeleting || isDeleteLoading;
  const sizeClasses = getSizeClasses();

  return (
    <div className={classNames("yl:w-full", className)}>
      {/* Enhanced Delete Confirmation Dialog */}
      {showDelete && onDelete && (
        <Dialog
          ref={dialogRef}
          className='yl:p-8 yl:!border-text/20 yl:!border-2 yl:max-w-[480px] yl:rounded-2xl yl:backdrop-blur-sm yl:bg-background/95'
          shouldCloseOnClickOutside={!isDeleteLoading}
        >
          <div className='yl:flex yl:flex-col yl:gap-8'>
            <div className='yl:flex yl:flex-col yl:items-center yl:gap-6'>
              <div className='yl:w-20 yl:h-20 yl:rounded-full yl:bg-gradient-to-br yl:from-text/15 yl:to-text/5 yl:flex yl:items-center yl:justify-center yl:border yl:border-text/20'>
                <Icon
                  iconName='IconBomb'
                  className='yl:w-10 yl:h-10 yl:text-text'
                />
              </div>

              <div className='yl:text-center yl:space-y-3'>
                <H3 className='yl:text-xl yl:font-semibold yl:text-text yl:tracking-tight'>
                  {dialogDeleteTitle}
                </H3>
                <Paragraph className='yl:text-text/70 yl:text-base yl:leading-relaxed yl:max-w-sm'>
                  {dialogDeleteText}
                </Paragraph>
              </div>
            </div>

            <div className='yl:flex yl:gap-3 yl:justify-center'>
              <Button
                variant={ButtonVariantEnum.SECONDARY}
                outlined
                onClick={handleDeleteClose}
                disabled={isDeleteLoading}
                className='yl:w-[100px]'
              >
                Cancel
              </Button>
              <Button
                variant={ButtonVariantEnum.ERROR}
                outlined
                onClick={handleDeleteConfirm}
                isLoading={isDeleteLoading}
                disabled={isDeleteLoading}
                className='yl:w-[100px]'
                icon={{
                  iconName: "IconBomb",
                  iconPosition: "left"
                }}
              >
                {deleteText}
              </Button>
            </div>
          </div>
        </Dialog>
      )}

      {/* Main Action Buttons */}
      <div className={classNames(getLayoutClasses(), sizeClasses.gap)}>
        {/* Primary Actions Group */}
        <div className={classNames("yl:flex", "yl:flex-row", sizeClasses.gap)}>
          {showSave && onSave && (
            <Button
              variant={
                saveVariant === "secondary"
                  ? ButtonVariantEnum.SECONDARY
                  : ButtonVariantEnum.PRIMARY
              }
              onClick={handleSave}
              disabled={disabled || isAnyLoading}
              isLoading={isSaving || isSaveLoading}
              className={sizeClasses.buttonWidth}
              type='submit'
              icon={{
                iconName: "Complete",
                iconPosition: "left",
                iconClassName: "yl:w-5 yl:h-5"
              }}
            >
              {saveText}
            </Button>
          )}

          {showCancel && onCancel && (
            <Button
              variant={ButtonVariantEnum.SECONDARY}
              outlined
              onClick={handleCancel}
              disabled={disabled || isAnyLoading}
              className={sizeClasses.buttonWidth}
              icon={{
                iconName: "Incomplete",
                iconPosition: "left",
                iconClassName: "yl:w-5 yl:h-5"
              }}
            >
              {size !== "small" && cancelText}
            </Button>
          )}
        </div>

        {/* Delete Action */}
        {showDelete && onDelete && (
          <Button
            variant={ButtonVariantEnum.SECONDARY}
            outlined
            onClick={handleDeleteShow}
            disabled={disabled || isAnyLoading}
            icon={{
              iconName: "IconBomb",
              iconPosition: "left",
              iconClassName: "yl:w-6 yl:h-6"
            }}
            className={classNames(
              sizeClasses.buttonWidth,
              "yl:transition-all yl:duration-200 hover:yl:scale-105"
            )}
            aria-label={`${deleteText} - This action cannot be undone`}
          >
            {size !== "small" && deleteText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormActions;

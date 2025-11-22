import classNames from "classnames";
import { createRef, useState } from "react";

import { Button } from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import { ConfirmDialog } from "../ConfirmDialog";
import { IFormActionsProps } from "./types";

const FormActions = ({
  onSave,
  onCancel,
  onDelete,
  onSaveError,
  onDeleteError,
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
  saveVariant = ButtonVariantEnum.PRIMARY,
  className = "",
  size = "medium",
  alignment = "left"
}: IFormActionsProps) => {
  const confirmDialogRef = createRef<HTMLDialogElement>();
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

    if (!onSave || disabled || isSaveLoading) {
      return;
    }

    try {
      setIsSaveLoading(true);
      await onSave();
    } catch (error) {
      const errorObj =
        error instanceof Error ? error : new Error(String(error));

      onSaveError?.(errorObj);
    } finally {
      setIsSaveLoading(false);
    }
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!onCancel || disabled) {
      return;
    }

    onCancel();
  };

  const handleDeleteShow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!confirmDialogRef.current || disabled) {
      return;
    }

    confirmDialogRef.current.showModal();
  };

  const handleDeleteConfirm = async () => {
    if (!onDelete || isDeleteLoading) {
      return;
    }

    try {
      setIsDeleteLoading(true);
      await onDelete();
    } catch (error) {
      const errorObj =
        error instanceof Error ? error : new Error(String(error));

      onDeleteError?.(errorObj);
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const isAnyLoading =
    isLoading || isSaving || isSaveLoading || isDeleting || isDeleteLoading;
  const sizeClasses = getSizeClasses();

  return (
    <div className={classNames("yl:w-full", className)}>
      {showDelete && onDelete && (
        <ConfirmDialog
          ref={confirmDialogRef}
          variant='destructive'
          title={dialogDeleteTitle}
          message={dialogDeleteText}
          confirmText={deleteText}
          onConfirm={handleDeleteConfirm}
          isLoading={isDeleteLoading}
        />
      )}

      <div className={classNames(getLayoutClasses(), sizeClasses.gap)}>
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
              iconClassName: "yl:w-6 yl:h-6"
            }}
          >
            {size !== "small" && cancelText}
          </Button>
        )}

        {/* Delete Button (Secondary/Destructive) */}
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
              "yl:transition-all yl:duration-200 yl:hover:scale-105"
            )}
            aria-label={`${deleteText} - This action cannot be undone`}
          >
            {size !== "small" && deleteText}
          </Button>
        )}

        {/* Save Button (Primary) */}
        {showSave && onSave && (
          <Button
            variant={
              saveVariant === ButtonVariantEnum.SECONDARY
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
      </div>
    </div>
  );
};

export { FormActions };

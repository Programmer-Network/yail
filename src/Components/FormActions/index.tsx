import { createRef } from "react";

import Button from "Components/Button";
import { ButtonVariantEnum } from "Components/Button/types";
import Dialog from "Components/Dialog";
import Icon from "Components/Icon";
import { Paragraph } from "Components/Typography";

import { IFormActionsProps } from "./types";

const FormActions = ({
  onSave,
  onCancel,
  onDelete,
  dialogDeleteText = "Do you want to put an end to these bits and bytes?"
}: IFormActionsProps) => {
  const dialogRef = createRef<HTMLDialogElement>();

  const handleShow = () => {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current.showModal();
  };

  const handleClose = () => {
    if (!dialogRef.current) {
      return;
    }

    dialogRef.current?.close();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!dialogRef.current) {
      return;
    }

    onDelete?.();
    dialogRef.current?.close();
  };

  return (
    <div>
      <div className='yl:mt-14'>
        {onDelete && (
          <Dialog
            ref={dialogRef}
            className='yl:p-8 yl:!border-error/50 yl:!border-2 yl:max-w-[350px]'
            shouldCloseOnClickOutside={false}
          >
            <div className='yl:flex yl:flex-col yl:gap-4'>
              <div className='yl:flex yl:flex-col yl:items-center yl:justify-center yl:gap-6'>
                <Icon
                  iconName='SkullOutline'
                  className='yl:w-28 yl:h-28 yl:text-error'
                />
                <Paragraph className='yl:text-center'>
                  {dialogDeleteText}
                </Paragraph>
              </div>

              <div className='yl:flex yl:gap-2 yl:justify-end yl:mt-4'>
                <Button
                  outlined
                  variant={ButtonVariantEnum.SECONDARY}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant={ButtonVariantEnum.ERROR}
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Dialog>
        )}
      </div>

      <div className='yl:flex yl:gap-2'>
        <div className='yl:flex yl:gap-2'>
          {onSave && (
            <Button className='yl:w-[80px]' onClick={onSave}>
              Save
            </Button>
          )}
          {onCancel && (
            <Button
              outlined
              variant={ButtonVariantEnum.SECONDARY}
              className='yl:w-[80px]'
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
        </div>
        {onDelete && (
          <Button
            variant={ButtonVariantEnum.ERROR}
            outlined
            onClick={handleShow}
            icon={{
              iconName: "SkullOutline",
              iconPosition: "left"
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FormActions;

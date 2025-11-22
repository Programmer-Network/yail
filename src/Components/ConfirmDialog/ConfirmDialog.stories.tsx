import { useRef } from "react";

import { Button } from "../Button";
import { IConfirmDialogProps } from "./ConfirmDialog.types";
import { ConfirmDialog } from "./index";

export default {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"]
};

const ConfirmDialogWrapper = (args: IConfirmDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div className='yl:p-4'>
      <Button onClick={openDialog}>Open Dialog</Button>
      <ConfirmDialog ref={dialogRef} {...args} />
    </div>
  );
};

export const Destructive = {
  render: (args: IConfirmDialogProps) => <ConfirmDialogWrapper {...args} />,
  args: {
    variant: "destructive" as const,
    title: "Delete Item",
    message:
      "This action cannot be undone. Are you sure you want to delete this item? Notice the red delete icon and styling.",
    confirmText: "Delete",
    cancelText: "Cancel",
    isLoading: false,
    onConfirm: () => console.log("Item deleted")
  }
};

export const Info = {
  render: (args: IConfirmDialogProps) => <ConfirmDialogWrapper {...args} />,
  args: {
    variant: "info" as const,
    title: "Confirm Action",
    message:
      "Are you sure you want to proceed with this action? Notice the blue info icon.",
    confirmText: "Proceed",
    cancelText: "Cancel",
    isLoading: false,
    onConfirm: () => console.log("Action confirmed")
  }
};

export const Loading = {
  render: (args: IConfirmDialogProps) => <ConfirmDialogWrapper {...args} />,
  args: {
    variant: "destructive" as const,
    title: "Delete Item",
    message:
      "This action cannot be undone. Are you sure you want to delete this item? The loading state is properly handled.",
    confirmText: "Deleting...",
    cancelText: "Cancel",
    isLoading: true,
    onConfirm: () => console.log("Item being deleted")
  }
};

export const CustomIcon = {
  render: (args: IConfirmDialogProps) => <ConfirmDialogWrapper {...args} />,
  args: {
    variant: "info" as const,
    iconName: "IconHeart",
    title: "Custom Icon",
    message:
      "This dialog uses a custom icon instead of the default variant icon. You can override the default icons with any icon you want.",
    confirmText: "Like",
    cancelText: "Cancel",
    isLoading: false,
    onConfirm: () => console.log("Liked")
  }
};

export const NoTitle = {
  render: (args: IConfirmDialogProps) => <ConfirmDialogWrapper {...args} />,
  args: {
    variant: "info" as const,
    message:
      "This dialog has no title, just a message with consistent button styling and icons. The design ensures visual consistency throughout the application.",
    confirmText: "OK",
    cancelText: "Cancel",
    isLoading: false,
    onConfirm: () => console.log("Confirmed")
  }
};

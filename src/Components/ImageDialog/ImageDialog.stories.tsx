import { createRef } from "react";

import ImageDialog from ".";

export default {
  title: "Components / ImageDialog",
  parameters: {
    layout: "centered"
  },
  component: ImageDialog
};

export const Default = () => {
  const dialogRef = createRef<HTMLDialogElement>();

  const handleOpen = () => {
    dialogRef.current?.showModal();
  };

  const handleClose = () => {
    dialogRef.current?.close();
  };

  const handleSave = async (blob: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result as string;
      console.log("Base64 image:", base64data);
    };
  };

  return (
    <ImageDialog
      buttonText='Save'
      ref={dialogRef}
      onClose={handleClose}
      onOpen={handleOpen}
      onSave={handleSave}
    />
  );
};

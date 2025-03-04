import { createRef } from "react";

import ImageDialog from ".";

export default {
  title: "Components / ImageDialog",
  parameters: {
    layout: "centered"
  },
  component: ImageDialog
};

const blobToBase64 = (blob: Blob) => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => resolve(reader.result as string);
  });
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
    const base64 = await blobToBase64(blob);
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("🚀 ~ handleSave ~ base64:", base64);

        resolve(base64);
      }, 0);
    });
  };

  return (
    <ImageDialog
      className='yl:max-w-[500px] yl:overflow-hidden yl:p-4'
      buttonText='Save'
      ref={dialogRef}
      onClose={handleClose}
      onOpen={handleOpen}
      onSave={handleSave}
    />
  );
};

export const WithFailedHTTPRequest = () => {
  const dialogRef = createRef<HTMLDialogElement>();

  const handleOpen = () => {
    dialogRef.current?.showModal();
  };

  const handleClose = () => {
    dialogRef.current?.close();
  };

  const handleSave = async () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Failed to save image"));
      }, 3000);
    });
  };

  return (
    <ImageDialog
      className='yl:max-w-[500px] yl:overflow-hidden yl:p-4'
      buttonText='Save'
      ref={dialogRef}
      onClose={handleClose}
      onOpen={handleOpen}
      onSave={handleSave}
    />
  );
};

import { createRef } from "react";

import { ImageDialog } from ".";
import { IImageDialogOnSaveArgs } from "./types";

export default {
  title: "Components / ImageDialog",

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

  const handleSave = async (args: IImageDialogOnSaveArgs) => {
    console.log(args);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(args.formData);
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
      cropOptions={{
        aspect: 1,
        circularCrop: true
      }}
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

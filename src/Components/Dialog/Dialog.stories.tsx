import { createRef } from "react";

import Button from "Components/Button";
import ImageUpload from "Components/Inputs/Tiptap/Components/ImageUpload";
import { H1 } from "Components/Typography";

import Dialog from ".";

export default {
  title: "Core / Dialog",
  component: Dialog
};

export const SelectAnImage = () => {
  const dialogRef = createRef<HTMLDialogElement>();

  const handleShow = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div>
      <div className='yl-mt-14'>
        <Dialog ref={dialogRef} className='yl-px-4 yl-py-2'>
          <ImageUpload onFileLoaded={() => null} label='Select an image' />
        </Dialog>
      </div>

      <Button onClick={handleShow}>Toggle Dialog</Button>
    </div>
  );
};

export const Default = () => {
  const dialogRef = createRef<HTMLDialogElement>();

  const handleShow = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div>
      <div className='yl-mt-14'>
        <Dialog ref={dialogRef}>
          <H1 className='!yl-mb-0'>Hello, world</H1>
        </Dialog>
      </div>

      <Button onClick={handleShow}>Toggle Dialog</Button>
    </div>
  );
};

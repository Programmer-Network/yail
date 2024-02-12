import { createRef } from "react";

import Button from "Components/Button";
import ImageUpload from "Components/Inputs/Tiptap/Components/ImageUpload";

import Dialog from ".";

export default {
  title: "Core / Dialog",
  component: Dialog
};

export const Default = () => {
  const dialogRef = createRef<HTMLDialogElement>();

  const handleShow = () => {
    dialogRef.current?.showModal();
  };

  return (
    <div>
      <div className='m-14'>
        <Dialog ref={dialogRef}>
          <ImageUpload onFileLoaded={() => null} label='Select an image' />
        </Dialog>
      </div>

      <Button onClick={handleShow}>Toggle Dialog</Button>
    </div>
  );
};

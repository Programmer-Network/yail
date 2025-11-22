import { createRef } from "react";

import { Dialog } from ".";
import { Button } from "../Button";
import ImageUpload from "../Inputs/Tiptap/Components/ImageUpload";
import { H1 } from "../Typography";

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
      <div className='yl:mt-14'>
        <Dialog ref={dialogRef} className='yl:px-4 yl:py-2'>
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
      <div className='yl:mt-14'>
        <Dialog ref={dialogRef}>
          <H1 className='yl:mb-0!'>Hello, world</H1>
        </Dialog>
      </div>

      <Button onClick={handleShow}>Toggle Dialog</Button>
    </div>
  );
};

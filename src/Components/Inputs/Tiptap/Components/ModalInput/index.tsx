import { forwardRef } from "react";

import InputError from "../../../Common/InputError";
import Input from "../../../Input";
import { IModalInputProps } from "./types";

export const ModalInput = forwardRef<HTMLDivElement, IModalInputProps>(
  (props, ref) => {
    const { position, value = "", error, onChange, children } = props;
    const { x, y } = position;

    return (
      <div
        className='yl-fixed yl-z-50'
        style={{ left: x, top: y + 10 }}
        ref={ref}
      >
        <div className='yl-bg-primary-background-color yl-shadow-md'>
          <div className='yl-flex yl-items-center yl-gap-1'>
            <Input name='url' type='text' value={value} onChange={onChange} />
            {children}
          </div>
        </div>
        {error && <InputError error={error} className='!yl-mt-0 !yl-px-1' />}
      </div>
    );
  }
);

ModalInput.displayName = "ModalInput";

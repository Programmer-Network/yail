import { forwardRef } from "react";

import { InputError } from "../../../Common/InputError";
import { Input } from "../../../Input";
import { IModalInputProps } from "./types";

export const ModalInput = forwardRef<HTMLDivElement, IModalInputProps>(
  (props, ref) => {
    const { position, value = "", error, onChange, children } = props;
    const { x, y } = position;

    return (
      <div className='fixed z-50' style={{ left: x, top: y + 10 }} ref={ref}>
        <div className='bg-background shadow-md'>
          <div className='flex items-center gap-1'>
            <Input name='url' type='text' value={value} onChange={onChange} />
            {children}
          </div>
        </div>
        {error && <InputError error={error} className='mt-0! px-1!' />}
      </div>
    );
  }
);

ModalInput.displayName = "ModalInput";

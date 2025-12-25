import { forwardRef } from "react";

import { InputError } from "../../../Common/InputError";
import { Input } from "../../../Input";
import { IModalInputProps } from "./types";

export const ModalInput = forwardRef<HTMLDivElement, IModalInputProps>(
  (props, ref) => {
    const { position, value = "", error, onChange, children } = props;
    const { x, y } = position;

    return (
      <div
        className='yl:fixed yl:z-50'
        style={{ left: x, top: y + 10 }}
        ref={ref}
      >
        <div className='yl:bg-background yl:border-border/40 yl:rounded-md yl:border yl:p-2 yl:shadow-lg'>
          <div className='yl:flex yl:items-center yl:gap-2'>
            <Input name='url' type='text' value={value} onChange={onChange} />
            {children}
          </div>
          {error && <InputError error={error} className='yl:mt-1! yl:px-0!' />}
        </div>
      </div>
    );
  }
);

ModalInput.displayName = "ModalInput";

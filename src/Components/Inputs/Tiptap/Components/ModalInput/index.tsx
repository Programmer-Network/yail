import { FC, ForwardedRef, forwardRef } from "react";

import InputError from "../../../Common/InputError";
import Input from "../../../Input";
import { IModalInputProps } from "./types";

export const ModalInput: FC<IModalInputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { position, value = "", error, onChange, children } = props;
    const { x, y } = position;

    return (
      <div className='fixed z-50' style={{ left: x, top: y + 10 }} ref={ref}>
        <div className='bg-primary-background-color shadow-md'>
          <div className='flex items-end gap-1'>
            <Input
              name='url'
              type='text'
              value={value}
              onChange={onChange}
              className='!rounded-none !bg-primary-background-color'
            />
            {children}
          </div>
        </div>
        {error && <InputError error={error} className='!mt-0 !px-1' />}
      </div>
    );
  }
);

ModalInput.displayName = "ModalInput";

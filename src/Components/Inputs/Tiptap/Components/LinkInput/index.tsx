import { FC, ForwardedRef, forwardRef } from "react";

import Button from "Components/Button";
import Icon from "Components/Icon";

import InputError from "../../../Common/InputError";
import Input from "../../../Input";
import { ILinkInputProps, LinkClickTarget } from "./types";

export const LinkInput: FC<ILinkInputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLDivElement>) => {
    const { position, value = "", error, onChange, onClick } = props;
    const { x, y } = position;

    return (
      <div
        className='fixed z-50 bg-primary-background-color p-1 shadow-lg'
        style={{ left: x, top: y + 10 }}
        ref={ref}
      >
        <div className='flex items-end gap-1'>
          <Input
            name='url'
            type='text'
            value={value}
            onChange={onChange}
            className='!rounded-none !bg-primary-background-color'
          />
          <Button onClick={() => onClick?.(LinkClickTarget.Link)}>
            <Icon iconName='IconLink' className='w-6' />
          </Button>
          {value && (
            <Button outlined onClick={() => onClick?.(LinkClickTarget.UnLink)}>
              <Icon iconName='IconUnlink' className='w-6' />
            </Button>
          )}
        </div>
        {error && <InputError error={error} className='!mt-0' />}
      </div>
    );
  }
);

LinkInput.displayName = "CursorInput";

import { FC, forwardRef } from "react";

import Button from "Components/Button";
import Icon from "Components/Icon";

import InputError from "../Common/InputError";
import Input from "../Input";

interface ICursorInputProps {
  position: { x: number; y: number };
  value: string;
  error: string | null;
  onChange?: (value: Record<string, string>) => void;
  onButtonClick: () => void;
}

export const CursorInput: FC<ICursorInputProps> = forwardRef(props => {
  const { position, value, error, onChange, onButtonClick } = props;
  const { x, y } = position;

  return (
    <div className='fixed z-50' style={{ left: x, top: y + 10 }} /*ref={ref} */>
      <div className='flex gap-1'>
        <Input
          name='url'
          label='URL'
          type='text'
          value={value}
          onChange={onChange}
          // ref={ref} TODO
          className='!rounded-none !bg-primary-background-color'
        />
        <Button outlined onClick={onButtonClick}>
          <Icon iconName='IconLink' className='w-4' />
        </Button>
      </div>
      {error && <InputError error={error} className='!mt-0' />}
    </div>
  );
});

CursorInput.displayName = "CursorInput";

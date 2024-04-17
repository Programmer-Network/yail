import { FC } from "react";

import CharacterCounter from "Components/CharacterCounter";
import { IconInfo } from "Components/Icons";
import Tooltip from "Components/Tooltip";

import { InputHeaderProps } from "./types";

const InputHeader: FC<InputHeaderProps> = ({
  name,
  value,
  max,
  label,
  hint,
  type,
  required
}) => {
  if (!hint && !max && !label) {
    return null;
  }

  return (
    <div className='mb-2 flex items-center justify-between'>
      <div className='flex items-center gap-0.5'>
        {hint && name && (
          <Tooltip text={hint} id={name} place='right'>
            <IconInfo className='w-4 text-primary-text-color relative top-[1px] cursor-pointer' />
          </Tooltip>
        )}
        <div className='text-primary-text-color'>
          {label}
          {required && <span className='ml-1 text-rose-500'>*</span>}
        </div>
      </div>

      {typeof value === "string" && !!max && value && type !== "date" && (
        <CharacterCounter text={value} max={max} />
      )}
    </div>
  );
};

InputHeader.defaultProps = {
  name: "",
  value: "",
  max: 0,
  label: "",
  hint: "",
  type: "",
  required: false
};

export default InputHeader;

import { FC } from "react";

import CharacterCounter from "Components/CharacterCounter";
import { IconInfo } from "Components/Icons";
import Tooltip from "Components/Tooltip";

import { InputHeaderProps } from "./types";

const InputHeader: FC<InputHeaderProps> = (
  { name, value, max, label, hint, type, required } = {
    name: "",
    value: "",
    max: 0,
    label: "",
    hint: "",
    type: "",
    required: false
  }
) => {
  if (!hint && !max && !label) {
    return null;
  }

  return (
    <div className='yl-mb-2 yl-flex yl-items-center yl-justify-between'>
      <div className='yl-flex yl-items-center yl-gap-0.5'>
        {hint && name && (
          <Tooltip text={hint} id={name} place='right'>
            <IconInfo className='yl-w-4 yl-text-primary-text-color yl-relative yl-top-[1px] yl-cursor-pointer' />
          </Tooltip>
        )}
        <div className='yl-text-primary-text-color'>
          {label}
          {required && <span className='yl-ml-1 yl-text-red-500'>*</span>}
        </div>
      </div>

      {typeof value === "string" && !!max && value && type !== "date" && (
        <CharacterCounter text={value} max={max} />
      )}
    </div>
  );
};

export default InputHeader;

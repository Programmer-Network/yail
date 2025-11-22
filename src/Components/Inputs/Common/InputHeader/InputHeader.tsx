import { FC } from "react";

import { CharacterCounter } from "../../../CharacterCounter";
import { Icon } from "../../../Icon";
import { Tooltip } from "../../../Tooltip";
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
    <div className='yl:mb-2 yl:flex yl:items-center yl:justify-between'>
      <div className='yl:flex yl:items-center yl:gap-1'>
        {hint && name && (
          <Tooltip text={hint} id={name} place='top'>
            <Icon
              iconName='IconInfo'
              className='yl:text-text yl:relative yl:top-px yl:w-4 yl:cursor-pointer'
            />
          </Tooltip>
        )}
        <div className='yl:text-text'>
          {label}
          {required && <span className='yl:text-error yl:ml-1'>*</span>}
        </div>
      </div>

      {typeof value === "string" && !!max && value && type !== "date" && (
        <CharacterCounter text={value} max={max} />
      )}
    </div>
  );
};

export { InputHeader };

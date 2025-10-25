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
    <div className='mb-2 flex items-center justify-between'>
      <div className='flex items-center gap-1'>
        {hint && name && (
          <Tooltip text={hint} id={name} place='top'>
            <Icon
              iconName='IconInfo'
              className='text-text relative top-px w-4 cursor-pointer'
            />
          </Tooltip>
        )}
        <div className='text-text'>
          {label}
          {required && <span className='text-error ml-1'>*</span>}
        </div>
      </div>

      {typeof value === "string" && !!max && value && type !== "date" && (
        <CharacterCounter text={value} max={max} />
      )}
    </div>
  );
};

export { InputHeader };

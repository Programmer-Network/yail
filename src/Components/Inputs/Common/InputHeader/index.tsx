import { FC } from "react";

import CharacterCounter from "../../../CharacterCounter";
import Icon from "../../../Icon";
import Tooltip from "../../../Tooltip";
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
      <div className='flex items-center gap-0.5'>
        {hint && name && (
          <Tooltip text={hint} id={name} place='right'>
            <Icon
              iconName='IconInfo'
              className='w-4 text-text relative top-[1px] cursor-pointer'
            />
          </Tooltip>
        )}
        <div className='text-text'>
          {label}
          {required && <span className='ml-1 text-error'>*</span>}
        </div>
      </div>

      {typeof value === "string" && !!max && value && type !== "date" && (
        <CharacterCounter text={value} max={max} />
      )}
    </div>
  );
};

export default InputHeader;

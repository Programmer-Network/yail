import { FC } from "react";

import CharacterCounter from "Components/CharacterCounter";
import { IconQuestionMark } from "Components/Icons";
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
      <div className='flex items-center gap-1'>
        {hint && name && (
          <Tooltip text={hint} id={name} place='right'>
            <IconQuestionMark className='w-4 text-primary-text-color' />
          </Tooltip>
        )}
        <div className='text-sm text-primary-text-color'>
          {label}
          {required && <span className='text-rose-500 ml-1'>*</span>}
        </div>
      </div>

      {!!max && value && type !== "date" && (
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

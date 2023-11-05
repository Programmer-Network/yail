import { FC } from 'react';
import { InputHeaderProps } from './types';
import Tooltip from '../../../Tooltip';
import CharacterCounter from '../../../CharacterCounter';
import { QuestionMarkIcon } from '../../../Icons';

const InputHeader: FC<InputHeaderProps> = ({
  name,
  value,
  max,
  label,
  hint,
  type,
  required,
}) => {
  if (!hint && !max && !label) {
    return null;
  }

  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-1">
        {hint && name && (
          <Tooltip text={hint} id={name} place="right">
            <QuestionMarkIcon className="w-4 text-primary-text-color" />
          </Tooltip>
        )}
        <div className="text-sm text-primary-text-color">
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </div>
      </div>

      {!!max && value && type !== 'date' && (
        <CharacterCounter text={value} max={max} />
      )}
    </div>
  );
};

InputHeader.defaultProps = {
  name: '',
  value: '',
  max: 0,
  label: '',
  hint: '',
  type: '',
  required: false,
};

export default InputHeader;

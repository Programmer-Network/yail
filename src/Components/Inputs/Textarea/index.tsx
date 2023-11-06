import classNames from 'classnames';
import { InputError, InputHeader } from '..';
import { ChangeEvent, FC } from 'react';
import { ITextareaProps } from './types';

const Textarea: FC<ITextareaProps> = props => {
  const { rows = 3, className } = props;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!onChange) {
      throw new Error('💣 Textarea is missing onChange handler 💣');
    }

    if (!e.target.name) {
      throw new Error('💣 Textarea is missing a "name" prop 💣');
    }

    props.onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div className={classNames(props.inputWrapperClassName)}>
      <InputHeader {...props} />
      <textarea
        {...props}
        rows={rows}
        onChange={onChange}
        className={classNames(
          'bg w-full border-2 border-primary-text-color rounded-sm bg-transparent p-4 hover:border-primary focus:border-primary focus:shadow-none focus:outline-none focus:ring-transparent text-primary-text-color dark:text-primary-text-color',
          className
        )}
      />
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default Textarea;

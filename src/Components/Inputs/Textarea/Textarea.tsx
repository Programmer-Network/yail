import classNames from "classnames";
import { ChangeEvent, FC } from "react";

import { InputError, InputHeader } from "..";
import { ITextareaProps } from "./types";

const Textarea: FC<ITextareaProps> = props => {
  const { rows = 3, className } = props;

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!onChange) {
      throw new Error("💣 Textarea is missing onChange handler 💣");
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
          "bg border-border text-text hover:border-border focus:border-border focus:ring-3-transparent w-full rounded-md border-2 bg-transparent p-4 focus:shadow-none focus:outline-hidden",
          className
        )}
      />
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default Textarea;

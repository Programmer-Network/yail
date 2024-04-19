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
          "bg yl-w-full yl-rounded-md yl-border-2 yl-border-primary-text-color yl-bg-transparent yl-p-4 yl-text-primary-text-color hover:yl-border-primary focus:yl-border-primary focus:yl-shadow-none focus:yl-outline-none focus:yl-ring-transparent",
          className
        )}
      />
      {props.error && <InputError error={props.error} />}
    </div>
  );
};

export default Textarea;

import classNames from "classnames";
import { FC } from "react";

import { ITagProps } from "./types";

const Tag: FC<ITagProps> = ({ name, className = null, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "yl:text-primary yl:hover:border-border yl:hover:text-text yl:rounded-md yl:bg-transparent yl:text-base yl:last:mr-0",
        className,
        {
          "yl:cursor-pointer": onClick
        }
      )}
    >
      <span>#{name}</span>
    </div>
  );
};

export { Tag };

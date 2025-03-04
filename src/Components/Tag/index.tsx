import classNames from "classnames";
import { FC } from "react";

import { ITagProps } from "./types";

const Tag: FC<ITagProps> = ({ name, className = null, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "yl:rounded-md yl:bg-transparent yl:text-base yl:text-primary yl:last:mr-0 yl:hover:border-border yl:hover:text-text",
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

export default Tag;

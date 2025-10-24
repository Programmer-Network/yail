import classNames from "classnames";
import { FC } from "react";

import { ITagProps } from "./types";

const Tag: FC<ITagProps> = ({ name, className = null, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "text-primary hover:border-border hover:text-text rounded-md bg-transparent text-base last:mr-0",
        className,
        {
          "cursor-pointer": onClick
        }
      )}
    >
      <span>#{name}</span>
    </div>
  );
};

export default Tag;

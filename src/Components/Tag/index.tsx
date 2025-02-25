import classNames from "classnames";
import { FC } from "react";

import { ITagProps } from "./types";

const Tag: FC<ITagProps> = ({ name, className = null, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "yl-rounded-md yl-bg-transparent yl-text-base yl-text-primary last:yl-mr-0 hover:yl-border-border hover:yl-text-text",
        className,
        {
          "yl-cursor-pointer": onClick
        }
      )}
    >
      <span>#{name}</span>
    </div>
  );
};

export default Tag;

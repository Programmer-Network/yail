import classNames from "classnames";
import { FC } from "react";

import { ITagProps } from "./types";

const Tag: FC<ITagProps> = ({ name, className = null, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "rounded-md bg-transparent text-base text-primary last:mr-0 hover:border-primary hover:text-primary",
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

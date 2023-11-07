import { ArrayUtils } from "Utils";
import classNames from "classnames";
import { FC } from "react";

import { IDividerProps } from "./types";

const Divider: FC<IDividerProps> = ({
  className,
  classes = [
    "bg-primary-text-color",
    "bg-primary-text-color",
    "bg-primary-text-color"
  ]
}) => {
  if (classes && !Array.isArray(classes)) {
    throw new Error('💣 Divider: "classes" must be an array 💣 of class names');
  }

  return (
    <div className={classNames("mx-auto flex justify-center gap-1", className)}>
      {ArrayUtils.shuffle(classes).map((bg, index) => (
        <div key={index} className={classNames("block h-[2px] w-28", bg)} />
      ))}
    </div>
  );
};

export default Divider;

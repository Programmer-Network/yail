import { ArrayUtils } from "Utils";
import classNames from "classnames";
import { FC } from "react";

import { IDividerProps } from "./types";

const Divider: FC<IDividerProps> = ({ className, classes }) => {
  if (classes && !Array.isArray(classes)) {
    throw new Error('💣 Divider: "classes" must be an array 💣 of class names');
  }

  return (
    <div
      data-testid='divider'
      className={classNames("mx-auto flex justify-center gap-1", className)}
    >
      {Array.isArray(classes) &&
        ArrayUtils.shuffle(classes).map((bg, index) => (
          <div
            key={index}
            className={classNames("block h-[1px] w-28", bg)}
            data-testid={`divider-child-${index}`}
          />
        ))}
    </div>
  );
};

Divider.defaultProps = {
  classes: [
    "bg-primary-text-color",
    "bg-primary-text-color",
    "bg-primary-text-color"
  ]
};

export * from "./types";
export default Divider;

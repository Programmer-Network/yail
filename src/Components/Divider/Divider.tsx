import classNames from "classnames";
import { FC } from "react";

import { ArrayUtils } from "../../Utils";
import { IDividerProps } from "./types";

const Divider: FC<IDividerProps> = (
  { className, classes } = {
    classes: ["yl:bg-text", "yl:bg-text", "yl:bg-text"]
  }
) => {
  if (classes && !Array.isArray(classes)) {
    throw new Error('💣 Divider: "classes" must be an array 💣 of class names');
  }

  return (
    <div
      data-testid='divider'
      className={classNames(
        "yl:mx-auto yl:flex yl:justify-center yl:gap-1",
        className
      )}
    >
      {Array.isArray(classes) &&
        ArrayUtils.shuffle(classes).map((bg, index) => (
          <div
            // eslint-disable-next-line @eslint-react/no-array-index-key -- decorative bars with no identity; list is fixed length and never reorders after shuffle
            key={index}
            className={classNames("yl:block yl:h-[2px] yl:w-28", bg)}
            data-testid={`divider-child-${index}`}
          />
        ))}
    </div>
  );
};

export { Divider };

import classNames from "classnames";
import { FC } from "react";

import { ICharacterCounterProps } from "./types";

const CharacterCounter: FC<ICharacterCounterProps> = (
  { text, max } = {
    text: "",
    max: 0
  }
) => {
  return (
    <div
      className={classNames("yl-flex yl-gap-1 yl-text-primary-text-color", {
        "!yl-text-rose-500": text.length > max
      })}
    >
      <span data-testid='current-length'>{text.length}</span>
      <span data-testid='separator'>/</span>
      <span data-testid='max-length'>{max}</span>
    </div>
  );
};

export default CharacterCounter;

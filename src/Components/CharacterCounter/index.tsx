import classNames from "classnames";
import { FC } from "react";

import { ICharacterCounterProps } from "./types";

const CharacterCounter: FC<ICharacterCounterProps> = ({ text, max }) => {
  return (
    <div
      className={classNames("flex gap-1 text-xs text-primary-text-color", {
        "!text-rose-500": text.length > max
      })}
    >
      <span data-testid='current-length'>{text.length}</span>
      <span data-testid='separator'>/</span>
      <span data-testid='max-length'>{max}</span>
    </div>
  );
};

CharacterCounter.defaultProps = {
  text: "",
  max: 0
};

export default CharacterCounter;

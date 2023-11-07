import classNames from "classnames";
import { FC } from "react";

import { ICharacterCounterProps } from "./types";

const CharacterCounter: FC<ICharacterCounterProps> = ({ text, max }) => {
  const getCounter = () => {
    return (
      <>
        <span>{text.length}</span>
        <span>/</span>
        <span>{max}</span>
      </>
    );
  };

  return (
    <div
      className={classNames("flex gap-1 text-xs text-primary-text-color", {
        "!text-rose-500": text.length > max
      })}
    >
      {getCounter()}
    </div>
  );
};

CharacterCounter.defaultProps = {
  text: "",
  max: 0
};

export default CharacterCounter;

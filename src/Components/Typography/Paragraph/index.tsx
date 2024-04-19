import classNames from "classnames";
import { FC, ReactElement } from "react";

import {
  TIPTAP_TOOLBAR_ITEMS,
  toolbarItemToClassName
} from "Components/Inputs/Tiptap/constants";

import { IParagraphProps } from "./types";

const Paragraph: FC<IParagraphProps> = ({
  children,
  className,
  onClick,
  margin
}): ReactElement => {
  return (
    <p
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.PARAGRAPH].classes,
        className,
        {
          "!yl-my-0": margin === "none",
          "yl-mb-4 !yl-mt-0": margin === "bottom",
          "yl-mt-4 !yl-mb-0": margin === "top",
          "!yl-my-4": margin === "both"
        }
      )}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;

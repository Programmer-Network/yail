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
          "!my-0": margin === "none",
          "mb-4 !mt-0": margin === "bottom",
          "mt-4 !mb-0": margin === "top",
          "!my-4": margin === "both"
        }
      )}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;

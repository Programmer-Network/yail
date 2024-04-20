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
  onClick
}): ReactElement => {
  return (
    <p
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.PARAGRAPH].classes,
        className
      )}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;

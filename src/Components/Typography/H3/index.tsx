import classNames from "classnames";
import { FC } from "react";

import {
  TIPTAP_TOOLBAR_ITEMS,
  toolbarItemToClassName
} from "Components/Inputs/Tiptap/constants";

import { IH3Props } from "./types";

const H3: FC<IH3Props> = ({ children, className, onClick }) => {
  return (
    <h3
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_3].classes,
        className
      )}
      onClick={onClick}
    >
      {children}
    </h3>
  );
};

export default H3;

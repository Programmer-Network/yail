import classNames from "classnames";
import { FC } from "react";

import {
  TIPTAP_TOOLBAR_ITEMS,
  toolbarItemToClassName
} from "Components/Inputs/Tiptap/constants";

import { IH5Props } from "./types";

const H5: FC<IH5Props> = ({ children, className, onClick }) => {
  return (
    <h5
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_5].classes,
        className
      )}
      onClick={onClick}
    >
      {children}
    </h5>
  );
};

export default H5;

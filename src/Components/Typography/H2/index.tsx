import classNames from "classnames";
import { FC } from "react";

import {
  TIPTAP_TOOLBAR_ITEMS,
  toolbarItemToClassName
} from "Components/Inputs/Tiptap/constants";

import { IH2Props } from "./types";

const H2: FC<IH2Props> = ({ children, className, onClick }) => {
  return (
    <h2
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_2].classes,
        className
      )}
      onClick={onClick}
    >
      {children}
    </h2>
  );
};

export default H2;

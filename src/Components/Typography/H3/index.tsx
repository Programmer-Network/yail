import classNames from "classnames";
import { FC } from "react";

import {
  TIPTAP_TOOLBAR_ITEMS,
  toolbarItemToClassName
} from "Components/Inputs/Tiptap/constants";

import { IH3Props } from "./types";

const H3: FC<IH3Props> = ({ children, className, onClick, margin }) => {
  return (
    <h3
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_3].classes,
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
    </h3>
  );
};

export default H3;

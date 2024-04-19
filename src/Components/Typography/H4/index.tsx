import classNames from "classnames";
import { FC } from "react";

import {
  TIPTAP_TOOLBAR_ITEMS,
  toolbarItemToClassName
} from "Components/Inputs/Tiptap/constants";

import { IH4Props } from "./types";

const H4: FC<IH4Props> = ({ children, className, onClick, margin }) => {
  return (
    <h4
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_4].classes,
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
    </h4>
  );
};

export default H4;

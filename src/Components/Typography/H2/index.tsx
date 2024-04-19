import classNames from "classnames";
import { FC } from "react";

import {
  TIPTAP_TOOLBAR_ITEMS,
  toolbarItemToClassName
} from "Components/Inputs/Tiptap/constants";

import { IH2Props } from "./types";

const H2: FC<IH2Props> = ({ children, className, onClick, margin }) => {
  return (
    <h2
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_2].classes,
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
    </h2>
  );
};

export default H2;

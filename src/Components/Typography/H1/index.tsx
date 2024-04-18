import classNames from "classnames";
import { FC } from "react";

import {
  TIPTAP_TOOLBAR_ITEMS,
  toolbarItemToClassName
} from "Components/Inputs/Tiptap/constants";

import { IH1Props } from "./types";

const H1: FC<IH1Props> = ({ children, className, onClick, margin }) => {
  return (
    <h1
      className={classNames(
        toolbarItemToClassName[TIPTAP_TOOLBAR_ITEMS.HEADING_1].classes,
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
    </h1>
  );
};

export default H1;

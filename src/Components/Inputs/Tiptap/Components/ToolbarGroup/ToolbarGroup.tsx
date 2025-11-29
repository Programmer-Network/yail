import classNames from "classnames";
import { FC } from "react";

import { IToolbarGroupProps } from "./ToolbarGroup.types";

const ToolbarGroup: FC<IToolbarGroupProps> = ({
  children,
  showSeparator = false
}) => {
  const groupClasses = classNames("yl:flex yl:items-center", {
    "yl:border-border/60 yl:border-r yl:pr-2 yl:mr-2": showSeparator
  });

  return <div className={groupClasses}>{children}</div>;
};

ToolbarGroup.displayName = "ToolbarGroup";

export { ToolbarGroup };

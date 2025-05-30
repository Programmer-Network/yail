import classNames from "classnames";
import { FC } from "react";

import Button from "Components/Button";
import Icon from "Components/Icon";

import { IViewToggleProps } from "./types";

const ViewToggle: FC<IViewToggleProps> = ({
  currentView,
  onViewChange,
  className
}) => {
  return (
    <div
      className={classNames(
        "yl:flex yl:gap-1 yl:p-1 yl:bg-background yl:border yl:border-border yl:rounded-lg",
        className
      )}
    >
      <Button
        outlined={currentView !== "card"}
        onClick={() => onViewChange("card")}
      >
        <div className='yl:flex yl:gap-1 yl:items-center'>
          <Icon iconName='IconPosts' className='yl:w-4 yl:h-4' />
          Cards
        </div>
      </Button>
      <Button
        outlined={currentView !== "table"}
        onClick={() => onViewChange("table")}
      >
        <div className='yl:flex yl:gap-1 yl:items-center'>
          <Icon iconName='ListUnorderedOutline' className='yl:w-4 yl:h-4' />
          Table
        </div>
      </Button>
    </div>
  );
};

export default ViewToggle;

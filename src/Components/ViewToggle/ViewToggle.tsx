import classNames from "classnames";
import { FC } from "react";

import { Button } from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import { Icon } from "../Icon";
import { IViewToggleProps } from "./types";

const ViewToggle: FC<IViewToggleProps> = ({
  currentView,
  onViewChange,
  className
}) => {
  return (
    <div
      className={classNames("yl:flex yl:gap-1", className)}
      data-testid='view-toggle'
    >
      <Button
        variant={
          currentView === "card"
            ? ButtonVariantEnum.PRIMARY
            : ButtonVariantEnum.SECONDARY
        }
        onClick={() => onViewChange("card")}
      >
        <div className='yl:flex yl:items-center yl:gap-1'>
          <Icon iconName='IconPosts' className='yl:h-6 yl:w-6' />
        </div>
      </Button>
      <Button
        variant={
          currentView === "table"
            ? ButtonVariantEnum.PRIMARY
            : ButtonVariantEnum.SECONDARY
        }
        onClick={() => onViewChange("table")}
      >
        <div className='yl:flex yl:items-center yl:gap-1'>
          <Icon iconName='ListUnorderedOutline' className='yl:h-6 yl:w-6' />
        </div>
      </Button>
    </div>
  );
};

export { ViewToggle };

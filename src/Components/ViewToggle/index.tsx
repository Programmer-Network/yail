import classNames from "classnames";
import { FC } from "react";

import Button from "Components/Button";
import { ButtonVariantEnum } from "Components/Button/types";
import Icon from "Components/Icon";

import { IViewToggleProps } from "./types";

const ViewToggle: FC<IViewToggleProps> = ({
  currentView,
  onViewChange,
  className
}) => {
  return (
    <div className={classNames("yl:flex yl:gap-1", className)}>
      <Button
        variant={
          currentView === "card"
            ? ButtonVariantEnum.PRIMARY
            : ButtonVariantEnum.SECONDARY
        }
        outlined
        onClick={() => onViewChange("card")}
      >
        <div className='yl:flex yl:gap-1 yl:items-center'>
          <Icon iconName='IconPosts' className='yl:w-6 yl:h-6' />
        </div>
      </Button>
      <Button
        variant={
          currentView === "table"
            ? ButtonVariantEnum.PRIMARY
            : ButtonVariantEnum.SECONDARY
        }
        outlined
        onClick={() => onViewChange("table")}
      >
        <div className='yl:flex yl:gap-1 yl:items-center'>
          <Icon iconName='ListUnorderedOutline' className='yl:w-6 yl:h-6' />
        </div>
      </Button>
    </div>
  );
};

export default ViewToggle;

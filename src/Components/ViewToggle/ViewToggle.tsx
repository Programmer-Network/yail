import classNames from "classnames";
import { FC } from "react";

import Button from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import Icon from "../Icon";
import { IViewToggleProps } from "./types";

const ViewToggle: FC<IViewToggleProps> = ({
  currentView,
  onViewChange,
  className
}) => {
  return (
    <div
      className={classNames("flex gap-1", className)}
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
        <div className='flex items-center gap-1'>
          <Icon iconName='IconPosts' className='h-6 w-6' />
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
        <div className='flex items-center gap-1'>
          <Icon iconName='ListUnorderedOutline' className='h-6 w-6' />
        </div>
      </Button>
    </div>
  );
};

export default ViewToggle;

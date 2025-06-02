import { MouseEvent, type ReactElement } from "react";
import { Placement } from "tippy.js";

import Dropdown from "Components/Dropdown";
import Icon from "Components/Icon";

import { ItemActionType } from "./types";

const ItemActions = <T,>({
  item,
  onAction,
  placement,
  options = [
    {
      icon: {
        iconName: "IconEdit",
        className: "yl:w-4",
        dataTestId: "icon-iconedit"
      },
      value: "edit",
      onClick: (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        onAction?.(ItemActionType.Edit, item);
      }
    },

    {
      icon: {
        iconName: "IconDeleteBin",
        className: "yl:w-4",
        dataTestId: "icon-icondeletebin"
      },
      value: "delete",
      onClick: (e: MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();

        onAction?.(ItemActionType.Delete, item);
      }
    }
  ]
}: {
  item: T;
  options?: {
    icon: {
      iconName: string;
      className?: string;
      dataTestId?: string;
    };
    value: string;
    onClick: (e: MouseEvent) => void;
  }[];
  onAction?: (action: ItemActionType, item: T) => void;
  placement?: Placement;
}): ReactElement => {
  return (
    <Dropdown
      placement={placement}
      options={options}
      buttonContent={
        <Icon
          iconName='IconDots'
          className='yl:w-6 yl:text-text/60 yl:hover:cursor-pointer yl:hover:text-text'
        />
      }
    />
  );
};

export default ItemActions;

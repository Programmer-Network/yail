import { MouseEvent, type ReactElement } from "react";
import { Placement } from "tippy.js";

import Dropdown from "../Dropdown";
import Icon from "../Icon";
import { ItemActionType } from "./types";

const ItemActions = <T,>({
  item,
  onAction,
  placement,
  options = [
    {
      icon: {
        iconName: "IconEdit",
        className: "w-4",
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
        className: "w-4",
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
          className='text-text/60 hover:text-text w-6 hover:cursor-pointer'
        />
      }
    />
  );
};

export default ItemActions;

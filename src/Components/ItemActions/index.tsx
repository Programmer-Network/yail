import { type ReactElement } from "react";
import { Placement } from "tippy.js";

import Dropdown from "Components/Dropdown";
import Icon from "Components/Icon";

import { ItemActionType } from "./types";

const ItemActions = <T,>({
  item,
  onAction,
  placement
}: {
  item: T;
  onAction?: (action: ItemActionType, item: T) => void;
  placement?: Placement;
}): ReactElement => {
  return (
    <Dropdown
      placement={placement}
      options={[
        {
          icon: (
            <Icon
              iconName='IconEdit'
              className='yl:w-4'
              data-testid='icon-iconedit'
            />
          ),
          value: "edit",
          onClick: e => {
            e.stopPropagation();
            e.preventDefault();

            onAction?.(ItemActionType.Edit, item);
          }
        },

        {
          icon: (
            <Icon
              iconName='IconDeleteBin'
              className='yl:w-4'
              data-testid='icon-icondeletebin'
            />
          ),
          value: "delete",
          onClick: e => {
            e.stopPropagation();
            e.preventDefault();

            onAction?.(ItemActionType.Delete, item);
          }
        }
      ]}
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

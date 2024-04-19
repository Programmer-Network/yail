import Dropdown from "Components/Dropdown";
import Icon from "Components/Icon";

import { ItemActionType } from "./types";

const ItemActions = <T,>({
  item,
  onAction
}: {
  item: T;
  onAction?: (action: ItemActionType, item: T) => void;
}): JSX.Element => {
  return (
    <Dropdown
      options={[
        {
          icon: (
            <Icon
              iconName='IconEdit'
              className='yl-w-4'
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
              className='yl-w-4'
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
          className='yl-w-6 yl-text-primary-text-color/60 hover:yl-cursor-pointer hover:yl-text-primary'
        />
      }
    />
  );
};

export default ItemActions;

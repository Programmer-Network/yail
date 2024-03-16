import { FC } from "react";

import Icon from "Components/Icon";

import { ITiptapActions, TiptapActionsEnum } from "../../types";

const TiptapActions: FC<{
  actions: ITiptapActions;
}> = ({ actions }) => {
  const { isConfirming, buttons, onAction } = actions;

  return (
    <div className=' flex justify-end'>
      <div className='rounded-md border-2 border-primary-text-color/40 bg-primary-background-color p-1'>
        <div className='flex items-center gap-1 px-1'>
          {buttons.includes(TiptapActionsEnum.CONFIRM) && (
            <Icon
              onClick={() => onAction(TiptapActionsEnum.CONFIRM)}
              iconName={!isConfirming ? "IconCheck" : "IconSpinner"}
              className='w-8 cursor-pointer fill-primary text-primary hover:text-primary/90'
            />
          )}
          {buttons.includes(TiptapActionsEnum.CANCEL) && (
            <Icon
              onClick={() => onAction(TiptapActionsEnum.CANCEL)}
              iconName='IconCloseCircle'
              className='w-8 cursor-pointer text-primary-text-color/60 hover:text-primary-text-color'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TiptapActions;

import { FC } from "react";

import Icon from "Components/Icon";

import { TiptapActionsEnum } from "../../types";

const TiptapActions: FC<{
  onAction: (action: TiptapActionsEnum) => void;
}> = ({ onAction }) => {
  return (
    <div className='flex justify-end'>
      <div className='absolute bottom-[-26px] right-4 rounded-md border-2 border-primary-text-color/40 bg-primary-background-color p-1'>
        <div className='flex items-center gap-1 px-1'>
          <Icon
            onClick={() => onAction(TiptapActionsEnum.CONFIRM)}
            iconName='IconCheck'
            className='w-10 cursor-pointer text-primary hover:text-primary/90'
          />
          <Icon
            onClick={() => onAction(TiptapActionsEnum.CANCEL)}
            iconName='IconCloseCircle'
            className='w-10 cursor-pointer text-primary-text-color/60 hover:text-primary-text-color'
          />
        </div>
      </div>
    </div>
  );
};

export default TiptapActions;

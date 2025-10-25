import classNames from "classnames";
import { FC } from "react";

import { Icon } from "../../../../Icon";
import { ITiptapActions, TiptapActionsEnum } from "../../types";

const TiptapActions: FC<{
  isEditorEmpty: boolean;
  actions: ITiptapActions;
}> = ({ isEditorEmpty, actions }) => {
  const { isConfirming, buttons, onAction } = actions;

  if (isEditorEmpty) {
    return null;
  }

  return (
    <div className='relative top-[2px] right-[-2px] flex justify-end'>
      <div className='border-border/40 bg-text/1 rounded-md rounded-tr-none rounded-bl-none border-2 border-r-0 border-b-0 p-1'>
        <div className='flex items-center'>
          {buttons.includes(TiptapActionsEnum.CANCEL) && (
            <Icon
              onClick={
                !isConfirming
                  ? () => onAction(TiptapActionsEnum.CANCEL)
                  : undefined
              }
              iconName='IconCloseCircle'
              className={classNames("text-text/20 w-10", {
                "text-text/30 hover:text-text cursor-pointer": !isConfirming
              })}
            />
          )}
          {buttons.includes(TiptapActionsEnum.CONFIRM) && (
            <Icon
              onClick={
                !isConfirming
                  ? () => onAction(TiptapActionsEnum.CONFIRM)
                  : undefined
              }
              iconName={!isConfirming ? "IconCheck" : "IconSpinner"}
              className={classNames("w-10", {
                "cursor-pointer": !isConfirming,
                "text-success": !isEditorEmpty && !isConfirming,
                "fill-primary h-7 w-7": isConfirming
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TiptapActions;

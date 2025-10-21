import classNames from "classnames";
import { FC } from "react";

import Icon from "../../../../Icon";
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
    <div className='flex justify-end relative top-[2px] right-[-2px]'>
      <div className='rounded-md rounded-tr-none rounded-bl-none border-2 border-border/40 p-1 border-r-0 border-b-0 bg-text/1'>
        <div className='flex items-center'>
          {buttons.includes(TiptapActionsEnum.CANCEL) && (
            <Icon
              onClick={
                !isConfirming
                  ? () => onAction(TiptapActionsEnum.CANCEL)
                  : undefined
              }
              iconName='IconCloseCircle'
              className={classNames("w-10 text-text/20", {
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
                " cursor-pointer": !isConfirming,
                "text-success": !isEditorEmpty && !isConfirming,
                "fill-primary w-7 h-7": isConfirming
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TiptapActions;

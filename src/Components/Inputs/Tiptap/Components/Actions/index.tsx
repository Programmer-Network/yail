import classNames from "classnames";
import { FC } from "react";

import Icon from "Components/Icon";

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
    <div className='yl:flex yl:justify-end yl:relative yl:top-[2px] yl:right-[-2px]'>
      <div className='yl:rounded-md yl:rounded-tr-none yl:rounded-bl-none yl:border-2 yl:border-border/40 yl:p-1 yl:border-r-0 yl:border-b-0 yl:bg-text/1'>
        <div className='yl:flex yl:items-center'>
          {buttons.includes(TiptapActionsEnum.CANCEL) && (
            <Icon
              onClick={() => onAction(TiptapActionsEnum.CANCEL)}
              iconName='IconCloseCircle'
              className='yl:w-10 yl:cursor-pointer yl:text-text/30 yl:hover:text-text'
            />
          )}
          {buttons.includes(TiptapActionsEnum.CONFIRM) && (
            <Icon
              onClick={() => onAction(TiptapActionsEnum.CONFIRM)}
              iconName={!isConfirming ? "IconCheck" : "IconSpinner"}
              className={classNames(
                "yl:w-10 yl:cursor-pointer yl:fill-success",
                {
                  "yl:text-success": !isEditorEmpty
                }
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TiptapActions;

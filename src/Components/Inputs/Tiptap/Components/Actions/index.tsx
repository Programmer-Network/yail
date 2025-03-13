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
              onClick={
                !isConfirming
                  ? () => onAction(TiptapActionsEnum.CANCEL)
                  : undefined
              }
              iconName='IconCloseCircle'
              className={classNames("yl:w-10 yl:text-text/20", {
                "yl:text-text/30 yl:hover:text-text yl:cursor-pointer":
                  !isConfirming
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
              className={classNames("yl:w-10", {
                " yl:cursor-pointer": !isConfirming,
                "yl:text-success": !isEditorEmpty && !isConfirming,
                "yl:fill-primary yl:w-7 yl:h-7": isConfirming
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TiptapActions;

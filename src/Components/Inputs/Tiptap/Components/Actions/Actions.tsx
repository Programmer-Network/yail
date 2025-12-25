import classNames from "classnames";
import { FC } from "react";

import { Icon } from "../../../../Icon";
import { ITiptapActions, TiptapActionsEnum } from "../../Tiptap.types";

const TiptapActions: FC<{
  isEditorEmpty: boolean;
  actions: ITiptapActions;
}> = ({ isEditorEmpty, actions }) => {
  const { isConfirming, buttons, onAction } = actions;

  if (isEditorEmpty) {
    return null;
  }

  return (
    <div className='yl:relative yl:top-[2px] yl:right-[-2px] yl:flex yl:justify-end'>
      <div className='yl:border-border/40 yl:bg-text/1 yl:rounded-md yl:rounded-tr-none yl:rounded-bl-none yl:border yl:border-r-0 yl:border-b-0 yl:p-1'>
        <div className='yl:flex yl:items-center'>
          {buttons.includes(TiptapActionsEnum.CANCEL) && (
            <Icon
              onClick={
                !isConfirming
                  ? () => onAction(TiptapActionsEnum.CANCEL)
                  : undefined
              }
              iconName='IconCloseCircle'
              className={classNames("yl:text-text/20 yl:w-10", {
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
                "yl:cursor-pointer": !isConfirming,
                "yl:text-success": !isEditorEmpty && !isConfirming,
                "yl:fill-primary yl:h-7 yl:w-7": isConfirming
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TiptapActions;

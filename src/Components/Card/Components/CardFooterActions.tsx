import classNames from "classnames";
import { FC } from "react";

import Button from "../../Button";
import { ButtonVariantEnum } from "../../Button/types";
import { ICardAction } from "../types";

interface ICardFooterActions {
  footerActions?: ICardAction[];
}

const CardFooterActions: FC<ICardFooterActions> = ({ footerActions }) => {
  if (!footerActions || footerActions.length === 0) {
    return null;
  }

  const visibleActions = footerActions.filter(action => action.show !== false);

  if (visibleActions.length === 0) {
    return null;
  }

  return (
    <div className='flex items-center justify-between gap-2 mt-4 pt-4 border-t border-border/20 flex-wrap'>
      {visibleActions.map((action, idx) => (
        <Button
          key={action.label + idx}
          onClick={e => {
            e.stopPropagation();
            action.onClick(e);
          }}
          variant={
            action.variant === "danger"
              ? ButtonVariantEnum.ERROR
              : action.variant === "primary"
                ? ButtonVariantEnum.PRIMARY
                : ButtonVariantEnum.SECONDARY
          }
          outlined={action.variant === "outlined"}
          className={classNames("text-xs py-1 px-3 min-w-[75px]", {
            "flex-1": visibleActions.length <= 2,
            "flex-none": visibleActions.length > 2
          })}
          icon={
            action.icon
              ? {
                  iconName: action.icon.toString(),
                  iconPosition: "left"
                }
              : undefined
          }
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
};

export default CardFooterActions;

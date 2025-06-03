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
    <div className='yl:flex yl:items-center yl:justify-between yl:gap-2 yl:mt-4 yl:pt-4 yl:border-t yl:border-border/20 yl:flex-wrap'>
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
          className={classNames("yl:text-xs yl:py-1 yl:px-3 yl:min-w-[75px]", {
            "yl:flex-1": visibleActions.length <= 2,
            "yl:flex-none": visibleActions.length > 2
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

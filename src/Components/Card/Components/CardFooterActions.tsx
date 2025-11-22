import classNames from "classnames";
import { FC } from "react";

import { Button } from "../../Button";
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
    <div className='yl:border-border/20 yl:mt-4 yl:flex yl:flex-wrap yl:items-center yl:justify-between yl:gap-2 yl:border-t yl:pt-4'>
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
          className={classNames("yl:min-w-[75px] yl:px-3 yl:py-1 yl:text-xs", {
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

export { CardFooterActions };

import classNames from "classnames";
import { FC, useCallback } from "react";

import { Icon } from "../../../../Icon";
import { Tooltip } from "../../../../Tooltip";
import { getIconSize } from "../../constants";
import { IToolbarButtonProps } from "./ToolbarButton.types";

const ToolbarButton: FC<IToolbarButtonProps> = ({
  icon,
  onClick,
  isActive = false,
  isDisabled = false,
  tooltipText,
  tooltipId
}) => {
  const handleClick = useCallback(() => {
    if (!isDisabled) {
      onClick();
    }
  }, [isDisabled, onClick]);

  const buttonClasses = classNames(
    "yl:flex yl:items-center yl:justify-center yl:rounded yl:p-1 yl:transition-colors",
    {
      "yl:bg-primary/10 yl:text-primary": isActive,
      "yl:text-text yl:hover:bg-text/10": !isActive && !isDisabled,
      "yl:cursor-not-allowed yl:opacity-30": isDisabled,
      "yl:cursor-pointer": !isDisabled
    }
  );

  const button = (
    <button
      type='button'
      className={buttonClasses}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <Icon iconName={icon} className={getIconSize(icon)} />
    </button>
  );

  if (tooltipText) {
    return (
      <Tooltip
        id={tooltipId || `tooltip-${icon}`}
        text={tooltipText}
        delayShow={500}
      >
        {button}
      </Tooltip>
    );
  }

  return button;
};

ToolbarButton.displayName = "ToolbarButton";

export { ToolbarButton };

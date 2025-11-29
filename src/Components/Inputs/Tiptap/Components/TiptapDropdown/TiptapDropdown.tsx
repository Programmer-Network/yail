import classNames from "classnames";
import { FC, MouseEvent, useCallback } from "react";

import { Dropdown } from "../../../../Dropdown";
import { Icon } from "../../../../Icon";
import { Tooltip } from "../../../../Tooltip";
import { getIconSize } from "../../constants";
import { ITiptapDropdownProps } from "./TiptapDropdown.types";

const TiptapDropdown: FC<ITiptapDropdownProps> = ({
  triggerIcon,
  triggerLabel,
  items,
  isActive = false,
  disabled = false,
  showActiveIndicator = true,
  tooltipText,
  placement = "bottom-start"
}) => {
  const triggerClasses = classNames(
    "yl:flex yl:items-center yl:gap-0.5 yl:rounded yl:px-1 yl:py-1 yl:transition-colors",
    {
      "yl:bg-primary/10 yl:text-primary": isActive && showActiveIndicator,
      "yl:text-text yl:hover:bg-text/10": !isActive || !showActiveIndicator,
      "yl:cursor-not-allowed yl:opacity-50": disabled
    }
  );

  // Convert our items to Dropdown options format
  const dropdownOptions = items.map(item => ({
    icon: item.icon
      ? {
          iconName: item.icon,
          className: getIconSize(item.icon)
        }
      : undefined,
    value: item.label,
    onClick: (e: MouseEvent) => {
      if (!item.isDisabled) {
        item.onClick(e);
      }
    }
  }));

  const renderTriggerContent = useCallback(() => {
    return (
      <div className={triggerClasses}>
        <Icon iconName={triggerIcon} className={getIconSize(triggerIcon)} />
        {triggerLabel && (
          <span className='yl:text-sm yl:font-medium'>{triggerLabel}</span>
        )}
        <Icon iconName='DownSmallOutline' className='yl:h-3 yl:w-3' />
      </div>
    );
  }, [triggerClasses, triggerIcon, triggerLabel]);

  if (disabled) {
    return renderTriggerContent();
  }

  const dropdown = (
    <Dropdown
      buttonContent={renderTriggerContent()}
      buttonClassName='yl:p-0'
      options={dropdownOptions}
      placement={placement}
    />
  );

  if (tooltipText) {
    return (
      <Tooltip id={`tooltip-${triggerIcon}`} text={tooltipText} delayShow={500}>
        {dropdown}
      </Tooltip>
    );
  }

  return dropdown;
};

TiptapDropdown.displayName = "TiptapDropdown";

export { TiptapDropdown };

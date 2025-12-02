import classNames from "classnames";
import { FC } from "react";

import { Icon } from "../../../../../Icon";
import { getIconSize } from "../../../Tiptap.constants";
import { ISlashMenuItemProps } from "./SlashMenuItem.types";

const SlashMenuItem: FC<ISlashMenuItemProps> = ({
  item,
  isSelected,
  hasSubmenu,
  onClick,
  onMouseEnter,
  itemRef
}) => {
  const iconClassName = classNames(getIconSize(item.icon), "yl:text-text", {
    "yl:text-primary": isSelected
  });

  const labelClassName = classNames("yl:text-text yl:text-sm yl:font-medium", {
    "yl:text-primary": isSelected
  });

  const chevronClassName = classNames("yl:h-4 yl:w-4 yl:text-text/40", {
    "yl:text-primary": isSelected
  });

  const buttonClassName = classNames(
    "yl:flex yl:w-full yl:cursor-pointer yl:items-center yl:gap-3 yl:px-3 yl:py-2 yl:text-left yl:transition-colors",
    {
      "yl:bg-primary/10": isSelected,
      "yl:hover:bg-text/5": !isSelected
    }
  );

  const iconContainerClassName = classNames(
    "yl:border-border/30 yl:flex yl:h-10 yl:w-10 yl:shrink-0 yl:items-center yl:justify-center yl:rounded-md yl:border yl:bg-white/5",
    {
      "yl:border-primary/30 yl:bg-primary/5": isSelected
    }
  );

  return (
    <button
      ref={itemRef}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={buttonClassName}
    >
      <div className={iconContainerClassName}>
        <Icon iconName={item.icon} className={iconClassName} />
      </div>
      <div className='yl:flex yl:min-w-0 yl:flex-1 yl:flex-col'>
        <span className={labelClassName}>{item.label}</span>
        {item.description && (
          <span className='yl:text-text/60 yl:truncate yl:text-xs'>
            {item.description}
          </span>
        )}
      </div>
      {hasSubmenu && (
        <Icon iconName='ChevronRightOutline' className={chevronClassName} />
      )}
    </button>
  );
};

SlashMenuItem.displayName = "SlashMenuItem";

export { SlashMenuItem };

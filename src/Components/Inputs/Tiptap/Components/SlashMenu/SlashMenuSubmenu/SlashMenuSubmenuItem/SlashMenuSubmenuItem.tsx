import classNames from "classnames";
import { FC } from "react";

import { Icon } from "../../../../../../Icon";
import { ISlashMenuSubmenuItemProps } from "./SlashMenuSubmenuItem.types";

const SlashMenuSubmenuItem: FC<ISlashMenuSubmenuItemProps> = ({
  item,
  isSelected,
  onClick,
  onMouseEnter
}) => {
  const buttonClassName = classNames(
    "yl:flex yl:w-full yl:cursor-pointer yl:items-center yl:gap-2 yl:px-3 yl:py-2 yl:text-left yl:transition-colors",
    {
      "yl:bg-primary/10": isSelected,
      "yl:hover:bg-text/5": !isSelected
    }
  );

  const iconClassName = classNames("yl:h-4 yl:w-4 yl:text-text", {
    "yl:text-primary": isSelected
  });

  const labelClassName = classNames("yl:text-text yl:text-sm", {
    "yl:text-primary": isSelected
  });

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={buttonClassName}
    >
      <Icon iconName={item.icon} className={iconClassName} />
      <span className={labelClassName}>{item.label}</span>
    </button>
  );
};

SlashMenuSubmenuItem.displayName = "SlashMenuSubmenuItem";

export { SlashMenuSubmenuItem };

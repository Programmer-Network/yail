import { FC } from "react";

import { SlashMenuItem } from "../../SlashMenuItem";
import { ISlashMenuListContentItemProps } from "./SlashMenuListContentItem.types";

const SlashMenuListContentItem: FC<ISlashMenuListContentItemProps> = ({
  item,
  flatIdx,
  selectedIndex,
  onItemClick,
  onItemMouseEnter,
  itemRef
}) => {
  const isSelected = flatIdx === selectedIndex;
  const hasSubmenu = Boolean(item.submenu && item.submenu.length > 0);

  return (
    <SlashMenuItem
      item={item}
      isSelected={isSelected}
      hasSubmenu={hasSubmenu}
      onClick={onItemClick}
      onMouseEnter={onItemMouseEnter}
      itemRef={itemRef}
    />
  );
};

SlashMenuListContentItem.displayName = "SlashMenuListContentItem";

export { SlashMenuListContentItem };

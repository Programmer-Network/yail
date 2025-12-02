import { FC } from "react";

import { useSlashMenuSubmenu } from "./SlashMenuSubmenu.hooks";
import { ISlashMenuSubmenuProps } from "./SlashMenuSubmenu.types";
import { SlashMenuSubmenuItem } from "./SlashMenuSubmenuItem";

const SlashMenuSubmenu: FC<ISlashMenuSubmenuProps> = ({
  items,
  selectedIndex,
  onItemClick,
  onItemMouseEnter
}) => {
  const { createClickHandler, createMouseEnterHandler } = useSlashMenuSubmenu({
    onItemClick,
    onItemMouseEnter
  });

  return (
    <div
      className='yl:bg-background yl:border-border/40 yl:flex yl:w-48 yl:flex-col yl:overflow-y-auto yl:rounded-lg yl:border-2 yl:shadow-xl'
      style={{ maxHeight: "300px" }}
    >
      {items.map((item, index) => (
        <SlashMenuSubmenuItem
          key={item.id}
          item={item}
          isSelected={index === selectedIndex}
          onClick={createClickHandler(index)}
          onMouseEnter={createMouseEnterHandler(index)}
        />
      ))}
    </div>
  );
};

SlashMenuSubmenu.displayName = "SlashMenuSubmenu";

export { SlashMenuSubmenu };

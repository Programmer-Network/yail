import { forwardRef, useImperativeHandle } from "react";

import { useSlashMenuList } from "../SlashMenu.hooks";
import { SlashMenuSubmenu } from "../SlashMenuSubmenu";
import { useSlashMenuListHandlers } from "./SlashMenuList.hooks";
import {
  ISlashMenuListHandle,
  ISlashMenuListProps
} from "./SlashMenuList.types";
import { SlashMenuListContentItem } from "./SlashMenuListContentItem";
import { SlashMenuListEmpty } from "./SlashMenuListEmpty";

const SlashMenuList = forwardRef<ISlashMenuListHandle, ISlashMenuListProps>(
  (props, ref) => {
    const { items, command } = props;

    const {
      selectedIndex,
      submenuIndex,
      activeSubmenu,
      menuRef,
      renderGroups,
      isEmpty,
      handleUpArrow,
      handleDownArrow,
      handleEnter,
      handleEscape,
      handleRightArrow,
      handleLeftArrow,
      handleItemClick,
      handleItemMouseEnter,
      handleSubmenuItemClick,
      handleSubmenuItemMouseEnter,
      createItemRef
    } = useSlashMenuList({ items, command });

    const {
      createItemClickHandler,
      createItemMouseEnterHandler,
      handleSubmenuMouseEnter,
      handleSubmenuMouseLeave
    } = useSlashMenuListHandlers({
      handleItemClick,
      handleItemMouseEnter
    });

    useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }) => {
        if (event.key === "ArrowUp") {
          handleUpArrow();
          return true;
        }

        if (event.key === "ArrowDown") {
          handleDownArrow();
          return true;
        }

        if (event.key === "ArrowRight") {
          handleRightArrow();
          return true;
        }

        if (event.key === "ArrowLeft") {
          handleLeftArrow();
          return true;
        }

        if (event.key === "Enter") {
          handleEnter();
          return true;
        }

        if (event.key === "Escape" && activeSubmenu !== null) {
          handleEscape();
          return true;
        }

        return false;
      }
    }));

    if (isEmpty) {
      return <SlashMenuListEmpty />;
    }

    return (
      <div className='yl:flex yl:items-start yl:gap-1'>
        <div
          ref={menuRef}
          data-slash-menu
          className='yl:bg-background yl:border-border/40 yl:flex yl:w-72 yl:flex-col yl:overflow-y-auto yl:rounded-lg yl:border yl:shadow-xl'
          style={{ maxHeight: "300px" }}
        >
          {renderGroups.map(({ group, items: groupItems }) => (
            <div key={group}>
              {groupItems.map(({ item, flatIdx }) => (
                <SlashMenuListContentItem
                  key={`${item.id}-${flatIdx}`}
                  item={item}
                  flatIdx={flatIdx}
                  selectedIndex={selectedIndex}
                  onItemClick={createItemClickHandler(flatIdx)}
                  onItemMouseEnter={createItemMouseEnterHandler(flatIdx)}
                  itemRef={createItemRef(flatIdx)}
                />
              ))}
            </div>
          ))}
        </div>

        {activeSubmenu && (
          <div
            onMouseEnter={handleSubmenuMouseEnter}
            onMouseLeave={handleSubmenuMouseLeave}
          >
            <SlashMenuSubmenu
              items={activeSubmenu}
              selectedIndex={submenuIndex}
              onItemClick={handleSubmenuItemClick}
              onItemMouseEnter={handleSubmenuItemMouseEnter}
            />
          </div>
        )}
      </div>
    );
  }
);

SlashMenuList.displayName = "SlashMenuList";

export { SlashMenuList };

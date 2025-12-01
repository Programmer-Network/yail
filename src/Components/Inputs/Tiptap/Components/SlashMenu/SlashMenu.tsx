import classNames from "classnames";
import { forwardRef, useImperativeHandle } from "react";

import { Icon } from "../../../../Icon";
import { getIconSize } from "../../Tiptap.constants";
import { useSlashMenuList } from "./SlashMenu.hooks";
import { ISlashMenuListHandle, ISlashMenuListProps } from "./SlashMenu.types";

const SlashMenuList = forwardRef<ISlashMenuListHandle, ISlashMenuListProps>(
  (props, ref) => {
    const { items, command } = props;

    const {
      selectedIndex,
      menuRef,
      renderGroups,
      isEmpty,
      handleUpArrow,
      handleDownArrow,
      handleEnter,
      handleItemClick,
      handleItemMouseEnter,
      createItemRef
    } = useSlashMenuList({ items, command });

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

        if (event.key === "Enter") {
          handleEnter();
          return true;
        }

        return false;
      }
    }));

    if (isEmpty) {
      return (
        <div className='yl:bg-background yl:border-border/40 yl:text-text/60 yl:rounded-lg yl:border-2 yl:p-4 yl:shadow-xl'>
          <p className='yl:text-sm'>No matching commands</p>
        </div>
      );
    }

    return (
      <div
        ref={menuRef}
        className='yl:bg-background yl:border-border/40 yl:flex yl:w-72 yl:flex-col yl:overflow-y-auto yl:rounded-lg yl:border-2 yl:shadow-xl'
        style={{ maxHeight: "300px" }}
      >
        {renderGroups.map(({ group, items: groupItems }) => (
          <div key={group}>
            {groupItems.map(({ item, flatIdx }) => (
              <button
                key={item.id}
                ref={createItemRef(flatIdx)}
                onClick={handleItemClick(flatIdx)}
                onMouseEnter={handleItemMouseEnter(flatIdx)}
                className={classNames(
                  "yl:flex yl:w-full yl:cursor-pointer yl:items-center yl:gap-3 yl:px-3 yl:py-2 yl:text-left yl:transition-colors",
                  {
                    "yl:bg-primary/10": flatIdx === selectedIndex,
                    "yl:hover:bg-text/5": flatIdx !== selectedIndex
                  }
                )}
              >
                <div
                  className={classNames(
                    "yl:border-border/30 yl:flex yl:h-10 yl:w-10 yl:shrink-0 yl:items-center yl:justify-center yl:rounded-md yl:border yl:bg-white/5",
                    {
                      "yl:border-primary/30 yl:bg-primary/5":
                        flatIdx === selectedIndex
                    }
                  )}
                >
                  <Icon
                    iconName={item.icon}
                    className={classNames(
                      getIconSize(item.icon),
                      "yl:text-text",
                      {
                        "yl:text-primary": flatIdx === selectedIndex
                      }
                    )}
                  />
                </div>
                <div className='yl:flex yl:min-w-0 yl:flex-col'>
                  <span
                    className={classNames(
                      "yl:text-text yl:text-sm yl:font-medium",
                      {
                        "yl:text-primary": flatIdx === selectedIndex
                      }
                    )}
                  >
                    {item.label}
                  </span>
                  {item.description && (
                    <span className='yl:text-text/60 yl:truncate yl:text-xs'>
                      {item.description}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  }
);

SlashMenuList.displayName = "SlashMenuList";

export { SlashMenuList };

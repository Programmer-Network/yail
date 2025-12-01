import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { SLASH_MENU_GROUP_ORDER } from "./SlashMenu.constants";
import {
  IRenderGroup,
  ISlashMenuListProps,
  IUseSlashMenuListReturn
} from "./SlashMenu.types";
import { groupSlashMenuItems } from "./SlashMenu.utils";

export const useSlashMenuList = ({
  items,
  command
}: Pick<ISlashMenuListProps, "items" | "command">): IUseSlashMenuListReturn => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  useEffect(() => {
    setSelectedIndex(0);
  }, [items]);

  useEffect(() => {
    const selectedElement = itemRefs.current.get(selectedIndex);
    if (!selectedElement) {
      return;
    }

    selectedElement.scrollIntoView({
      block: "nearest",
      behavior: "smooth"
    });
  }, [selectedIndex]);

  const selectItem = useCallback(
    (index: number) => {
      const item = items[index];
      if (!item) {
        return;
      }

      command(item);
    },
    [items, command]
  );

  const handleUpArrow = useCallback(() => {
    setSelectedIndex(prev => (prev + items.length - 1) % items.length);
  }, [items.length]);

  const handleDownArrow = useCallback(() => {
    setSelectedIndex(prev => (prev + 1) % items.length);
  }, [items.length]);

  const handleEnter = useCallback(() => {
    selectItem(selectedIndex);
  }, [selectItem, selectedIndex]);

  const handleItemClick = useCallback(
    (index: number) => () => {
      selectItem(index);
    },
    [selectItem]
  );

  const handleItemMouseEnter = useCallback(
    (index: number) => () => {
      setSelectedIndex(index);
    },
    []
  );

  const createItemRef = useCallback(
    (flatIdx: number) => (el: HTMLButtonElement | null) => {
      if (el) {
        itemRefs.current.set(flatIdx, el);
      } else {
        itemRefs.current.delete(flatIdx);
      }
    },
    []
  );

  const renderGroups = useMemo(() => {
    const groupedItems = groupSlashMenuItems(items);
    const groups: IRenderGroup[] = [];
    let flatIndex = 0;

    SLASH_MENU_GROUP_ORDER.forEach(group => {
      const groupItems = groupedItems.get(group);
      if (groupItems && groupItems.length > 0) {
        const itemsWithIndex = groupItems.map(item => ({
          item,
          flatIdx: flatIndex++
        }));

        groups.push({ group, items: itemsWithIndex });
      }
    });

    return groups;
  }, [items]);

  const isEmpty = items.length === 0;

  return {
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
  };
};

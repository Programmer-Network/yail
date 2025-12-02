import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { SLASH_MENU_GROUP_ORDER } from "./SlashMenu.constants";
import {
  IRenderGroup,
  ISlashMenuListProps,
  ISlashMenuSubmenuItem,
  IUseSlashMenuListReturn
} from "./SlashMenu.types";
import { groupSlashMenuItems } from "./SlashMenu.utils";

export const useSlashMenuList = ({
  items,
  command
}: Pick<ISlashMenuListProps, "items" | "command">): IUseSlashMenuListReturn => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [submenuIndex, setSubmenuIndex] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<
    ISlashMenuSubmenuItem[] | null
  >(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<number, HTMLButtonElement>>(new Map());

  // Reset state when items change
  useEffect(() => {
    setSelectedIndex(0);
    setSubmenuIndex(null);
    setActiveSubmenu(null);
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

      // If item has submenu and submenu isn't open, open it
      if (item.submenu && item.submenu.length > 0 && activeSubmenu === null) {
        setActiveSubmenu(item.submenu);
        setSubmenuIndex(0);
        return;
      }

      command(item);
    },
    [items, command, activeSubmenu]
  );

  const selectSubmenuItem = useCallback(
    (index: number) => {
      if (!activeSubmenu || !activeSubmenu[index]) {
        return;
      }

      const item = items[selectedIndex];
      if (!item) {
        return;
      }

      // Create a modified item with the submenu's command
      const submenuItem = activeSubmenu[index];
      const modifiedItem = {
        ...item,
        command: submenuItem.command
      };

      command(modifiedItem);
    },
    [activeSubmenu, items, selectedIndex, command]
  );

  const handleUpArrow = useCallback(() => {
    if (activeSubmenu !== null && submenuIndex !== null) {
      // Navigate within submenu
      setSubmenuIndex(prev =>
        prev !== null
          ? (prev + activeSubmenu.length - 1) % activeSubmenu.length
          : 0
      );
    } else {
      // Navigate main menu
      setSelectedIndex(prev => (prev + items.length - 1) % items.length);
    }
  }, [items.length, activeSubmenu, submenuIndex]);

  const handleDownArrow = useCallback(() => {
    if (activeSubmenu !== null && submenuIndex !== null) {
      // Navigate within submenu
      setSubmenuIndex(prev =>
        prev !== null ? (prev + 1) % activeSubmenu.length : 0
      );
    } else {
      // Navigate main menu
      setSelectedIndex(prev => (prev + 1) % items.length);
    }
  }, [items.length, activeSubmenu, submenuIndex]);

  const handleRightArrow = useCallback(() => {
    const item = items[selectedIndex];
    if (item?.submenu && item.submenu.length > 0 && activeSubmenu === null) {
      setActiveSubmenu(item.submenu);
      setSubmenuIndex(0);
    }
  }, [items, selectedIndex, activeSubmenu]);

  const handleLeftArrow = useCallback(() => {
    if (activeSubmenu !== null) {
      setActiveSubmenu(null);
      setSubmenuIndex(null);
    }
  }, [activeSubmenu]);

  const handleEscape = useCallback(() => {
    if (activeSubmenu !== null) {
      setActiveSubmenu(null);
      setSubmenuIndex(null);
    }
  }, [activeSubmenu]);

  const handleEnter = useCallback(() => {
    if (activeSubmenu !== null && submenuIndex !== null) {
      selectSubmenuItem(submenuIndex);
    } else {
      selectItem(selectedIndex);
    }
  }, [
    selectItem,
    selectSubmenuItem,
    selectedIndex,
    activeSubmenu,
    submenuIndex
  ]);

  const handleItemClick = useCallback(
    (index: number) => {
      const item = items[index];
      if (item?.submenu && item.submenu.length > 0) {
        setSelectedIndex(index);
        setActiveSubmenu(item.submenu);
        setSubmenuIndex(0);
      } else {
        selectItem(index);
      }
    },
    [items, selectItem]
  );

  const handleItemMouseEnter = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      // Show submenu on hover if item has one
      const item = items[index];
      if (item?.submenu && item.submenu.length > 0) {
        setActiveSubmenu(item.submenu);
        setSubmenuIndex(0);
      } else {
        setActiveSubmenu(null);
        setSubmenuIndex(null);
      }
    },
    [items]
  );

  const handleSubmenuItemClick = useCallback(
    (index: number) => {
      selectSubmenuItem(index);
    },
    [selectSubmenuItem]
  );

  const handleSubmenuItemMouseEnter = useCallback((index: number) => {
    setSubmenuIndex(index);
  }, []);

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
  };
};

import classNames from "classnames";
import { DragEvent, FC, useEffect, useState } from "react";

import { IconDrag, IconSpinner2 } from "Components/Icons";

import { IDraggableList, IDraggableListItem } from "./types";

const DraggableList: FC<IDraggableList> = ({
  items,
  isDraggable,
  className,
  draggedClassName,
  draggedOverClassName,
  liClassName,
  activeItemId,
  onSorted,
  onClick
}) => {
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [draggedOverId, setDraggedOverId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [listItems, setListItems] = useState<IDraggableListItem[]>(items);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  const canDrag = isDraggable && !isSorting && items.length > 1;

  const reorder = (
    list: IDraggableListItem[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDrag = (_: DragEvent<Element>, item: IDraggableListItem) => {
    setDraggedId(item.id);
  };

  const handleDrop = async (e: DragEvent<Element>) => {
    e.preventDefault();

    if (draggedId != null && draggedOverId != null) {
      const draggedIndex = listItems.findIndex(item => item.id === draggedId);
      const draggedOverIndex = listItems.findIndex(
        item => item.id === draggedOverId
      );

      const reordered = reorder(listItems, draggedIndex, draggedOverIndex);

      setIsSorting(true);

      try {
        await onSorted?.(reordered);
        setListItems(reordered);
      } finally {
        setIsSorting(false);
      }
    }

    setDraggedId(null);
    setDraggedOverId(null);
  };

  useEffect(() => {
    setListItems(items);
  }, [items]);

  return (
    <ul
      className={classNames(
        "yl-relative yl-text-primary-text-color",
        className
      )}
      onDragEnd={handleDrop}
    >
      {isSorting && (
        <IconSpinner2 className='yl-absolute yl-left-1/2 yl-top-1/2 yl-w-12 -yl-translate-x-1/2 -yl-translate-y-1/2 yl-transform yl-text-primary-text-color' />
      )}
      {listItems.map(item => {
        return (
          <li
            className={classNames(
              "yl-relative yl-flex yl-cursor-pointer yl-items-center",
              liClassName,
              {
                [draggedClassName ?? ""]: !isSorting && draggedId === item.id,
                [draggedOverClassName ?? ""]:
                  !isSorting && draggedOverId === item.id,
                "yl-opacity-30": isSorting && draggedId !== item.id,
                "yl-text-primary": activeItemId === item.id
              }
            )}
            draggable={canDrag}
            key={item.id}
            onDrag={e => (canDrag ? handleDrag(e, item) : null)}
            onDragOver={() => (canDrag ? setDraggedOverId(item.id) : null)}
            onMouseOver={() => (canDrag ? setHoveredId(item.id) : null)}
            onMouseLeave={() => (canDrag ? setHoveredId(null) : null)}
            onClick={() => {
              onClick?.(item);
            }}
          >
            {canDrag && (
              <IconDrag
                className={classNames(
                  "yl-absolute -yl-left-7 yl-w-6 yl-opacity-50",
                  {
                    "yl-cursor-move yl-opacity-100": hoveredId === item.id
                  }
                )}
              />
            )}
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default DraggableList;

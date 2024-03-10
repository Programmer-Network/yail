import classNames from "classnames";
import { DragEvent, FC, useEffect, useState } from "react";

import { IconDrag, IconSpinner2 } from "Components/Icons";

import { IDraggableList, IDraggableListItem } from "./types";

const DraggableList: FC<IDraggableList> = ({
  items,
  className,
  draggedClassName,
  draggedOverClassName,
  liClassName,
  onSorted,
  onClick
}) => {
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [draggedOverId, setDraggedOverId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [listItems, setListItems] = useState<IDraggableListItem[]>(items);
  const [isSorting, setIsSorting] = useState<boolean>(false);

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
  }, [items.length]);

  return (
    <ul
      className={classNames("relative text-primary-text-color", className)}
      onDragEnd={handleDrop}
    >
      {isSorting && (
        <IconSpinner2 className='absolute left-1/2 top-1/2 w-12 -translate-x-1/2 -translate-y-1/2 transform text-primary-text-color' />
      )}
      {listItems.map(item => {
        return (
          <li
            className={classNames(
              "relative flex cursor-pointer items-center",
              liClassName,
              {
                [draggedClassName ?? ""]: !isSorting && draggedId === item.id,
                [draggedOverClassName ?? ""]:
                  !isSorting && draggedOverId === item.id,
                "opacity-30": isSorting && draggedId !== item.id
              }
            )}
            draggable={true}
            key={item.id}
            onDrag={e => handleDrag(e, item)}
            onDragOver={() => setDraggedOverId(item.id)}
            onMouseOver={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => onClick?.(item)}
          >
            <IconDrag
              className={classNames("absolute -left-7 w-6 opacity-50", {
                "cursor-move opacity-100": hoveredId === item.id
              })}
            />
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export * from "./types";
export default DraggableList;

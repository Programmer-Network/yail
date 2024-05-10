import classNames from "classnames";
import { DragEvent, FC, useEffect, useState } from "react";

import { IconDrag } from "Components/Icons";

import ArrayUtils from "Utils/Array";

import { IDraggableList, IDraggableListItem } from "./types";

const DraggableList: FC<IDraggableList> = ({
  items,
  onDragged,
  isDraggable,
  className,
  draggedClassName,
  draggedOverClassName,
  liClassName,
  activeItemId,
  onClick
}) => {
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [draggedOverId, setDraggedOverId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [localItems, setLocalItems] = useState<IDraggableListItem[]>(
    items || []
  );

  const canDrag = isDraggable && items.length > 1;

  const handleDrag = (_: DragEvent<Element>, item: IDraggableListItem) => {
    setDraggedId(item.id);
  };

  const handleDrop = (e: DragEvent<Element>) => {
    e.preventDefault();

    if (draggedId != null && draggedOverId != null) {
      const draggedIndex = items.findIndex(item => item.id === draggedId);
      const draggedOverIndex = items.findIndex(
        item => item.id === draggedOverId
      );

      setLocalItems(ArrayUtils.reorder(items, draggedIndex, draggedOverIndex));
    }

    setDraggedId(null);
    setDraggedOverId(null);
  };

  useEffect(() => {
    setLocalItems(items || []);
  }, []);

  useEffect(() => {
    onDragged?.(localItems);
  }, [localItems]);

  return (
    <ul
      className={classNames(
        "yl-relative yl-text-primary-text-color",
        className
      )}
      onDragEnd={handleDrop}
    >
      {localItems
        .toSorted((a, b) => a.order - b.order)
        .map((item, index) => {
          return (
            <li
              className={classNames(
                "yl-relative yl-flex yl-items-center",
                liClassName?.(item, index),
                {
                  [draggedClassName ?? ""]: draggedId === item.id,
                  [draggedOverClassName ?? ""]: draggedOverId === item.id,
                  "yl-text-primary yl-cursor-pointer":
                    onClick && activeItemId === item.id
                }
              )}
              draggable={canDrag}
              key={item.order}
              onDrag={e => (canDrag ? handleDrag(e, item) : null)}
              onDragOver={() => (canDrag ? setDraggedOverId(item.id) : null)}
              onMouseOver={() => (canDrag ? setHoveredId(item.id) : null)}
              onMouseLeave={() => (canDrag ? setHoveredId(null) : null)}
              onClick={() => {
                onClick?.(item);
              }}
            >
              {canDrag && (
                <div>
                  <IconDrag
                    className={classNames("yl-w-6 yl-opacity-50 yl-mr-1", {
                      "yl-cursor-move yl-opacity-100": hoveredId === item.id
                    })}
                  />
                </div>
              )}
              {item.title}
            </li>
          );
        })}
    </ul>
  );
};

export default DraggableList;

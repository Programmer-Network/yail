import classNames from "classnames";
import { DragEvent, FC, useState } from "react";

import { IDraggableList, IDraggableListItem } from "./types";

const DraggableList: FC<IDraggableList> = ({
  items,
  className,
  draggedClassName,
  draggedOverClassName,
  onSorted
}) => {
  const [draggedId, setDraggedId] = useState<number | null>(null);
  const [draggedOverId, setDraggedOverId] = useState<number | null>(null);
  const [listItems, setListItems] = useState<IDraggableListItem[]>(items);

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

  const handleDrop = (e: DragEvent<Element>) => {
    e.preventDefault();

    if (draggedId != null && draggedOverId != null) {
      const draggedIndex = listItems.findIndex(item => item.id === draggedId);
      const draggedOverIndex = listItems.findIndex(
        item => item.id === draggedOverId
      );

      const reordered = reorder(listItems, draggedIndex, draggedOverIndex);
      onSorted?.(reordered);
      setListItems(reordered);
    }

    setDraggedId(null);
    setDraggedOverId(null);
  };

  return (
    <ul
      className={classNames("text-primary-text-color", className)}
      onDragEnd={handleDrop}
    >
      {listItems.map(item => {
        return (
          <li
            className={classNames({
              [draggedClassName ?? ""]: draggedId === item.id,
              [draggedOverClassName ?? ""]: draggedOverId === item.id
            })}
            draggable={true}
            key={item.id}
            onDrag={e => handleDrag(e, item)}
            onDragOver={() => setDraggedOverId(item.id)}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
};

export default DraggableList;

export interface IDraggableListItem {
  id: number;
  title: string;
  description?: string;
  order: number;
}

export interface IDraggableList {
  className?: string;
  draggedClassName?: string;
  draggedOverClassName?: string;
  liClassName?: (item: IDraggableListItem, index: number) => string;
  isDraggable?: boolean;
  items: IDraggableListItem[];
  onDragged?: (items: IDraggableListItem[]) => void;
  onClick?: (item: IDraggableListItem) => void;
  activeItemId?: number;
  ListItemComponent?: React.FC<IDraggableListItem>;
}

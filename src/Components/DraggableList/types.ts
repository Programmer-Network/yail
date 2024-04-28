export interface IDraggableListItem {
  id: number;
  title: string;
  description: string;
}

export interface IDraggableList {
  className?: string;
  draggedClassName?: string;
  draggedOverClassName?: string;
  liClassName?: string;
  isDraggable?: boolean;
  items: IDraggableListItem[];
  onSorted?: (items: IDraggableListItem[]) => Promise<unknown>;
  onClick?: (item: IDraggableListItem) => void;
  activeItemId?: number;
  ListItemComponent?: React.FC<IDraggableListItem>;
}

export interface IDraggableListItem {
  id: number;
  title: string;
  description: string;
}

export interface IDraggableList {
  className?: string;
  draggedClassName?: string;
  draggedOverClassName?: string;
  items: IDraggableListItem[];
  onSorted?: (items: IDraggableListItem[]) => void;
  ListItemComponent?: React.FC<IDraggableListItem>;
}

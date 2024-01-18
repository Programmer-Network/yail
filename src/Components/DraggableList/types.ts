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
  items: IDraggableListItem[];
  onSorted?: (items: IDraggableListItem[]) => Promise<unknown>;
  onClick?: (item: IDraggableListItem) => void;
  ListItemComponent?: React.FC<IDraggableListItem>;
}

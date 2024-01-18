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
  ListItemComponent?: React.FC<IDraggableListItem>;
}

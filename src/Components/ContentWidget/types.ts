import { IconName } from "Components/Icons/types";

export interface IContentWidgetBaseItem {
  id?: number;
  title: string;
}

export interface IContentWidgetItemMore {
  tooltipText: string;
  iconName?: IconName;
  iconClassName?: string;
  onClick: () => void;
}

export interface IContentWidgetItem<T extends IContentWidgetBaseItem> {
  item: T;
  onClick: (item: T) => void;
}

export interface IContentWidgetProps<T extends IContentWidgetBaseItem> {
  title: string;
  className?: string;
  isLoading: boolean;
  items: IContentWidgetItem<T>[];
  more?: IContentWidgetItemMore;
}

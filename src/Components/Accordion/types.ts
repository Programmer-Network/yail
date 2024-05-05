import { IDraggableListItem } from "Components/DraggableList/types";

export interface IAccordionSectionItem {
  id: number;
  title: string;
  order: number;
}

export interface ISection {
  id: number;
  description?: string;
  title: string;
  order: number;
  items: IAccordionSectionItem[];
}

export enum AccordionOrderType {
  SECTIONS = "sections",
  LECTURES = "lectures"
}

export interface IAccordionProps {
  className?: string;
  sections: ISection[];
  setSections: (sections: ISection[]) => void;
  sectionTitleClassName?: string;
  onSectionItemClick?: (item: IDraggableListItem) => void;
  onSelected?: (item: IDraggableListItem) => void;
  expanded: number[];
  setExpanded: (sections: number[]) => void;
  selectedId?: number;
  hasDraggableSections?: boolean;
  hasDraggableSetionItems?: boolean;
}

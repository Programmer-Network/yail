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
  sectionTitleClassName?: string;
  onSorted: (
    type: AccordionOrderType,
    sections: ISection[],
    section: { sectionId: number; items: IDraggableListItem[] }
  ) => void;
  onSectionItemClick?: (item: IDraggableListItem) => void;
  onSectionClick?: (item: IDraggableListItem) => void;
  onSelected?: (item: IDraggableListItem) => void;
  onAddSection?: () => void;
  addSectionItemLabel?: string;
  onAddSectionItem?: (item: ISection) => void;
  addSectionLabel?: string;
  expanded: number[];
  setExpanded: (sections: number[]) => void;
  selectedId?: number;
  hasDraggableSections?: boolean;
  hasDraggableSectionItems?: boolean;
}

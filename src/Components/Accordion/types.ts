import { IDraggableListItem } from "../DraggableList/types";

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
  onSorted?: (
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
  hasDraggableSections?: boolean;
  hasDraggableSectionItems?: boolean;
  defaultExpanded?: boolean;
  selected?: {
    sectionId: number | null;
    itemId: number | null;
  };
  setSelectedSection?: (sectionId: number | null) => void;
  setSelectedItem?: (itemId: number | null) => void;
}

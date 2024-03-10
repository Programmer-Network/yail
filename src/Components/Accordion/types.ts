export interface IAccordionSectionItem {
  id: number;
  title: string;
  order: number;
}

export interface ISection {
  id: number;
  description: string;
  title: string;
  order: number;
  items: IAccordionSectionItem[];
}

export interface IAccordionProps {
  className?: string;
  sections: ISection[];
  sectionTitleClassName?: string;
  itemsLabelText?: string;
  onSectionItemClick?: (item: IAccordionSectionItem) => void;
  onSelected?: (item: IAccordionSectionItem) => void;
  expanded: number[];
  setExpanded: (sections: number[]) => void;
  selectedId?: number;
}

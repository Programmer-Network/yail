export interface ISectionItem {
  id: number;
  title: string;
  order: number;
}

export interface ISection {
  id: number;
  description: string;
  title: string;
  order: number;
  items: ISectionItem[];
}

export interface IAccordionProps {
  className?: string;
  sections: ISection[];
  sectionTitleClassName?: string;
  itemsLabelText?: string;
  onSectionItemClick?: (item: ISectionItem) => void;
  onSelected?: (item: ISectionItem) => void;
  expanded: number[];
  setExpanded: (sections: number[]) => void;
  selectedId?: number;
}

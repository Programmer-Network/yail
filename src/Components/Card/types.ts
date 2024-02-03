export interface ICardData {
  title: string;
  description: string;
  date?: string;
  author?: string;
  tags?: string[];
}

export interface ICard {
  data: ICardData;
  className?: string;
}

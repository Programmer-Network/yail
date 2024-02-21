export interface ICardData {
  title: string;
  titleUrl: string;
  description: string;
  date?: string;
  author?: string;
  authorUrl?: string;
  tags?: {
    name: string;
    url: string;
  }[];
}

export interface ICard {
  data: ICardData;
  className?: string;
}

export interface ILatestArticleCardData {
  id: number;
  title: string;
  summary: string;
  createdAt: string;
  articleURL: string;
  author: {
    username: string;
  };
}

export interface ILatestArticleCard {
  data: ILatestArticleCardData;
  className?: string;
  NavLink: React.ComponentType<{
    to: string;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    children: React.ReactNode;
  }>;
  isLoading?: boolean;
  onCardClick?: (article: ILatestArticleCardData) => void;
}

export interface ILatestArticleCardSkeleton {
  className?: string;
}

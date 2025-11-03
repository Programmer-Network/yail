import { ILatestArticleCardData } from "../LatestArticleCard/LatestArticleCard.types";

export interface ILatestArticlesList {
  articles: ILatestArticleCardData[];
  title?: string;
  className?: string;
  NavLink: React.ComponentType<{
    to: string;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    children: React.ReactNode;
  }>;
  isLoading?: boolean;
  emptyMessage?: string;
  maxArticles?: number;
  onArticleClick?: (article: ILatestArticleCardData) => void;
  onViewAllClick?: () => void;
  viewAllUrl?: string;
}

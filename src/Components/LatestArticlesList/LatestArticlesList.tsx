import classNames from "classnames";
import { FC, memo } from "react";

import { LatestArticleCard } from "../LatestArticleCard";
import { ILatestArticleCardData } from "../LatestArticleCard/LatestArticleCard.types";
import { Anchor, H6 } from "../Typography";
import { ILatestArticlesList } from "./LatestArticlesList.types";

const LatestArticlesList: FC<ILatestArticlesList> = memo(
  ({
    articles,
    title = "Latest Articles",
    className,
    NavLink,
    isLoading = false,
    emptyMessage = "No articles available",
    maxArticles = 5,
    onArticleClick,
    onViewAllClick
  }) => {
    const displayedArticles = articles.slice(0, maxArticles);
    const hasArticles = articles.length > 0;
    const shouldShowViewAll = !!onViewAllClick && articles.length > maxArticles;

    const renderSkeletons = () => {
      return (
        <div className='yl:flex yl:flex-col yl:gap-3'>
          {Array.from({ length: maxArticles }).map((_, index) => (
            <LatestArticleCard
              key={`skeleton-${index}`}
              data={{
                id: 0,
                title: "",
                summary: "",
                createdAt: "",
                articleURL: "",
                author: { username: "" }
              }}
              NavLink={NavLink}
              isLoading={true}
            />
          ))}
        </div>
      );
    };

    const renderEmptyState = () => {
      return (
        <div
          className='yl:text-muted yl:border-border yl:flex yl:min-h-[120px] yl:items-center yl:justify-center yl:rounded-lg yl:border yl:border-dashed yl:p-4 yl:text-center yl:text-sm'
          role='status'
          aria-live='polite'
        >
          {emptyMessage}
        </div>
      );
    };

    const renderArticles = () => {
      return (
        <div className='yl:flex yl:flex-col yl:gap-3' role='list'>
          {displayedArticles.map((article: ILatestArticleCardData) => (
            <LatestArticleCard
              key={article.id}
              data={article}
              NavLink={NavLink}
              onCardClick={onArticleClick}
            />
          ))}
        </div>
      );
    };

    return (
      <section
        className={classNames(className)}
        aria-labelledby='latest-articles-title'
      >
        <div className='yl:mb-3 yl:flex yl:items-center yl:justify-between'>
          <H6
            className='yl:text-text yl:text-base yl:font-bold'
            id='latest-articles-title'
          >
            {title}
          </H6>

          {shouldShowViewAll && (
            <Anchor onClick={onViewAllClick} aria-label='View all articles'>
              View All Articles
            </Anchor>
          )}
        </div>

        {isLoading && renderSkeletons()}
        {!isLoading && !hasArticles && renderEmptyState()}
        {!isLoading && hasArticles && renderArticles()}
      </section>
    );
  },
  (prevProps, nextProps) => {
    return (
      JSON.stringify(prevProps.articles) ===
        JSON.stringify(nextProps.articles) &&
      prevProps.isLoading === nextProps.isLoading &&
      prevProps.title === nextProps.title &&
      prevProps.maxArticles === nextProps.maxArticles &&
      prevProps.className === nextProps.className
    );
  }
);

LatestArticlesList.displayName = "LatestArticlesList";

export { LatestArticlesList };

import classNames from "classnames";
import { FC } from "react";

interface ICardActions {
  showBookmark?: boolean;
  isBookmarked?: boolean;
  showShare?: boolean;
  onBookmark?: (e: React.MouseEvent) => void;
  onShare?: (e: React.MouseEvent) => void;
}

const CardActions: FC<ICardActions> = ({
  showBookmark,
  isBookmarked,
  showShare,
  onBookmark,
  onShare
}) => {
  if (!showBookmark && !showShare) {
    return null;
  }

  return (
    <div className='yl:absolute yl:top-3 yl:right-3 yl:z-10 yl:flex yl:gap-1'>
      {showBookmark && (
        <button
          onClick={onBookmark}
          className={classNames(
            "yl:border-border/20 yl:rounded-full yl:p-2 yl:backdrop-blur-sm yl:transition-all yl:duration-200 yl:border",
            "yl:hover:scale-105 yl:active:scale-95",
            isBookmarked
              ? "yl:bg-primary/10 yl:text-primary yl:hover:bg-primary/20"
              : "yl:bg-background/80 yl:text-muted yl:hover:bg-background yl:hover:text-primary"
          )}
          aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this card"}
        >
          {isBookmarked ? (
            // Filled bookmark icon
            <svg
              className='yl:h-4 yl:w-4'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
            </svg>
          ) : (
            // Outline bookmark icon
            <svg
              className='yl:h-4 yl:w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
              />
            </svg>
          )}
        </button>
      )}
      {showShare && (
        <button
          onClick={onShare}
          className='yl:bg-background/80 yl:text-muted yl:hover:bg-background yl:hover:text-primary yl:border-border/20 yl:rounded-full yl:p-2 yl:backdrop-blur-sm yl:transition-all yl:duration-200 yl:hover:scale-105 yl:active:scale-95 yl:border'
          aria-label='Share this card'
        >
          <svg
            className='yl:h-4 yl:w-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z'
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export { CardActions };

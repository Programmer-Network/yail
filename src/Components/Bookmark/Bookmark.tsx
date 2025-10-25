import React from "react";

import { Icon } from "../Icon";
import { Spinner } from "../Spinner";
import { IBookmarkProps } from "./types";

const Bookmark: React.FC<IBookmarkProps> = (
  { isBookmarked, handleDelete, handleAdd, isLoading } = {
    isBookmarked: false,
    handleDelete: () => null,
    handleAdd: () => null,
    isLoading: false
  }
) => {
  return (
    <div className='flex items-start gap-2'>
      <div className='flex gap-2'>
        {isLoading ? (
          <Spinner className='fill-text w-5' />
        ) : (
          <>
            {isBookmarked ? (
              <Icon
                iconName='IconBookmarked'
                data-testid='icon-bookmarked'
                className='fill-primary hover:fill-primary relative -top-px w-5 cursor-pointer'
                onClick={handleDelete}
              />
            ) : (
              <Icon
                iconName='IconBookmark'
                data-testid='icon-bookmark'
                className='fill-text hover:fill-primary relative -top-px w-5 cursor-pointer'
                onClick={handleAdd}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export { Bookmark };

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
    <div className='yl:flex yl:items-start yl:gap-2'>
      <div className='yl:flex yl:gap-2'>
        {isLoading ? (
          <Spinner className='yl:fill-text yl:w-5' />
        ) : (
          <>
            {isBookmarked ? (
              <Icon
                iconName='IconBookmarked'
                data-testid='icon-bookmarked'
                className='yl:fill-primary yl:hover:fill-primary yl:relative yl:-top-px yl:w-5 yl:cursor-pointer'
                onClick={handleDelete}
              />
            ) : (
              <Icon
                iconName='IconBookmark'
                data-testid='icon-bookmark'
                className='yl:fill-text yl:hover:fill-primary yl:relative yl:-top-px yl:w-5 yl:cursor-pointer'
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

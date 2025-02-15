import React from "react";

import { IconBookmark, IconBookmarked } from "Components/Icons";
import Spinner from "Components/Spinner";

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
    <div className='yl-flex yl-items-start yl-gap-2'>
      <div className='yl-flex yl-gap-2'>
        {isLoading ? (
          <Spinner className='yl-w-5 yl-fill-text' />
        ) : (
          <>
            {isBookmarked ? (
              <IconBookmarked
                data-testid='icon-bookmarked'
                className='yl-relative yl-top-[-1px] yl-w-5 yl-cursor-pointer yl-fill-primary hover:yl-fill-primary'
                onClick={handleDelete}
              />
            ) : (
              <IconBookmark
                data-testid='icon-bookmark'
                className='yl-relative yl-top-[-1px] yl-w-5 yl-cursor-pointer yl-fill-text hover:yl-fill-primary'
                onClick={handleAdd}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Bookmark;

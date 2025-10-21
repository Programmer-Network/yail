import React from "react";

import Icon from "../Icon";
import Spinner from "../Spinner";
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
          <Spinner className='w-5 fill-text' />
        ) : (
          <>
            {isBookmarked ? (
              <Icon
                iconName='IconBookmarked'
                data-testid='icon-bookmarked'
                className='relative top-[-1px] w-5 cursor-pointer fill-primary hover:fill-primary'
                onClick={handleDelete}
              />
            ) : (
              <Icon
                iconName='IconBookmark'
                data-testid='icon-bookmark'
                className='relative top-[-1px] w-5 cursor-pointer fill-text hover:fill-primary'
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

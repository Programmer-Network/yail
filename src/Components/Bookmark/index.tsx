import React from "react";

import { IconBookmark, IconBookmarked } from "Components/Icons";
import Spinner from "Components/Spinner";

import { IBookmarkProps } from "./types";

const Bookmark: React.FC<IBookmarkProps> = ({
  isBookmarked,
  handleDelete,
  handleAdd,
  isLoading
}) => {
  return (
    <div className='flex items-start gap-2'>
      <div className='flex gap-2'>
        {isLoading ? (
          <Spinner className='w-5 text-primary-text-color' />
        ) : (
          <>
            {isBookmarked ? (
              <IconBookmarked
                className='relative top-[-1px] w-5 cursor-pointer fill-primary hover:fill-primary'
                onClick={handleDelete}
              />
            ) : (
              <IconBookmark
                className='relative top-[-1px] w-5 cursor-pointer fill-primary-text-color hover:fill-primary'
                onClick={handleAdd}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

Bookmark.defaultProps = {
  isBookmarked: false,
  handleDelete: () => null,
  handleAdd: () => null,
  isLoading: false
};

export default Bookmark;

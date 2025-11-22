import classNames from "classnames";
import { FC } from "react";

import { Button } from "../Button";
import { IPaginationProps } from "./types";

const Pagination: FC<IPaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
  className
}) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  const handlePrevious = () => {
    if (isFirstPage) {
      return;
    }

    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (isLastPage) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };

  return (
    <div className={classNames("yl:flex yl:gap-2", className)} role='group'>
      <Button
        className='yl:w-40'
        outlined
        disabled={isFirstPage}
        onClick={handlePrevious}
      >
        Previous
      </Button>
      <Button className='yl:w-40' disabled={isLastPage} onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export { Pagination };

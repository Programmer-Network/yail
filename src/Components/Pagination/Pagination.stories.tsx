import { useState } from "react";

import Pagionation from ".";

export default {
  title: "Components / Pagination"
};

export const Default = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Pagionation
      currentPage={currentPage}
      totalPages={4}
      setCurrentPage={setCurrentPage}
    />
  );
};

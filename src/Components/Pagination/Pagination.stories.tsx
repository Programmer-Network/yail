import { useState } from "react";

import { Pagination } from "./Pagination";

export default {
  title: "Components / Pagination"
};

export const Default = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={4}
      setCurrentPage={setCurrentPage}
    />
  );
};

import React from "react";
import { useState } from "react";

function usePagination(users) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // Pagination Calculations
  const totalUsers = users?.length || 0;
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users?.slice(startIndex, endIndex) || [];

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  return {
    handleNextPage,
    handlePrevPage,
    currentPage,
    currentUsers,
    totalUsers,
    totalPages,
    startIndex,
    endIndex,
  };
}

export default usePagination;

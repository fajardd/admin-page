// src/components/Fragments/Pagination.js
import React from "react";
import ButtonPagination from "../Elements/ButtonPagination";

const PaginationTable = ({ currentPage, totalPages, handlePageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pageNumbers.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pageNumbers.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();
  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing {(currentPage - 1) * 5 + 1}-{currentPage * 5} of{" "}
        {totalPages * 5}
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <ButtonPagination
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 hover:text-white bg-white hover:bg-blue-500 border"
          >
            Previous
          </ButtonPagination>
        </li>
        {pageNumbers.map((page, index) => (
          <li key={index}>
            {typeof page === "number" ? (
              <ButtonPagination
                onClick={() => handlePageChange(page)}
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  currentPage === page
                    ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                    : "text-gray-500 hover:text-white bg-white hover:bg-blue-500 border"
                }`}
              >
                {page}
              </ButtonPagination>
            ) : (
              <span className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500">
                {page}
              </span>
            )}
          </li>
        ))}
        <li>
          <ButtonPagination
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </ButtonPagination>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationTable;

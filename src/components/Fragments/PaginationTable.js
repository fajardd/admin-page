// src/components/Fragments/Pagination.js
import React from "react";
import ButtonPagination from "../Elements/ButtonPagination";

const PaginationTable = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing{" "}
        <span className="font-semibold text-black">
          {(currentPage - 1) * 5 + 1}-{currentPage * 5}
        </span>{" "}
        of <span className="font-semibold text-black">{totalPages * 5}</span>
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
        {[...Array(totalPages).keys()].map((page) => (
          <li key={page}>
            <ButtonPagination
              onClick={() => handlePageChange(page + 1)}
              className={`flex items-center justify-center px-3 h-8 leading-tight ${
                currentPage === page + 1
                  ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                  : "text-gray-500 hover:text-white bg-white hover:bg-blue-500 border"
              }`}
            >
              {page + 1}
            </ButtonPagination>
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

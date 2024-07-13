// src/components/Layouts/CustomerPageTemplate.js
import React from "react";
import CustomerTable from "../Fragments/CustomerTable";
import PaginationTable from "../Fragments/PaginationTable";

function CustomerPageTemplate({
  customers,
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <div>
      <h1 className="text-[24px] font-semibold">Customer</h1>
      <CustomerTable customers={customers} currentPage={currentPage} />
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default CustomerPageTemplate;

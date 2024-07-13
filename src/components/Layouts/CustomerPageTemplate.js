import React from "react";
import CustomerTable from "../Fragments/CustomerTable";
import PaginationTable from "../Fragments/PaginationTable";
import InputAddCustomer from "../Fragments/InputAddCustomer";

function CustomerPageTemplate({
  customers,
  currentPage,
  totalPages,
  handlePageChange,
  onChange,
  value,
  handleAddCustomer,
}) {
  return (
    <div>
      <h1 className="text-[24px] font-semibold">Customer</h1>
      <p className="text-blue-700">Customer</p>
      <InputAddCustomer
        onChange={onChange}
        value={value}
        handleAddCustomer={handleAddCustomer}
      />
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

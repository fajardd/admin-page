import React from "react";
import PaginationTable from "../../Fragments/PaginationTable";
import HistoryCustomerTable from "../../Fragments/HistoryCustomerTable";
import ButtonBack from "../../Elements/ButtonBack";
import InputAddHistory from "../../Fragments/InputAddHistory";

function DetailCustomerPageTemplate({
  onChange,
  value,
  handleAddHistory,
  historyCustomers,
  currentPage,
  handleDeleteHistory,
  totalPages,
  handlePageChange,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Riwayat Customer</h1>
      <p className="text-blue-700">Detail Riwayat Customer</p>
      <InputAddHistory
        onChange={onChange}
        value={value}
        handleAddHistory={handleAddHistory}
      />
      <HistoryCustomerTable
        historyCustomers={historyCustomers}
        currentPage={currentPage}
        handleDeleteHistory={handleDeleteHistory}
      />
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
      <ButtonBack to={`/customer`} />
    </div>
  );
}
export default DetailCustomerPageTemplate;

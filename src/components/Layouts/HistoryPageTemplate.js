import React from "react";
import HistoryTable from "../Fragments/HistoryTable";
import PaginationTable from "../Fragments/PaginationTable";
import InputAddHistory from "../Fragments/InputAddHistory";

function HistoryPageTemplate({
  histories,
  currentPage,
  handleDeleteHistory,
  totalPages,
  handlePageChange,
  onChange,
  value,
  handleAddHistory,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">History</h1>
      <p className="text-blue-700">History</p>
      <InputAddHistory
        onChange={onChange}
        value={value}
        handleAddHistory={handleAddHistory}
      />
      <HistoryTable
        histories={histories}
        currentPage={currentPage}
        handleDeleteHistory={handleDeleteHistory}
      />
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
export default HistoryPageTemplate;

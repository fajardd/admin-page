import React from "react";
import DokterTable from "../../Fragments/DokterTable";
import PaginationTable from "../../Fragments/PaginationTable";
import InputAddDokter from "../../Fragments/InputAddDokter";

function DokterPageTemplate({
  dokters,
  currentPage,
  handleDeleteDokter,
  totalPages,
  handlePageChange,
  onChange,
  value,
  handleAddDokter,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Dokter</h1>
      <p className="text-blue-700">Dokter</p>
      <InputAddDokter
        onChange={onChange}
        value={value}
        handleAddDokter={handleAddDokter}
      />
      <DokterTable
        dokters={dokters}
        currentPage={currentPage}
        handleDeleteDokter={handleDeleteDokter}
      />
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
export default DokterPageTemplate;

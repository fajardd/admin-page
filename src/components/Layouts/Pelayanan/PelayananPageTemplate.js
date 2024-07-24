import React from "react";
import PelayananTable from "../../Fragments/PelayananTable";
import PaginationTable from "../../Fragments/PaginationTable";
import InputAddService from "../../Fragments/InputAddService";

function PelayananPageTemplate({
  services,
  handleDeleteService,
  currentPage,
  totalPages,
  handlePageChange,
  onChange,
  value,
  handleAddService,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Pelayanan</h1>
      <p className="text-blue-700">Pelayanan</p>
      <InputAddService
        onChange={onChange}
        value={value}
        handleAddService={handleAddService}
      />
      <PelayananTable
        services={services}
        currentPage={currentPage}
        handleDeleteService={handleDeleteService}
      />
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
export default PelayananPageTemplate;

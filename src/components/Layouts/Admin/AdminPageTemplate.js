import React from "react";
import AdminTable from "../../Fragments/AdminTable";
import PaginationTable from "../../Fragments/PaginationTable";
import InputAddAdmin from "../../Fragments/InputAddAdmin";

function AdminPageTemplate({
  admins,
  currentPage,
  totalPages,
  handlePageChange,
  onChange,
  value,
  handleAddAdmin,
  handleDeleteAdmin,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Admin</h1>
      <p className="text-blue-700">Admin</p>
      <InputAddAdmin
        onChange={onChange}
        value={value}
        handleAddAdmin={handleAddAdmin}
      />
      <AdminTable
        admins={admins}
        currentPage={currentPage}
        handleDeleteAdmin={handleDeleteAdmin}
      />
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
export default AdminPageTemplate;

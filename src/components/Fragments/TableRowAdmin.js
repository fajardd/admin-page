import React from "react";

function TableRowAdmin({ admin, currentPage, index, handleDeleteAdmin }) {
  return (
    <tr key={admin.id_user} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="px-6 py-4">{admin.nama}</td>
      <td className="px-6 py-4">{admin.role?.role_name || "N/A"}</td>
      <td className="px-6 py-4">{admin.username}</td>
      <td className="px-6 py-4">{admin.email}</td>
    </tr>
  );
}
export default TableRowAdmin;

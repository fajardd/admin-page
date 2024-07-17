import React from "react";
import ButtonDelete from "../Elements/ButtonDelete";
import RouteUpdate from "../Elements/RouteUpdate";

function TableRowAdmin({ admin, currentPage, index, handleDeleteAdmin }) {
  return (
    <tr key={admin.id_user} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="px-6 py-4">{admin.nama}</td>
      <td className="px-6 py-4">{admin.role?.role_name || "N/A"}</td>
      <td className="px-6 py-4">{admin.no_telp}</td>
      <td className="px-6 py-4">{admin.email}</td>
      <td className="flex justify-center space-x-6 px-6 py-4 ">
        <ButtonDelete onClick={() => handleDeleteAdmin(admin.id_user)} />
        <RouteUpdate to={`/admin/${admin.id_user}`} />
      </td>
    </tr>
  );
}
export default TableRowAdmin;

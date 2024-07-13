import React from "react";

function TableRowCustomer({ customer, index, currentPage }) {
  return (
    <tr key={customer.id_user} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="px-6 py-4">{customer.nama}</td>
      <td className="px-6 py-4">{customer.role?.role_name || "N/A"}</td>
      <td className="px-6 py-4">{customer.no_telp}</td>
      <td className="px-6 py-4">{customer.email}</td>
      <td className="px-6 py-4">Edit || Delete</td>
    </tr>
  );
}
export default TableRowCustomer;

import React from "react";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

function TableRowCustomer({ customer, index, currentPage }) {
  return (
    <tr key={customer.id_user} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="px-6 py-4">{customer.nama}</td>
      <td className="px-6 py-4">{customer.role?.role_name || "N/A"}</td>
      <td className="px-6 py-4">{customer.no_telp}</td>
      <td className="px-6 py-4">{customer.email}</td>
      <td className="flex justify-center space-x-6 px-6 py-4">
        <TrashIcon className="w-6 h-6 stroke-red-600" />
        <PencilSquareIcon className="w-6 h-6 stroke-yellow-600" />
      </td>
    </tr>
  );
}
export default TableRowCustomer;

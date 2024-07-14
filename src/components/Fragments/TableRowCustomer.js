import React from "react";
import ButtonDelete from "../Elements/ButtonDelete";
import RouteUpdate from "../Elements/RouteUpdate";
import updateCustomerPage from "../../pages/customer/[id_user]";

function TableRowCustomer({
  customer,
  index,
  currentPage,
  handleDeleteCustomer,
}) {
  return (
    <tr key={customer.id_user} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="px-6 py-4">{customer.nama}</td>
      <td className="px-6 py-4">{customer.role?.role_name || "N/A"}</td>
      <td className="px-6 py-4">{customer.no_telp}</td>
      <td className="px-6 py-4">{customer.email}</td>
      <td className="flex justify-center space-x-6 px-6 py-4 ">
        <ButtonDelete onClick={() => handleDeleteCustomer(customer.id_user)} />
        <RouteUpdate to={`/customer/${customer.id_user}`} />
      </td>
    </tr>
  );
}
export default TableRowCustomer;

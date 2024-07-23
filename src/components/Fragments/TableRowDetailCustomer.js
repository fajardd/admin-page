import React from "react";
import ButtonDelete from "../Elements/ButtonDelete";
import moment from "moment/moment";

function TableRowDetailCustomer({
  historyCustomer,
  index,
  currentPage,
  handleDeleteHistory,
}) {
  return (
    <tr key={historyCustomer.id_user} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="">
        {moment(historyCustomer.tanggal, "DD-MM-YYYY").format("DD MMMM YYYY")}
      </td>
      <td className="px-6 py-4">{historyCustomer.user.nama}</td>
      <td className="px-6 py-4">{historyCustomer.pelayanan}</td>
      <td className="px-6 py-4">{historyCustomer.keterangan}</td>
      <td className="flex justify-center space-x-6 px-6 py-4">
        <ButtonDelete
          onClick={() => handleDeleteHistory(historyCustomer.id_history)}
        />
      </td>
    </tr>
  );
}

export default TableRowDetailCustomer;

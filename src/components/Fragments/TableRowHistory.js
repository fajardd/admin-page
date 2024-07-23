import React from "react";
import moment from "moment";
import ButtonDelete from "../Elements/ButtonDelete";
import ButtonDetail from "../Elements/ButtonDetail";

function TableRowHistory({ history, currentPage, index, handleDeleteHistory }) {
  return (
    <tr key={history.id_history} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className=" py-4">
        {moment(history.tanggal, "DD-MM-YYYY").format("D MMMM YYYY")}
      </td>{" "}
      <td className="px-6 py-4">{history.user.nama}</td>
      <td className="px-6 py-4">{history.pelayanan}</td>
      <td className="px-6 py-4 text-justify">{history.keterangan}</td>
      <td className="flex justify-center space-x-6 px-6 py-4 ">
        <ButtonDelete onClick={() => handleDeleteHistory(history.id_history)} />
        <ButtonDetail to={`/history/${history.id_history}`} />
      </td>
    </tr>
  );
}
export default TableRowHistory;

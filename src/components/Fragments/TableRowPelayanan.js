import React from "react";
import ButtonDelete from "../Elements/ButtonDelete";
import RouteUpdate from "../Elements/RouteUpdate";

function TableRowPelayanan({
  service,
  currentPage,
  index,
  handleDeleteService,
}) {
  return (
    <tr className="px-6 py-4 bg-white" key={service.id_service}>
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="px-6 py-4">{service.title}</td>
      <td className="px-6 py-4">{service.description}</td>
      <td className="flex justify-center space-x-6 px-6 py-4 ">
        <ButtonDelete onClick={() => handleDeleteService(service.id_service)} />

        <RouteUpdate to={`/pelayanan/update-pelayanan/${service.id_service}`} />
      </td>
    </tr>
  );
}
export default TableRowPelayanan;

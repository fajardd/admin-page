import React from "react";
import ButtonDelete from "../Elements/ButtonDelete";
import RouteUpdate from "../Elements/RouteUpdate";
import defaultImage from "../../assets/Images/default-image.jpg";

const BASE_URL = process.env.REACT_APP_BASE_URL;
function TableRowDokter({ dokter, currentPage, index, handleDeleteDokter }) {
  return (
    <tr key={dokter.id_user} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="px-6 py-4">
        <img
          src={
            dokter.image
              ? `${BASE_URL}/uploads/${dokter.image}`
              : `${defaultImage}`
          }
          alt={dokter.nama}
          style={{ width: "auto", height: "50px" }}
        />
      </td>
      <td className="px-6 py-4">{dokter.nama}</td>
      <td className="px-6 py-4">{dokter.role.role_name || "N/A"}</td>
      <td className="px-6 py-4">{dokter.username}</td>
      <td className="px-6 py-4">{dokter.email}</td>
      <td className="flex justify-center space-x-6 px-6 py-4 ">
        <ButtonDelete onClick={() => handleDeleteDokter(dokter.id_user)} />
        <RouteUpdate to={`/dokter/update-dokter/${dokter.id_user}`} />
      </td>
    </tr>
  );
}
export default TableRowDokter;

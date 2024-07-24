import React from "react";
import Table from "../Elements/Table";
import TableRowPelayanan from "./TableRowPelayanan";

function PelayananTable({ services, currentPage, handleDeleteService }) {
  return (
    <div className="overflow-x-auto w-full mt-6 border">
      <Table className="w-[100px] text-sm text-left border rtl:text-right text-black">
        <thead className="text-xs text-black bg-white border-b w-10">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Pelayanan
            </th>
            <th scope="col" className="px-6 py-3">
              Deskripsi Pelayanan
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <TableRowPelayanan
              key={service.id_user}
              service={service}
              index={index}
              currentPage={currentPage}
              handleDeleteService={handleDeleteService}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default PelayananTable;

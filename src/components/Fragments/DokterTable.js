import React from "react";
import Table from "../Elements/Table";
import TableRowDokter from "./TableRowDokter";

function DokterTable({ dokters, currentPage, handleDeleteDokter }) {
  return (
    <div className="overflow-x-auto w-full mt-6 border">
      <Table className="w-[100px] text-sm text-left border rtl:text-right text-black">
        <thead className="text-xs text-black bg-white border-b w-10">
          <tr>
            <th scope="col" className="px-6 py-3">
              NO
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              No Telp
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {dokters.map((dokter, index) => (
            <TableRowDokter
              key={dokter.id_user}
              dokter={dokter}
              index={index}
              currentPage={currentPage}
              handleDeleteDokter={handleDeleteDokter}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default DokterTable;

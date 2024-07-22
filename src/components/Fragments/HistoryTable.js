import React from "react";
import Table from "../Elements/Table";
import TableRowHistory from "./TableRowHistory";

function HistoryTable({ histories, currentPage, handleDeleteHistory }) {
  return (
    <div className="overflow-x-auto w-full max-w-[] mt-6 border">
      <Table className="w-[100px] text-sm text-left border rtl:text-right text-black">
        <thead className="text-xs text-black bg-white border-b w-10">
          <tr>
            <th scope="col" className="px-6 py-3">
              NO
            </th>
            <th scope="col" className="px-6 py-3">
              Tanggal
            </th>
            <th scope="col" className="px-6 py-3">
              Nama
            </th>
            <th scope="col" className="max-w-10">
              Riwayat
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {histories.map((history, index) => (
            <TableRowHistory
              key={history.id_user}
              history={history}
              index={index}
              currentPage={currentPage}
              handleDeleteHistory={handleDeleteHistory}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default HistoryTable;

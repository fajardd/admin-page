import React from "react";
import Table from "../Elements/Table";
import TableRowDetailCustomer from "./TableRowDetailCustomer";

function HistoryCustomerTable({
  historyCustomers,
  currentPage,
  handleDeleteHistory,
}) {
  return (
    <div className="overflow-x-auto w-full mt-6 border">
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
            <th scope="col" className="px-6 py-3">
              Pelayanan
            </th>
            <th scope="col" className="px-6 py-3">
              Keterangan
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {historyCustomers.length > 0 ? (
            historyCustomers.map((historyCustomer, index) => (
              <TableRowDetailCustomer
                key={historyCustomer.id_user}
                historyCustomer={historyCustomer}
                index={index}
                currentPage={currentPage}
                handleDeleteHistory={handleDeleteHistory}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4 bg-white">
                Belum ada data riwayat
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
export default HistoryCustomerTable;

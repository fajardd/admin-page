import React from "react";
import Table from "../Elements/Table";
import TableRowSchedule from "./TableRowSchedule";

function ScheduleTable({ schedules, currentPage }) {
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
              Hari
            </th>
            <th scope="col" className="px-6 py-3">
              Dokter Praktek
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {schedules.length > 0 ? (
            schedules.map((schedule, index) => (
              <TableRowSchedule
                key={schedule.id_schedule}
                schedule={schedule}
                index={index}
                currentPage={currentPage}
              />
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 bg-white">
                Belum ada data untuk ditampilkan
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
export default ScheduleTable;

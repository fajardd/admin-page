import React from "react";
import RouteUpdate from "../Elements/RouteUpdate";
import moment from "moment/moment";

function TableRowSchedule({ schedule, currentPage, index }) {
  return (
    <tr key={schedule.id_schedule} className="bg-white border-b">
      <td className="px-6 py-4">{(currentPage - 1) * 5 + index + 1}</td>
      <td className="px-6 py-4">
        {moment(schedule.tanggal, "DD-MM-YYYY").format("DD MMMM YYYY")}
      </td>
      <td className="py-6 px-4">{schedule.day}</td>
      <td className="py-6 px-4">
        {/* {schedule.users.map((user, index) => (
          <div key={index}>{user.nama}</div>
        ))} */}
        {schedule.users.map((user) => user.nama).join(", ")}
      </td>
      <td className="flex justify-center space-x-6 px-6 py-4 ">
        <RouteUpdate to={`/schedule/update-schedule/${schedule.id_schedule}`} />
      </td>
    </tr>
  );
}
export default TableRowSchedule;

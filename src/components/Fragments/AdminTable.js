import React from "react";
import Table from "../Elements/Table";
import TableRowAdmin from "./TableRowAdmin";

function AdminTable({ admins, currentPage, handleDeleteAdmin }) {
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
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) => (
            <TableRowAdmin
              key={admin.id_user}
              admin={admin}
              index={index}
              currentPage={currentPage}
              handleDeleteAdmin={handleDeleteAdmin}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default AdminTable;

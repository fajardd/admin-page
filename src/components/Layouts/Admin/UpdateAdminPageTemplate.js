import React from "react";
import InputUpdateCustomer from "../../Fragments/InputUpdateCustomer";
import ButtonUpdate from "../../Elements/ButtonUpdate";
import ButtonBack from "../../Elements/ButtonBack";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function UpdateAdminPageTemplate({
  handleUpdateAdmin,
  admin,
  handleInputChange,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Admin</h1>
      <div className="flex">
        <p className="text-blue-700">Admin</p>
        <ChevronRightIcon className="stroke-slate-300 w-6 h-6" />
        <p className="text-blue-700">Detail Admin</p>
      </div>

      <div className="border shadow rounded-[20px] p-6 mt-6">
        <form onSubmit={handleUpdateAdmin} className="grid space-y-6  ">
          <InputUpdateCustomer
            label="Nama"
            id="nama"
            type="text"
            value={admin.nama}
            onChange={handleInputChange}
          />
          <InputUpdateCustomer
            label="No Telp"
            id="no_telp"
            type="text"
            value={admin.no_telp}
            onChange={handleInputChange}
          />
          <InputUpdateCustomer
            label="Email"
            id="email"
            type="text"
            value={admin.email}
            onChange={handleInputChange}
          />
          <ButtonUpdate type="submit">Update</ButtonUpdate>
        </form>
      </div>
      <ButtonBack to={`/admin`} />
    </div>
  );
}
export default UpdateAdminPageTemplate;

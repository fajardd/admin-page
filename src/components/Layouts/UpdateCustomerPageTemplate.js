import React from "react";
import InputUpdateCustomer from "../Fragments/InputUpdateCustomer";
import ButtonUpdate from "../Elements/ButtonUpdate";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ButtonBack from "../Elements/ButtonBack";

function UpdateCustomerPageTemplate({
  handleUpdateCustomer,
  customer,
  handleInputChange,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Customer</h1>
      <div className="flex">
        <p className="text-blue-700">Customer</p>
        <ChevronRightIcon className="stroke-slate-300 w-6 h-6" />
        <p className="text-blue-700">Detail Customer</p>
      </div>

      <ButtonBack>Kembali</ButtonBack>

      <div className="border shadow rounded-[20px] p-6 mt-6">
        <form onSubmit={handleUpdateCustomer} className="grid space-y-6  ">
          <InputUpdateCustomer
            label="Nama"
            id="nama"
            type="text"
            value={customer.nama}
            onChange={handleInputChange}
          />

          <InputUpdateCustomer
            label="No Telp"
            id="no_telp"
            type="text"
            value={customer.no_telp}
            onChange={handleInputChange}
          />
          <InputUpdateCustomer
            label="Email"
            id="email"
            type="text"
            value={customer.email}
            onChange={handleInputChange}
          />
          <InputUpdateCustomer
            label="Password"
            id="password"
            type="text"
            value={customer.password}
            onChange={handleInputChange}
          />
          <ButtonUpdate type="submit">Update</ButtonUpdate>
        </form>
      </div>
    </div>
  );
}
export default UpdateCustomerPageTemplate;

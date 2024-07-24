import React from "react";
import InputUpdateCustomer from "../../Fragments/InputUpdateCustomer";
import ButtonUpdate from "../../Elements/ButtonUpdate";
import ButtonBack from "../../Elements/ButtonBack";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function UpdatePelayananPageTemplate({
  handleUpdateService,
  service,
  handleInputChange,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Pelayanan</h1>
      <div className="flex">
        <p className="text-blue-700">Pelayanan</p>
        <ChevronRightIcon className="stroke-slate-300 w-6 h-6" />
        <p className="text-blue-700">Detail Pelayanan</p>
      </div>
      <div className="border shadow bg-white rounded-[20px] p-6 mt-6">
        <form onSubmit={handleUpdateService} className="grid space-y-6  ">
          <InputUpdateCustomer
            label="Nama"
            id="title"
            type="text"
            value={service.title}
            onChange={handleInputChange}
          />
          <InputUpdateCustomer
            label="Deskripsi"
            id="description"
            type="text"
            value={service.description}
            onChange={handleInputChange}
          />
          <ButtonUpdate type="submit">Update</ButtonUpdate>
        </form>
      </div>
      <ButtonBack to={`/pelayanan`} />
    </div>
  );
}
export default UpdatePelayananPageTemplate;

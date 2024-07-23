import React from "react";
import InputUpdateDokter from "../../Fragments/InputUpdateDokter";
import ButtonUpdate from "../../Elements/ButtonUpdate";
import ButtonBack from "../../Elements/ButtonBack";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function UpdateDokterPageTemplate({
  handleUpdateDokter,
  dokter,
  handleInputChange,
}) {
  return (
    <div className="p-6">
      <h1 className="text-[24px] font-semibold">Dokter</h1>
      <div className="flex">
        <p className="text-blue-700">Dokter</p>
        <ChevronRightIcon className="stroke-slate-300 w-6 h-6" />
        <p className="text-blue-700">Detail Dokter</p>
      </div>

      <div className="border shadow bg-white rounded-[20px] p-6 mt-6">
        <form onSubmit={handleUpdateDokter} className="grid space-y-6  ">
          <InputUpdateDokter
            label="Nama"
            id="nama"
            type="text"
            value={dokter.nama}
            onChange={handleInputChange}
          />
          <InputUpdateDokter
            label="username"
            id="username"
            type="text"
            value={dokter.username}
            onChange={handleInputChange}
          />
          <InputUpdateDokter
            label="Email"
            id="email"
            type="text"
            value={dokter.email}
            onChange={handleInputChange}
          />
          <ButtonUpdate type="submit">Update</ButtonUpdate>
        </form>
      </div>
      <ButtonBack to={`/dokter`} />
    </div>
  );
}
export default UpdateDokterPageTemplate;

import React from "react";
import InputAddData from "../Elements/InputAddData";
import ButtonAdd from "../Elements/ButtonAdd";

function InputAddAdmin({ onChange, value, handleAddAdmin }) {
  return (
    <div className="flex space-x-4 mt-6">
      <InputAddData
        type="text"
        placeholder="Masukkan Nama"
        id="nama"
        onChange={onChange}
        value={value.nama}
      />
      <InputAddData
        type="text"
        placeholder="Masukkan No Telp"
        id="no_telp"
        onChange={onChange}
        value={value.no_telp}
      />
      <InputAddData
        type="text"
        placeholder="Masukkan Email"
        id="email"
        onChange={onChange}
        value={value.email}
      />
      <InputAddData
        type="text"
        placeholder="Masukkan Password"
        id="password"
        onChange={onChange}
        value={value.password}
      />
      <ButtonAdd onClick={handleAddAdmin}>Tambah Data</ButtonAdd>
    </div>
  );
}
export default InputAddAdmin;

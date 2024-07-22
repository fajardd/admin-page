import React from "react";
import InputAddData from "../Elements/InputAddData";
import ButtonAdd from "../Elements/ButtonAdd";

function InputAddDokter({ onChange, value, handleAddDokter }) {
  return (
    <div className="flex space-x-4 mt-6">
      <InputAddData
        type="text"
        placeholder="Masukkan nama"
        id="nama"
        onChange={onChange}
        value={value.nama}
      />
      <InputAddData
        type="text"
        placeholder="Masukkan no telp"
        id="no_telp"
        onChange={onChange}
        value={value.no_telp}
      />
      <InputAddData
        type="text"
        placeholder="Masukkan email"
        id="email"
        onChange={onChange}
        value={value.email}
      />
      <InputAddData
        type="text"
        placeholder="Masukkan Pasword"
        id="pasword"
        onChange={onChange}
        value={value.pasword}
      />
      <ButtonAdd onClick={handleAddDokter}>Tambah Data</ButtonAdd>
    </div>
  );
}
export default InputAddDokter;

import React from "react";
import InputAddData from "../Elements/InputAddData";
import ButtonAdd from "../Elements/ButtonAdd";

function InputAddService({ onChange, value, handleAddService }) {
  return (
    <div className="flex space-x-4 mt-6">
      <InputAddData
        type="text"
        placeholder="Nama Pelayanan"
        id="title"
        onChange={onChange}
        value={value.title}
      />
      <InputAddData
        type="text"
        placeholder="Deskripsi Pelayanan"
        id="description"
        onChange={onChange}
        value={value.description}
      />
      <ButtonAdd onClick={handleAddService}>Tambah Data</ButtonAdd>
    </div>
  );
}
export default InputAddService;

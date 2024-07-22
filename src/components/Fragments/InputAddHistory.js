import React from "react";
import InputAddData from "../Elements/InputAddData";
import ButtonAdd from "../Elements/ButtonAdd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

function InputAddHistory({ onChange, value, handleAddHistory }) {
  const handleDateChange = (date) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    onChange({ target: { id: "tanggal", value: formattedDate } });
  };
  return (
    <div className="flex space-x-4 mt-6">
      <InputAddData
        type="textArea"
        placeholder="Masukkan Riwayat"
        id="riwayat"
        onChange={onChange}
        value={value.riwayat}
      />
      <InputAddData
        type="text"
        placeholder="Masukkan user"
        id="id_user"
        onChange={onChange}
        value={value.id_user}
      />
      <div className="relative">
        <DatePicker
          selected={
            value.tanggal
              ? new Date(value.tanggal.split("-").reverse().join("-"))
              : null
          }
          onChange={handleDateChange}
          dateFormat="dd MMMM yyyy"
          placeholderText="Masukkan Tanggal"
          className="border border-slate-300 focus:border-blue-700 focus:outline-none rounded-md text-[16px] p-2"
        />
        <div className="absolute top-2 right-2">
          <CalendarDaysIcon className="w-6 h-6 stroke-slate-400 " />
        </div>
      </div>

      <ButtonAdd onClick={handleAddHistory}>Tambah Data</ButtonAdd>
    </div>
  );
}

export default InputAddHistory;

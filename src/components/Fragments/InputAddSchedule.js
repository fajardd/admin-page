import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import InputAddData from "../Elements/InputAddData";
import ButtonAdd from "../Elements/ButtonAdd";
import MultiSelectUser from "../Elements/MultiSelectUser";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

function InputAddSchedule({
  onChange,
  value,
  handleAddSchedule,
  listDokter,
  onSelectDokter,
  onRemoveDokter,
}) {
  const handleDateChange = (date) => {
    const formattedDate = format(date, "dd-MM-yyyy");
    onChange({ target: { id: "tanggal", value: formattedDate } });
  };

  return (
    <div className="flex space-x-4 mt-6">
      <MultiSelectUser
        options={listDokter}
        displayValue="nama_dokter"
        onSelect={onSelectDokter}
        onRemove={onRemoveDokter}
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
      <InputAddData
        type="text"
        placeholder="Masukkan Hari"
        id="day"
        onChange={onChange}
        value={value.day}
      />
      <ButtonAdd onClick={handleAddSchedule}>Tambah Data</ButtonAdd>
    </div>
  );
}

export default InputAddSchedule;

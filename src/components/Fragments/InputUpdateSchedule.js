import React from "react";
import InputUpdateCustomer from "./InputUpdateCustomer";
import MultiSelectUser from "../Elements/MultiSelectUser";
import InputUpdateDate from "./InputUpdateDate";
import ButtonUpdate from "../Elements/ButtonUpdate";

function InputUpdateSchedule({
  handleUpdateSchedule,
  schedule,
  listDokter,
  selectedDokters,
  onSelectDokter,
  onRemoveDokter,
  handleDateChange,
  updateScheduleData,
}) {
  return (
    <div className="border shadow bg-white rounded-[20px] p-6 mt-6">
      <form onSubmit={handleUpdateSchedule} className="grid space-y-6">
        <InputUpdateCustomer
          label="Hari"
          id="day"
          type="text"
          value={updateScheduleData.day}
          disabled
        />
        <InputUpdateDate
          label="Tanggal"
          selected={
            updateScheduleData.tanggal
              ? new Date(updateScheduleData.tanggal)
              : null
          }
          onChange={handleDateChange}
        />

        <MultiSelectUser
          id="id_user"
          label="Dokter"
          options={listDokter}
          displayValue="nama"
          selectedValues={selectedDokters}
          onSelect={onSelectDokter}
          onRemove={onRemoveDokter}
          value={updateScheduleData.id_user}
        />
        <ButtonUpdate type="submit">Update</ButtonUpdate>
      </form>
    </div>
  );
}

export default InputUpdateSchedule;

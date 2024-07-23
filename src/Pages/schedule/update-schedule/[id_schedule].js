import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getByIdSchedule,
  updateSchedule,
} from "../../../services/schedule.services";
import { getDropdownDokters } from "../../../services/dropdown.services";
import moment from "moment";
import UpdateSchedulePageTemplate from "../../../components/Layouts/Schedule/UpdateSchedulePageTemplate";
import Swal from "sweetalert2";

function UpdateSchedule() {
  const { id_schedule } = useParams();
  const [schedule, setSchedule] = useState({});
  const [listDokter, setListDokter] = useState([]);
  const [selectedDokters, setSelectedDokters] = useState([]);
  const [updateScheduleData, setUpdateScheduleData] = useState({
    tanggal: "",
    day: "",
    id_user: [],
  });

  // GET SCHEDULE BY ID
  useEffect(() => {
    async function fetchSchedule() {
      try {
        const dataSchedule = await getByIdSchedule(id_schedule);
        setSchedule(dataSchedule.data);
        setSelectedDokters(
          dataSchedule.data.users.map((user) => ({
            id_user: user.id_user,
            nama: user.nama,
          }))
        );
        setUpdateScheduleData((prevState) => ({
          ...prevState,
          id_user: dataSchedule.data.users.map((user) => user.id_user),
          tanggal: moment(dataSchedule.data.tanggal, "DD-MM-YYYY").format(
            "YYYY-MM-DD"
          ),
          day: dataSchedule.data.day,
        }));
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    }
    fetchSchedule();
  }, [id_schedule]);

  // GET DROPDOWN DOCTORS
  useEffect(() => {
    const getDokters = async () => {
      try {
        const response = await getDropdownDokters();
        const dataDokters = response.data.map((dokter) => ({
          id_user: dokter.id_user,
          nama: dokter.nama_dokter,
        }));
        setListDokter(dataDokters);
      } catch (error) {
        console.error("Error getting dropdown dokters:", error);
      }
    };
    getDokters();
  }, []);

  const handleSelectDokter = (selectedList) => {
    setSelectedDokters(selectedList);
    setUpdateScheduleData((prevState) => ({
      ...prevState,
      id_user: selectedList.map((dokter) => dokter.id_user),
    }));
  };

  const handleRemoveDokter = (selectedList) => {
    setSelectedDokters(selectedList);
    setUpdateScheduleData((prevState) => ({
      ...prevState,
      id_user: selectedList.map((dokter) => dokter.id_user),
    }));
  };

  // Handle date change
  const handleDateChange = (date) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
    console.log("format tanggal:", formattedDate);
    setUpdateScheduleData((prevState) => ({
      ...prevState,
      tanggal: formattedDate,
    }));
    setUpdateScheduleData((prevState) => ({
      ...prevState,
      tanggal: formattedDate,
    }));
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUpdateScheduleData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle update schedule
  const handleUpdateSchedule = async (e) => {
    e.preventDefault();
    try {
      await updateSchedule(id_schedule, updateScheduleData);
      Swal.fire({
        icon: "success",
        title: "Data berhasil diupdate",
        showConfirmButton: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Data gagal diupdate",
        showConfirmButton: true,
        text: "Data gagal diupdate",
      });
      console.error("Error updating schedule:", error);
    }
  };

  return (
    <UpdateSchedulePageTemplate
      handleUpdateSchedule={handleUpdateSchedule}
      schedule={schedule}
      handleInputChange={handleInputChange}
      listDokter={listDokter}
      selectedDokters={selectedDokters}
      onSelectDokter={handleSelectDokter}
      onRemoveDokter={handleRemoveDokter}
      handleDateChange={handleDateChange}
    />
  );
}

export default UpdateSchedule;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdDokter, updateDokter } from "../../../services/dokter.services";
import UpdateDokterPageTemplate from "../../../components/Layouts/Dokter/UpdateDokterPageTemplate";
import Swal from "sweetalert2";

function UpdateDokterPage() {
  const { id_user } = useParams();
  const [dokter, setDokter] = useState(null);
  const [updatedDokter, setUpdatedDokter] = useState({
    nama: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    async function fetchDokter() {
      try {
        const data = await getByIdDokter(id_user);
        setDokter(data.data);
        setUpdatedDokter(data.data);
      } catch (error) {
        console.error("Error fetching dokter:", error);
      }
    }
    fetchDokter();
  }, [id_user]);

  const handleInputChange = async (e) => {
    const { id, value } = e.target;
    setUpdatedDokter((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUpdateDokter = async (e) => {
    e.preventDefault();
    try {
      await updateDokter(id_user, updatedDokter);
      Swal.fire({
        icon: "success",
        title: "Data berhasil diupdate",
        showConfirmButton: true,
      });
    } catch (error) {
      console.error("Error updating dokter:", error);
      console.error("API response error:", error.response);
      const errorMessage =
        error.response?.data?.message || error.message || "Terjadi kesalahan";
      Swal.fire({
        icon: "error",
        title: "Data gagal diupdate",
        showConfirmButton: true,
        text: errorMessage,
      });
      console.error("Error updating dokter:", error);
    }
  };

  if (!dokter) {
    return <div>Loading...</div>;
  }
  return (
    <UpdateDokterPageTemplate
      dokter={updatedDokter}
      handleUpdateDokter={handleUpdateDokter}
      handleInputChange={handleInputChange}
    />
  );
}

export default UpdateDokterPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getByIdService,
  updateService,
} from "../../../services/pelayanan.services";
import UpdatePelayananPageTemplate from "../../../components/Layouts/Pelayanan/UpdatePelayananPageTemplate";
import Swal from "sweetalert2";

function UpdatePelayanan() {
  const { id_service } = useParams();
  const [service, setService] = useState(null);
  const [updatedService, setUpdatedService] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    async function fetchDetailService() {
      try {
        const data = await getByIdService(id_service);
        setService(data.data);
        setUpdatedService(data.data);
      } catch (error) {
        console.error("Error fetch detail service:", error);
      }
    }
    fetchDetailService();
  }, [id_service]);

  const handleInputChange = async (e) => {
    const { id, value } = e.target;
    setUpdatedService((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUpdateService = async (e) => {
    e.preventDefault();
    try {
      await updateService(id_service, updatedService);
      Swal.fire({
        icon: "success",
        title: "Data Berhasil Diupdate",
        showConfirmButton: true,
      });
    } catch (error) {
      console.error("Error update service", error);
    }
  };

  if (!service) {
    return <div>loading....</div>;
  }

  return (
    <UpdatePelayananPageTemplate
      service={updatedService}
      handleUpdateService={handleUpdateService}
      handleInputChange={handleInputChange}
    />
  );
}
export default UpdatePelayanan;

import React, { useEffect, useState } from "react";
import {
  getAllService,
  addService,
  deleteService,
} from "../../services/pelayanan.services";
import PelayananPageTemplate from "../../components/Layouts/Pelayanan/PelayananPageTemplate";
import Swal from "sweetalert2";

const Pelayanan = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // GET ALL SERVICE
  useEffect(() => {
    const getServices = async (page) => {
      try {
        const data = await getAllService(page);
        setServices(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getServices();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // ADD SERVICE

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddService = async () => {
    try {
      const response = await addService(formData);
      const newService = response.data;
      setServices((prevServices) => [...prevServices, newService]);
      setFormData({
        title: "",
        description: "",
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan Pelayanan Baru",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE SERVICE
  const handleDeleteService = async (id_service) => {
    try {
      const result = await Swal.fire({
        title: "Apakah anda yakin?",
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Hapus",
        cancelButtonText: "Batal",
      });
      if (result.isConfirmed) {
        await deleteService(id_service);
        setServices((prevServices) =>
          prevServices.filter((service) => service.id_service !== id_service)
        );
        Swal.fire({
          title: "Deleted!",
          text: "Data berhasil dihapus",
          icon: "success",
        });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <PelayananPageTemplate
        services={services}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        handleDeleteService={handleDeleteService}
        handleAddService={handleAddService}
        value={formData}
        onChange={handleChange}
      />
    </div>
  );
};

export default Pelayanan;

import React, { useState, useEffect } from "react";
import {
  getAllCustomer,
  addCustomer,
  deleteCustomer,
} from "../../services/customer.services";
import CustomerPageTemplate from "../../components/Layouts/CustomerPageTemplate";
import Swal from "sweetalert2";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [formData, setFormData] = useState({
    nama: "",
    no_telp: "",
    email: "",
    id_role: "6eb7bcda-9af0-4dc2-a87b-89592a15a7f9",
    password: "",
  });

  useEffect(() => {
    const getCustomers = async (page) => {
      try {
        const data = await getAllCustomer(page);
        setCustomers(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCustomers(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleAddCustomer = async () => {
    try {
      const response = await addCustomer(formData);
      const newCustomer = response.data;
      setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
      setFormData({
        nama: "",
        no_telp: "",
        email: "",
        id_role: "6eb7bcda-9af0-4dc2-a87b-89592a15a7f9",
        password: "",
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan Customer Baru",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteCustomer = async (id_user) => {
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
        await deleteCustomer(id_user);
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id_user !== id_user)
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
    <CustomerPageTemplate
      customers={customers}
      currentPage={currentPage}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
      onChange={handleChange}
      value={formData}
      handleAddCustomer={handleAddCustomer}
      handleDeleteCustomer={handleDeleteCustomer}
    />
  );
};

export default Customer;

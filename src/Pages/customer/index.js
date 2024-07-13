import React, { useState, useEffect } from "react";
import { getAllCustomer, addCustomer } from "../../services/customer.services";
import CustomerPageTemplate from "../../components/Layouts/CustomerPageTemplate";

function Customer() {
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
      const newCustomer = await addCustomer(formData);
      setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
      setFormData({
        nama: "",
        no_telp: "",
        email: "",
        id_role: "6eb7bcda-9af0-4dc2-a87b-89592a15a7f9",
        password: "",
      });
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
    />
  );
}

export default Customer;

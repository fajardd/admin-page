import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getByIdCustomer,
  updateCustomer,
} from "../../../services/customer.services";
import UpdateCustomerPageTemplate from "../../../components/Layouts/Customer/UpdateCustomerPageTemplate";
import Swal from "sweetalert2";

function UpdateCustomerPage() {
  const { id_user } = useParams();
  const [customer, setCustomer] = useState(null);
  const [updatedCustomer, setUpdatedCustomer] = useState({
    nama: "",
    no_telp: "",
    email: "",
  });

  useEffect(() => {
    async function fetchCustomer() {
      try {
        const data = await getByIdCustomer(id_user);
        setCustomer(data.data);
        setUpdatedCustomer(data.data);
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    }
    fetchCustomer();
  }, [id_user]);

  const handleInputChange = async (e) => {
    const { id, value } = e.target;
    setUpdatedCustomer((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUpdateCustomer = async (e) => {
    e.preventDefault();
    try {
      await updateCustomer(id_user, updatedCustomer);
      Swal.fire({
        icon: "success",
        title: "Data berhasil diupdate",
        showConfirmButton: true,
      });
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <UpdateCustomerPageTemplate
      customer={updatedCustomer}
      handleUpdateCustomer={handleUpdateCustomer}
      handleInputChange={handleInputChange}
    />
  );
}

export default UpdateCustomerPage;

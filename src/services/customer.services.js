import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// GET ALL CUSTOMER
export const getAllCustomer = async (page = 1, limit = 5) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(
      `${BASE_URL}/web/v1/customer?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Please Login");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

// CREATE DATA CUSTOMER
export const addCustomer = async (customerData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/customer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add customer");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding Customer", error);
    throw error;
  }
};

// DELETE DATA CUSTOMER
export const deleteCustomer = async (id_user) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/customer/${id_user}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete customer");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error delete Customer", error);
    throw error;
  }
};

// GET BY ID HISTORY BY CUSTOMER
export const getByIdCustomer = async (id_user) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/customer/${id_user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Fauled get detail customer");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching id customers:", error);
    throw error;
  }
};

// UPDATE DTA CUSTOMER
export const updateCustomer = async (id_user, customerData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/customer/${id_user}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update customer");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error update Customer", error);
    throw error;
  }
};

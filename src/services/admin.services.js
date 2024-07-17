import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// GET ALL ADMIN
export const getAllAdmin = async (page = 1) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/admin?page${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response) {
      throw new Error("please login");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching admin:", error);
    throw error;
  }
};

// CREATE ADMIN
export const addAdmin = async (adminData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(adminData),
    });
    if (!response.ok) {
      throw new Error("Failed to add admin");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding admin", error);
    throw error;
  }
};

// DELETE ADMIN
export const deleteAdmin = async (id_user) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/admin/${id_user}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response) {
      throw new Error("Failed to delete admin");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error delete admin", error);
    throw error;
  }
};

// GET BY ID ADMIN
export const getByIdAdmin = async (id_user) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/admin/${id_user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Please Login");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching id admin:", error);
    throw error;
  }
};

// UPDATE DTA CUSTOMER
export const updateAdmin = async (id_user, adminData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/admin/${id_user}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(adminData),
    });

    if (!response.ok) {
      throw new Error("Failed to add admin");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding admin", error);
    throw error;
  }
};

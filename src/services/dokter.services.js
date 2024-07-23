import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_URL;

//GET ALL DOKTER
export const getAllDokter = async (page = 1, limit = 5) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(
      `${BASE_URL}/web/v1/veterinarian?page=${page}&limit=${limit}`,
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

// CREATE DOKTER
export const addDokter = async (dokterData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/veterinarian`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dokterData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add dokter");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding dokter:", error);
    throw error;
  }
};

// DELETE DATA DOKTER
export const deleteDokter = async (id_user) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/veterinarian/${id_user}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete dokter");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error delete dokter", error);
    throw error;
  }
};

// GET BY ID DOKTER
export const getByIdDokter = async (id_user) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/veterinarian/${id_user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to get detail dokter");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching id customers:", error);
    throw error;
  }
};

// UPDATE DTA DOKTER
export const updateDokter = async (id_user, dokterData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/veterinarian/${id_user}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dokterData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update dokter");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error update dokter", error);
    throw error;
  }
};

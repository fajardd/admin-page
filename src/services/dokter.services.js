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
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding dokter:", error);
    throw error;
  }
};

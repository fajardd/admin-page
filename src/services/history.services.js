import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_URL;

// GET ALL ADMIN
export const getAllHistories = async (page = 1) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/histories?page=${page}`, {
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
    console.error("Error fetching history:", error);
    throw error;
  }
};

// CREATE DATA HISTORY
export const addHistory = async (historyData) => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${BASE_URL}/web/v1/histories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(historyData),
    });

    if (!response.ok) {
      throw new Error("Failed to add history");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding history", error);
    throw error;
  }
};

import Cookies from "js-cookie";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getDropdownDokters = async () => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(`${BASE_URL}/web/v1/dropdown/dokter`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API response error:", error.response);
    } else {
      console.error("Error get schedules", error.message);
    }

    throw error;
  }
};

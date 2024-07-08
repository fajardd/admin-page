import Cookies from "js-cookie";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    const data = await response.json();
    // Cookies.set("token", data.token, { expires: 7 }); // Menyimpan token dengan masa aktif 7 hari
    const expiresHours = 6;
    const tokenExpiration = new Date(
      new Date().getTime() + expiresHours * 60 * 60 * 1000
    );
    Cookies.set("token", data.token, { expires: tokenExpiration }); // Menyimpan token dengan masa aktif 6 Jam
    return data.token;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

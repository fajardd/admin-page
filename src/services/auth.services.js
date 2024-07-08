import Cookies from "js-cookie";
const BASE_URL = process.env.BASE_URL_API;

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
    Cookies.set("token", data.token, { expires: 1 });
    return data.token;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

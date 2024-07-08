import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Cookies from "js-cookie";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import "./assets/Styles/index.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <React.StrictMode>
      {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

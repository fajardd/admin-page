import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Cookies from "js-cookie";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Admin from "./pages/admin";
import Veterinarian from "./pages/veterinarian";
import Customer from "./pages/customer";
import Riwayat from "./pages/riwayat";
import Schedule from "./pages/schedule";
import Pelayanan from "./pages/pelayanan";
import UpdateCustomerPage from "./pages/customer/[id_user]";
import Sidebar from "./components/Layouts/Sidebar";
import "./assets/Styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div className="flex-grow">
          <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/veterenarian" element={<Veterinarian />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customer/:id_user" element={<UpdateCustomerPage />} />
            <Route path="/riwayat" element={<Riwayat />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/pelayanan" element={<Pelayanan />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

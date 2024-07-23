import React, { useState, useEffect } from "react";
import { login } from "../../services/auth.services";
import LoginTemplate from "../../components/Layouts/Login/LoginTemplate";

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      onLogin();
    } catch (error) {
      setError("Email atau password salah!");
    }
  };

  useEffect(() => {
    document.title = "Admin";
  }, []);

  return (
    <LoginTemplate
      onLogin={onLogin}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      handleSubmit={handleSubmit}
    />
  );
}

export default LoginPage;

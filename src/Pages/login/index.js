import { useEffect } from "react";
import LoginTemplate from "../../components/Layouts/Login/LoginTemplate";

function LoginPage({ onLogin }) {
  useEffect(() => {
    document.title = "Admin";
  }, []);

  return <LoginTemplate onLogin={onLogin} />;
}

export default LoginPage;

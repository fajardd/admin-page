import { useEffect } from "react";
import LoginTemplate from "../../components/Layouts/LoginTemplate";

function LoginPage() {
  useEffect(() => {
    document.title = "Admin";
  }, []);

  return <LoginTemplate />;
}

export default LoginPage;

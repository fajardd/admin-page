import { useState } from "react";
import InputField from "../Fragments/InputFIeld";
import Button from "../Elements/Button";
import { login } from "../../services/auth.services";
import adminLogo from "../../assets/Images/admin.webp";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

function LoginTemplate({ onLogin }) {
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
  return (
    <div className="h-screen bg-blue-700 z-0">
      <div className="px-6 md:px-0 flex md:justify-center z-10">
        <div className="grid border shadow bg-white rounded-[20px] p-6 space-y-4 w-full md:w-1/2 xl:w-1/4 mt-32">
          <div className="flex">
            <div className="flex justify-center items-center mr-2">
              <img src={adminLogo} className="w-6 h-6" alt="logo-admin" />
            </div>
            <div>
              <h1 className="font-semibold text-52 text-[24px]">Login Admin</h1>
            </div>
          </div>

          <InputField
            label="Email"
            type="text"
            placeholder="Masukkan email"
            id="email"
            icon={EnvelopeIcon}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Masukkan password"
            id="password"
            icon={LockClosedIcon}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginTemplate;

import InputField from "../Fragments/InputFIeld";
import Button from "../Elements/Button";
import adminLogo from "../../assets/Images/admin.webp";

function LoginTemplate() {
  return (
    <div className="h-screen bg-blue-400 z-0">
      <div className="px-6 md:px-0 flex md:justify-center z-10">
        <div className="grid border shadow bg-white rounded-[20px] p-6 space-y-4 w-full md:w-1/2 xl:w-1/4 mt-32">
          <div className="flex">
            <div className="flex justify-center items-center mr-2">
              <img src={adminLogo} className="w-6 h-6" alt="logo-admin" />
            </div>
            <div>
              <h1 className="font-semibold text-52 text-[24px]">Login admin</h1>
            </div>
          </div>
          <InputField
            label="Email"
            type="text"
            placeholder="Masukkan email"
            id="email"
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Masukkan password"
            id="password"
          />
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginTemplate;

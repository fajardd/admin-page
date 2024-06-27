import { useEffect } from "react";
import adminLogo from "../../Assets/Images/admin.webp";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

function Login() {
  useEffect(() => {
    document.title = "Admin";
  }, []);
  return (
    <div className="h-screen bg-blue-400 z-0">
      <div className="px-6 md:px-0 flex md:justify-center z-10">
        <div className="grid border shadow bg-white rounded-[20px] p-6 space-y-4 w-full md:w-1/2 xl:w-1/4 mt-32">
          <div className="flex">
            <div className="flex justify-center items-center mr-2">
              <img src={adminLogo} className=" w-6 h-6" alt="logo-admin" />
            </div>
            <div>
              <h1 className="font-semibold text-52  text-[24px]">
                Login admin
              </h1>
            </div>
          </div>

          {/* input telp */}
          <label htmlFor="telp">
            <p className="font-medium mb-2">No Telepon</p>
            <input
              type="text"
              placeholder="Masukkan no telepon"
              className="border focus:border-blue-500 focus:outline-none rounded-[10px] bg-white  w-full h-[48px] p-2"
            />
          </label>
          {/* input telp */}

          {/* input password */}
          <label htmlFor="password">
            <p className="font-medium mb-2">Password</p>
            <input
              type="password"
              placeholder="Masukkan password"
              className="border focus:border-blue-500 focus:outline-none rounded-[10px] bg-white w-full h-[48px] p-2 "
            />
          </label>
          {/* input password */}

          <button className="flex justify-center items-center bg-blue-400 text-white font-medium p-2 rounded-[10px] space-y-2 w-full h-[48px]">
            <ArrowRightCircleIcon className="text-white w-6 h-6 mr-2" />
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

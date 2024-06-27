import { useEffect } from "react";

function Login() {
  useEffect(() => {
    document.title = "Admin";
  }, []);
  return (
    <div className="px-6 md:px-0 flex md:justify-center">
      <div className="grid border bg-white rounded-md  p-6 space-y-4 w-full md:w-1/2 xl:w-1/4 mt-32">
        <h1 className="font-semibold text-52  text-[24px]">Login admin</h1>
        {/* input telp */}
        <label htmlFor="telp">
          <p className="font-medium">No telepon</p>
          <input
            type="text"
            placeholder="Masukkan no telepon"
            className="border focus:border-blue-500 focus:outline-none  bg-white  w-full p-2"
          />
        </label>
        {/* input telp */}

        {/* input password */}
        <label htmlFor="password" className="mb-24">
          <p className="font-medium">Password</p>
          <input
            type="password"
            placeholder="Masukkan password"
            className="border focus:border-blue-500 focus:outline-none bg-white w-full p-2 "
          />
        </label>
        {/* input password */}

        <button className="bg-blue-400 text-white p-2 mt-[5000px]">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

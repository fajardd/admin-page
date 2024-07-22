import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

function Button({ children, ...props }) {
  return (
    <button
      className="flex justify-center items-center bg-pink-700 focus:outline-none text-white font-medium p-2 rounded-[10px] space-y-2 w-full h-[48px]"
      {...props}
    >
      <ArrowRightCircleIcon className="text-white w-6 h-6 mr-2" />
      {children}
    </button>
  );
}

export default Button;

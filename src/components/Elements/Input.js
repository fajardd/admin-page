function Input({ type, placeholder, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border focus:border-blue-500 focus:outline-none rounded-[10px] bg-white w-full h-[48px] p-2 "
      {...props}
    />
  );
}

export default Input;

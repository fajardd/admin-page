function Input({ type, placeholder, icon: Icon, ...props }) {
  return (
    <div className="relative flex items-center">
      {Icon && <Icon className="absolute left-3 w-6 h-6 stroke-slate-300" />}
      <input
        type={type}
        placeholder={placeholder}
        className="border focus:border-blue-500 focus:outline-none rounded-[10px] bg-white w-full h-[48px] p-2 pl-10 "
        {...props}
      />
    </div>
  );
}

export default Input;

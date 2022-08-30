function Button({ children, className, ...rest }) {
  return (
    <a
      className={` 
        button
        px-6 py-2 text-gray-300 font-medium
        rounded-[5px] cursor-pointer bg-transparent hover:text-primary-color
        transition-all duration-300 ease-in-out
        ${className}
        
      `}
      {...rest}
      download
    >
      <button className="flex items-center gap-2 w-full">{children}</button>
    </a>
  );
}

export default Button;

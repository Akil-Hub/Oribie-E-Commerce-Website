

const Button = ({ title, className,onClick }) => {
  return (
    <button
      className={`px-4 h-11 rounded-md text-xl font-semibold cursor-pointer  active:scale-95 duration-200 bg-primary text-white border-primary border-2 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

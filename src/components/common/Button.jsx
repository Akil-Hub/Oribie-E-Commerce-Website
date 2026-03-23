

const Button = ({ title, className,onClick }) => {
  return (
    <button
      className={`px-6 h-11 text-xs  font-semibold cursor-pointer  active:scale-95 duration-200 bg-btn text-white  ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

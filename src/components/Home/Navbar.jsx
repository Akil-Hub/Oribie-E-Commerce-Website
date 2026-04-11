import logo from "/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "@/components/common/Image";
import { useDispatch, useSelector } from "react-redux";
import { useFilter } from "@/hooks/useFilter";
import { setIsCategorySelected, setQuery, setSelectedCategory } from "@/features/filter/filterSlice";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useSelector((state) => state.filter.query);
  const { categories } = useFilter();

  // ✅ mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInputChange = (e) => dispatch(setQuery(e.target.value));

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
    dispatch(setIsCategorySelected(true));
  };

  const navLinkClass = ({ isActive }) =>
    `hover:font-bold hover:text-gray-900 duration-300 active:scale-90 ${isActive ? "text-btn font-bold" : "text-primary"}`;

  return (
    <nav className="sticky top-0 z-50 bg-white">

      {/* Top Header */}
      <header className="wrapper flex justify-between items-center py-4">
        <NavLink className="w-[120px] md:w-[160px]" to={"/"}>
          <Image src={logo} alt={logo} />
        </NavLink>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-5 items-center text-lg text-gray-400">
          <li><NavLink className={navLinkClass} to={"/"}>Home</NavLink></li>
          <li><NavLink className={navLinkClass} to={"/shop"}>Shop</NavLink></li>
          <li><NavLink className={navLinkClass} to={"/about"}>About</NavLink></li>
          <li><NavLink className={navLinkClass} to={"/contact"}>Contacts</NavLink></li>
        </ul>

        {/* Icons — always visible */}
        <div className="flex gap-4 items-center">
          <button popoverTarget="account" style={{ anchorName: "--anchor-account" }}>
            <MdPeopleAlt className="text-2xl" />
          </button>
          <FaCartArrowDown
            onClick={() => navigate("cart")}
            className="text-2xl cursor-pointer active:scale-90 duration-300"
          />
          {/* ✅ Hamburger — mobile only */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Account Dropdown */}
        <ul
          className="dropdown pt-10 menu w-52 rounded-box bg-btn text-white shadow-sm"
          popover="auto"
          id="account"
          style={{ positionAnchor: "--anchor-account" }}
        >
          <li onClick={() => navigate("/signUp")} className="py-2 text-xl font-semibold cursor-pointer active:scale-90 duration-300">Sign Up</li>
          <li onClick={() => navigate("/login")} className="py-2 text-xl font-semibold cursor-pointer active:scale-90 duration-300">Sign In</li>
        </ul>
      </header>

      {/* ✅ Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 text-lg">
          <NavLink className={navLinkClass} to={"/"} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
          <NavLink className={navLinkClass} to={"/shop"} onClick={() => setIsMobileMenuOpen(false)}>Shop</NavLink>
          <NavLink className={navLinkClass} to={"/about"} onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
          <NavLink className={navLinkClass} to={"/contact"} onClick={() => setIsMobileMenuOpen(false)}>Contacts</NavLink>
        </div>
      )}

      {/* Bottom Search Bar */}
      <section className="bg-secondary border-y-3 border-gray-200">
        <header className="wrapper flex flex-wrap justify-between items-center gap-3 py-3">

          {/* Category Button */}
          <button popoverTarget="category" style={{ anchorName: "--anchor-category" }}>
            <div className="flex gap-2 items-center">
              <HiBars3CenterLeft className="text-2xl" />
              <Link to={"/"} className="hidden sm:block">
                <h3>Shop by Category</h3>
              </Link>
            </div>
          </button>

          <ul
            className="dropdown pt-10 menu w-52 rounded-box bg-btn text-white shadow-sm"
            popover="auto"
            id="category"
            style={{ positionAnchor: "--anchor-category" }}
          >
            {categories.map((c, idx) => (
              <li key={idx} onClick={() => handleCategoryChange(c)} className="py-1 text-lg uppercase cursor-pointer">
                {c}
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <div className="flex justify-between items-center px-3 py-2 bg-white rounded-md w-full sm:w-auto flex-1 sm:max-w-xs md:max-w-sm lg:max-w-md">
            <input
              className="px-3 py-1 focus:outline-none w-full"
              placeholder="Search For Products..."
              value={query}
              onChange={handleInputChange}
            />
            <CiSearch className="text-3xl" />
          </div>

        </header>
      </section>
    </nav>
  );
};

export default Navbar;
import logo from "/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";

import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Image from "@/components/common/Image";
import { useFilterContext } from "@/components/contexts/filterContext";

const Navbar = () => {
 
  const { query,setSelectedCategory,selectedCategory, setQuery,finalFilteredProducts,categories,setIsCategorySelected } = useFilterContext();

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setIsCategorySelected(true)
    
  };
  const navLinkClass = ({ isActive }) =>
    `hover:font-bold hover:text-gray-900 duration-300  active:scale-90 ${isActive ? "text-btn font-bold" : "text-primary"}`;

  return (
    <nav className="sticky">
      <header className="wrapper flex justify-between items-center py-6 ">
        <NavLink className="w-[40%]" to={"/"}>
          <Image src={logo} alt={logo} />
        </NavLink>

        <ul className="w-[60%] flex gap-5 items-center  text-xl text-gray-400">
          <li>
            <NavLink className={navLinkClass} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to={"/shop"}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to={"/services"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to={"/contact"}>
              Contacts{" "}
            </NavLink>
          </li>
        </ul>
      </header>
      <section className="bg-secondary border-y-3 border-gray-200 ">
        <header className="wrapper flex justify-between items-center 0   ">
       
          <button
            className="  "
            popoverTarget="category"
            style={{ anchorName: "--anchor-category" }}
          >
          <div  className="flex gap-3 items-center">
              <HiBars3CenterLeft className="text-2xl" />

            <Link className="" to={"/"}>
              <h3>Shop by Category</h3>
            </Link>
          </div>
          </button>

          <ul
            className="dropdown  pt-10 menu w-52 rounded-box bg-btn text-white shadow-sm"
            popover="auto"
            id="category"
            style={
              { positionAnchor: "--anchor-category" } /* as React.CSSProperties */
            }
          >
            {categories.map(c=><li  onClick={() => handleCategoryChange(c)} className="py-1 text-lg uppercase cursor-pointer">{c}</li>)}
          </ul>

          <div className="flex justify-between items-center px-3 py-2 bg-white rounded-md w-120">
            <input
              className="px-3 py-2 focus:outline-none"
              placeholder="Search For Products..."
              value={query}
              onChange={handleInputChange}
            />
            <CiSearch className="text-3xl" />
          </div>

          <div className="flex gap-5 items-center">
              <button
            className="  "
            popoverTarget="account"
            style={{ anchorName: "--anchor-account" }}
          >

            <MdPeopleAlt className="text-2xl" />
          </button>
            <FaCartArrowDown onClick={()=>navigate('cart')} className="text-2xl cursor-pointer active:scale-90 duration-300!" />
          </div>
           <ul
            className="dropdown  pt-10 menu w-52 rounded-box bg-btn text-white shadow-sm"
            popover="auto"
            id="account"
            style={
              { positionAnchor: "--anchor-account" } /* as React.CSSProperties */
            }
          >
            <li onClick={()=>navigate('/signUp')} className="py-2 text-xl font-semibold cursor-pointer active:scale-90 duration-300 ">Sign Up</li>
            <li onClick={()=>navigate('/login')}  className="py-2 text-xl font-semibold  cursor-pointer active:scale-90 duration-300">Sign In </li>
          </ul>

        </header>
      </section>
    </nav>
  );
};

export default Navbar;

import Image from "./common/Image";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";

import { HiBars3CenterLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const commonMenuClass = `hover:font-bold hover:text-gray-900 duration-300  active:scale-90`;

  return (
    <nav className="sticky">
      <header className="wrapper flex justify-between items-center py-8 ">
        <Link className="w-[40%]" to={"/"}>
          <Image imgSrc={logo} altSrc={logo} />
        </Link>

        <ul className="w-[60%] flex gap-5 items-center font-semibold text-xl text-gray-400">
          <li className={`${commonMenuClass}`}>
            <Link to={"/"}>Home</Link>
          </li>
          <li className={`${commonMenuClass}`}>
            <Link to={"/about"}>Shop</Link>
          </li>
          <li className={`${commonMenuClass}`}>
            <Link to={"/services"}>About</Link>
          </li>
          <li className={`${commonMenuClass}`}>
            <Link to={"/contact"}>Contacts </Link>
          </li>
        </ul>
      </header>
     <section className="bg-gray-100 ">
       <header className="wrapper flex justify-between items-center  ">
        <div className="flex gap-3 items-center ">
          <HiBars3CenterLeft className="text-2xl" />

          <Link className="" to={"/"}>
            <h3>Shop by Category</h3>
           </Link>
        </div>

       <div className="flex justify-between items-center px-3 py-2 bg-white rounded-md w-120">
         <input className="px-3 py-2 focus:outline-none" placeholder="Search For Products..."/>
        <CiSearch className="text-3xl"/>
       </div>

       <div className="flex gap-5 items-center">
        <MdPeopleAlt className="text-2xl"/>
        <FaCartArrowDown  className="text-2xl"/>


       </div>

      </header>
     </section>
    </nav>
  );
};

export default Navbar;

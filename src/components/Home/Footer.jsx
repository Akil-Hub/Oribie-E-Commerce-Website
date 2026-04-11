import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "/logo.png";
import Image from "@/components/common/Image";

const Footer = () => {
  return (
    <footer className="bg-secondary h-full">
      <section className="grid wrapper grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_2fr_1fr] pt-10 md:pt-20 gap-8 md:gap-10 lg:gap-15">

        <div className="menuItems text-gray-600 space-y-3">
          <h4 className="font-bold text-btn text-xl md:text-2xl pb-2">MENU</h4>
          <h6><a href="#">Home</a></h6>
          <h6><a href="#">Shop</a></h6>
          <h6><a href="#">About</a></h6>
          <h6><a href="#">Contact</a></h6>
          <h6><a href="#">Journal</a></h6>
        </div>

        <div className="menuItems text-gray-600 space-y-3">
          <h4 className="font-bold text-btn text-xl md:text-2xl pb-2">SHOP</h4>
          <h6><a href="#">Category 1</a></h6>
          <h6><a href="#">Category 2</a></h6>
          <h6><a href="#">Category 3</a></h6>
          <h6><a href="#">Category 4</a></h6>
          <h6><a href="#">Category 5</a></h6>
        </div>

        <div className="menuItems text-gray-600 space-y-3">
          <h4 className="font-bold text-btn text-xl md:text-2xl pb-2">HELP</h4>
          <h6><a href="#">Privacy Policy</a></h6>
          <h6><a href="#">Terms & Conditions</a></h6>
          <h6><a href="#">Special E-Shop</a></h6>
          <h6><a href="#">Shipping</a></h6>
          <h6><a href="#">Secure Payments</a></h6>
        </div>

        {/* ✅ full width on mobile */}
        <div className="Address col-span-2 md:col-span-1 text-gray-600 space-y-2">
          <h4 className="text-lg font-semibold text-btn">(052) 611-5711</h4>
          <h6 className="text-lg font-semibold">company@domain.com</h6>
          <p className="py-3">575 Crescent Ave. Quakertown, PA 18951</p>
        </div>

        {/* ✅ full width on mobile, centered */}
        <div className="logo col-span-2 md:col-span-1 flex justify-start">
          <Image src={logo} className="w-20!" />
        </div>

      </section>

      {/* ✅ stack on mobile */}
      <section className="flex flex-col sm:flex-row justify-between items-center gap-4 text-btn py-8 md:py-10 wrapper">
        <div className="flex gap-4 text-xl">
          <FaFacebook className="cursor-pointer hover:scale-110 duration-300" />
          <FaLinkedinIn className="cursor-pointer hover:scale-110 duration-300" />
          <FaInstagram className="cursor-pointer hover:scale-110 duration-300" />
        </div>
        <p className="text-sm text-center text-gray-500">
          @ 2026 Orebi Minimal eCommerce Figma Template by Adveits.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
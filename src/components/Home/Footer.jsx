import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "/logo.png";
import Image from "@/components/common/Image";

const Footer = () => {
  return (
    <footer className="bg-secondary h-full">
      <section
        className="grid wrapper grid-cols-1 sm:grid-cols-2
     md:grid-cols-[1fr_1fr_1fr_2fr_1fr] pt-20 gap-15 "
      >
  

        <div className="menuItems text-gray-600 space-y-3">
          <h4 className="font-bold text-btn text-2xl pb-2">MENU</h4>

          <h6>
            <a href="#"></a>Home
          </h6>
          <h6 
          >
            <a href="#"></a>Shop
          </h6> 
          <h6 >
            <a href="#"></a>About{" "}
          </h6>
          <h6 >
            <a href="#"></a>Contact
          </h6>
          <h6 >
            <a href="#"></a>Journal
          </h6>
        </div>
        <div className="menuItems text-gray-600 space-y-3">
          <h4 className="font-bold text-btn text-2xl pb-2">SHOP</h4>

          <h6>
            <a href="#"></a>Category 1
          </h6>
          <h6 
          >
            <a href="#"></a>Category 2
          </h6>
          <h6 >
            <a href="#"></a>Category 3{" "}
          </h6>
          <h6 >
            <a href="#"></a>Category 4
          </h6>
          <h6 >
            <a href="#"></a>Category 5
          </h6>
        </div>
        <div className="menuItems text-gray-600 space-y-3 w-40">
          <h4 className="font-bold text-btn text-2xl pb-2">HELP</h4>

          <h6>
            <a href="#"></a>Privacy Policy
          </h6>
          <h6 
          >
            <a href="#"></a>Terns & Conditions
          </h6>
          <h6 >
            <a href="#"></a>Special E-Shop{" "}
          </h6>
          <h6 >
            <a href="#"></a>Shipping
          </h6>
          <h6 >
            <a href="#"></a>Secure Payments
          </h6>
        </div>

    
     <div className="Address">
      <h4 className="text-lg font-semibold">(052) 611-5711</h4>
      <h6 className="text-lg font-semibold">company@domain.com</h6>
          <p className="py-3">
          575 Crescent Ave. Quakertown, PA 18951
          </p>
        </div>
        

         <div className="logo">
          <Image src={logo} className="w-20!"/>
         
        </div>

      
      </section>

      <section className="flex justify-between items-center text-btn pb-10 wrapper">
        <div className="flex gap-4">
          <FaFacebook/>
          <FaLinkedinIn/> 
          <FaInstagram/>
        </div>
        <p>@ 2026 Orebi Minimal eCommerce Figma Template by Adveits.</p>

      </section>
    </footer>
  );
};

export default Footer;

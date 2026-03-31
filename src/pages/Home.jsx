import GridSection from "../components/GridSection";
import Services from "../components/OurServices";
import WhyChoseUs from "../components/WhyChoseUs";
import Showcase from "../components/Showcase";
import ProductCard from "../components/ProductCard";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Hero from "../components/Hero";
import HeroSlider from "../components/HeroSlider";
import SaleSection from "../components/SaleSection";
import DemoCounter from "../components/DemoCounter";

const Home = () => {
  return (
    <>
     <section className=" ">
       <HeroSlider/>
       <SaleSection/>
       <DemoCounter/>
                

       
     </section>
    </>
  );
};

export default Home;

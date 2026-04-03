import SpecialOffers from "@/components/Home/SpecialOffers";
import { useLoaderData } from "react-router-dom";
import PhoneOfYear from "@/components/Home/PhoneOfYear";
import BestSellerProducts from "@/components/Home/BestSellerProducts";
import HeroSlider from "@/components/Home/HeroSlider";
import Policy from "@/components/Home/Policy";
import SaleSection from "@/components/Home/SaleSection";
import NewArivals from "@/components/Home/NewArivals";
import SingleProduct from "@/components/common/SingleProduct";

const Home = () => {


  


  return (
    <>
      <section className=" ">
        <HeroSlider />
        <Policy />
        <SaleSection />
        <NewArivals />
        <BestSellerProducts  />
        <PhoneOfYear />
        <SpecialOffers  />
        <SingleProduct/>
      </section>
    </>
  );
};

export default Home;


import HeroSlider from "../components/HeroSlider";
import SaleSection from "../components/SaleSection";
import Policy from "../components/Policy";
import NewArivals from "../components/NewArivals";

import BestSellerProducts from "../components/BestSellerProducts";
import PhoneOfYear from "../components/PhoneOfYear";
import SpecialOffers from "../components/SpecialOffers";
import { useLoaderData } from "react-router-dom";

const Home = () => {

  const products = useLoaderData()


  return (
    <>
     <section className=" ">
       <HeroSlider/>
       <Policy/>
       <SaleSection/>
       <NewArivals products={products}/>
       <BestSellerProducts products={products}/>
       <PhoneOfYear/>
       <SpecialOffers products={products}/>

                

       
     </section>
    </>
  );
};

export default Home;

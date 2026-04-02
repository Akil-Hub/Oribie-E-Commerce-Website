
import HeroSlider from "../components/HeroSlider";
import SaleSection from "../components/SaleSection";
import Policy from "../components/Policy";
import NewArivals from "../components/NewArivals";
import { useEffect, useState } from "react";
import axios from "axios";
import BestSellerProducts from "../components/BestSellerProducts";
import PhoneOfYear from "../components/PhoneOfYear";
import SpecialOffers from "../components/SpecialOffers";

const Home = () => {

  
  const [products, setProducts] = useState([])
    useEffect(() => {
      
        const getData =  async() => {

            const data = await axios.get('https://dummyjson.com/products')
            setProducts(data.data.products)
            
        };
    getData()
    
    }, [])
    
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

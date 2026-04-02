import SlideProductCard from "./common/SlideProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
const BestSellerProducts = ({ products }) => {
  return (
    <>
      <section className="wrapper">
        <h1 className="color-btn text-3xl py-4 text-left ">Our Bestsellers</h1>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
    breakpoints={{
    320: {
      slidesPerView: 1, 
    },
    640: {
      slidesPerView: 2, 
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}          slidesPerGroup={2}
          spaceBetween={30}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={false}
          className="w-full"
        >
          {products.slice(12,24).map((product, index) => (
            <SwiperSlide key={index}>
              <SlideProductCard key={product.id} {...product} />
            </SwiperSlide>
          ))}

          {/* Left/Right arrows */}
          <button className="custom-prev absolute top-[32%] left-2  z-10 bg-gray-400 p-3 rounded-full">
            <FaLongArrowAltLeft className="text-white" />
          </button>
          <button className="custom-next absolute top-[32%] right-2  z-10 bg-gray-400 p-3 rounded-full">
            <FaLongArrowAltRight className="text-white" />
          </button>
        </Swiper>
      </section>
    </>
  );
};

export default BestSellerProducts;

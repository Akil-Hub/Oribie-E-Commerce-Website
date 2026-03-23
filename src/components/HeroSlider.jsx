import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Hero from "./Hero";

import slide1 from "../assets/headphone.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSlider = () => {
  const slides = [
    { image: slide1, title: "Final Offer", discount: "50%" },
    { image: slide1, title: "New Arrivals", discount: "30%" },
    { image: slide1, title: "Flash Sale", discount: "70%" },
  ];

  return (
    <section className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation = {{
            prevEl:'.prev',
            nextEl:'.next',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Hero
              image={slide.image}
              title={slide.title}
              discount={slide.discount}
            />
          </SwiperSlide>
        ))}
        <button className="swiper-button-prev prev">
          <FaChevronLeft />
        </button>
        <button className="swiper-button-next next">
          <FaChevronRight  />
        </button>
      </Swiper>
    </section>
  );
};

export default HeroSlider;

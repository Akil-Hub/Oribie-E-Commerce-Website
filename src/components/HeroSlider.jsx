import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

import Hero from "./Hero";
import slide1 from "../assets/headphone.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { image: slide1, title: "Final Offer", discount: "50%" },
    { image: slide1, title: "New Arrivals", discount: "30%" },
    { image: slide1, title: "New Arrivals", discount: "30%" },
    { image: slide1, title: "Flash Sale", discount: "70%" },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay,Navigation]}
          navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={false}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Hero image={slide.image} title={slide.title} discount={slide.discount} />
          </SwiperSlide>
        ))}

        {/* Left/Right arrows */}
   <button className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white p-3 rounded-full">
  <FaChevronLeft />
</button>
<button className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white p-3 rounded-full">
  <FaChevronRight />
</button>

      </Swiper>

      {/* Vertical number + progress bar */}
      <div className="absolute top-1/2 left-20 -translate-y-1/2 flex flex-col items-start gap-3 z-10">
        {slides.map((_, i) => (
          <div key={i} className="flex items-center gap-2 cursor-pointer">
            {/* Number */}
            <span
              className={`text-md font-semibold transition-all duration-300 w-5 ${
                i === activeIndex ? "text-[#262626]" : "text-gray-400"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Vertical progress bar */}
            <div
              className={`w-1 h-8 rounded transition-all duration-300 ${
                i === activeIndex ? "bg-[#262626]" : "bg-gray-200"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

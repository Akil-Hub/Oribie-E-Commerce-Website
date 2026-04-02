import React from "react";
import Image from "./Image";
import { FaCircle, FaHeart, FaShippingFast } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { FaRotate } from "react-icons/fa6";

const SlideProductCard = ({
  id,
  title,
  thumbnail,
  category,
  price,
  discountPercentage,
  brand,
}) => {
  return (
    <div
      className="w-full h-80  shadow overflow-hidden relative hover:shadow-lg hover:scale-[1.02]  transition-all duration-300  
    group"
    >
      {/* 🔥 Discount Badge */}
      {discountPercentage > 0 && (
        <span className="absolute top-3 left-3 bg-btn text-white text-xs px-2 py-1 rounded-md">
          -{discountPercentage}%
        </span>
      )}

      {/* Image */}

      <Image
        src={thumbnail}
        alt={title}
        className={"w-full! h-58! object-contain! bg-[#D8D8D8]/40"}
      />

      {/* Hover Effect section */}

      <div className="absolute bottom-0 group-hover:bottom-20  text-black  right-0 bg-white transition-all duration-300  w-full flex justify-end  ">
        <ul className="text-primary  py-2 space-y-1">
          <li className="flex justify-between gap-5 px-4 items-center hover:text-btn font-semibold text-sm ">
            Add to Wish List <FaHeart className="text-btn" />
          </li>
          <li className="flex justify-between gap-x-5 px-4 items-center hover:text-btn font-semibold text-sm ">
            Compare
            <FaRotate className="text-btn" />
          </li>
          <li className="flex justify-between gap-5 px-4 items-center hover:text-btn font-semibold text-sm ">
            Add To Cart <MdLocalShipping className="text-btn" />
          </li>
        </ul>
      </div>

      {/* Content */}
      <section className="absolute  bg-white w-full h-full">
        <div className="px-4 py-2 flex justify-between items-center">
          <h2 className=" font-semibold">
            {title.split(" ").slice(0, 2).join(" ")}
            {title.split(" ").length > 3 && "..."}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 ">${price}</span>
          </div>
        </div>
        <h4 className="px-4 text-primary">{category}</h4>
      </section>
    </div>
  );
};

export default SlideProductCard;

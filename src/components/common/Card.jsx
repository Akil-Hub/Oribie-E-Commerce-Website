import React from "react";

const Card = ({ className, price, review, heading }) => {
  return (
    <section>
      <div className={`card h-65  bg-gray-400 ${className}`}></div>

      <div
        className={` hover:bg-primary hover:text-white bg-amber-100 h-25 group  p-4 ${className}`}
      >
        <h3>{heading}</h3>

        <div className="flex justify-between items-center py-3">
          <h6 className="text-gray-400 group-hover:text-white">{price}</h6>
          <h6 className="text-gray-400 group-hover:text-white">{review} reviews</h6>
        </div>
      </div>
    </section>
  );
};

export default Card;

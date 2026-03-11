import React from "react";
import Card from "./common/Card";
import Button from "./common/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductCard = () => {
  return (
    <article className="wrapper py-10 my-10">
      <header className="flex justify-between items-center py-10">
        <h3 className="font-bold text-4xl">Our Product</h3>

        <div className="flex gap-3 items-center">
          <Button
            title={<FaArrowLeft />}
            className="hover:text-primary border-2 hover:border-primary hover:bg-transparent
    "
          />

          <Button
            title={<FaArrowRight />}
            className="hover:text-primary border-2 hover:border-primary hover:bg-transparent
    "
          />
        </div>
      </header>

      <section className="cards flex gap-10 w-full justify-center">
        <Card
          className="w-65"
          price={"$ 72.00"}
          review={"4.5"}
          heading={"Hair Lotion"}
        />
        <Card
          className="w-65"
          price={"$ 62.00"}
          review={"4.2"}
          heading={"Hair Shampoo"}
        />
        <Card
          className="w-65"
          price={"$ 40.00"}
          review={"4.0"}
          heading={"Hair Syrum "}
        />
        <Card
          className="w-65"
          price={"$ 50.00"}
          review={"4.2"}
          heading={"Hair Treatment"}
        />
      </section>
    </article>
  );
};

export default ProductCard;

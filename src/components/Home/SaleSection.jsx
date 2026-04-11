import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@/components/common/Button";
import SlideProductCard from "@/components/common/SlideProductCard";
import { useSelector } from "react-redux";
import { useFilter } from "@/hooks/useFilter";

const SaleSection = () => {
  const [saleData, setSaleData] = useState([]);
  const isCategorySelected = useSelector((state) => state.filter.isCategorySelected);
  const query = useSelector((state) => state.filter.query);
  const { finalFilteredProducts } = useFilter();

  useEffect(() => {
    const getSaleData = async () => {
      const res = await axios.get("data1.json");
      setSaleData(res.data.product);
    };
    getSaleData();
  }, []);

  return (
    <section>
      <div className="wrapper grid grid-cols-1 sm:grid-cols-2 gap-4">
        {isCategorySelected || query
          ? finalFilteredProducts.map((product) => (
              <SlideProductCard key={product.id} {...product} />
            ))
          : saleData.map((product, index) => (
              <article
                key={product.id}
                style={{ backgroundImage: `url(${product.img})` }}
                className={`bg-cover bg-center bg-no-repeat relative p-6 flex items-end rounded-lg
                  ${index === 0
                    ? "sm:row-span-2 h-[300px] sm:h-[500px]"
                    : "h-[200px] sm:h-[245px]"
                  }`}
              >
                <div className="relative z-10 space-y-2 sm:space-y-3 text-white">
                  <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
                  <p>Up to <strong>{product.discount}%</strong> sale for all products!</p>
                  <Button title={"Shop Now"} />
                </div>
              </article>
            ))}
      </div>
    </section>
  );
};

export default SaleSection;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./common/Button";
const SaleSection = () => {
  const [saleData, setSaleData] = useState([]);

  useEffect(() => {
    const getSaleData = async (params) => {
      const res = await axios.get("data1.json");
      setSaleData(res.data.product);
    };

    getSaleData();
  }, []);

  console.log(saleData);
  return (
<div className="wrapper grid grid-cols-2 gap-4">
  {saleData.map((product, index) => (
    <article
      key={product.id}
      style={{ backgroundImage: `url(${product.img})` }}
      className={`bg-cover bg-center bg-no-repeat relative  p-6 flex items-end
        ${index === 0 ? 'row-span-2 h-[500px]' : 'h-[245px]'}
      `}
    >
      {/* Overlay so text is readable */}
      <div className="absolute inset-0 bg-black/10 "></div>

      {/* Text */}
      <div className="relative z-10 space-y-3 text-white">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p>Up to <strong>{product.discount}%</strong> sale for all products!</p>
        <Button title={"Shop Now"} />
      </div>
    </article>
  ))}
</div>
  );
};

export default SaleSection;

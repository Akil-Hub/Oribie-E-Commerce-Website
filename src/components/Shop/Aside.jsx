import Input from "@/components/common/Input";
import { setSelectedCategory } from "@/features/filter/filterSlice";

import { useFilter } from "@/hooks/useFilter";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Aside = () => {
  const dispatch = useDispatch();

  const { categories, brands } = useFilter();

  const handleChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <section className=" flex flex-col w-1/5">
      <div className="flex flex-col space-y-4 mt-10">
        <h4 className="text-btn font-semibold text-xl">Shop by Category</h4>
        <ul className="text-primary space-y-3">
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleChange(category)}
              className="cursor-pointer hover:bg-gray-100"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-4 mt-10">
        <h4 className="text-btn font-semibold text-xl">Shop by Brand</h4>
        <ul className="text-primary space-y-3">
          {brands.map((brand, index) => (
            <li
              onClick={() => handleChange(brand)}
              key={index}
              className="cursor-pointer hover:bg-gray-100"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-4 mt-10">
        <h4 className="text-btn font-semibold text-xl">Shop by Price</h4>
        <ul className="text-primary space-y-3">
          <Input
            handleChange={(e) => setPriceRange({ min: 0, max: 10 })}
            title="$0 - $10"
            name="name1"
          />
          <Input
            handleChange={(e) => setPriceRange({ min: 10, max: 50 })}
            title="$10 - $50"
            name="name1"
          />
          <Input
            handleChange={(e) => setPriceRange({ min: 50, max: 100 })}
            title="$50 - $100"
            name="name1"
          />
          <Input
            handleChange={(e) => setPriceRange({ min: 100, max: 500 })}
            title="$100 - $500"
            name="name1"
          />
          <Input
            handleChange={(e) => setPriceRange({ min: 500, max: 5000 })}
            title="$500 - $5000"
            name="name1"
          />
        </ul>
      </div>
    </section>
  );
};

export default Aside;

import Input from "@/components/common/Input";
import { setSelectedCategory, setPriceRange } from "@/features/filter/filterSlice";
import { useFilter } from "@/hooks/useFilter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Aside = () => {
  const dispatch = useDispatch();
  const { categories, brands } = useFilter();
  const selectedCategory = useSelector((state) => state.filter.selectedCategory);
  const priceRange = useSelector((state) => state.filter.priceRange);

  // ✅ control open/close of dropdowns
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  const handleCategoryChange = (category) => {
    // ✅ clicking same category again deselects it
    dispatch(setSelectedCategory(selectedCategory === category ? null : category));
    setIsCategoryOpen(false);
  };

  const handleBrandChange = (brand) => {
    dispatch(setSelectedCategory(selectedCategory === brand ? null : brand));
    setIsBrandOpen(false);
  };

  const handlePriceChange = (min, max) => {
    // ✅ clicking same price again deselects it
    const isSame = priceRange?.min === min && priceRange?.max === max;
    dispatch(setPriceRange(isSame ? null : { min, max }));
  };

  const priceOptions = [
    { label: "$0 - $10", min: 0, max: 10 },
    { label: "$10 - $50", min: 10, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $500", min: 100, max: 500 },
    { label: "$500 - $5000", min: 500, max: 5000 },
  ];

  return (
    <section className="flex flex-col w-1/5 pr-5">

      {/* Category Dropdown */}
      <div className="flex flex-col space-y-2 mt-10 ">
        <h4 className="text-btn font-semibold text-xl">Shop by Category</h4>

        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="flex justify-between items-center w-full px-4 py-2 border rounded-lg hover:bg-gray-100 duration-300"
        >
          {/* ✅ show selected category name or placeholder */}
          <span className={selectedCategory && categories.includes(selectedCategory) ? "text-btn font-semibold" : "text-btn"}>
            {selectedCategory && categories.includes(selectedCategory) ? selectedCategory : "Select Category"}
          </span>
          {isCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {isCategoryOpen && (
          <ul className="border rounded-lg overflow-hidden shadow-md">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 cursor-pointer duration-300 
                  ${selectedCategory === category
                    ? "bg-btn text-white font-semibold"  // ✅ active color
                    : "hover:bg-gray-100 text-primary"
                  }`}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Brand Dropdown */}
      <div className="flex flex-col space-y-2 mt-10">
        <h4 className="text-btn font-semibold text-xl">Shop by Brand</h4>

        <button
          onClick={() => setIsBrandOpen(!isBrandOpen)}
          className="flex justify-between items-center w-full px-4 py-2 border rounded-lg hover:bg-gray-100 duration-300"
        >
          <span className={selectedCategory && brands.includes(selectedCategory) ? "text-btn font-semibold" : "text-btn"}>
            {selectedCategory && brands.includes(selectedCategory) ? selectedCategory : "Select Brand"}
          </span>
          {isBrandOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {isBrandOpen && (
          <ul className="border rounded-lg overflow-hidden shadow-md">
            {brands.map((brand, index) => (
              <li
                key={index}
                onClick={() => handleBrandChange(brand)}
                className={`px-4 py-2 cursor-pointer duration-300 
                  ${selectedCategory === brand
                    ? "bg-btn text-white font-semibold"  // ✅ active color
                    : "hover:bg-gray-100 text-primary"
                  }`}
              >
                {brand}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Range */}
      <div className="flex flex-col space-y-2 mt-10">
        <h4 className="text-btn font-semibold text-xl">Shop by Price</h4>
        <ul className="space-y-2">
          {priceOptions.map(({ label, min, max }) => {
            const isActive = priceRange?.min === min && priceRange?.max === max;
            return (
              <li
                key={label}
                onClick={() => handlePriceChange(min, max)}
                className={`px-4 py-2 border rounded-lg cursor-pointer duration-300
                  ${isActive
                    ? "bg-btn text-white font-semibold border-btn"  // ✅ active color
                    : "hover:bg-gray-100 text-primary"
                  }`}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>

    </section>
  );
};

export default Aside;
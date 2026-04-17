import {
  setPriceRange,
  setQuery,
  setSearchInput,
  setSelectedCategory,
} from "@/features/filter/filterSlice";
import { useFilter } from "@/hooks/useFilter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiAdjustments } from "react-icons/hi";

const Aside = () => {
  const dispatch = useDispatch();
  const { categories, brands } = useFilter();
  const selectedCategory = useSelector(
    (state) => state.filter.selectedCategory,
  );
  const priceRange = useSelector((state) => state.filter.priceRange);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  // ✅ mobile sidebar open/close
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const handleCategoryChange = (category) => {
    dispatch(
      setSelectedCategory(selectedCategory === category ? null : category),
    );
    dispatch(setQuery(""));
    setSearchInput("");
    setIsCategoryOpen(false);

  };

  const handleBrandChange = (brand) => {
    dispatch(setSelectedCategory(selectedCategory === brand ? null : brand));
    setIsBrandOpen(false);
  };

  const handlePriceChange = (min, max) => {
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

  const filterContent = (
    <div className="flex flex-col gap-6">
      {/* Category */}
      <div className="flex flex-col space-y-2">
        <h4 className="text-btn font-semibold text-xl">Shop by Category</h4>
        <button
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="flex justify-between items-center w-full px-4 py-2 border rounded-lg hover:bg-gray-100 duration-300"
        >
          <span
            className={
              selectedCategory && categories.includes(selectedCategory)
                ? "text-btn font-semibold"
                : "text-btn"
            }
          >
            {selectedCategory && categories.includes(selectedCategory)
              ? selectedCategory
              : "Select Category"}
          </span>
          {isCategoryOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isCategoryOpen && (
          <ul className="border rounded-lg overflow-hidden shadow-md">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 cursor-pointer duration-300 ${selectedCategory === category ? "bg-btn text-white font-semibold" : "hover:bg-gray-100 text-primary"}`}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Brand */}
      <div className="flex flex-col space-y-2">
        <h4 className="text-btn font-semibold text-xl">Shop by Brand</h4>
        <button
          onClick={() => setIsBrandOpen(!isBrandOpen)}
          className="flex justify-between items-center w-full px-4 py-2 border rounded-lg hover:bg-gray-100 duration-300"
        >
          <span
            className={
              selectedCategory && brands.includes(selectedCategory)
                ? "text-btn font-semibold"
                : "text-btn"
            }
          >
            {selectedCategory && brands.includes(selectedCategory)
              ? selectedCategory
              : "Select Brand"}
          </span>
          {isBrandOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {isBrandOpen && (
          <ul className="border rounded-lg overflow-hidden shadow-md">
            {brands.map((brand, index) => (
              <li
                key={index}
                onClick={() => handleBrandChange(brand)}
                className={`px-4 py-2 cursor-pointer duration-300 ${selectedCategory === brand ? "bg-btn text-white font-semibold" : "hover:bg-gray-100 text-primary"}`}
              >
                {brand}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price */}
      <div className="flex flex-col space-y-2">
        <h4 className="text-btn font-semibold text-xl">Shop by Price</h4>
        <ul className="space-y-2">
          {priceOptions.map(({ label, min, max }) => {
            const isActive = priceRange?.min === min && priceRange?.max === max;
            return (
              <li
                key={label}
                onClick={() => handlePriceChange(min, max)}
                className={`px-4 py-2 border rounded-lg cursor-pointer duration-300 ${isActive ? "bg-btn text-white font-semibold border-btn" : "hover:bg-gray-100 text-primary"}`}
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* ✅ Mobile Filter Button */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-btn text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
        onClick={() => setIsAsideOpen(true)}
      >
        <HiAdjustments className="text-xl" />
        Filters
      </button>

      {/* ✅ Mobile Sidebar Overlay */}
      {isAsideOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* backdrop */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setIsAsideOpen(false)}
          />
          {/* sidebar */}
          <div className="w-72 bg-white h-full overflow-y-auto p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Filters</h3>
              <button
                onClick={() => setIsAsideOpen(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}

      {/* ✅ Desktop Sidebar */}
      <section className="hidden lg:flex flex-col w-1/5 pr-5 mt-10">
        {filterContent}
      </section>
    </>
  );
};

export default Aside;

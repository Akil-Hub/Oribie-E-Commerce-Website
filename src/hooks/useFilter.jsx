import { useSelector } from "react-redux";

export const useFilter = () => {
  const products = useSelector((state) => state.products.product);
  const query = useSelector((state) => state.filter.query);
  const selectedCategory = useSelector(
    (state) => state.filter.selectedCategory,
  );
  const priceRange = useSelector((state) => state.filter.priceRange);
  const isCategorySelected = useSelector(
    (state) => state.filter.isCategorySelected,
  );

  let finalFilteredProducts = products;

  if (query) {
    finalFilteredProducts = finalFilteredProducts.filter((product) =>
      product.title.toLowerCase().trim().includes(query.toLowerCase().trim()),
    );
  }

  if (selectedCategory) {
    finalFilteredProducts = finalFilteredProducts.filter(
      ({ category, brand }) =>
        category === selectedCategory || brand === selectedCategory,
    );
  }

  if (priceRange) {
    finalFilteredProducts = finalFilteredProducts.filter(
      ({ price }) => price > priceRange.min && price <= priceRange.max,
    );
  }

  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];

  return {
    finalFilteredProducts,
    categories,
    brands,
    query,
    isCategorySelected,
  };
};

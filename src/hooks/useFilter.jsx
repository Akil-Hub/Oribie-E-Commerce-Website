import { useMemo } from "react";
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

  const finalFilteredProducts = useMemo(() => {
    let result = products;

    if (query) {
      return result.filter((product) =>
        product.title.toLowerCase().trim().includes(query.toLowerCase().trim()),
      );
    }
    if (selectedCategory) {
      result = result.filter(
        ({ category, brand }) =>
          category === selectedCategory || brand === selectedCategory,
      );
    }
    if (priceRange) {
      result = result.filter(
        ({ price }) => price > priceRange.min && price <= priceRange.max,
      );
    }
    return result;
  }, [products, query, selectedCategory, priceRange]);

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products],
  );
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand))],
    [products],
  );
  return {
    finalFilteredProducts,
    categories,
    brands,
    query,
    isCategorySelected,
    isLoading:products.length === 0,
  };
};

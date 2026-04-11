import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFilter } from "./useFilter";
import { useEffect, useMemo } from "react";

export const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { finalFilteredProducts,isLoading } = useFilter();
  const itemsPerPage = useSelector((state) => state.filter.itemsPerPage);

  const query = useSelector((state) => state.filter.query);
  const selectedCategory = useSelector(
    (state) => state.filter.selectedCategory,
  );
  const priceRange = useSelector((state) => state.filter.priceRange);
  // ✅ Auto reset to page 1 whenever filters change
  useEffect(() => {
    setSearchParams({ page: 1 });
  }, [query, selectedCategory, priceRange]);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const goToPage = (page) => setSearchParams({ page });

  // Step 2 - paginate after filtering

  const{totalPages,paginatedProducts} = useMemo(() => {
    const totalPages = Math.ceil(finalFilteredProducts.length / itemsPerPage);
    const paginatedProducts = finalFilteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    );
    return { totalPages, paginatedProducts };
  }, [finalFilteredProducts, currentPage, itemsPerPage]);





  return { paginatedProducts, totalPages, currentPage, goToPage,isEmpty:!isLoading && finalFilteredProducts.length === 0, };
};

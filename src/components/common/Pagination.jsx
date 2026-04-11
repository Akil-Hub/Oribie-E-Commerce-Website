import ReactPaginate from "react-paginate";
import { usePagination } from "@/hooks/usePagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  const { currentPage, totalPages, goToPage } = usePagination();

  if (totalPages <= 0) return (
    <div className="flex justify-center items-center py-5">
      <div className="w-8 h-8 border-4 border-gray-950 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="flex justify-center w-full py-6">
      <ReactPaginate
        pageCount={totalPages}
        forcePage={currentPage - 1}
        onPageChange={(e) => goToPage(e.selected + 1)}
        previousLabel={
          <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-btn text-white text-sm sm:text-base rounded-lg hover:bg-gray-800 duration-300 cursor-pointer active:scale-95">
            <FaArrowLeft />
            <span className="hidden sm:inline">Prev</span>
          </span>
        }
        nextLabel={
          <span className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-btn text-white text-sm sm:text-base rounded-lg hover:bg-gray-900 duration-300 cursor-pointer active:scale-95">
            <span className="hidden sm:inline">Next</span>
            <FaArrowRight />
          </span>
        }
        containerClassName="flex items-center gap-1 sm:gap-3 flex-wrap justify-center cursor-pointer"
        pageClassName="text-sm sm:text-base px-2 sm:px-3 py-1 rounded-md hover:bg-gray-100 duration-300"
        activeClassName="bg-btn text-white rounded-md px-2 py-1"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;
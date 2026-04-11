import ReactPaginate from "react-paginate";
import { usePagination } from "@/hooks/usePagination"; 
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  const { currentPage, totalPages, goToPage } = usePagination();

//   loaing spinner
  if (totalPages <= 0) return (
    <div className="flex justify-center items-center py-5">
      <div className="w-8 h-8 border-4 border-gray-950 border-t-transparent rounded-full animate-spin" />
    </div>
  );

    if (totalPages <= 0) return null;

  return (
    
    <ReactPaginate
    className="flex items-center gap-5"
      pageCount={totalPages}
      forcePage={currentPage - 1}
      onPageChange={(e) => goToPage(e.selected + 1)}
       previousLabel={
        <button className="flex items-center gap-2 px-4 py-2 bg-btn text-white rounded-lg hover:bg-gray-800 duration-300 cursor-pointer active:scale-95  ">
          <FaArrowLeft />
          Prev
        </button>
      }
      nextLabel={
        <button className="flex items-center gap-2 px-4 py-2 bg-btn text-white rounded-lg hover:bg-gray-900 duration-300 cursor-pointer active:scale-95 ">
          Next
          <FaArrowRight />
        </button>
      }
      containerClassName="flex gap-3 cursor-pointer"
      activeClassName="bg-btn text-white  rounded-md px-2 py-1 cursor-pointer
      "
    />
  );
};

export default Pagination;
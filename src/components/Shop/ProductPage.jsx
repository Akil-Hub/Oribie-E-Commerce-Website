import Pagination from '@/components/common/Pagination'
import SlideProductCard from '@/components/common/SlideProductCard'



import { usePagination } from '@/hooks/usePagination'


const ProductPage = () => {
  const {paginatedProducts,isEmpty }= usePagination()
  // ✅ show message when no products match filter
  if (isEmpty) return (
    <section className="w-4/5 flex justify-center items-center py-20">
      <p className="text-xl text-gray-400">No products found!</p>
    </section>
  );

  return (
    <>
     
   <section className=" w-4/5 ">
        
      <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full items-center justify-items-stretch py-10 '>

        {
          paginatedProducts.map((product )=>{
            return <SlideProductCard  key={product.id} {...product}/>
          })
        }



      </article>
<div className="flex justify-center items-center">
      <Pagination />

</div>
   </section>
    </>
  )
}

export default ProductPage
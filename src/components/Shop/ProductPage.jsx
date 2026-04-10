import SlideProductCard from '@/components/common/SlideProductCard'


import { useFilter } from '@/hooks/useFilter'
import React from 'react'


const ProductPage = () => {
  const {finalFilteredProducts }= useFilter()

  return (
    <>
     
   <section className=" w-4/5">
        
      <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full items-center justify-items-stretch py-10 '>

        {
          finalFilteredProducts.map((product )=>{
            return <SlideProductCard  key={product.id} {...product}/>
          })
        }



      </article>

   </section>
    </>
  )
}

export default ProductPage
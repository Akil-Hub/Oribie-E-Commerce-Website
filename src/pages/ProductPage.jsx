import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SlideProductCard from '../components/common/SlideProductCard'

const ProductPage = () => {
    const products = useLoaderData()
  return (
    <>
     
   <section className="wrapper">
         <h2 className='text-btn text-4xl font-semibold py-4'>Our Products</h2>
      <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full items-center justify-items-stretch py-10 '>

        {
          products.map((product )=>{
            return <SlideProductCard key={product.id} {...product}/>
          })
        }



      </article>

   </section>
    </>
  )
}

export default ProductPage
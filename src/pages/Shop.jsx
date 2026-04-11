import Button from '@/components/common/Button'
import { useFilterContext } from '@/components/contexts/filterContext'
import Aside from '@/components/Shop/Aside'
import ProductPage from '@/components/Shop/ProductPage'
import { setPriceRange, setQuery, setSelectedCategory } from '@/features/filter/filterSlice'
import { useDispatch } from 'react-redux'


const Shop = () => {
const dispatch = useDispatch()
const handleClick = (params) => {
  dispatch(setQuery(''))
  dispatch(setPriceRange(null))
  dispatch(setSelectedCategory(null))
};
  return (

    <>
   <section className='wrapper'>
      <div className="flex justify-between items-center">
        <h2 className='text-btn text-4xl font-semibold py-3'>Our Products</h2>
    <Button onClick={handleClick} title={'Reset Filters'} className={'text-lg!'}/>
      </div>

       <div className='flex justify-between ' >
      
      <Aside  />
      
      <ProductPage />
      
      
      
      </div>

   </section>
    </>
  
  )
}

export default Shop
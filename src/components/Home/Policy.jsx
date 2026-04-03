import React from 'react'
import { MdLocalShipping } from 'react-icons/md'
import { GiReturnArrow } from "react-icons/gi";

const Policy = () => {
  return (
    <div className='flex justify-between py-4 items-center wrapper'>
        <div className="div flex items-center gap-3 ">
            <span className='font-semibold text-xl'>2</span> <p className='text-gray-500'>Two years warranty</p>
        </div>
        <div className="div flex items-center gap-3 "><MdLocalShipping /> <p className='text-gray-500'>Free Shipping</p>
</div>
        <div className="div flex items-center gap-3 "><GiReturnArrow /> <p className='text-gray-500'>Return Policy</p>
</div>
    </div>
  )
}

export default Policy 
import React, { useState } from 'react'

const DemoCounter = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = (params) => {
        if (count < 10) {
        setCount(count + 1)
            
        }
        
    };
    const handleDecrement = (params) => {
        if (count > 0) {

            setCount(count-1)
        }
        
    };

  return (
  <>
   <div className="wrapper py-20 flex flex-col gap-3">
     <div className='flex gap-3 justify-center items-center '>

        <button onClick={handleIncrement} className='text-2xl'>Increment</button>
        <div className="text-3xl font-semibold">Count:{count}</div>
        <button onClick={handleDecrement} className='text-2xl'>Decrement</button>
 

    </div>
           
        <button  onClick={()=>setCount(0)} className='text-2xl flex justify-center items-center h
        '>Reset</button>
   </div>
        
        
        </>
        
  )
}

export default DemoCounter
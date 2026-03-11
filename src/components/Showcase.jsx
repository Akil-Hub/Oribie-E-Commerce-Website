import React from 'react'

const Showcase = () => {
  return (
  <div className="">
      <article className='bg-secondary mb-50  h-80 mt-10  '>
        
        <section className="wrapper ">

            <header className='flex items-center gap-8 justify-between py-15'>

                <h3 className='text-white text-4xl font-semibold'>Work Showcase</h3>

                <h5 className='text-white hover:text-primary duration-300 text-2xl'>Hair Cut</h5>

                <h5 className='text-white hover:text-primary duration-300 text-2xl'>Hair Extensions</h5>

                <h5 className='text-white hover:text-primary duration-300 text-2xl'>Highlights Cut</h5>

                <h5 className='text-white hover:text-primary duration-300 text-2xl'>Hair Coloring</h5>
            </header>

            <div className="boxs flex flex-col md:flex-row justify-between items-center gap-10 pb-10">

                <div className="w-90 h-75 bg-gray-400"></div>
                <div className="w-90 h-75 bg-gray-400"></div>
                <div className="w-90 h-75 bg-gray-400"></div>


            </div>

        </section>
    </article>
  </div>
    
)
  
}

export default Showcase
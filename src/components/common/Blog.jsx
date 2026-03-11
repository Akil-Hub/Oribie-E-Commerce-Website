import React from 'react'
import { FaMessage } from 'react-icons/fa6'

const Blog = ({className,heading}) => {
  return (
      <article className="border-transparent hover:border-primary border-2">
         <div
          className={`blog h-45 w-70  bg-gray-400  ${className}`}
        ></div>

        <div className={` commentDiv bg-amber-50  h-40 w-70   px-3  ${className}  flex gap-4`}>
            
          <div className="left h-22 mt-4 bg-gray-200 rounded-md p-1 text-center">
            <h4 className="text-primary text-xl font-bold">02</h4>
            <h5 className="font-semibold">Aug</h5>
            <h6 className="flex items-center justify-center gap-2">
              <FaMessage /> <span>0</span>
            </h6>
          </div>

          <div className="right">
            <h3 className="text-xl font-bold mt-3 leading-6 text-gray-700">{heading}Five Tips for your Skin & Hair</h3>

            <p className="py-2">By John - 5 Comments</p>
            <hr className="text-gray-400 py-1" />

            <h4 className="text-primary font-semibold">Read More...</h4>
          </div>

        </div>


       </article>
  )
}

export default Blog
import React from 'react'
import Button from './common/Button'

const Hero = ({ image, title, discount }) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className='bg-center bg-cover bg-no-repeat h-[460px] flex justify-start items-center pl-40 '
    >
      <article className="text-left space-y-8">
        <h1 className='heading font-black text-4xl'>{title}</h1>
        <p className='text-lg'>
          Up to <strong className='heading text-4xl font-bold'> {discount} </strong> sale for all furniture items!
        </p>
        <Button title={'Shop Now'} />
      </article>
    </section>
  )
}

export default Hero
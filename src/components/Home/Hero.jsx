import Button from '@/components/common/Button'

const Hero = ({ image, title, discount }) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className='bg-center bg-cover bg-no-repeat h-[280px] sm:h-[360px] md:h-[420px] lg:h-[460px] flex justify-start items-center pl-6 sm:pl-16 md:pl-28 lg:pl-40'
    >
      <article className="text-left space-y-4 sm:space-y-6 md:space-y-8">
        <h1 className='heading font-black text-2xl sm:text-3xl md:text-4xl'>{title}</h1>
        <p className='text-base sm:text-lg'>
          Up to <strong className='heading text-2xl sm:text-3xl md:text-4xl font-bold'>{discount}</strong> sale for all furniture items!
        </p>
        <Button title={'Shop Now'} />
      </article>
    </section>
  )
}

export default Hero
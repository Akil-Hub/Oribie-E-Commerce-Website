import React from 'react'
import phoneClock from '@/assets/phoneClock.png'
import Image from '@/components/common/Image'
import Button from '@/components/common/Button'
const PhoneOfYear = () => {
  return (
    <div className='wrapper py-5'>

        <section className='flex flex-col md:flex-row gap-10 md:gap-0  justify-center  bg-[#F3F3F3] items-center'>
            <Image src={phoneClock} alt={'phoneClock'}/>

            <div className="text space-y-5 text-center md:text-left pb-10 md:pb-0">
                <h2 className='text-2xl font-semibold text-btn'>Phone of the year</h2>
                <p className='text-gray-500 w-130'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                <Button title={'Shop Now'}/>
            </div>

        </section>
        
    </div>
  )
}

export default PhoneOfYear
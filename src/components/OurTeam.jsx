import React from 'react'

import team1 from '../assets/teampic.png'
import team2 from '../assets/teamPic2.png'
import Image from './common/Image'
const OurTeam = () => {
  return (
    <article className='wrapper py-20 flex flex-col md:flex-row  items-center gap-10'>
    <Image imgSrc={team1}/>

    <section className="right flex flex-col gap-10">
      <div>
          <h4 className='font-bold text-4xl'>Meet Our Team</h4>
        <p className='pr-20 pt-4'>House of Hair Salon & Spa is one of Brooklyn's most trusted salons. Whether you’re looking for a completely new style or want to enhance your existing look, our talented teams are here to make it happen.</p>
      </div>
        <Image imgSrc={team2} className="-ml-20"/>

    </section>
        



    </article>
  )
}

export default OurTeam
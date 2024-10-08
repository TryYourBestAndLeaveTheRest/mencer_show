import React from 'react'
import Marquee from 'react-fast-marquee'

const MencerMarquee = ({ color, direction }) => {
  return (
    <Marquee 
    pauseOnHover={true}
    direction={direction}
    className={`text-black mt-12 w-full border bg-[${color}] py-2.5 flex items-center `} >
      {
        Array(35).fill(null).map((_, index) => (
          <div className='flex space-x-5 ml-[70px]' key={index}>
            <img src={`${ direction === "left" ? '/images/homepage/ph_crown-fill.svg' : '/images/homepage/ph_crown-white.svg' }`}/>
            <p className={`text-black text-[20px] ${ direction === "left" ? 'text-black' : 'text-white' }`}>Mencer</p>
          </div>
        ))
      }
    </Marquee>
  )
}

export default MencerMarquee

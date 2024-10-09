import React from 'react'
import { Link } from 'react-router-dom'
// import { poppins, grotesk } from '@/fonts'
// import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-full rounded-[28px] border min-h-[601px] bg-[url('/images/homepage/hero-img.jpeg')] bg-no-repeat bg-cover bg-center px-28 py-20 text-white gap-11 flex flex-col items-center">
      <div className='flex flex-col items-center gap-9'>
        <div className='space-y-[14px]'>
          <h1 className={`text-6xl text-center leading-[normal]`}>Building the Next Generation of Blockchain Leaders</h1>
          <div className="w-full max-w-[783px] mx-auto">
            <p className={`text-center text-xl font-normal`}>Join the revolution in decentralizing learning - where cutting edge technology meets limitless opportunities</p>
          </div>
        </div>

        <div className='flex items-center gap-[22px] justify-center font-normal w-fit'>
          <Link
          to={'/auth/signup/student'}
          className='py-4 text-black rounded-lg px-9 bg-lightYellow focus:outline-none'>
            Enroll For Free
          </Link>

          <Link
          to={'/auth/signup/educator'}
          className='px-6 py-4 bg-[#FFDC162B] text-white rounded-lg border border-lightYellow focus:outline-none'>
            Become an Educator
          </Link>
        </div>
      </div>

      <div className='flex items-center w-fit gap-14'>
        <div className='flex items-start gap-[11px] flex-col'>
          <h1 className={`text-2xl text-center font-semibold`}>60K</h1>
          <p className={`text-base`}>Courses</p>
        </div>
        <div className='flex items-start gap-[11px] flex-col'>
          <h1 className={`text-2xl text-center font-semibold`}>35K</h1>
          <p className={`text-base`}>Students</p>
        </div>
        <div className='flex items-start gap-[11px] flex-col'>
          <h1 className={`text-2xl text-center font-semibold`}>15K+</h1>
          <p className={`text-base`}>Contributors</p>
        </div>
      </div>
    </section>
  )
}

export default Hero

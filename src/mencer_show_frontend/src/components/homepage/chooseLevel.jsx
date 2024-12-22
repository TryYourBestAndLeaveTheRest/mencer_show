
"use client"
import React from 'react'
import Courses from './courses'
// import Toggle from 'react-toggle'
import "react-toggle/style.css"



const ChooseLevel = () => {
  const [ checked, setChecked ] = React.useState(false)
  return (
    <section className='w-full bg-[#F9F9F9] py-16'>
      <div className='flex flex-col w-full mx-auto max-7xl gap-y-7'>
        <div className='w-full mx-auto max-w-[872px] flex flex-col gap-10 items-center'>
          <div className='flex flex-col items-center w-full gap-2 text-center'>
            <h1 className={`font-semibold text-[44px] text-center`}>
              Choose Your level
            </h1>
            <p className={`text-[#6D6D6D]`}>
            At Mencer, learning is built around you. Whether you're a complete beginner curious about the basics, or an intermediate exploring the depths of Web3 development, we’ve got something for everyone.
            </p>
          </div>

          <div className={`flex items-center space-x-7 text-[28px]`}>
            <p className={`${ !checked ? 'font-bold text-black' : 'font-normal text-[#939393]'}`}>Beginner</p>
            {/* <Toggle
              className='!bg-[#FFF8CF] rounded-full border-[#FFA902]'
              icons={false}  
              defaultChecked={false}
              onChange={(e) => setChecked(e.target.checked)}
            /> */}
            <p className={`${ checked ? 'font-bold text-black' : 'font-normal text-[#939393]'}`}>Intermediate</p>
          </div>
        </div>

        <div className='w-full max-w-[1280px] mx-auto px-3'>
          <Courses />
        </div>
      </div>
    </section>
  )
}

export default ChooseLevel

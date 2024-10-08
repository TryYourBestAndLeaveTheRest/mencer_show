import React from 'react'
import Courses from './courses'

const PopularCourses = () => {
  return (
    <section className='p-20 mt-12 bg-[#F9F9F9] flex flex-col gap-11 px-3 w-full mx-auto'>
      <div className="flex flex-col w-full mx-auto gap-11">  
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-[11px] w-fit'>
            <h1 className={`text-black text-4xl font-semibold`}>
              Popular Courses 
            </h1>
            <p className='text-[#6D6D6D]'>
              Lorem ipsum dolor sit
            </p>
          </div>

          <div
          className='px-[39px] py-3 rounded-lg bg-lightYellow text-black font-normal whitespace-nowrap focus:outline-none cursor-pointer'
          href="/courses">
            View All
          </div>
        </div>

        
        {/* courses  */}
        <Courses />
      </div>
    </section>
  )
}

export default PopularCourses

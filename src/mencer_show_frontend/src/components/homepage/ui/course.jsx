"use client"
// import Image from 'next/image'
import React from 'react'

const Course = ({ course }) => {
  const { title, authors, rating, reviews, categories, imgUrl } = course
  return (
    <div
    href={`course/${title}`}
    className="p-5 bg-[#fff] rounded-[16px] relative w-full cursor-pointer">
      <img
      src={imgUrl}
      // width={400}
      // height={400}
      className='object-center object-cover rounded-[13px] sm:h-[200px] w-full'
      alt={title}
      quality={100}
      // placeholder='blur'
      />

      <div className='mt-1.5'>
        <h1 className={`text-black font-extrabold text-[20px] capitalize `}>
          { title }
        </h1>
        <p className='!text-[#707070] text-xs'>
          {
            authors.map((author, i)=>(
              <span className="" key={i}>
                { author }
                {authors.length - 1 === i ? "" : ", "}
              </span>
            ))
          }
        </p>
      </div>

      <div className='mt-4 space-y-2'>
        <div className={`flex items-center gap-x-2.5`}>
          <img src="/images/courses/ph_star-fill.svg" alt="" className=''/>
          <p 
          className={` text-base text-black capitalize font-semibold`}>
            { rating }
            <span 
            className='ml-1 text-[#707070] text-xs capitalize font-normal'>
              ({ reviews } Reviews)
            </span>
          </p>
        </div>
        <p className={`text-[#707070] text-[10px] capitalize font-normal`}>
          {
            categories.map((category, i)=>(
              <span key={i}>
                { category }
                { categories.length - 1 === i ? "" : ", "}
              </span>
            ))
          }
        </p>
      </div>
    </div>
  )
}

export default Course

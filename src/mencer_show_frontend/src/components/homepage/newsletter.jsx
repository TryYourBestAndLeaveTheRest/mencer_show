"use client"
import React from 'react'
import Input from './ui/input'

const Newsletter = () => {
  return (
    <div className='w-full bg-[#00249A] rounded-[16px] p-16 flex items-center justify-center'>
      <div className='flex flex-col w-full gap-14'>
        <h1 className='text-[66px] max-w-md font-bold text-white leading-tight'>
          Subscribe to Our Newsletter
        </h1>
        <div className={`flex items-start`}>
          <div className={`w-[40%]`}>
            <p className='w-full max-w-[300px] text-white'>
              Get weekly update about our product on your email, no spam guaranteed we promise
            </p>
          </div>
          <div className='w-[60%]'>
            <Input />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

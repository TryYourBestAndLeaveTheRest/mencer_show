import React from 'react'

const Input = () => {
  return (
    <div className='relative py-3 px-6 bg-white rounded-[4px]'>
      <div className='w-full flex items-center'>
        <img src="/images/homepage/mail.png" alt="mail" className=''/>
        <input 
        type='text' 
        className='border-none focus:outline-none w-full py-2 bg-transparent pl-5 placeholder:text-[#57656C] '
        placeholder='youremail123@gmail.com'
        />
      </div>
      <button className='absolute -bottom-8 py-5 px-8 text-[14px] rounded-[8px] font-medium -right-9 bg-[#FFA902] text-white'>
        SUBSCRIBE
      </button>
    </div>
  )
}

export default Input

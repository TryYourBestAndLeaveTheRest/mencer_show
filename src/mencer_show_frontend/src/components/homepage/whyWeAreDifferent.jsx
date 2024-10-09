import React from 'react'

const WhyWeAreDifferent = () => {
  return (
    <div className='w-full bg-white max-w-[1280px] mx-auto px-0.5'>
      <div className='my-16 grid grid-cols-1 md:grid-cols-2 gap-14 min-[991px]:gap-x-28'>
        <div className='w-full'>
          <h1 className={`font-semibold text-black text-4xl`}>
            Why are we different from other educational platforms?
          </h1>
          <ol className={`list-decimal list-inside mt-7 space-y-6 text-[#6D6D6D] text-[20px]`}>
            <li>
              We provide Skill-Based Learning for Real-World Impact
            </li>
            <p className='block'>
              Our courses are designed to teach practical skills that you can apply immediately to thrive in blockchain, AI, and Web3.              
            </p>
            <li>
              We are Built on the Blockchain
            </li>
            <p className='block'>
              Mencer is powered by blockchain technology. That is, your privacy and credentials are more secure. 
            </p>
          </ol>
        </div>

        <div className=''>
          <img
          src="/images/homepage/educational.jpeg"
          width={700}
          height={700}
          alt='educational'
          className='object-cover object-center rounded-[12px] h-full'
          quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default WhyWeAreDifferent

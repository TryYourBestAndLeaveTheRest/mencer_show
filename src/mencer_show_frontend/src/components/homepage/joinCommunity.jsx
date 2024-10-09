
import React from 'react'

const JoinCommunity = () => {
  return (
    <div className='w-full py-10 bg-white'>
      <div className='w-full mx-auto overflow-hidden h-[712px] relative'>
        <div className="w-[957px] h-[957px] border border-[#E5E5E5] m-auto left-1/2 transform -translate-x-1/2  rounded-full absolute -bottom-20 transition-transform duration-500 flex items-center justify-center">
          <div className='border border-[#E5E5E5] absolute top-1/2 transform -translate-y-1/2 rounded-full -left-9 bg-[#E6FFB6] border border-[#E5E5E5]-[#92CA2B] p-3'>
            <img  src="images/homepage/plant.png" className='object-cover w-[50px] h-[50px]'/>
          </div>
          <div className='border border-[#E5E5E5] absolute top-1/2 transform w-[78px] h-[78px] -translate-y-1/2 rounded-full -right-9  border border-[#E5E5E5]-[#E88141] overflow-hidden'>
            <img  src="images/homepage/review.jpeg" className='object-cover object-center w-full h-full'/>
          </div>
          <div className='border border-[#E5E5E5] w-[760px] h-[760px] rounded-full relative flex items-center justify-center'>
            <div className='border border-[#E5E5E5] absolute top-1/4 transform w-[78px] h-[78px] -translate-y-1/4 rounded-full left-0  border border-[#E5E5E5]-[#A8A8A8] overflow-hidden'>
              <img  src="images/homepage/woman.png" className='object-cover object-center w-full h-full'/>
            </div>
            <div className='border border-[#E5E5E5] absolute top-1/4 transform -translate-y-1/4 rounded-full right-4  border border-[#E5E5E5]-[#FFACAC] overflow-hidden p-3 flex bg-[#FFE7E7]'>
            <img  src="images/homepage/heart.png" className=''/>
            </div>
            <div className='border border-[#E5E5E5] w-[543px] h-[543px] rounded-full relative flex items-center justify-center'>
              <div className='flex items-center justify-center flex-col gap-11 max-w-[30rem]'>
                <div className={`flex flex-col gap-2.5 text-center`}>
                  <h1 className={`font-semibold text-black text-[40px]`}>Join Our Community</h1>
                  <p className="text-sm text-[#383838]">
                    Lorem ipsum dolor sit amet consectetur. Commodo elit viverra est tincidunt tortor egestas. Donec id eu sed Lorem ipsum dolor sit amet consectetur. Commodo elit viverra
                  </p>
                </div>
                <div href="#" className='text-black bg-[#FFDC16] px-11 py-4 rounded-[8px]'>
                  Join Us
                </div>
              </div>
              <div className='border border-[#E5E5E5] absolute -top-5 transform w-[56px] h-[56px] -translate-x-1/4 rounded-full left-1/2 border border-[#E5E5E5]-[#A8A8A8] overflow-hidden'>
                <img  src="images/homepage/bottle.png" className='object-cover object-center w-full h-full'/>
              </div>
              <div className='border border-[#E5E5E5] bottom-32 absolute transform w-[56px] h-[56px] rounded-full left-0 border border-[#E5E5E5]-[#A8A8A8] overflow-hidden'>
                <img src="images/homepage/beard_guy.png" className='object-cover object-center w-full h-full scale-105'/>
              </div>
              <div className='border border-[#E5E5E5] bottom-32 absolute transform w-[56px] h-[56px] rounded-full right-0 border border-[#E5E5E5]-[#92CA2B] overflow-hidden'>
                <img src="images/homepage/nuts.png" className='object-cover object-center w-full h-full scale-115'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinCommunity
